import { Calculator } from './calculator';

const calc = new Calculator();

const result_add = calc.add(2, 3);

console.log(`result_add = ${result_add}`);

const result_subtract = calc.subtract(5, 4);	
console.log(`result_sub = ${result_subtract}`);

const result_mult = calc.multiply(5, 3);	
console.log(`result_sub = ${result_mult}`);
const result_div = calc.divide(21, 3);	
console.log(`result_div = ${result_div}`);
const s = calc.hello();
console.log(`result_div = ${s}`);