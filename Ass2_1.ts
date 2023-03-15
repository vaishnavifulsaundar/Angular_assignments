
let Max = [23,89,6,29,56,45,77,32];

function Maximum(Arr:number[]){
    let largest:number = Arr[0];

for (let i = 0; i < Arr.length; i++) {
        if (Arr[i] > largest) {
            largest = Arr[i]; 
            }
   
}
return largest;
}

var res = Maximum(Max);
console.log("Maximum number is: " + res);