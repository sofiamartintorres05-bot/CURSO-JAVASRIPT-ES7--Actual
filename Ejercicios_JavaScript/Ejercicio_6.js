// 6-  Filtrar estudiantes aprobados con filter 

const estudiantes = [
 { nombre: "Ana", nota: 4.5 },
 { nombre: "Luis", nota: 2.8 },
 { nombre: "Marta", nota: 3.7 },
 { nombre: "Carlos", nota: 2.5 }
];

const aprobados = estudiantes.filter(e => e.nota >= 3);

console.log(aprobados);