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

// When ti use annotations :
// 1) Function that returns the "any" type .

const json = '{x} : 10 , {y} : 20';

const coordinates: { x: number; y: number } = JSON.parse(json);

// 2) When we declare a variaable on one line
// and initialize it later .

let words = ['red', 'green', 'blue'];
let founfword;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    founfword = true;
  }
}

// 3) When a Variable whose type cannot be inferred correctly .

let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
