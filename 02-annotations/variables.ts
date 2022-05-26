const apples: number = 5;

let speed: string = 'fast';

let hasName: boolean = false;

// buillt in Objects :

let now: Date = new Date();

// Array :

let colors: string[] = ['#000000', '#000000', '#000000'];
let myNumbers: number[] = [1, 2, 3, 4, 5, 6, 7];

// Classes :

class Car {}

let car: Car = new Car();

// Object literal :

let point: { x: number; y: number } = {
  x: 20,
  y: 20,
};

// FUNCTION :
//- ( i : number ) => void , is the annotation .
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};
