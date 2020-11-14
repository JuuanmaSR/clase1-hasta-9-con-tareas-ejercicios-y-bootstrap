
function probarValidarNombre() {
    console.assert(
        validarNombre(``) ===
         `El campo nombre debe tener al menos 1 caracter`,
        `Validar nombre no funciono con un string vacio`
    );

    console.assert(
        validarNombre(`asdasdasdasdasdasdasdasdasdasdasdasdasdsaaaaaaaaaaa`) ===
        `El campo nombre debe tener menos de 50 caracteres`,
        `Validar nombre no funciono con un string mayor a 50 caracteres`
    );

    console.assert(
        validarNombre(`Fabricio`) ===
         ``,
        `Validar nombre no funciono con un string correcto`
    );

   
};
probarValidarNombre();

function probarValidarCiudad(){

};

function probarValidarDescripcionRegalo(){

};



