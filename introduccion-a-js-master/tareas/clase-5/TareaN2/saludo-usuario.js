console.log(`Estoy funcionando!`);
function tareaN2() {



    let $botonMostrarDatos = document.querySelector(`#mostrar-datos`).onclick = function (event) {

        let nombreUsuario = document.querySelector(`#nombre-usuario`).value;
        let segundoNombreUsuario = document.querySelector(`#segundo-nombre-usuario`).value;
        let apellidoUsuario = document.querySelector(`#apellido-usuario`).value;
        let edadUsuario = Number(document.querySelector(`#edad-usuario`).value);
        let mostrarDatos = document.querySelector(`#resultado`);
        let miTitulo = document.querySelector(`#titulo-bienvenido`);

        mostrarDatos.innerText = (`Tu nombre es:  ${nombreUsuario} 
         tu segundo nombre es: ${segundoNombreUsuario} 
          tu apellido es: ${apellidoUsuario}
          tu edad es: ${edadUsuario} `);
        miTitulo.textContent = (`Bienvenido ${nombreUsuario} !`);





        event.preventDefault();

    };



};
tareaN2();