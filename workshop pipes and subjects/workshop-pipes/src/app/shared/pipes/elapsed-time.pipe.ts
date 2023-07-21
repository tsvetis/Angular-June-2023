import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'elapsedTime',
})
export class ElapsedTimePipe implements PipeTransform {
  transform(dateString: string, ...args: unknown[]): unknown {
    // date from the posts from today's date
    return moment(dateString).fromNow();
  }
}
