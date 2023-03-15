

function  DisplayFactors(iNo1){
for (let i = 0; i < iNo1; i++) {
  if((iNo1%i)==0)
  {
    console.log(i);
  }
}
}

let value = DisplayFactors(20);
console.log("Factors of given number is : " +value);