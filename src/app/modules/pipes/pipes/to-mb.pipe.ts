import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toMb'
})
export class ToMbPipe implements PipeTransform {
  transform(value: any, suffix: string = 'MB'): any {
    return (value / (1024 * 1024)).toFixed(2) + suffix;
  }

}
