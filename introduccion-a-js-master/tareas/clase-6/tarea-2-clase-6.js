
let indice = 0;
document.querySelector(`#agregar`).onclick = function (event) {
    
    agregarIntegrante(incrementarIndice());
    mostrarBotonCalcular();
    event.preventDefault();
};
function incrementarIndice(){
    indice++;
    return indice;
};

document.querySelector(`#quitar`).onclick = function (event){
    quitarIntegrante();
    
    
    event.preventDefault();
};

document.querySelector(`#calcular`).onclick = function(event){
    let salariosAnuales = obtenerSalarios();
    mostrarSalarios(`mayor`,calcularMayorSalarioAnual(salariosAnuales));
    mostrarSalarios(`menor`,calcularMenorSalarioAnual(salariosAnuales));
    mostrarSalarios(`promedio`,calcularPromedioSalarioAnual(salariosAnuales));
    mostrarSalarios(`promediomensual`, calcularPromedioSalarioMensual(salariosAnuales));
    mostrarResultado();
    
    
    event.preventDefault();
}

function agregarIntegrante(indice) {
    const $div = document.createElement(`div`);
    $div.className = `integrantes`;

    const $label = document.createElement(`label`);
    $label.textContent = `Salario anual integrante # ${indice}`;
    //$label.className = `integrantes`;
    const $input = document.createElement(`input`);
    //$input.className = `integrantes`;
    $input.type = `number`;

    $div.appendChild($label);
    $div.appendChild($input);


    const $integrantes = document.querySelector(`#integrantes`);
    $integrantes.appendChild($div)
};

function quitarIntegrante(){
    const $integrante = document.querySelectorAll(`.integrantes`)
    const listaIntegrantes = []
    for(let i = 0; i<$integrante.length;i++){
        listaIntegrantes.push($integrante[i])
    };
    
    listaIntegrantes[listaIntegrantes.length-1].remove();
    indice--;
};

function obtenerSalarios(){
    let $integrantes = document.querySelectorAll(`.integrantes input`)
    let $salariosAnuales =[] 
    for(let i = 0;i<$integrantes.length;i++){
        $salariosAnuales.push(Number($integrantes[i].value));
    };
    return $salariosAnuales;
};

function mostrarSalarios(tipo,valor){
    document.querySelector(`#${tipo}-salario`).textContent = valor;
};

function mostrarBotonCalcular(){
    let $botonCalcular = document.querySelector(`#calcular`);
    $botonCalcular.className = ``;
}

function mostrarResultado(){
    let resultado = document.querySelector(`#analisis`);
    resultado.className = ``;
};

