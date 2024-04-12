const [a = 1] = [];

console.log(a);

const { b } = { b: undefined };

console.log(b);

const { c = console.log('Please provide a value for c') } = {};

c;
