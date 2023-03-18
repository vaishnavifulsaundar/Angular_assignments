
function  fibonacci( a,b){
 let nextTerm = a + b;
 
while (nextTerm <= 21) {
    console.log(nextTerm);
    a = b;
    b= nextTerm;
    nextTerm = a + b;
}
}

let val = fibonacci(0,1);
console.log("numbers are :"+val);
