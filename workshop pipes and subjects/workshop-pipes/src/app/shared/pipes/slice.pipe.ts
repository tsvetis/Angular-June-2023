import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slice',
})
export class SlicePipe implements PipeTransform {
  transform(value: string, maxCharCount = 5): unknown {
    return `${value.substring(0, maxCharCount)}${
      value.length > maxCharCount ? '...' : ''
    }`;
  }
}
