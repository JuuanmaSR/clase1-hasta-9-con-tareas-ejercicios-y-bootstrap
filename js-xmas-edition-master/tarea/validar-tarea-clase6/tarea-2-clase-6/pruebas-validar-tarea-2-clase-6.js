function probarValidarSalariosAnualesEnNegativos() {
    console.assert(
        validarSalariosAnualesEnNegativos(0) === ``,
        `Validar salarios anuales no funciono sin errores de numeros negativos`
    );
    console.assert(
        validarSalariosAnualesEnNegativos(1) === `El campo salario anual no puede contener numeros negativos`,
        `Validar salarios anuales no funciono con un error de numero negativo`
    );

};

function probarValidarSalarioAnualMalFormulado(){
    console.assert(
        validarSalarioMalFormulados(0)=== ``,
        `Validar salarios anuales no funciono sin errores en errores mal formulados`
    );

    console.assert(
        validarSalarioMalFormulados(1) === `El campo salario anual esta mal formulado y solo puede contener numeros`,
        `Validar salarios anaules no funciono con errrores en errores mal formulados`
    );
};
probarValidarSalarioAnualMalFormulado();
probarValidarSalariosAnualesEnNegativos();

