
let arrayDelistas = [];
let listas = document.querySelectorAll(`li`);
let promedioDelArray = 0;
let menorNumeroDelArray = 0;
let mayorNumeroDelArray = 0;
let numeroMasFrecuente = 0;
function introducirElementosAlArray() {

    for (let i = 0; i < listas.length; i++) {
        arrayDelistas.push(Number(listas[i].textContent))
    }

    console.log(
        arrayDelistas
    );
};
introducirElementosAlArray();

let $botonCalcular = document.querySelector(`#calcular`);
$botonCalcular.onclick = function (event) {
    calcularPromedio(arrayDelistas);
    calcularMenorNumero(arrayDelistas);
    calcularMayorNumero(arrayDelistas);
    calcularNumeroMasFrecuente(arrayDelistas);
    mostrarResultados(promedioDelArray,menorNumeroDelArray,mayorNumeroDelArray,numeroMasFrecuente);




    event.preventDefault();
}

function calcularMenorNumero(parametro) {
    let numeroMenorTemporal = parametro[0];

    for (let i = 0; i < parametro.length; i++) {

        if (parametro[i] < numeroMenorTemporal) {
            numeroMenorTemporal = parametroo[i];
        }
    }
    menorNumeroDelArray = numeroMenorTemporal;
};

function calcularMayorNumero(parametro) {
    let numeroMayorTemporal = parametro[0];

    for (let i = 0; i < parametro.length; i++) {
        if (parametro[i] > numeroMayorTemporal) {
            numeroMayorTemporal = parametro[i];
        };
    };
    mayorNumeroDelArray = numeroMayorTemporal;
};

function calcularNumeroMasFrecuente(parametro) {
    let numeroMasFrecuenteTemporal = 0;
    let contadorNumeroMasFrecuente = 0;

    for (let i = 0; i < parametro.length; i++) {
        let contadorTemporal = 0;
        for (let j = i + 1; j < parametro.length; j++) {
            if (parametro[i] === parametro[j]) {
                contadorTemporal++;
            }
            if (contadorTemporal > contadorNumeroMasFrecuente) {
                contadorNumeroMasFrecuente = contadorTemporal;
                numeroMasFrecuenteTemporal = parametro[i]
            }
        }
    }
    numeroMasFrecuente = numeroMasFrecuenteTemporal;


};


function calcularPromedio(parametro) {
    let sumaTotal = 0;
    for (let i = 0; i < parametro.length; i++) {
        sumaTotal += parametro[i];
    }
    promedioDelArray = sumaTotal / parametro.length;
    
};

function mostrarResultados(promedio, menorNumero, mayorNumero, numeroFrecuente) {

    document.querySelector(`#promedio`).textContent = `El promedio del array es: ${promedio}`;
    document.querySelector(`#numero-mas-pequeño`).textContent = `El numero mas prequeño es: ${menorNumero}`;
    document.querySelector(`#numero-mas-grande`).textContent = `El numero mas grande es: ${mayorNumero}`;
    document.querySelector(`#numero-mas-frecuente`).textContent = `El numero mas frecuente es: ${numeroFrecuente}`;
    document.querySelector(`#mostrar-resultado`).className = ``;
}