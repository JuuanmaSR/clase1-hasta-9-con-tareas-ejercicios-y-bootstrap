let acumuladorDeErroresNumerosNegativos = 0;
let acumuladorDeErroresSalarioMalFormulado = 0;
function validarSalariosAnualesEnNegativos(acumuladorDeErroresNumerosNegativos) {
    if (acumuladorDeErroresNumerosNegativos != 0) {
        return `El campo salario anual no puede contener numeros negativos`
    };

    return ``;
};

function validarSalarioMalFormulados(acumuladorDeErroresSalarioMalFormulado) {
    if(acumuladorDeErroresSalarioMalFormulado != 0){
        return `El campo salario anual esta mal formulado y solo puede contener numeros`
    };
    return ``;
};



function manejarErrores() {
    const salariosAnuales = document.querySelectorAll(`.integrantes input`);
    let contadorDeErrores = 0;

    for (let i = 0; i < salariosAnuales.length; i++) {
        if (salariosAnuales[i].value < 0) {
            salariosAnuales[i].className = `error`;
            acumuladorDeErroresNumerosNegativos++;
            contadorDeErrores++

            continue;
        } else {
            salariosAnuales[i].className = ``;
        };

        if(!/^[0-9\.]/.test((Number(salariosAnuales[i].value)))){
            salariosAnuales[i].className = `error`
            acumuladorDeErroresSalarioMalFormulado++;
            contadorDeErrores++;
            continue;
        }else{
            salariosAnuales[i].className = ``;
        };

    };


};

function mostrarErroresSalariosAnuales() {
    const erroresEnNumerosNegativos = validarSalariosAnualesEnNegativos(acumuladorDeErroresNumerosNegativos);
    const erroresEnMalFormulacion = validarSalarioMalFormulados(acumuladorDeErroresSalarioMalFormulado);
    const errores = {
        camposConErroresNegativos: erroresEnNumerosNegativos,
        camposConErroresDeMalFormulacion: erroresEnMalFormulacion
    };

    const keys = Object.keys(errores);
    const mostrarErrores = document.querySelector(`#mostrar-errores`);

    keys.forEach(function (key) {
        const error = errores[key];
        if (error) {
            const $error = document.createElement(`li`);
            $error.className = `errores-mostrados`;
            $error.innerText = error;

            mostrarErrores.appendChild($error);

        };
    });

};


