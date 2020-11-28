const $form = document.querySelector(`#calculador-de-edades-por-integrante`);
const $cantidadIntegrantes = $form[`cantidad-integrantes`].value;




function validarCantidadIntegrantes($cantidadIntegrantes) {
    if ($cantidadIntegrantes === 0) {
        return `El campo cantidad de integrantes no puede estar vacio`
    };

    if (!/^[0-9]+$/.test($cantidadIntegrantes)) {
        return `El campo cantidad de integrantes no puede tener decimales`
    };

    return ``;

};


