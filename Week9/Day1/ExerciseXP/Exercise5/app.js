import lodash from 'lodash';
import {add,multiply} from './math.js';

const sum = add(2, 3);
const mult = multiply (2,3);

// const squareSum = lodash.square(sum);

console.log(`Sum is ${sum}`);
console.log(`Muliply is ${mult}`);
// console.log(`Squared sum ${squareSum}`);