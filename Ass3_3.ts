

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


    class CircleX extends Circle{

        constructor(rad){
            super(rad);
        }

        Circumference(){
            let Ans ;
            Ans = 2* this.Radius * this.PI;
            return Ans;
        }

    }
    
    
    let obj1  = new CircleX(5);
    let obj2 = new CircleX(7);
    
    var result ;
    
    result = obj1.Area();
    console.log("Area of circle is :" + result);

    result = obj2.Area();
    console.log("Area of circle is :" + result);
    
    
    result = obj2.Area();
    console.log("Area of circle is :" + result);

    result = obj2.Circumference();
    console.log("Area of circle is :" + result);
    