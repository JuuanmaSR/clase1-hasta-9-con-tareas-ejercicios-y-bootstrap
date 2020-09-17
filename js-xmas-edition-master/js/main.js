const $form = document.querySelector(`#carta-a-santa`);
const nombre = $form.nombre.value;
const ciudad = $form.ciudad.value;
const comportamiento = $form.comportamiento.value;
const descripcionRegalo = $form["descripcion-regalo"].value;
console.log(nombre);
console.log(ciudad);
console.log(comportamiento);
console.log(descripcionRegalo);


function validarNombre(nombre) {
    if (nombre.length === 0) {
        return "Este campo debe tener al menos 1 caracter"

    }
    if (nombre.length >= 50) {
        return "Este campo debe tener menos de 50 caracteres"
    };

    if (!/^[A-z]+$/i.test(nombre)) {
        return `El campo nombre solo acepta letras`
    } else {
        return ``;
    }


};


function validarCiudad(ciudad) {
    if (ciudad.length === 0) {
        return `El campo ciudad no debe estar vacio`
    } else {
        return ``;
    }

};


function validarDescripcionRegalo(descripcionRegalo) {
    if (descripcionRegalo.length === 0) {
        return `El campo descripcion regalo debe tener al menos 1 caracter`;
    };
    if (descripcionRegalo.length >= 100) {
        return `El campo descripcion regalo debe tener menos de 100 caracteres`;
    };


    if (!/^[A-z0-9 ]+$/i.test(descripcionRegalo)) {
        return `El campo descripcion solo puede contener letras y numeros `
    } else {
        return ``;
    };
};


function validarFormulario(event) {
    const $form = document.querySelector(`#carta-a-santa`);
   
    const ciudad = $form.ciudad.value;
    const comportamiento = $form.comportamiento.value;
    const descripcionRegalo = $form[`descripcion-regalo`].value;


    const errorNombre = validarNombre($form.nombre.value);
    const errorCiudad = validarCiudad(ciudad);
    manejarErrores([errorNombre, errorCiudad]);

    event.preventDefault();
}


function manejarErrores(errores) {
    errorNombre = errores[0]; //nombre
    errorCiudad = errores[1]; //ciudad
    if (errorNombre) {
        $form.nombre.ClassName = `error`;
    } else {
        $form.nombre.ClassName = ``;
    };

};

$form.onsubmit = validarFormulario;
