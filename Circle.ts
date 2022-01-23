class Circle{

radius: Number = 1.0;
color: String = "red";
 
constructor(radius ?: Number, color ?:String){
    this.radius = radius;
    this.color = color;
}


getRadius():Number{
    return this.radius;
}


setRadius(radius : Number):void{
    this.radius = radius;
}


getColor():String{
    return this.color;
}

setColor(color : String):void{
    this.color = color;
}

getArea(): Number{

    let area : Number = Number(this.radius) * Number(this.radius);
    return area;
}

getCircumference(): Number{

    let circumference : Number = 2*Math.PI*Number(this.radius);
    return circumference;
}


toString() : String {
    return  `This circle has radius ${this.radius} and the area is ${this.getArea()}  `;
  };

}



// let circle1 = new Circle();
// console.log(circle1.toString());

// let circle2 = new Circle(5.0);
// console.log(circle2.toString());

//  let circle3 = new Circle(2.0,"Green");
//  console.log(circle3.toString());


