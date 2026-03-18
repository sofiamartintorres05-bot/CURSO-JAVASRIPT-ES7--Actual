
// 1. CONST - Temperatura constante
const temperaturaCongelador = -18;
console.log(`Temperatura: ${temperaturaCongelador}°C`);

// 2. CONST - Lista de compras
const listaCompras = "Leche, Pan, Huevos, Queso";
console.log(listaCompras);

// 3. LET - Cantidad de dinero que crece
let ahorros = 5000;
ahorros = ahorros + 2000; // Incrementó
console.log(`Ahorros actuales: ${ahorros}`);

// 4. DATOS - Array de temperaturas
const temperaturas = [15, 22, 18, 25, 20];
console.log(temperaturas);

// 5. DATOS - Objeto producto
const producto = {
    nombre: "Laptop",
    precio: 800,
    stock: 5
};
console.log(`Producto: ${producto.nombre} - Precio: $${producto.precio}`);

// 6. IF - Verificar edad
const edadCliente = 18;
if (edadCliente >= 18) {
    console.log("Puede comprar");
} else {
    console.log("Debe ser mayor de edad");
}

// 7. SWITCH - Elegir color
const colorSeleccionado = 2;
switch (colorSeleccionado) {
    case 1:
        console.log("Rojo");
        break;
    case 2:
        console.log("Azul");
        break;
    case 3:
        console.log("Verde");
        break;
}

// 8. FOR - Contar del 10 al 1
for (let i = 10; i >= 1; i--) {
    console.log(`Cuenta regresiva: ${i}`);
}

// 9. FOR - Calcular promedio
const calificaciones = [8, 9, 7, 9, 8];
let sumaCalificaciones = 0;
for (let i = 0; i < calificaciones.length; i++) {
    sumaCalificaciones = sumaCalificaciones + calificaciones[i];
}
const promedio = sumaCalificaciones / calificaciones.length;
console.log(`Promedio: ${promedio}`);

// 10. TERNARIO - Estado de envío
const diasEnvio = 2;
const estado = diasEnvio <= 3 ? "Llega pronto" : "Envío estándar";
console.log(estado);

// A. tipos de datos  typeof

// string, number, boolean, null, undefined, symbol, bigint

// no primitivos: object, array, function

"use strict"; // modo estricto que ayuda a evitar errores comunes, como variables no declaradas

const s = "hola mundo"; // string
const n = 42; // number
const b = true;
let u; // undefined valor no asignado
const nu = null; // null valor intencionalmente vacio
const big = 9007199254740991n; // bigint para numeros enteros grandes
const sym = Symbol("id"); // simbolo para identificadores unicos

console.log(typeof s); // string
console.log(typeof n); // number
console.log(typeof b); // boolean
console.log(typeof u); // undefined
console.log(typeof nu); // object (null es un caso especial de objeto)
console.log(typeof big); // bigint
console.log(typeof sym); // symbol

//correr codigo usando  extension code runner en vscode ctrl + alt + n  
// usa null cuando quieres decir no "hay valor" y undefined cuando quieres decir "valor no asignado"

//B. let vs const (y porque evitar var)

// const 
// No permite reasignacion de valor, es decir, no puedes cambiar el valor de una variable declarada con const despues de haberla asignado.
// Sin embargo, si el valor es un objeto o un array, puedes modificar sus propiedades o elementos.

const x = 10;
// x = 20; // Esto causará un error porque no se puede reasignar una variable const

const obj = { name: "Alice" };
obj.name = "Bob"; // Esto es permitido, ya que estamos modificando una propiedad del objeto, no reasignando la variable obj

// let  permite reasignacion de valor, es decir, puedes cambiar el valor de una variable declarada con let despues de haberla asignado.

let y = 10;
y = 20; // Esto es permitido porque let permite reasignación

// porque evitar var
// var tiene un alcance de funcion, lo que significa que si declaras una variable con var dentro de una funcion, esa variable es accesible en toda la funcion, incluso antes de su declaracion debido al hoisting. Esto puede llevar a errores dificiles de depurar.

function demo() {
    if(true) {
        var z = 30; // z es accesible en toda la funcion demo, incluso antes de esta linea
    }
    console.log(z); // Esto funcionara y mostrara 30, lo que puede ser confuso

}//llamamos demo
demo();

// usa const por  defecto
// usa let cuando necesites reasignar un valor

// C. Conversion de tipos(coercion) vs conversion explicita

// coercion de tipos (conversion implicita)
// JavaScript convierte automaticamente los tipos de datos cuando es necesario, lo que puede llevar a resultados inesperados.

console.log("m" + 3); 
console.log("5" - 3); // 2 (coercion a number)
console.log(true + 1); // boolean (true)

// conversion explicita
// Puedes convertir tipos de datos manualmente usando funciones como Number(), String(), Boolean(), etc.

const input = "12.5";
const num = Number(input); // convierte el string a un número

const number = 42;
const str = String(number); // convierte el número a un string

console.log(num); // 12.5
console.log(str); // "42"

// operadores claves

// 1) === VS ==
// === compara tanto el valor como el tipo de datos, mientras que 
// == compara solo el valor despues de realizar coercion de tipos si es necesario.

console.log(5 === "5"); // false (diferente tipo)
console.log(5 == "5"); // true (coercion a number)

// siempre usar  === para evitar errores de comparacion debido a coercion de tipos inesperada.
// USO !== para comparar desigualdad estricta, que tambien compara tanto el valor como el tipo de datos.

// 2) && VS || ?? 
// && (AND lógico) devuelve el primer valor falsy o el último valor si todos son truthy

// V  V= V    V F = F   F F = F 
console.log(true && true); // true
console.log(true && false); // false
console.log(false && false); // false

// || (OR lógico) devuelve el primer valor truthy o el último valor si todos son falsy
// V  V= V    V F = V   F F = F
console.log(true || true); // true
console.log(true || false); // true
console.log(false || false); // false

// ?? (Nullish coalescing) devuelve el primer valor que no sea null o undefined
const a = null;

const c = "default";
console.log(a ?? c); // "default" (a es null)

// ?? es util para proporcionar un valor predeterminado solo cuando el valor es null o undefined,
//  a diferencia de || que considera falsy (como 0, "", false) como valores que tambien activan el valor predeterminado.

console.log(0 || "default"); // "default" (0 es falsy)

