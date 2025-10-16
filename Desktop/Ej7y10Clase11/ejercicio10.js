// Ejercicio 10: Adivina el número
// Consigna: Crea un programa donde la computadora seleccione un número al azar entre 1
// y 10. Luego, pide al usuario que adivine el número hasta 3 intentos. Si el usuario acierta en cualquiera de los intentos, muestra un mensaje de felicitación y detén los intentos restantes. Si no acierta después de los 3 intentos, muestra el número secreto. Usa un for para resolver este ejercicio
let numeroAzar = Math.floor(Math.random() * 10);
console.log(numeroAzar);
let numeroUsuario = (parseInt(prompt("Adivine el numero entre 1 y 10, tiene 3 intentos: ")));
while (numeroUsuario  !== numeroAzar){
    if(numeroAzar > numeroUsuario){
        alert("El numero es mayor");
    } else{
        alert("El numero es menor");
    }
    numeroUsuario = (parseInt(prompt("Ingrese otro numero")));
    if(numeroUsuario === numeroAzar){
        alert("Adivinaste 🍀")
    }
    }

