import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterName',
  pure: false
})
export class FilterNamePipe implements PipeTransform {

  transform(contacts: any[], field: string, value: string): any[] {
    if (!contacts) {
      return [];
    }

    if (!value) {
      return contacts;
    }

    return contacts.filter(it => it[field].match(new RegExp( value, 'i')));
  }

}
