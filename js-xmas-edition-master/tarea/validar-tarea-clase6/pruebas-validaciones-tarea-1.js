function probarValidarCantidadDeIntegrantes(){
    console.assert(
        validarCantidadIntegrantes(2) === ``,
        `Validar cantidad de integrantes no funciono con un valor correcto`
    );

    console.assert(
        validarCantidadIntegrantes(0) === `El campo cantidad de integrantes no puede valer cero`,
        `Validar cantidad de integrantes no funciono con un valor cero`
    );

 console.assert(
        validarCantidadIntegrantes(0.5) === `El campo cantidad de integrantes no puede tener decimales`,
        `Validar cantidad de integrantes no funciono con un valor con decimales`
    );
};
probarValidarCantidadDeIntegrantes();

function probarValidarIntegrante(){

};
