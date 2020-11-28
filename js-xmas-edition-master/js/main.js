const $form = document.querySelector(`#carta-a-santa`);
const nombre = $form.nombre.value;
const ciudad = $form.ciudad.value;
const comportamiento = $form.comportamiento.value;
const descripcionRegalo = $form[`descripcion-regalo`].value;



function validarNombre(nombre) {
    if (nombre.length === 0) {
        return `El campo nombre debe tener al menos 1 caracter`;
    };

    if (nombre.length >= 50) {
        return `El campo nombre debe tener menos de 50 caracteres`;
    };

    if (!/^[a-z ]+$/i.test(nombre)) {
        return `El campo nombre solo debe tener letras`;
    };

    return ``;
};

function validarCiudad(ciudad) {
    if (ciudad.length === 0) {
        return `El campo ciudad debe tener al menos un elemento seleccionado`;
    } else {
        return ``;
    };
};

function validarDescripcionRegalo(descripcionRegalo) {
    if (descripcionRegalo.length === 0) {
        return `El campo descripcion regalo no debe estar vacio`;
    };

    if (descripcionRegalo.length >= 100) {
        return `El campo descripcion regalo debe tener menos de 100 caracteres`;
    };

    if (!/^[a-z0-9, ]+$/i.test(descripcionRegalo)) {
        return `El campo descripcion regalo solo debe tener letras y numeros y comas`;
    };

    return ``
};

function validarFormulario(event) {
    const $form = document.querySelector(`#carta-a-santa`);

    const nombre = $form.nombre.value;
    const ciudad = $form.ciudad.value;
    const descripcionRegalo = $form["descripcion-regalo"].value;

    const errorNombre = validarNombre(nombre);
    const errorCiudad = validarCiudad(ciudad);
    const errorDescripcionRegalo = validarDescripcionRegalo(descripcionRegalo);

    const errores = {
        nombre: errorNombre,
        ciudad: errorCiudad,
        "descripcion-regalo": errorDescripcionRegalo
    };
    borrarErroresAcumulados();

    const esExito = manejarErrores(errores) === 0 ;
    if(esExito){
        $form.className = `oculto`;
        document.querySelector(`#exito`).className = ``;
        setTimeout(redireccionarAlistaDeDeseos,4000);
    };

    event.preventDefault();
};

function manejarErrores(errores) {

    const keys = Object.keys(errores)
    const $errores = document.querySelector(`#errores`);
    let contadorDeErrores = 0;

    keys.forEach(function (key) {

        const error = errores[key];
        if (error) {
            contadorDeErrores++;
            const $error = document.createElement(`li`);
            $error.className = `errores-mostrados`;
            $error.innerText = error;
            $errores.appendChild($error);


            $form[key].className = `error`;
        } else {
            $form[key].className = ``;
        }

    });


    return contadorDeErrores;
};
function borrarErroresAcumulados() {
    const $errores = document.querySelectorAll(`.errores-mostrados`);
    $errores.forEach(function (error) {
        error.remove();
    });
};
$form.onsubmit = validarFormulario;

function redireccionarAlistaDeDeseos(){

    window.location.href = `wishlist.html`;
};