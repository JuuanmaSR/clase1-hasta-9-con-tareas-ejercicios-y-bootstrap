let $buttonCalcular = document.querySelector(`#calcular-tiempo-total`).onclick = function (event) {
    const $inputHoras = document.querySelectorAll(`.horas-video`);
    const $inputMinutos = document.querySelectorAll(`.minutos-video`);
    const $inputSegundos = document.querySelectorAll(`.segundos-video`);
    let totalHoras = 0;
    let totalMinutos = 0;
    let totalSegundos = 0;
    let $mostrarResultado = document.querySelector(`#mostrar-resultado`);
    let $mostrarHoras = document.querySelector(`#resultado-horas`);
    let $mostrarMinutos = document.querySelector(`#resultado-minutos`);
    let $mostrarSegundos = document.querySelector(`#resultado-segundos`);

    function calcularTiempo() {
        for (let i = 0; i < $inputHoras.length; i++) {

            totalHoras += Number($inputHoras[i].value);
        }

        for (let i = 0; i < $inputMinutos.length; i++) {
            totalMinutos += Number($inputMinutos[i].value);
        }

        for (let i = 0; i < $inputSegundos.length; i++) {
            totalSegundos += Number($inputSegundos[i].value);
        }

    }
    calcularTiempo();

    function calcularTiempoTotal() {
        while (totalSegundos >= 60) {
            totalMinutos += 1;
            totalSegundos -= 60;
        }

        while (totalMinutos >= 60) {
            totalHoras += 1;
            totalMinutos -= 60;
        };
    };
    calcularTiempoTotal();

    function mostrarResultado() {
        $mostrarResultado.className = ``;
        $mostrarHoras.textContent = (`Horas: ${totalHoras}`);
        $mostrarMinutos.textContent = (`Minutos: ${totalMinutos}`);
        $mostrarSegundos.textContent = (`Segundos: ${totalSegundos}`);
    };
    mostrarResultado();

    console.log(totalHoras);
    console.log(totalMinutos);
    console.log(totalSegundos);


    event.preventDefault();
};





