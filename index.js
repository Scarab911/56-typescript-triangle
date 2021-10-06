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
        this.printSidesLenght();
    }
    Triangle.prototype.printSidesLenght = function () {
        console.log("Triangle sides lengths are : a - " + this.a + ", b - " + this.b + ", c - " + this.c);
        console.log("Perimetras = " + this.perimeter());
        console.log("Ar trikampis egzistuoja = " + this.formatBoolean(this.isExists()));
    };
    Triangle.prototype.perimeter = function () {
        return this.a + this.b + this.c;
    };
    Triangle.prototype.isExists = function () {
        if (this.a + this.b > this.c &&
            this.a + this.c > this.b &&
            this.b + this.c > this.a) {
            return true;
        }
        return false;
    };
    Triangle.prototype.formatBoolean = function (input) {
        if (input) {
            return 'Taip';
        }
        return 'Ne';
    };
    return Triangle;
}());
var triangle = new Triangle(5, 7, 22);
var triangle2 = new Triangle(6, 7, 100);
var triangle3 = new Triangle(6, 7, 8);
