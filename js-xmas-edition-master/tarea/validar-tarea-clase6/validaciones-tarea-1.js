const $formPrimerPaso = document.querySelector(`#ingreso-cantidad-integrantes`);




function validarCantidadIntegrantes($cantidadIntegrantes) {

    if ($cantidadIntegrantes === 0) {
        return `El campo cantidad de integrantes no puede valer cero`
    }

    if($cantidadIntegrantes < 0){
        return `El campo cantidad de integrantes no puede tener numeros negativos`
    };

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


    });

};

function borrarErroresAcumulados() {
    const $erroresAcumulados = document.querySelectorAll(`.errores-mostrados`);

    $erroresAcumulados.forEach(function (error) {
        error.remove();
    });
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const $formSegundoPaso = document.querySelector(`#calculador-de-edades-por-integrante`);

let acumuladorDeErroresCeros = 0;
let acumuladorDeErroresNumerosNegativos = 0;
let acumuladorDeErroresDecimales = 0;



function validarErroresEdadesEnCero(acumuladorDeErroresCeros) {
    if (acumuladorDeErroresCeros != 0) {
        return `Los campos edad integrante no pueden valer cero o estar vacios`
    };
    return ``;
};
function validarErroresEdadesEnNumerosNegativos(acumuladorDeErroresNumerosNegativos) {
    if (acumuladorDeErroresNumerosNegativos != 0) {
        return `Los campos edad integrante no pueden tener numeros negativos`
    };
    return ``;
};
function validarErroresEdadesEnDecimales(acumuladorDeErroresDecimales) {
    if (acumuladorDeErroresDecimales != 0) {
        return `Los campos edad integrantes no pueden tener decimales`
    };
    return ``;
}

function manejarErroresSegundoFormulario() {
    const edades = document.querySelectorAll(`.integrantes input`);
    let acumuladorDeErrores = 0;
   
    for (let i = 0; i < edades.length; i++) {
        if (edades[i].value == 0) {
            edades[i].className = `error`
            acumuladorDeErroresCeros++;
            continue;
        } else {
            edades[i].className = ``
        };
        if (edades[i].value < 0) {
            edades[i].className = `error`
            acumuladorDeErroresNumerosNegativos++;
        } else {
            edades[i].className = ``
        };
        if (!/^[0-9]+$/.test(edades[i].value)) {
            edades[i].className = `error`
            acumuladorDeErroresDecimales++;
        } else {
            edades[i].className = ``
        };
    };

}
function mostrarErroresSegundoFormulario() {

};
function validarSegundoFormulario() {

};
