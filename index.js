"use strict";
var Triangle = /** @class */ (function () {
    function Triangle(a, b, c) {
        this.printSidesLenght(a, b, c);
    }
    Triangle.prototype.printSidesLenght = function (a, b, c) {
        console.log("Triangle sides lengths are : a - " + a + ", b - " + b + ", c - " + c);
    };
    return Triangle;
}());
var triangle = new Triangle(5, 7, 22);
