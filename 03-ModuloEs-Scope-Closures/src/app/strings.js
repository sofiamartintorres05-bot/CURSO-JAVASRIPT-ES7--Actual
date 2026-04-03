// funcion toNonEmptyString , valida que un string no este vacio

function toNonEmptyString(value, label = 'texto') {
  const str = String(value).trim(); // Convertir a string y eliminar espacios

  if (!str) {
    throw new Error(`El ${label} no puede estar vacío`);
  }

  return str;
}


// funcion titleCase, funcion que permite convertir un string a titulo

export function titleCase(text) {  // "hola mundo" -> "Hola Mundo"
  text = toNonEmptyString(text);

  return text.toLowerCase() // Convertir a minúsculas
    .split(' ') // Dividir en palabras
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Primera letra mayúscula
    .join(' '); // Unir palabras
}


// funcion slugify, convierte un string a formato URL

export function slugify(text) {
  text = toNonEmptyString(text);

  return text.toLowerCase()
    .trim()
    .replace(/\s+/g, '-') // espacios → guiones
    .replace(/[^\w-]+/g, ''); // eliminar caracteres raros
}