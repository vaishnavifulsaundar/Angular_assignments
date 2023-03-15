
let idigit=0 ,r =0,sum=0;

function chkArmstrong(iNo:number)
{
let temp = iNo;
while(iNo!=0){
r = iNo % 10;
sum = sum +(r*r*r);
iNo = iNo / 10;
}
if(sum == temp){
        console.log("Given number is armstrong");

}
else{
        console.log(" number is nt armstrong");
 
}

}

let ret = chkArmstrong(153);

