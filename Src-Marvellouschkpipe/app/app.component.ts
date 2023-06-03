import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assign';

  CountCapital(str :any){
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);

    if (char >= 'A' && char <= 'Z') {
      count++;
    }
  }
  return count;
}
   CheckPassword(password:any) {
  let capitalCount = 0;
  let smallCount = 0;
  let digitCount = 0;
  let specialSymbolCount = 0;

  for (let i = 0; i < password.length; i++) {
    const char = password[i];

    if (char >= "A" && char <= "Z") {
      capitalCount++;
    } else if (char >= "a" && char <= "z") {
      smallCount++;
    } else if (char >= "0" && char <= "9") {
      digitCount++;
    } else {
      specialSymbolCount++;
    }
  }

  return (
    capitalCount >= 2 &&
    smallCount >= 3 &&
    digitCount >= 2 &&
    specialSymbolCount >= 1
  );
}


  ArrayAddition(Arr:any[]){
    let iSum=0;
    for(let i=0;i<Arr.length;i++){
     iSum = iSum+Arr[i];
    }
    return iSum;
  }
}
