
var Sum=[23,6,7,4,5,7]

function summation(Arr:number[]){
    var add :number=0;

    for (let i = 0; i < Arr.length; i++) {
     add = add + Arr[i];
    }
    return add;
}

let result;
result = summation(Sum);
console.log("summation is:"+result);
