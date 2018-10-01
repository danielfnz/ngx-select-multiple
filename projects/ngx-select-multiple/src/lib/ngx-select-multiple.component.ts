import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ngx-select-multiple',
  templateUrl: './ngx-select-multiple.component.html',
  styleUrls: ['./ngx-select-multiple.component.scss'],
})
export class NgxSelectMultipleComponent implements OnInit, OnChanges {

  @Input() options: any = [];
  @Input() config: any = {};
  @Input() value: any;
  @Input() label = '';

  @Output() valueChange: EventEmitter<any> = new EventEmitter();
  @Output() change: EventEmitter<any> = new EventEmitter();


  public toggleDropdown = false;
  public availableItems: any = [];
  public selectedItems: any = [];
  public selectedDisplayText = 'Select';
  public searchText: string;
  public clickedInside = false;
  public focusedItemIndex: number = null;

  constructor() { }

  @HostListener('click')
  public clickInsideComponent() {
    this.clickedInside = true;
  }

  @HostListener('document:click')
  public clickOutsideComponent() {
    if (!this.clickedInside) {
      this.toggleDropdown = false;
    }
    this.clickedInside = false;
  }


  ngOnInit() {
    if (typeof this.options !== 'undefined' && Array.isArray(this.options)) {
      this.availableItems = [...this.options.sort(this.config.customComparator)];
      this.initDropdownValuesAndOptions();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.selectedItems = [];
    this.searchText = null;
    this.options = this.options || [];
    if (changes.options) {
      this.availableItems = [...this.options.sort(this.config.customComparator)];
    }

    this.initDropdownValuesAndOptions();
  }

  public deselectItem(item: any, index: number) {
    this.selectedItems.splice(index, 1);
    if (!this.availableItems.includes(item)) {
      this.availableItems.push(item);
      this.availableItems.sort(this.config.customComparator);
    }
    this.selectedItems = [...this.selectedItems];
    this.availableItems = [...this.availableItems];
    this.valueChanged();
    this.resetArrowKeyActiveElement();
  }

  public selectItem(item: string, index: number) {
    this.availableItems.splice(index, 1);
    this.selectedItems.push(item);
    this.selectedItems = [...this.selectedItems];
    this.availableItems = [...this.availableItems];
    this.selectedItems.sort(this.config.customComparator);
    this.availableItems.sort(this.config.customComparator);
    this.valueChanged();
    this.resetArrowKeyActiveElement();
  }

  public valueChanged() {
    this.value = this.selectedItems;
    this.valueChange.emit(this.value);
    this.change.emit({ value: this.value });
    this.setSelectedDisplayText();
  }

  public toggleSelectDropdown($event: any) {
    this.toggleDropdown = !this.toggleDropdown;
    this.resetArrowKeyActiveElement();
  }

  private initDropdownValuesAndOptions() {
    const config: any = {
      displayKey: 'description',
      height: 'auto',
      search: false,
      placeholder: 'Select',
      limitTo: this.options.length,
      customComparator: undefined
    };
    if (this.config === 'undefined' || Object.keys(this.config).length === 0) {
      this.config = { ...config };
    }
    for (const key of Object.keys(config)) {
      this.config[key] = this.config[key] ? this.config[key] : config[key];
    }
    // Adding placeholder in config as default param
    this.selectedDisplayText = this.config['placeholder'];
    if (this.value !== '' && typeof this.value !== 'undefined' && Array.isArray(this.value)) {
      this.selectedItems = this.value;
      this.value.forEach((item: any) => {
        const ind = this.availableItems.indexOf(item);
        if (ind !== -1) {
          this.availableItems.splice(ind, 1);
        }
      });
      this.setSelectedDisplayText();
    }
  }


  private setSelectedDisplayText() {
    let text: string = this.selectedItems[0];
    if (typeof this.selectedItems[0] === 'object') {
      text = this.selectedItems[0][this.config.displayKey];
    }

    if (this.selectedItems.length > 0) {
      this.selectedDisplayText = this.selectedItems.length === 1 ? text :
        text + ` + ${this.selectedItems.length - 1} more`;
    } else {
      this.selectedDisplayText = this.selectedItems.length === 0 ? this.config.placeholder : text;
    }
  }

  private resetArrowKeyActiveElement() {
    this.focusedItemIndex = null;
  }

}
