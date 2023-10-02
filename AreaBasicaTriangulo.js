//Código de fundamentos de probabilidad y estadística

//declarando una funcion
function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

//declarando variables
let base = prompt("Introduce la base del triángulo:");
let altura = prompt("Introduce la altura del triángulo:");
let area = areaTriangulo(base, altura);

//mostrando resultado
console.log(`El área del triángulo es: ${area}`);