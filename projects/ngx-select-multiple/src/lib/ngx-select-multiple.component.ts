import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { HostListener } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ngx-select-multiple',
  templateUrl: './ngx-select-multiple.component.html',
  styleUrls: ['./ngx-select-multiple.component.scss'],
})
export class NgxSelectMultipleComponent implements OnInit, OnChanges {

  @Input() items: any = [];
  @Input() label = '';
  @Input() placeholder = '';
  @Input() nameKey = '';

  @Output() valueChange: EventEmitter<any> = new EventEmitter();


  public isOpen = false;
  public availableItems: any = [];
  public selectedItems: any = [];
  public selectedDisplayText = '';
  public searchText: string;
  public clickedInside = false;
  public focusedItemIndex: number = null;
  public notFound = false;

  constructor() { }

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

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.selectedItems = [];
    this.searchText = null;
    this.items = this.items || [];
  }

  toggleButtomDropdown($event: any) {
    this.isOpen = !this.isOpen;
  }

  clearAll() {
    console.log("Teste");
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

  valueChanged() {
    this.valueChange.emit(this.selectedItems);
    this.setSelectedDisplayText();
  }

  setSelectedDisplayText() {
    if (this.selectedItems.length > 0) {
      this.selectedDisplayText = '';
      for (const iterator of this.selectedItems) {
        this.selectedDisplayText += iterator[this.nameKey] + ', ';
      }
      // REMOVE LAST ','
      this.selectedDisplayText = this.selectedDisplayText.slice(0, -2);
    } else {
      this.selectedDisplayText = '';
    }
  }
}
