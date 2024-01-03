class Circle {
  constructor(radius = 1.0, color = "red") {
    this.radius = radius;
    this.color = color;
  }
  area() {
    let a = (Math.PI * this.radius) ^ 2;
    return a;
  }
  circumference() {
    let c = parseInt(2 * Math.PI * this.radius);
    return c;
  }
}

let circle1 = new Circle(4, "Green");
console.log(circle1);
console.log(`Radius : ${circle1.radius} , Color : ${circle1.color}`);
circle1.area();
circle1.circumference();

console.log(
  `Area and circumference of the circle is ${circle1.area()} and ${circle1.circumference()} respectively`
);
