// 19- Ejercicio combinado: filter + map 

const numeros = [3, 8, 15, 20, 7, 12, 1, 30];

const filtrados = numeros.filter(num => num > 10);

const resultado = filtrados.map(num => num * 2);

console.log(resultado);