import { FilterByPipe } from './pipes/filter-by.pipe';
import { NgModule } from '@angular/core';
import { NgxSelectMultipleComponent } from './ngx-select-multiple.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [NgxSelectMultipleComponent, FilterByPipe],
  exports: [NgxSelectMultipleComponent]
})
export class NgxSelectMultipleModule { }
