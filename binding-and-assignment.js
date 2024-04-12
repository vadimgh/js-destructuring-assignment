let obj = {
  a: 0,
  b: { c: 1 }
};

let {
  a,
  b: { c: d }
} = obj;

console.log(a);

console.log(d);

const numbers = [];

const obj1 = { a: 1, b: 2 };

({ a: numbers[0], b: numbers[1] } = obj1);

console.log(numbers);
