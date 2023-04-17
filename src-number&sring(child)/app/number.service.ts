import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  constructor() { }

  chkPrime(iNo: number): boolean {
    let isPrime = true;
    for (let i = 2; i < iNo / 2; i++) {
      if (iNo % i == 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log(`${iNo} is a prime number`);
    } else {
      console.log(`${iNo} is not a prime number`);
    }
    return isPrime;
  }
  

  }





