// 18- Sumar números hasta llegar a 100 con while 

let suma = 0;      
let numero = 1;    
let contador = 0;  

while (suma < 100) { 
  console.log("Sumando: " + numero); 

  suma += numero; 
  contador++;    
  numero++;       
}

console.log("Suma final:", suma);
console.log("Cantidad de números usados:", contador);