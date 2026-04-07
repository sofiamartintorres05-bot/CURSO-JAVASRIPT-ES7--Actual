// 9- Contar total de letras con reduce 

const palabras = ["hola", "mundo", "js"];

const totalLetras = palabras.reduce((total, palabra) => total + palabra.length, 0);

console.log(totalLetras);