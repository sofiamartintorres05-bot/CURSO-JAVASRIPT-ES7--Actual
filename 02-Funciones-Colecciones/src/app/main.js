"use strict"; // Activa el modo estricto para evitar errores comunes en JavaScript

/* =====================================================
   FUNCIONES DE VALIDACIÓN
   Estas funciones verifican que los datos sean correctos
   ===================================================== */

// Convierte un valor a número y verifica que sea válido
function toNumberString(value, label = "Valor") {

  const n = Number(value); // convierte el valor a número

  // Si el valor no es un número válido se lanza un error
  if (!Number.isFinite(n)) {
    throw new Error(`${label} debe ser un número válido`);
  }

  return n; // devuelve el número validado
}


// Verifica que el número no sea negativo
function assertNonNegative(value, label = "Valor") {

  if (value < 0) {
    throw new Error(`${label} debe ser un número no negativo`);
  }

}


// Convierte el valor a texto y verifica que no esté vacío
function toNonEmptyString(value, label = "Valor") {

  const s = String(value).trim(); // convierte a texto y elimina espacios

  if (s.length === 0) {
    throw new Error(`${label} no puede ser una cadena vacía`);
  }

  return s; // devuelve el texto validado
}


/* =====================================================
   NORMALIZACIÓN DE DATOS
   Limpia y valida los datos antes de usarlos
   ===================================================== */

function normalizeExpense(raw) {

  // Validación de cada campo del gasto
  const id = toNonEmptyString(raw.id, "ID");
  const fecha = toNonEmptyString(raw.fecha, "Fecha");
  const categoria = toNonEmptyString(raw.categoria, "Categoría");
  const descripcion = toNonEmptyString(raw.descripcion, "Descripción");

  // Convierte el monto a número
  const monto = toNumberString(raw.monto, "Monto");

  // Verifica que el monto no sea negativo
  assertNonNegative(monto, "Monto");

  // Devuelve el objeto limpio
  return {
    id,
    fecha,
    categoria,
    descripcion,
    monto,
  };
}


/* =====================================================
   DATASET DE EJEMPLO
   Lista de gastos que se analizarán
   ===================================================== */

const expenses = [

  normalizeExpense({
    id: "e1",
    fecha: "2024-01-15",
    categoria: "Alimentación",
    descripcion: "Compra en supermercado",
    monto: 8500000,
  }),

  normalizeExpense({
    id: "e2",
    fecha: "2024-01-20",
    categoria: "Transporte",
    descripcion: "Pasaje de bus",
    monto: 150000,
  }),

  normalizeExpense({
    id: "e3",
    fecha: "2024-01-25",
    categoria: "Entretenimiento",
    descripcion: "Entrada al cine",
    monto: 500000,
  }),

  normalizeExpense({
    id: "e4",
    fecha: "2024-01-30",
    categoria: "Salud",
    descripcion: "Consulta médica",
    monto: 2000000,
  }),

  normalizeExpense({
    id: "e5",
    fecha: "2024-02-05",
    categoria: "Educación",
    descripcion: "Curso en línea",
    monto: 1200000,
  }),

  normalizeExpense({
    id: "e6",
    fecha: "2024-02-05",
    categoria: "Alimentación",
    descripcion: "Restaurante",
    monto: 1200000,
  }),

  normalizeExpense({
    id: "e7",
    fecha: "2024-02-05",
    categoria: "Salud",
    descripcion: "Medicamentos",
    monto: 1200000,
  }),

  normalizeExpense({
    id: "e8",
    fecha: "2024-02-05",
    categoria: "Entretenimiento",
    descripcion: "Parque de diversiones",
    monto: 1200000,
  }),

];


/* =====================================================
   CÁLCULO DE ESTADÍSTICAS
   Calcula total, promedio, mínimo y máximo
   ===================================================== */

function calStats(expenses) {

  // Si no hay gastos
  if (expenses.length === 0) {
    return {
      total: 0,
      promedio: 0,
      maximo: 0,
      minimo: 0,
    };
  }

  // Extrae todos los montos
  const values = expenses.map((e) => e.monto);

  // Calcula total
  const total = values.reduce((acc, n) => acc + n, 0);

  // Calcula mínimo
  const minimo = Math.min(...values);

  // Calcula máximo
  const maximo = Math.max(...values);

  // Calcula promedio
  const promedio = total / values.length;

  return { total, promedio, maximo, minimo };
}


/* =====================================================
   TOTAL DE GASTOS POR CATEGORÍA
   ===================================================== */

function totalByCategory(expenses) {

  return expenses.reduce((acc, e) => {

    // Si la categoría no existe se inicializa en 0
    acc[e.categoria] = (acc[e.categoria] || 0) + e.monto;

    return acc;

  }, {});
}


/* =====================================================
   ORDENAR TOTALES POR CATEGORÍA
   ===================================================== */

function sortedTotalsByCategory(expenses) {

  const byCat = totalByCategory(expenses);

  // Convierte el objeto en array y lo ordena
  return Object.entries(byCat)
    .map(([categoria, total]) => ({
      categoria,
      total,
    }))
    .sort((a, b) => b.total - a.total);

}


/* =====================================================
   GASTO MÁS ALTO
   ===================================================== */

function getHighestExpense(expenses) {

  // Reduce compara todos los montos
  return expenses.reduce((max, e) => {
    return e.monto > max.monto ? e : max;
  });

}


/* =====================================================
   ÚLTIMOS GASTOS
   ===================================================== */

function getLastExpenses(expenses, limit = 3) {

  return [...expenses] // copia del array
    .sort((a, b) => new Date(b.fecha) - new Date(a.fecha)) // ordena por fecha
    .slice(0, limit); // toma los últimos

}


/* =====================================================
   FORMATEO DE MONEDA
   ===================================================== */

function formatCOP(value) {

  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(value);

}


/* =====================================================
   REPORTE EN CONSOLA
   ===================================================== */

function printReport(expenses) {

  const stats = calStats(expenses); // estadísticas

  const sortedByCat = sortedTotalsByCategory(expenses); // categorías ordenadas

  const highest = getHighestExpense(expenses); // gasto más alto

  const lastExpenses = getLastExpenses(expenses); // últimos gastos


  console.group("REPORTE - ANALIZADOR DE GASTOS");


  console.log("Resumen:");

  console.table([
    {
      Total: formatCOP(stats.total),
      Promedio: formatCOP(stats.promedio),
      Minimo: formatCOP(stats.minimo),
      Maximo: formatCOP(stats.maximo),
      Registros: expenses.length,
    },
  ]);


  console.log("Totales por categoría (ordenados):");

  console.table(
    sortedByCat.map((c) => ({
      Categoria: c.categoria,
      Total: formatCOP(c.total),
    }))
  );


  console.log("Gasto más alto:");

  console.table([
    {
      Categoria: highest.categoria,
      Descripcion: highest.descripcion,
      Fecha: highest.fecha,
      Monto: formatCOP(highest.monto),
    },
  ]);


  console.log("Últimos gastos:");

  console.table(
    lastExpenses.map((e) => ({
      Fecha: e.fecha,
      Categoria: e.categoria,
      Descripcion: e.descripcion,
      Monto: formatCOP(e.monto),
    }))
  );

  console.groupEnd();
}


/* =====================================================
   EJECUCIÓN DEL PROGRAMA
   ===================================================== */

// Ejecuta todo el análisis
printReport(expenses);