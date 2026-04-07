// 7- Sumar números con reduce 

const numeros = [5, 10, 15, 20];

const suma = numeros.reduce((total, num) => total + num, 0);

console.log(suma);