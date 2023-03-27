

class Arithmatic{
  Number1 :number;
  Number2 :number;

  constructor(A:number,B:number){
   this.Number1 = A;
   this.Number2 = B;
  }

  Addition(){
    return this.Number1 + this.Number2;
  }

  Substraction(){
    return this.Number1 - this.Number2;
  }

  Multiplication(){
    return this.Number1 * this.Number2;
  }

  Division(){
    return this.Number1 / this.Number2;
  }
}


var obj1 = new Arithmatic(10,20);
var obj2 = new Arithmatic(30,10);

var Ret = 0;

Ret = obj1.Addition();
console.log("Addition is:" +Ret);

Ret = obj1.Substraction();
console.log("substraction is:" +Ret);

Ret = obj1.Multiplication();
console.log("multiplication is:" +Ret);

Ret = obj1.Division();
console.log("division is:" +Ret);


Ret =obj2.Addition();
console.log("Addition is:" +Ret);

Ret =obj2.Substraction();
console.log("substraction is:" +Ret);

Ret = obj2.Multiplication();
console.log("multiplication is:" +Ret);

Ret = obj2.Division();
console.log("division is:" +Ret);




