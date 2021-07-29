import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe<T extends {[propname: string]: any}> implements PipeTransform {

  /**
   * First line
   * @param value {unknown[]} an Array for sorting
   * @param key {string} the key of objects
   * @param direction {number} possibli 1 or -1, sorting direction
   * @returns the sorted Array
   */
  transform(
    value: T[] | null,
    key: string = '',
    direction: number = 1
  ): T[] | null {
    if (!Array.isArray(value) || key === '') {
      return value;
    }

    return value.sort( (a, b) => {
      if (typeof a[key] === 'number' && typeof b[key] === 'number') {
        return (a[key] - b[key]) * direction;
      }

      return (
        String(a[key])
          .toLowerCase()
          .localeCompare( String(b[key]).toLowerCase() )) * direction;
    });
  }

}
