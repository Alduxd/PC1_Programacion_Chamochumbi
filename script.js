function convertir() {
    const monedaEnvio = document.getElementById('monedaEnvio').value;
    const monto = parseFloat(document.getElementById('monto').value);

    let conversion = monto;

    if (monedaEnvio === 'dolares') {
        conversion = monto / 3.8; // Ejemplo de tasa de conversión
    } else if (monedaEnvio === 'reales') {
        conversion = monto / 1.2; // Ejemplo de tasa de conversión
    }

    alert(`Monto convertido: ${conversion.toFixed(2)} ${monedaEnvio}`);
}

const form1Data = {};
const form2Data = {};

// Maneja el primer formulario
document.getElementById('form1')?.addEventListener('submit', (e) => {
    e.preventDefault();

    form1Data.monedaEnvio = document.getElementById('monedaEnvio').value;
    form1Data.monedaRecibo = document.getElementById('monedaRecibo').value;
    form1Data.paisOrigen = document.getElementById('paisOrigen').value;
    form1Data.paisDestino = document.getElementById('paisDestino').value;
    form1Data.monto = document.getElementById('monto').value;

    localStorage.setItem('form1Data', JSON.stringify(form1Data));
    window.location.href = 'form2.html';
});

// Maneja el segundo formulario
document.getElementById('form2')?.addEventListener('submit', (e) => {
    e.preventDefault();

    form2Data.nombre = document.getElementById('nombre').value;
    form2Data.segundoNombre = document.getElementById('segundoNombre').value;
    form2Data.apellido = document.getElementById('apellido').value;
    form2Data.segundoApellido = document.getElementById('segundoApellido').value;
    form2Data.dni = document.getElementById('dni').value;
    form2Data.fechaActual = document.getElementById('fechaActual').value;

    localStorage.setItem('form2Data', JSON.stringify(form2Data));
    window.location.href = 'resultados.html';
});

// Muestra los datos en la página de resultados
if (window.location.href.includes('resultados.html')) {
    const form1StoredData = JSON.parse(localStorage.getItem('form1Data'));
    const form2StoredData = JSON.parse(localStorage.getItem('form2Data'));

    const datosFormulario1 = document.getElementById('datosFormulario1');
    const datosFormulario2 = document.getElementById('datosFormulario2');

    datosFormulario1.innerHTML = `
        Moneda a enviar: ${form1StoredData.monedaEnvio}<br>
        Moneda a recibir: ${form1StoredData.monedaRecibo}<br>
        País de origen: ${form1StoredData.paisOrigen}<br>
        País de destino: ${form1StoredData.paisDestino}<br>
        Monto: ${form1StoredData.monto}
    `;

    datosFormulario2.innerHTML = `
        Nombre: ${form2StoredData.nombre} ${form2StoredData.segundoNombre || ''}<br>
        Apellido: ${form2StoredData.apellido} ${form2StoredData.segundoApellido || ''}<br>
        DNI: ${form2StoredData.dni}<br>
        Fecha actual: ${form2StoredData.fechaActual}
    `;
}

function finalizar() {
    alert('Gracias por usar el servicio. ¡Proceso completado!');
    localStorage.clear();
}
