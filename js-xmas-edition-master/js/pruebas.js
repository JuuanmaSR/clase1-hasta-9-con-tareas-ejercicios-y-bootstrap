
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




/*
function probarValidarNombre() {
    console.assert(
        validarNombre('') === 'Este campo debe tener al menos 1 caracter',
        'Validar nombre no validó que el nombre no sea vacío',
    );

    console.assert(
        validarNombre(
            '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
        'Este campo debe tener menos de 50 caracteres',
        'Validar nombre no validó que el nombre sea menor a 50 caracteres',
    );
    console.assert(validarNombre(`Fabricio`) === ``,
        `Validar nombre no funciono con un string correcto`
    );

    console.assert(validarNombre(`21312312,.,.,`) === `El campo nombre solo acepta letras`,
        `Validar nombre no funciono con un string de numeros`
    );


};

function probarValidarCiudad() {
    console.assert(validarCiudad(``) === `El campo ciudad no debe estar vacio`,
        `Validar ciudad no funciono con un string vacio`

    ); 

    console.assert(validarCiudad(`Buenos Aires`) === ``,
        `Validar ciudad no funciono con un string correcto`

    );



};

function probarValidarDescripcionRegalo() {
    console.assert(validarDescripcionRegalo(``) === `El campo descripcion regalo debe tener al menos 1 caracter`,
        `Validar descripcion regalo no funciono con un string vacio`
    );

    console.assert(validarDescripcionRegalo(`asdasdasdaaaasdasdasdasdasdasadasasdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa`) === `El campo descripcion regalo debe tener menos de 100 caracteres`,
        `Validar descrpcion regalo fallo con un string mayor a 100 caracteres`

    );

    console.assert(validarDescripcionRegalo(`Quiero una juege`) === ``,
        `Validar descripcion regalo no funciono con un string correcto`
    );

    console.assert(validarDescripcionRegalo(`.,.,.,.,.`) === `El campo descripcion solo puede contener letras y numeros `,
        `Validar descripcion regalo no funciono con un string de caracteres extraños`
    );
    console.assert(
        validarNombre('') === 'Este campo debe tener al menos 1 caracter',
        'Validar nombre no validó que el nombre no sea vacío',
    );

    console.assert(
        validarNombre(
            '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
        'Este campo debe tener menos de 50 caracteres',
        'Validar nombre no validó que el nombre sea menor a 50 caracteres',
    );
  }
  probarValidarCiudad();

  probarValidarNombre();
  probarValidarDescripcionRegalo();

*/
