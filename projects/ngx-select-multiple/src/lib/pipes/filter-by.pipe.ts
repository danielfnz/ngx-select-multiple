import { Pipe, PipeTransform } from '@angular/core';

/**
 * filters an array based on searctext
 */
@Pipe({
  name: 'filterBy'
})
export class FilterByPipe implements PipeTransform {
  public transform(array: any[], searchText?: string) {
    if (!array || !searchText || !Array.isArray(array)) {
      return array;
    }
    if (typeof array[0] === 'string') {
      return array.filter(
        item => item.toLowerCase().indexOf(searchText.toLowerCase()) > -1
      );
    }
      return array.filter((item: any) => {
        for (const key in item) {
          if (
            typeof item[key] !== 'object' &&
            item[key]
              .toString()
              .toLowerCase()
              .indexOf(searchText.toLowerCase()) > -1
          ) {
            return true;
          }
        }
        return false;
      });
  }
}
