"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Shape_1 = require("./Shape");
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var shape = new Shape_1.Shape(1, 2);
var circle = new Circle_1.Circle(1, 2, 3);
var rectangle = new Rectangle_1.Rectangle(1, 2, 3, 4);
// declare an array of shapes ... intiallly empty
var shapes = [];
// add shapes to the array
shapes.push(shape, circle, rectangle);
// print the shape's info
for (var _i = 0, shapes_1 = shapes; _i < shapes_1.length; _i++) {
    var shape_1 = shapes_1[_i];
    console.log(shape_1.getInfo());
}
