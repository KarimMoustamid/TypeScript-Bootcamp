const add = (a: number, b: number) => {
  return a + b;
};

// Ts dont verify the logic of our function .
const substract = (a: number, b: number) => {
  a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
};

const throwError = (message: string): never => {
  throw new Error(message);
};

const forecast = {
  date: new Date(),
  weather: 'sunny',
};

const logweather = ({ date, weather }: { date: Date; weather: string }) => {
  console.log(forecast.date);
  console.log(forecast.weather);
};

logweather(forecast);
