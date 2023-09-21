import lodash from 'lodash';
import math from './math.mjs';

const sum = math.add(2, 3);
const mult = math.multiply (2,3);

const squareSum = lodash.square(sum);

console.log(`Sum is ${sum}`);
console.log(`Muliply is ${mult}`);
console.log(`Squared sum ${squareSum}`);