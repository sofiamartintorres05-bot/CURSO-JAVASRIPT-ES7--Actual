// 5- Filtrar palabras largas con filter 

const palabras = ["casa", "ventana", "sol", "computadora", "luz"];

const largas = palabras.filter(p => p.length > 5);

console.log(largas);