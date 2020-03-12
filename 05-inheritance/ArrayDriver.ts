import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

let shape = new Shape(1, 2);
let circle = new Circle(1, 2, 3);
let rectangle = new Rectangle(1, 2, 3, 4);

// declare an array of shapes ... intiallly empty
let shapes: Shape[] = [];

// add shapes to the array
shapes.push(shape, circle, rectangle);

// print the shape's info
for (let shape of shapes) {
  console.log(shape.getInfo());
}
