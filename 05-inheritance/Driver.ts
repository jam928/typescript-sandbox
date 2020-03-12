import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

let shape = new Shape(1, 2);
let circle = new Circle(1, 2, 3);
let rectangle = new Rectangle(1, 2, 3, 4);

console.log(shape.getInfo());
console.log(circle.getInfo());
console.log(rectangle.getInfo());
