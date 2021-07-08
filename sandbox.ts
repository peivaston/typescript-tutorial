let character = 'Peivaston';
let age = 26;
let hasDriversLicense = false;

const circ = (diameter: number) => {
  return diameter * Math.PI;
}

console.log(circ(7.5));

//Typescript uses strict types and not js

// tsc sandbox.ts -w // command to watch and compile to JS