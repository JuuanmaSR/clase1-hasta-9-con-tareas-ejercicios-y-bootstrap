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

    manejarErrores(errores);


};


function manejarErrores(errores) {
    const keys = Object.keys(errores);

    keys.forEach(function (key) {
        const error = errores[key]
        if (error) {
            $formPrimerPaso[key].className = `error`;

        } else {
            $formPrimerPaso[key].className = ``;
        }

        console.log(errores[key]);
    });

};

