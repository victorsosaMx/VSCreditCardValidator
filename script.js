function validarTarjeta() {
    let numero = document.getElementById('numeroTarjeta').value;
    numero = numero.replace(/\s/g, '');
    
    if (!/^\d+$/.test(numero)) {
        mostrarResultado("Por favor, ingrese solo números.");
        return;
    }

    if (esValido(numero)) {
        mostrarResultado("El número de tarjeta es potencialmente válido.");
    } else {
        mostrarResultado("El número de tarjeta no es válido.");
    }
}

function esValido(numero) {
    let suma = 0;
    let doble = false;
    for (let i = numero.length - 1; i >= 0; i--) {
        let digito = parseInt(numero.charAt(i), 10);
        if (doble) {
            if ((digito *= 2) > 9) digito -= 9;
        }
        suma += digito;
        doble = !doble;
    }
    return (suma % 10) == 0;
}

function mostrarResultado(mensaje) {
    document.getElementById('resultado').textContent = mensaje;
}