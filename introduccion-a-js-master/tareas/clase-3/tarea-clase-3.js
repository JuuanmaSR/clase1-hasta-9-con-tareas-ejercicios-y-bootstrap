// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!
let nombreUsuario = (prompt(`Cual es tu nombre?`) || ``).toLowerCase().trim();
const MI_NOMBRE = `juan maria`;
const NOMBRE_DE_MI_MAMA = `zulma`;

function comprobarNombreUsuario(nombreUsuario) {
    if (nombreUsuario === MI_NOMBRE) {
        console.log(
            `Hola, Tocayo! Yo tambien me llamo ${nombreUsuario}`
        );
    } else if (nombreUsuario === NOMBRE_DE_MI_MAMA) {
        console.log(`Hola ${nombreUsuario} te llamas igual que mi mama! `);
    } else {
        console.log(
            `Hola ${nombreUsuario}`
        );
    };
};
comprobarNombreUsuario(nombreUsuario);



//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.




function comprobarMismaEdad() {
    const MI_EDAD = Number(22);
    let edadUsuario = Number(prompt(`Cual es tu edad ?`));

    if (edadUsuario === 0) {
        console.log(
            `No ingreso ningun caracter!`
        );
    } else if (edadUsuario > MI_EDAD) {
        console.log(
            `Hola tu edad es mayor a la mia!`
        );
    } else if (edadUsuario < MI_EDAD) {
        console.log(
            `Hola tu edad es menor a la mia!`
        );
    } else if (edadUsuario === MI_EDAD) {
        console.log(
            `Hola tu edad es igual a la mia!`
        );
    } else {
        console.log(
            ` No comprendo el valor ingresado`
        );
        return comprobarMismaEdad();
    };

};
comprobarMismaEdad();


//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.




function validarIngresoAlBar() {
    let usuarioTieneDocumento = (prompt(`Ingrese si tiene o no documento`, `si,no`) || ``).toLowerCase().trim();

    if (usuarioTieneDocumento === `si`) {
        return validarEdadUsuario();
    } else if (usuarioTieneDocumento === `no`) {
        console.log(
            `Si no tiene documento no puede ingresar al bar!`
        )
    } else {
        console.log(
            `La repuesta ingresada no es valida!`
        );
        return validarIngresoAlBar()
    };


    function validarEdadUsuario() {
        let edadUsuarioIngresante = Number(prompt(`Ingrese su edad`));

        if (edadUsuarioIngresante < 18) {
            console.log(
                `Si es menor de 18 años no puede ingresar al bar`
            );
        } else if (edadUsuarioIngresante >= 18) {
            console.log(
                `Puede ingresar al bar!`
            );
        } else {
            console.log(
                `La respuesta ingresada no es valida!`
            );
            return validarEdadUsuario();
        };
    }
};
validarIngresoAlBar();






