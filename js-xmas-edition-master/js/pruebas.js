
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

    console.assert(
        validarNombre(`123456`) === `El campo nombre solo debe tener letras`,
        `Validar nombre no funciono con un string de numeros`
    );
   
};
probarValidarNombre();

function probarValidarCiudad(){
    console.assert(
        validarCiudad(``) === 
        `El campo ciudad debe tener al menos un elemento seleccionado`,
        `Validar ciudad no funciono con un campo vacio`
    );
    console.assert(
        validarCiudad(`Buenos Aires`) === 
        ``,
        `Validar ciudad no funciono con un string correcto`
    );

};
probarValidarCiudad();

function probarValidarDescripcionRegalo(){
    console.assert(
        validarDescripcionRegalo(``) ===
        `El campo descripcion regalo no debe estar vacio`,
        `Validar descripcion regalo no funciono con un string vacio `
    );

    console.assert(
        validarDescripcionRegalo(`aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaa`) ===
        `El campo descripcion regalo debe tener menos de 100 caracteres`,
        `Validar descripcion regalo no funciono con un string mayor a 100 caracteres`
    );

    console.assert(
        validarDescripcionRegalo(`Quiero un auto de juguete`) ===
        ``,
        `Validar descripcion regalo no funciono con un string correcto`
    );

    console.assert(
        validarDescripcionRegalo(`!&%&/()=?%&()=`) === `El campo descripcion regalo solo debe tener letras y numeros y comas`,
        `Validar descripcion regalo no funciono con un string incorrecto de simbolos`
    );

};
probarValidarDescripcionRegalo();


