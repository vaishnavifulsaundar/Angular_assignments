import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myRev'
})
export class MyRevPipe implements PipeTransform {

  transform(value:string): string {
    let arr: string[] = value.split('');
    let iStart: number = 0, iEnd: number = arr.length-1;
    let temp: string;

    while (iStart < iEnd) {
      temp = arr[iStart];
      arr[iStart] = arr[iEnd];
      arr[iEnd] = temp;
      iStart++;
      iEnd--;
    }

    return arr.join('');
  }
  }


