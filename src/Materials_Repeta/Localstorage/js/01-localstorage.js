// console.log(localStorage);

// localStorage.setItem('my-data', JSON.stringify({ name: 'Mango', age: 2 }));

// const savedData = localStorage.getItem('my-data');
// console.log('savedData', savedData);

// const parsedData = JSON.parse(savedData);
// console.log('parsedData', parsedData);

// ========================================================
const userData = {
  name: 'Mango',
  age: 12,
};

localStorage.setItem('my-data', JSON.stringify(userData));
const savedData = localStorage.getItem('my-data');
console.log(savedData);

localStorage.setItem('my-data', JSON.stringify({ name: 'Mango', age: '12' }));
const savedData1 = localStorage.getItem('my-data1');
console.log(savedData1);

const parsedData = JSON.parse(savedData);
console.log(parsedData);
const parsedData1 = JSON.parse(savedData1);
console.log(parsedData1);
