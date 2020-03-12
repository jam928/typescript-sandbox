"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var circle = new Circle_1.Circle(1, 2, 3);
var rectangle = new Rectangle_1.Rectangle(1, 2, 3, 4);
// declare an array of shapes ... intiallly empty
var shapes = [];
// add shapes to the array
shapes.push(circle, rectangle);
// print the shape's info
for (var _i = 0, shapes_1 = shapes; _i < shapes_1.length; _i++) {
    var shape = shapes_1[_i];
    console.log(shape.getInfo());
    console.log(shape.calculateArea());
    console.log();
}
