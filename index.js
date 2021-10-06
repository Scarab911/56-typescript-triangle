"use strict";
/**
 * 1. Susikurkite TypeScript projektą
 *
 * 2. Parašykite programą, kuri padeda dirbti su trikampiais
 *
 * 3. Aprašykite klasę "Trikampis", kuri turėtu tris atributus
 * simbolizuojančius visas tris trikampio kraštines (a, b, c).
 *
 * 4. Trikampio kraštinių reikšmės turi būti priskiriamos sukuriant
 * objektą (konstruktoriuje).
 *
 * 5. Aprašykite metodą "spausdintiDuomenis()", kuris atspausdina
 * visus trikampio duomenis (kraštines) į konsolę.
 */
var Triangle = /** @class */ (function () {
    function Triangle(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.printSidesLenght(this.a, this.b, this.c);
    }
    Triangle.prototype.printSidesLenght = function (a, b, c) {
        console.log("Triangle sides lengths are : a - " + a + ", b - " + b + ", c - " + c + "/n Perimetras = " + this.perimeter(a, b, c));
    };
    Triangle.prototype.perimeter = function (a, b, c) {
        return a + b + c;
    };
    return Triangle;
}());
var triangle = new Triangle(5, 7, 22);
var triangle2 = new Triangle(6, 7, 100);
