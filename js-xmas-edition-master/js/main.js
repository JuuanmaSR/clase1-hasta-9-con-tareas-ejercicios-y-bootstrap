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
    const nombre = $form.nombre.value;
    const ciudad = $form.ciudad.value;
    const descripcionRegalo = $form[`descripcion-regalo`].value;


    const errorNombre = validarNombre(nombre);
    const errorCiudad = validarCiudad(ciudad);
    const errorDescripcionRegalo = validarDescripcionRegalo(descripcionRegalo);

    const errores = {
        nombre: errorNombre,
        ciudad: errorCiudad,
        descripcionRegalo: errorDescripcionRegalo

    }
    console.log(errores);

    manejarErrores(errores);

    event.preventDefault();
}

let nombreBox = document.querySelector(`.nombre`)
nombreBox.className = `error`;

function manejarErrores(errores) {
  
    errorNombre = errores.nombre; //nombre
    errorCiudad = errores.ciudad; //ciudad
    errorDescripcionRegalo = errores.descripcionRegalo; //descripcion regalo

    if (errorNombre) {
        $form.nombre.ClassName = "error";
    } else {
        $form.nombre.ClassName = "";
    };

    if (errorCiudad) {
        $form.ciudad.ClassName = "error";
    } else {
        $form.ciudad.ClassName = "";
    };

    if (errores.descripcionRegalo) {
        $form[`descripcion-regalo`].ClassName = "error";
    } else {
        $form[`descripcion-regalo`].ClassName = "";
    };
   
};

$form.onsubmit = validarFormulario;
