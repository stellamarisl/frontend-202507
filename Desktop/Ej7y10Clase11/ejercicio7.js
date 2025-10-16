// Ejercicio 7: Calculadora simple
// Consigna: Crea un programa que le pida al usuario dos números y una operación matemática a realizar: suma, resta, multiplicación o división. Según la operación ingresada, el programa deberá calcular y mostrar el resultado. Si el usuario ingresa una operación inválida, el programa debe mostrar un mensaje de error. Usa switch para resolverlo.

let numero1 = parseInt(prompt("Ingrese un numero:"));
let numero2 = parseInt(prompt("Ingrese otro numero:"));
let operacion = prompt("Ingrese la operacion matematica a realizar (suma, resta, multiplicacion, division):");
let resultado;
switch (operacion) {
    case "suma":
        resultado = numero1 + numero2;
        alert("El resultado es: " + resultado);
        break;
    case "resta":
        resultado = numero1 - numero2;
        alert("El resultado es: " + resultado);
        break;
    case "multiplicacion":
        resultado = numero1 * numero2;
        alert("El resultado es: " + resultado);
        break;
    case "division":
        if (numero2 !== 0) {
            resultado = numero1 / numero2;
            alert("El resultado es: " + resultado);
        } else{
            alert("Error: No se puede realizar esta operacion");
        }
        break;
    default:
        alert("Operacion invalida");
       
}