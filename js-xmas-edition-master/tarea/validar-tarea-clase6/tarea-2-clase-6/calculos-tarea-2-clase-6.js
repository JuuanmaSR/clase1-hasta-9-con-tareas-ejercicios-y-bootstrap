function calcularMayorSalarioAnual(salarios) {
    let salario = salarios[0];
    for (let i = 1; i < salarios.length; i++) {
        if (salarios[i] > salario) {
            salario = salarios[i]
        };
    };
    return salario;
}
function calcularMenorSalarioAnual(salarios) {
    let salario = salarios[0];
    for (let i = 0; i < salarios.length; i++) {
        if (salarios[i] < salario) {
            salario = salarios[i]
        };
    };
    return salario;
};

function calcularPromedioSalarioAnual(salarios) {
    let sumaTotal = 0;
    
    for (let i = 0; i < salarios.length; i++) {
        sumaTotal += salarios[i]
    };
    return (sumaTotal / salarios.length);
};

function calcularPromedioSalarioMensual(salarios) {
    let salarioMensual = [];
    let promedioSalario = 0;
    for (let i = 0; i < salarios.length; i++) {
        salarioMensual.push(salarios[i] / 12)
    };
    for(let i = 0; i<salarioMensual.length;i++){
        promedioSalario += salarioMensual[i]
    };
    return (promedioSalario/salarioMensual.length)
};
