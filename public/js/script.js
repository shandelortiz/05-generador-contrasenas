// Seleccionamos los elementos del DOM
const passwordField = document.getElementById('password');
const lengthInput = document.getElementById('length');
const includeUpper = document.getElementById('includeUpper');
const includeLower = document.getElementById('includeLower');
const includeNumbers = document.getElementById('includeNumbers');
const includeSymbols = document.getElementById('includeSymbols');
const generateBtn = document.getElementById('generateBtn');
const copyBtn = document.getElementById('copyBtn');

// Definimos los caracteres posibles para cada tipo
const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
const numberChars = '0123456789';
const symbolsChars = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

function generatePassword() {
    const length = parseInt(lengthInput.value); // Obtenemos la longitud deseada

    let chars  = ''; // Esta sera nuestra "bolsa" de caracteres permitidos

    // Verificamos que opciones activo el usuario y las agregamos a la bolsa
    if (includeUpper.checked) chars += upperChars;
    if (includeLower.checked) chars += lowerChars;
    if (includeNumbers.checked) chars += numberChars;
    if (includeSymbols.checked) chars += symbolsChars;

    // Si no se selecciono nada, mostramos una alerta y salimos
    if (chars.length === 0) {
        alert('Selecciona al menos una opcion de caracteres');
        return;
    }

    let password = '';

    // Generamos la contrasena caracter por caracter
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }

    // Mostramos la contrasena
    passwordField.value = password;
}

// Evento para generar contrasena al hacer clic
generateBtn.addEventListener('click', generatePassword);

// Evento para copiar la contrasena al portapapeles
copyBtn.addEventListener('click', () => {
    const password = passwordField.value;

    // Verificamos si hay algo para copiar
    if (!password) {
        alert('No hya ninguna contraña para copiar!');
        
        return;
    }

    // Copiamos al portapapelers usando la API del navegador
    navigator.clipboard.writeText(password)
        .then(() => {
            alert('¡Contraseña copiada al portapapeles!');
        })
        .catch(() => {
            alert('¡Hubo en eror al copiar la contraseña!');
        });
});