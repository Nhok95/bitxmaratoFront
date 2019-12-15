import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booleans'
})
export class BooleansPipe implements PipeTransform {

  transform(value: boolean, ...args: any[]): string {
    if (value == true) return "Yes";
    else return "No"
  }

}
