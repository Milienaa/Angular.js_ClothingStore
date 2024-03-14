import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customQuantityPipe'
})
export class CustomQuantityPipePipe implements PipeTransform {

  transform(value: number, arr:[string, string, string]): string {
    if (this.define(value) === 1) {
      return value + ' ' + arr[0];
    }
    if (this.define(value) > 1 && this.define(value) < 5) {
      return value + ' ' + arr[1];
    } else {
      return value + ' ' + arr[2];
    }
  }

  define(value: number): number {
    if (value > 20) {
      return value % 10;
    } else {
      return value;
    }
  }

}
