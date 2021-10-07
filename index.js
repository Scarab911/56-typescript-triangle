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
 *
 * 6. Papildykite klasę metodu, kuris apskaičiuoja ir grąžina
 * trikampio perimetrą. Spausdinant trikampio duomenis
 * atspausdinkite ir jo perimetrą.
 *
 * 7. Parašykite metodą, kuris nusako, ar toks trikampis gali
 * egzistuoti (metodas turi grąžinti boolean reikšmę).
 * Spausdindami duomenis pasakykite, ar toks trikampis gali
 * egzistuoti.
 *
 * 8. Papildykite klasę metodu, kuris nurodo, ar trikampis yra
 * statusis.
 *
 * 9. Sukurkite masyvą, kuris saugo trikampių reikšmes,
 * panaudodami ciklą atspausdinkite visų masyvę esančių trikampių
 * duomenis.
 *
 * 10. ND: Papildykite programą funkcionalumu, kuris trikampių
 * masyvą užpildo trikampiais (50 reikšmių), kurių kraštinės yra
 * atsitiktinės reikšmės.
 *
 * Papildoma: Vėliau programa masyvą prafiltravus
 * paliktų tik egzistuojančius trikampius ir atspausdintų jų duomenis.
 */
class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    printTriangleData() {
        console.log(`Triangle sides lengths are : a - ${this.a}, b - ${this.b}, c - ${this.c}`);
        console.log(`Perimetras = ${this.perimeter()}`);
        console.log(`Ar trikampis egzistuoja = ${this.formatBoolean(this.isExists())}`);
        console.log(`Ar trikampis statusis = ${this.arStatus ? 'Taip statusis' : 'Ne nestatusis'}`); //ternary iskart spausdinant
        console.log(`--------`);
    }
    perimeter() {
        return this.a + this.b + this.c;
    }
    isExists() {
        //metodas be 'get' ir su paprastu if
        // if(this.a + this.b > this.c &&
        //     this.a + this.c > this.b &&
        //     this.b + this.c > this.a){
        //         return true;
        //     }
        // return false;
        //kadangi grazina boolean tai if galima supaprastinti iki:
        return this.a + this.b > this.c &&
            this.a + this.c > this.b &&
            this.b + this.c > this.a;
    }
    get arStatus() {
        //metodas su 'get'
        return Math.pow(this.a, 2) + Math.pow(this.b, 2) === Math.pow(this.c, 2) ||
            Math.pow(this.a, 2) + Math.pow(this.c, 2) === Math.pow(this.b, 2) ||
            Math.pow(this.b, 2) + Math.pow(this.c, 2) === Math.pow(this.a, 2);
    }
    formatBoolean(input) {
        // if(input){
        //     return 'Taip';
        // }
        // return 'Ne';
        return input ? 'Taip' : 'Ne';
    }
    get randomNumber() {
        return Math.floor(Math.random() * 100) + 1;
    }
    createTriangles(array, quantity) {
        for (let i = 0; i < quantity; i++) {
            array.push({ a: this.randomNumber, b: this.randomNumber, c: this.randomNumber });
        }
        return array;
    }
    printTriangleListData(array) {
        for (const element of array) {
            console.log(element);
        }
    }
}
/*kuriam ir dedam trikapius i sarasa*/
// const triangle = new Triangle(5,7,22);
let trikampiai = [];
// trikampiai = triangle.createTriangles(trikampiai,5);
// console.log(trikampiai);
//prints trikampiai array of objects
// for(const {a,b,c} of trikampiai){
//     triangle.printTriangleData(a,b,c);     
// };
//prints data of each object in a trikampiai array
/* SU FUNKCIJOM */
//random number
function randomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}
//function to create random triangles list
function createTriangles(quantity) {
    for (let i = 0; i < quantity; i++) {
        trikampiai.push(new Triangle(randomNumber(), randomNumber(), randomNumber()));
    }
}
//calls a function to create needed number of triangles in a array
createTriangles(10);
console.log(trikampiai);
createTriangles(10);
console.log(trikampiai);
createTriangles(30);
console.log(trikampiai);
//prints data of each object in a trikampiai array
for (const element of trikampiai) {
    Triangle.printTriangleData();
}
;
// trikampiai.push(new Triangle(5,7,20))
// console.log(trikampiai);
// const triangle2 = new Triangle(6,7,100);
// const triangle3 = new Triangle(6,7,8);
