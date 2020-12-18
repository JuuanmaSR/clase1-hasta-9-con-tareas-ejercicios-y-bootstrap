let acumuladorDeErroresNumerosNegativos = 0;
let acumuladorDeErroresSalarioMalFormulado = 0;
let acumuladorDeErroresSalariosVacios = 0;

function validarSalariosAnualesEnNegativos(acumuladorDeErroresNumerosNegativos) {
    if (acumuladorDeErroresNumerosNegativos != 0) {
        return `El campo salario anual no puede contener numeros negativos`
    };

    return ``;
};

function validarSalarioMalFormulados(acumuladorDeErroresSalarioMalFormulado) {
    if (acumuladorDeErroresSalarioMalFormulado != 0) {
        return `El campo salario anual esta mal formulado y solo puede contener numeros`
    };
    return ``;
};

function validarSalariosVacios(acumuladorDeErroresSalariosVacios) {
    if (acumuladorDeErroresSalariosVacios != 0) {
        return `El campo salario anual no puede estar vacio, pero puede ser cero`
    };
    return ``;
};



function manejarErrores() {
    const salariosAnuales = document.querySelectorAll(`.integrantes input`);
    let contadorDeErrores = 0;

    for (let i = 0; i < salariosAnuales.length; i++) {
        if (salariosAnuales[i].value === ``) {
            salariosAnuales[i].className = `error`;
            acumuladorDeErroresSalariosVacios++;
            contadorDeErrores++;
            continue;
        };
        if (salariosAnuales[i].value < 0) {
            salariosAnuales[i].className = `error`;
            acumuladorDeErroresNumerosNegativos++;
            contadorDeErrores++

            continue;
        } else {
            salariosAnuales[i].className = ``;
        };

        if (!/^[0-9\.]/.test((Number(salariosAnuales[i].value)))) {
            salariosAnuales[i].className = `error`
            acumuladorDeErroresSalarioMalFormulado++;
            contadorDeErrores++;
            continue;
        } else {
            salariosAnuales[i].className = ``;
        };

    };


    if (contadorDeErrores === 0) {
        mostrarResultado();
    } else {
        ocultarResultado();
    };




};

function mostrarErroresSalariosAnuales() {
    const erroresEnNumerosNegativos = validarSalariosAnualesEnNegativos(acumuladorDeErroresNumerosNegativos);
    const erroresEnMalFormulacion = validarSalarioMalFormulados(acumuladorDeErroresSalarioMalFormulado);
    const erroresEnSalariosVacios = validarSalariosVacios(acumuladorDeErroresSalariosVacios);

    const errores = {
        camposConErroresNegativos: erroresEnNumerosNegativos,
        camposConErroresDeMalFormulacion: erroresEnMalFormulacion,
        camposConErroresDeSalariosVacios: erroresEnSalariosVacios
    };

    const keys = Object.keys(errores);
    const mostrarErrores = document.querySelector(`#mostrar-errores`);

    keys.forEach(function (key) {
        const error = errores[key];
        if (error) {
            const $error = document.createElement(`li`);
            $error.className = ` p-3 mb-2 bg-danger text-white `;
            $error.innerText = error;

            mostrarErrores.appendChild($error);

        };
    });

};

function borrarErroresAcumulados() {
    acumuladorDeErroresSalariosVacios = 0;
    acumuladorDeErroresSalarioMalFormulado = 0;
    acumuladorDeErroresNumerosNegativos = 0;

    const $erroresAcumulados = document.querySelectorAll(`li`);
    $erroresAcumulados.forEach(function (error) {
        error.remove();
    });
};

function validarFormularioDeSalariosAnuales() {
    borrarErroresAcumulados();
    manejarErrores();
    mostrarErroresSalariosAnuales();

};
