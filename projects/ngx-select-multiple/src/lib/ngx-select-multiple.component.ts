import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, HostListener, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ngx-select-multiple',
  templateUrl: './ngx-select-multiple.component.html',
  styleUrls: ['./ngx-select-multiple.component.scss'],
  animations: [
    trigger('openDropdown', [
      state(
        'open',
        style({
          height: '165px'
        })
      ),
      state(
        'closed',
        style({
          height: '0px',
          display: 'none'
        })
      ),
      transition('open => closed', [animate('0.3s')]),
      transition('closed => open', [animate('0.3s')])
    ])
  ]
})
export class NgxSelectMultipleComponent implements OnInit, OnChanges {
  public isOpen = false;
  public availableItems: any = [];
  public selectedItems: any = [];
  public selectedDisplayText = '';
  public searchText: string;
  public clickedInside = false;
  public focusedItemIndex: number = null;
  public notFound = false;

  @Input() items: any = [];
  @Input() label = '';
  @Input() placeholder = '';
  @Input() displayKey = '';

  @Output()
  valueChange: EventEmitter<any> = new EventEmitter();

  @HostListener('click')
  clickInsideComponent() {
    this.clickedInside = true;
  }

  @HostListener('document:click')
  clickOutsideComponent() {
    if (!this.clickedInside) {
      this.isOpen = false;
    }
    this.clickedInside = false;
  }

  @HostListener('document:keydown', ['$event'])
  keyBoardEvent($event: KeyboardEvent) {
    if ($event.code === 'Escape') {
      this.isOpen = false;
    }
  }

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.selectedItems = [];
    this.searchText = null;
    this.items = this.items || [];
  }

  toggleButtomDropdown() {
    this.isOpen = !this.isOpen;
  }

  selectItem(item: string) {
    if (this.selectedItems.includes(item)) {
      const indexRemove = this.selectedItems.findIndex(x => x === item);
      this.selectedItems.splice(indexRemove, 1);

      item['selected'] = false;
    } else {
      item['selected'] = true;
      this.selectedItems.push(item);
      this.selectedItems = [...this.selectedItems];
    }
    this.valueChanged();
  }

  clearAll() {
    this.selectedItems = [];
    this.valueChanged();

    this.items.forEach(element => {
      element['selected'] = false;
    });
  }

  valueChanged() {
    this.valueChange.emit(this.selectedItems);
    this.setDisplayText();
  }

  setDisplayText() {
    if (this.selectedItems.length > 0) {
      this.selectedDisplayText = '';
      for (const iterator of this.selectedItems) {
        this.selectedDisplayText += iterator[this.displayKey] + ', ';
      }
      // REMOVE LAST ','
      this.selectedDisplayText = this.selectedDisplayText.slice(0, -2);
    } else {
      this.selectedDisplayText = '';
    }
  }
}
