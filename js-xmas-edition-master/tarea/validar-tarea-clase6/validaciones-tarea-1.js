const $formPrimerPaso = document.querySelector(`#ingreso-cantidad-integrantes`);




function validarCantidadIntegrantes($cantidadIntegrantes) {

    if ($cantidadIntegrantes === 0) {
        return `El campo cantidad de integrantes no puede valer cero`
    }

    if (!/^[0-9]+$/.test($cantidadIntegrantes)) {
        return `El campo cantidad de integrantes no puede tener decimales`
    };
    return ``;

};

function validarPrimerFormulario() {
    let $cantidadIntegrantes = $formPrimerPaso[`cantidad-integrantes`].value;
    let cantidadIntegrantes = Number($cantidadIntegrantes);

    const errorCantidadIntegrantes = validarCantidadIntegrantes(cantidadIntegrantes);

    const errores = {
        "cantidad-integrantes": errorCantidadIntegrantes
    };
    borrarErroresAcumulados();
    manejarErrores(errores);


};


function manejarErrores(errores) {
    const keys = Object.keys(errores);
    const $errores = document.querySelector(`#errores-mostrados`);

    keys.forEach(function (key) {
        const error = errores[key]
        if (error) {
            let $error = document.createElement(`li`);
            $error.className = `errores-mostrados`;
            $error.innerText = error;
            $errores.appendChild($error);

            $formPrimerPaso[key].className = `error`;

        } else {
            $formPrimerPaso[key].className = ``;
        }

        console.log(errores[key]);
    });

};

function borrarErroresAcumulados(){
    const $erroresAcumulados = document.querySelectorAll(`.errores-mostrados`);

    $erroresAcumulados.forEach(function(error){
        error.remove();
    });
};


const $formSegundoPaso = document.querySelector(`#calculador-de-edades-por-integrante`);

function validarEdadesIntegrantes($edadDeIntegrantes){

};

function validarSegundoFormulario(){

};
