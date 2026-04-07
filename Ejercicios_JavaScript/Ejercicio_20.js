// 20- Ejercicio integrador: filter + sort + map + reduce

const ventas = [
 { producto: "Mouse", cantidad: 3, precio: 50000 },
 { producto: "Teclado", cantidad: 2, precio: 120000 },
 { producto: "Monitor", cantidad: 1, precio: 800000 },
 { producto: "USB", cantidad: 5, precio: 30000 }
];

// filter: productos con cantidad mayor o igual a 2
const filtrados = ventas.filter(v => v.cantidad >= 2);

// sort: ordenar de mayor a menor según el precio
filtrados.sort((a, b) => b.precio - a.precio);

// map: crear frases con el total de cada producto
const frases = filtrados.map(v => 
  v.producto + " - Total: " + (v.cantidad * v.precio)
);

console.log(frases);

// reduce: calcular el total de todas las ventas
const totalVentas = ventas.reduce(
  (total, v) => total + (v.cantidad * v.precio),
  0
);

console.log("Total de ventas:", totalVentas);