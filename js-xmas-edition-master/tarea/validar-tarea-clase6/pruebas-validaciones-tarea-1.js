function probarValidarCantidadDeIntegrantes(){
    console.assert(
           validarCantidadIntegrantes(0) === `El campo cantidad de integrantes no puede estar vacio`,
           `Validar cantidad de integrantes no funciono con un valor vacio` 
    );

    console.assert(
        validarCantidadIntegrantes(0.5) === `El campo cantidad de integrantes no puede tener decimales`,
        `Validar cantidad de integrantes no funciono con un valor con decimales`
    );
};
probarValidarCantidadDeIntegrantes();

function probarValidarIntegrante(){

};
