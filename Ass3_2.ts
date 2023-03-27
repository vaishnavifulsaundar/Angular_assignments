

class Circle{
Radius : number;
PI :number;

constructor(rad , Pi = 3.14){
this.Radius = rad;
this.PI = Pi;
}

Area(){
    let area ;
    area = this.Radius * this.Radius *this.PI ;
return area ;
}
}


let obj1  = new Circle(5);
let obj2 = new Circle(7);

var result ;

result = obj1.Area();
console.log("Area of circle is :" + result);

result = obj2.Area();
console.log("Area of circle is :" + result);
