// formas de declarar funciones en javascript

function sumar(a, b) {
  return a + b;
}

console.log(sumar(5, 3)); // Imprime 8

const multiplicar = function (a, b) {
  return a * b;
};

console.log(multiplicar(5, 3)); // Imprime 15

const clamp = (num, min, max) => {
  return Math.min(Math.max(num, min), max); // clamp a un rango entre min y max
};
console.log(clamp(10, 0, 5)); // Imprime 5 (clamp a 5)

// Parametros por defecto, rest y guard clauses

function greet(name = "Invitado") {
  if (!name.trim())
    // trim elimina espacios en blanco al inicio y al final de la cadena
    return "Hola, Invitado!";
  return `Hola, ${name}!`;
}

console.log(greet()); // Imprime "Hola, Invitado!"
console.log(greet("Alice"));

// Arrays y metodos claves

const numeros = [1, 2, 3, 4, 5];
const cuadrados = numeros.map((num) => num * 2); // map crea un nuevo array con los resultados de la función aplicada a cada elemento
console.log(cuadrados); // Imprime [1, 4, 9, 16, 25]

const expenses = [
  { amount: 50, category: "food" },
  { amount: 20, category: "transport" },
  { amount: 30, category: "food" },
];
// filter 

const foodExpenses = expenses.filter((expense) => expense.category === "food"); 
// filter crea un nuevo array con los elementos que cumplen la condición
console.log(foodExpenses); // Imprime [{ amount: 50, category: "food" }, { amount: 30, category: "food" }]

const totalFoodExpense = foodExpenses.reduce((total, expense) => total + expense.amount, 0);
// reduce acumula un valor a través de los elementos del array, en este caso sumando los montos de los gastos de comida
console.log(totalFoodExpense); // Imprime 80


// =====================================
//MIS  EJEMPLOS 3/03/2026 - EJEMPLOS DE MAP, FILTER Y REDUCE//



// =====================================
// 1️⃣ EJEMPLOS DE MAP()
// map() transforma cada elemento y crea un NUEVO arreglo
// =====================================

console.log("===== EJEMPLOS DE MAP =====");

// 1. Multiplicar por 3
const numeros1 = [1, 2, 3, 4, 5];
const multiplicados = numeros1.map(function(num) {
  return num * 3; // multiplica cada número por 3
});
console.log("Multiplicados por 3:", multiplicados);


// 2. Convertir nombres a mayúsculas
const nombres = ["ana", "carlos", "maria"];
const nombresMayus = nombres.map(nombre => nombre.toUpperCase()); //
console.log("Nombres en mayúsculas:", nombresMayus);


// 3. Obtener el doble
const valores = [10, 20, 30];
const doble = valores.map(v => v * 2);
console.log("Dobles:", doble);


// 4. Agregar texto a cada producto
const productos = ["Pan", "Leche", "Huevos"];
const listaProductos = productos.map(p => "Producto: " + p);
console.log("Lista con texto:", listaProductos);


// 5. Obtener solo edades
const personas1 = [
  { nombre: "Ana", edad: 20 },
  { nombre: "Luis", edad: 25 }
];
const edades = personas1.map(persona => persona.edad);
console.log("Edades:", edades);



// =====================================
// 2️⃣ EJEMPLOS DE FILTER()
// filter() filtra elementos que cumplan una condición
// =====================================

console.log("===== EJEMPLOS DE FILTER =====");

// 1. Números mayores que 5
const numeros2 = [2, 8, 3, 10, 1];
const mayores = numeros2.filter(num => num > 5);
console.log("Mayores que 5:", mayores);


// 2. Números pares
const numeros3 = [1, 2, 3, 4, 5, 6];
const pares = numeros3.filter(num => num % 2 === 0);
console.log("Números pares:", pares);


// 3. Palabras largas
const palabras = ["sol", "computador", "mesa", "javascript"];
const largas = palabras.filter(p => p.length > 5);
console.log("Palabras largas:", largas);


// 4. Personas mayores de edad
const personas2 = [
  { nombre: "Ana", edad: 17 },
  { nombre: "Luis", edad: 22 }
];
const mayoresEdad = personas2.filter(p => p.edad >= 18);
console.log("Mayores de edad:", mayoresEdad);


// 5. Productos baratos
const productos2 = [
  { nombre: "Cuaderno", precio: 5000 },
  { nombre: "Laptop", precio: 2000000 }
];
const baratos = productos2.filter(p => p.precio < 10000);
console.log("Productos baratos:", baratos);



// =====================================
// 3️⃣ EJEMPLOS DE REDUCE()
// reduce() reduce todo el arreglo a UN solo valor
// =====================================

console.log("===== EJEMPLOS DE REDUCE =====");

// 1. Sumar todos los números
const numeros4 = [1, 2, 3, 4];
const suma = numeros4.reduce(function(total, num) {
  return total + num; // va acumulando la suma
}, 0);
console.log("Suma total:", suma);


// 2. Multiplicar todos los números
const numeros5 = [2, 3, 4];
const multiplicacion = numeros5.reduce((total, num) => total * num, 1);
console.log("Multiplicación total:", multiplicacion);


// 3. Contar elementos
const nombres2 = ["Ana", "Luis", "Pedro"];
const cantidad = nombres2.reduce((total) => total + 1, 0);
console.log("Cantidad de elementos:", cantidad);


// 4. Sumar edades
const personas3 = [
  { nombre: "Ana", edad: 20 },
  { nombre: "Luis", edad: 25 }
];
const totalEdades = personas3.reduce((total, persona) => total + persona.edad, 0);
console.log("Total edades:", totalEdades);


// 5. Encontrar el número mayor
const numeros6 = [5, 9, 2, 15, 3];
const mayor = numeros6.reduce((max, num) => {
  if (num > max) {
    return num;
  } else {
    return max;
  }
}, numeros6[0]);
console.log("Número mayor:", mayor);
