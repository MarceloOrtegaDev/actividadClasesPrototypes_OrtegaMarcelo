String.prototype.concatenarPalabra = function(palabra) {
    return `${this} ${palabra}`;
};

const saludar = "hola";
const resultado = saludar.concatenarPalabra("jaja");

console.log(resultado);  
console.log(saludar);
