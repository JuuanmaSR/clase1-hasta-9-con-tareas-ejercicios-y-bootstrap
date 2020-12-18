///*** TAREA 2 CLASE 6 ***///
let indice = 0;
document.querySelector(`#agregar`).onclick = function (event) {

    agregarIntegrante(incrementarIndice());
    mostrarBotonCalcular();
    mostrarBotonResetear();
    event.preventDefault();
};
function incrementarIndice() {
    indice++;
    return indice;
};

document.querySelector(`#quitar`).onclick = function (event) {
    let cantidadDeIntegrantes = document.querySelectorAll(`.integrantes input`);
    if (cantidadDeIntegrantes.length === 1){
        ocultarBotonCalcular();
        ocultarBotonResetear();
        ocultarResultado();
        document.querySelector(`mostrar-errores`).className = `oculto`;
        
    };

    quitarIntegrante();


    event.preventDefault();
};

document.querySelector(`#calcular`).onclick = function (event) {
    let salariosAnuales = obtenerSalarios();
    
    validarFormularioDeSalariosAnuales();

    mostrarSalarios(`mayor`, calcularMayorSalarioAnual(salariosAnuales));
    mostrarSalarios(`menor`, calcularMenorSalarioAnual(salariosAnuales));
    mostrarSalarios(`promedio`, calcularPromedioSalarioAnual(salariosAnuales));
    mostrarSalarios(`promediomensual`, calcularPromedioSalarioMensual(salariosAnuales));
    //mostrarResultado();


    event.preventDefault();
};

document.querySelector(`#resetear`).onclick = function () {
    resetear();
}

function agregarIntegrante(indice) {
    const $div = document.createElement(`div`);
    $div.className = `integrantes`;

    const $label = document.createElement(`label`);
    $label.textContent = `Salario anual integrante # ${indice}`;
    //$label.className = `integrantes`;
    const $input = document.createElement(`input`);
    //$input.className = `integrantes`;
    

    $div.appendChild($label);
    $div.appendChild($input);


    const $integrantes = document.querySelector(`#integrantes`);
    $integrantes.appendChild($div)
};

function quitarIntegrante() {
    const $integrante = document.querySelectorAll(`.integrantes`)
    const listaIntegrantes = []
    for (let i = 0; i < $integrante.length; i++) {
        listaIntegrantes.push($integrante[i])
    };

    listaIntegrantes[listaIntegrantes.length - 1].remove();
    indice--;
};
function quitarIntegrantes() {
    const $integrantes = document.querySelectorAll(`.integrantes`);
    const listaDeIntegrantes = [];
    for (let i = 0; i < $integrantes.length; i++) {
        listaDeIntegrantes.push($integrantes[i])
    };

    for (let i = 0; i < listaDeIntegrantes.length; i++) {
        listaDeIntegrantes[i].remove();
    };
};

function obtenerSalarios() {
    let $integrantes = document.querySelectorAll(`.integrantes input`)
    let $salariosAnuales = []
    for (let i = 0; i < $integrantes.length; i++) {
        if ($integrantes[i].value === ``) {
            continue;
        }
        $salariosAnuales.push(Number($integrantes[i].value));
    };
    return $salariosAnuales;
};

function mostrarSalarios(tipo, valor) {
    document.querySelector(`#${tipo}-salario`).textContent = valor;
};



function mostrarBotonCalcular() {
    let $botonCalcular = document.querySelector(`#calcular`);
    $botonCalcular.className = `btn btn-outline-primary`;
};


function mostrarResultado() {
    let resultado = document.querySelector(`#analisis`);
    resultado.className = ``;
};


function mostrarBotonResetear() {
    let $botonResetear = document.querySelector(`#resetear`);
    $botonResetear.className = `btn btn-outline-primary`;
}


function ocultarResultado() {
    let resultado = document.querySelector(`#analisis`);
    resultado.className = `oculto`;
};


function ocultarBotonResetear() {
    let $botonResetear = document.querySelector(`#resetear`);
    $botonResetear.className = `oculto`
};


function ocultarBotonCalcular() {
    let $botonCalcular = document.querySelector(`#calcular`);
    $botonCalcular.className = `oculto`;
};

function resetear() {
    quitarIntegrantes();
    ocultarResultado()
    ocultarBotonResetear();
    ocultarBotonCalcular()
    indice = 0;
};
