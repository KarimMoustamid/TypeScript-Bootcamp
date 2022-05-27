const carMakers: string[] = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [['f150'], ['corolla'], ['camaro']];

// Help with inference when extracting values :

const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values :
carMakers.push(100);

// heps with map :
carMakers.map((car: string): string => {
  return car.toLowerCase();
});

// Flexible Types :
const importantDates: (Date | string)[] = [new Date(), '2030-01-02'];
importantDates.push('2022-09-12');
importantDates.push(new Date());
