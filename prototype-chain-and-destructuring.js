const obj = {
  prop1: '1',
  __proto__: {
    prop2: '2'
  }
};

const { prop1, prop2 } = obj;

console.log(prop1);

console.log(prop2);
