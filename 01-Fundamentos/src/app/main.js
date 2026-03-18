"use strict"; 
// Activa el modo estricto para evitar errores silenciosos

// ===============================
// IMPORTACIÓN DEL MÓDULO READLINE
// ===============================

// Este módulo permite leer datos desde la consola
const readline = require("readline");

// Creamos la interfaz de entrada y salida
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// ===============================
// DEFINICIÓN DE UNIDADES PERMITIDAS
// ===============================

// Unidades de temperatura (guardadas en minúscula para validación interna)
const temperatura = ["c", "f", "k"];

// Unidades de longitud (guardadas en minúscula para validación interna)
const longitud = ["m", "km", "cm"];

// Unimos todas las unidades en un solo arreglo
// Esto facilita verificar si una unidad existe
const unidades = [...temperatura, ...longitud];

// ===============================
// FUNCIÓN convertir()
// ===============================
// Recibe:
// value → valor que el usuario quiere convertir
// from  → unidad de origen
// to    → unidad destino
// Devuelve:
// - Resultado convertido
// - O mensaje de error en MAYÚSCULAS
// ===============================

function convertir(value, from, to) {

    // Eliminamos espacios y convertimos unidades a minúscula
    value = value.trim();
    from = from.trim().toLowerCase();
    to = to.trim().toLowerCase();

    // Validación: campo vacío
    if (value === "") {
        return "ERROR: NO INGRESASTE NINGÚN VALOR.";
    }

    // Convertimos el valor a número
    const valor = Number(value);

    // Validación: verificar que sea un número válido
    if (!Number.isFinite(valor)) {
        return "ERROR: EL VALOR INGRESADO NO ES NUMÉRICO.";
    }

    // Validación: unidad origen válida
    if (!unidades.includes(from)) {
        return `ERROR: LA UNIDAD DE ORIGEN "${from}" NO ESTÁ SOPORTADA.`;
    }

    // Validación: unidad destino válida
    if (!unidades.includes(to)) {
        return `ERROR: LA UNIDAD DE DESTINO "${to}" NO ESTÁ SOPORTADA.`;
    }

    // Verificamos que ambas unidades pertenezcan a la misma categoría
    const esTemp = temperatura.includes(from) && temperatura.includes(to);
    const esLong = longitud.includes(from) && longitud.includes(to);

    // Si son categorías diferentes, no se puede convertir
    if (!esTemp && !esLong) {
        return `ERROR: NO SE PUEDE CONVERTIR DE "${from}" A "${to}" PORQUE SON CATEGORÍAS DIFERENTES.`;
    }

    let resultado;

    // ===============================
    // BLOQUE DE CONVERSIÓN TEMPERATURA
    // ===============================
    if (esTemp) {

        let celsius;

        // Primero convertimos todo a Celsius
        if (from === "c") {
            celsius = valor;
        } 
        else if (from === "f") {
            celsius = (valor - 32) * 5 / 9;
        } 
        else if (from === "k") {

            // Kelvin no puede ser negativo
            if (valor < 0) {
                return "ERROR: KELVIN NO PUEDE SER NEGATIVO.";
            }

            celsius = valor - 273.15;
        }

        // Luego convertimos de Celsius a la unidad destino
        if (to === "c") {
            resultado = celsius;
        } 
        else if (to === "f") {
            resultado = (celsius * 9 / 5) + 32;
        } 
        else if (to === "k") {
            resultado = celsius + 273.15;
        }
    }

    // ===============================
    // BLOQUE DE CONVERSIÓN LONGITUD
    // ===============================
    if (esLong) {

        // Factores de conversión respecto a metros
        const factores = {
            m: 1,
            km: 1000,
            cm: 0.01
        };

        // Convertimos primero a metros
        const metros = valor * factores[from];

        // Luego convertimos de metros a la unidad destino
        resultado = metros / factores[to];
    }

    // Seguridad adicional
    if (resultado === undefined) {
        return "ERROR: NO SE PUDO REALIZAR LA OPERACIÓN.";
    }

    // Devolvemos el resultado normal (no en mayúsculas)
    return `${resultado.toFixed(2)} ${to}`;
}

// ===============================
// FUNCIÓN mostrarMenu()
// ===============================
// Muestra información al usuario
// ===============================

function mostrarMenu() {

    console.log("\n==================================");
    console.log(" Calculadora de Conversiones ");
    console.log("==================================");
    console.log("Unidades de temperatura: C, F, K");
    console.log("Unidades de longitud: M, Km, Cm");
    console.log("Escribe 'salir' para terminar.");
}

// ===============================
// FUNCIÓN PRINCIPAL iniciar()
// ===============================
// Controla el flujo del programa
// ===============================

function iniciar() {

    mostrarMenu();

    // Pedimos el valor al usuario
    rl.question("\nIngresa el valor que deseas convertir: ", (value) => {

        if (value.trim().toLowerCase() === "salir") {
            console.log("Programa finalizado.");
            rl.close();
            return;
        }

        // Pedimos unidad de origen
        rl.question("Ingresa la unidad de origen: ", (from) => {

            if (from.trim().toLowerCase() === "salir") {
                console.log("Programa finalizado.");
                rl.close();
                return;
            }

            // Pedimos unidad destino
            rl.question("Ingresa la unidad destino: ", (to) => {

                if (to.trim().toLowerCase() === "salir") {
                    console.log("Programa finalizado.");
                    rl.close();
                    return;
                }

                // Ejecutamos la conversión
                const resultado = convertir(value, from, to);

                console.log("\nResultado:", resultado);

                // Reiniciamos el proceso para permitir otra conversión
                iniciar();
            });
        });
    });
}

// Iniciamos el programa
iniciar();