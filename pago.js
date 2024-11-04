function procesarPago(event) {
    event.preventDefault(); // Evita el envío del formulario por defecto

    // Obtener los datos del formulario
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const direccion = document.getElementById('direccion').value;
    const tarjeta = document.getElementById('tarjeta').value;
    const mes = document.getElementById('mes').value;
    const anio = document.getElementById('anio').value;
    const cvv = document.getElementById('cvv').value;

    // Aquí se puede integrar una API de pago como Stripe o PayPal
    // Simulación de un proceso de pago exitoso
    alert(`Pago procesado exitosamente para ${nombre}.\nTe enviaremos la confirmación a ${email}.`);

    // Limpiar el carrito después del pago
    localStorage.removeItem('carrito');
    window.location.href = 'index.html'; // Redirigir al usuario a la página principal
}
