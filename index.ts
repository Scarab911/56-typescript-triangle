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
class Triangle{
    public a: number;
    public b: number;
    public c: number;
   
    constructor(a:number, b:number, c:number){
        this.a = a;
        this.b = b;
        this.c = c;

        this.printSidesLenght(this.a,this.b,this.c);
}

    public printSidesLenght(a:number,b:number,c:number):void{
        console.log(`Triangle sides lengths are : a - ${a}, b - ${b}, c - ${c}`);
}
}

const triangle = new Triangle(5,7,22);
const triangle2 = new Triangle(6,7,100);

