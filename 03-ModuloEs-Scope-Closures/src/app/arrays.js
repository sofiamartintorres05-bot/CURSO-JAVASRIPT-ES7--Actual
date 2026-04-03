// funcion sumArray, funcion que permite sumar todos los elementos de un array//
// funcion averageArray, funcion que permite calcular el promedio de todos los elementos
// funcion groupArrayBy, funcion que permite agrupar los elementos de un array por una propiedad

//COMO SE CONSTRUYE
function sumArray(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

// averageArray
function averageArray(arr) {
  const total = sumArray(arr);
  return total / arr.length;
}

// groupArrayBy
function groupArrayBy(arr, prop) {
  const result = {};

  for (let i = 0; i < arr.length; i++) {
    const key = arr[i][prop];

    if (!result[key]) {
      result[key] = [];
    }

    result[key].push(arr[i]);
  }

  return result;
}

// Ejemplo de uso
const people = [
  { name: "Mariana", age: 20 },
  { name: "Ana", age: 20 },
  { name: "Cristian", age: 30 },  
];

console.log(groupArrayBy(people, 'age')); // { '20': [..], '30': [..] }