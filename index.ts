class Triangle{
constructor(a:number, b:number, c:number){
this.printSidesLenght(a,b,c);
}

printSidesLenght(a:number,b:number,c:number):void{
console.log(`Triangle sides lenghts are : a -${a}, b - ${b}, c - ${c}`);
}
}

const triangle = new Triangle(5,7,22);