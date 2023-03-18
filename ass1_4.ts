
let isPrime = false;

function CheckPrime(iNo1){
    for (let i = 2; i <=iNo1; i++) {
        if(iNo1 % i == 0){
            isPrime = true;
            break;
        }
        else{
            isPrime= false;
        }
    }
  
}
let val = CheckPrime(11);
if (isPrime) {
    console.log(`It is a prime number`);
} else {
    console.log(`It is a not prime number`);
}
