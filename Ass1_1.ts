

function Maximum(iNo1:number,iNo2:number, iNo3:number){
if(iNo1>iNo2 && iNo1>iNo3){
    console.log(`${iNo1} is Maximum number`);
}
else if(iNo2>iNo1 && iNo2>iNo3){
    console.log(`${iNo2} is Maximum number`);

}
else
{
    console.log(`${iNo3} is Maximum number`);

}
}

var  res= Maximum(23,89,6);
