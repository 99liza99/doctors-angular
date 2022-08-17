import { Pipe, PipeTransform } from '@angular/core';
import { Doctor } from '../doctors';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(items: Doctor[] | null, args: string): Doctor[] | null {
    if (!args || !items) return items;

    return items.filter((str) => {
      return str.name.toLowerCase().includes(args.toLowerCase());
    });
  }
}