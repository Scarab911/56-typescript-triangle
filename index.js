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
class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.printSidesLenght();
    }
    printSidesLenght() {
        console.log(`Triangle sides lengths are : a - ${this.a}, b - ${this.b}, c - ${this.c}`);
        console.log(`Perimetras = ${this.perimeter()}`);
        console.log(`Ar trikampis egzistuoja = ${this.formatBoolean(this.isExists())}`);
        console.log(`Ar trikampis status = ${this.formatBoolean(this.arStatus())}`);
        console.log(`--------`);
    }
    perimeter() {
        return this.a + this.b + this.c;
    }
    isExists() {
        // if(this.a + this.b > this.c &&
        //     this.a + this.c > this.b &&
        //     this.b + this.c > this.a){
        //         return true;
        //     }
        // return false;
        return this.a + this.b > this.c &&
            this.a + this.c > this.b &&
            this.b + this.c > this.a;
    }
    arStatus() {
        if ((Math.pow(this.a, 2)) + (Math.pow(this.b, 2)) === (Math.pow(this.c, 2)) ||
            (Math.pow(this.a, 2)) + (Math.pow(this.c, 2)) === (Math.pow(this.b, 2)) ||
            (Math.pow(this.b, 2)) + (Math.pow(this.c, 2)) === (Math.pow(this.a, 2))) {
            return true;
        }
        ;
        return false;
    }
    formatBoolean(input) {
        if (input) {
            return 'Taip';
        }
        return 'Ne';
    }
}
const triangle = new Triangle(5, 7, 22);
const triangle2 = new Triangle(6, 7, 100);
const triangle3 = new Triangle(6, 7, 8);
