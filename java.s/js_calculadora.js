var operandoA;
var operandoB;
var operacion;

function init() {
    
    var resultado = document.getElementById('resultado');

    
    var reset = document.getElementById('reset');
    var suma = document.getElementById('mas');
    var resta = document.getElementById('menos');
    var multiplicacion = document.getElementById('multiplicacion');
    var division = document.getElementById('division');
    var igual = document.getElementById('igual');
    var uno = document.getElementById('uno');
    var dos = document.getElementById('dos');
    var tres = document.getElementById('tres');
    var cuatro = document.getElementById('cuatro');
    var cinco = document.getElementById('cinco');
    var seis = document.getElementById('seis');
    var siete = document.getElementById('siete');
    var ocho = document.getElementById('ocho');
    var nueve = document.getElementById('nueve');
    var cero = document.getElementById('cero');

    
    uno.onclick = function() { appendNumber("1"); };
    dos.onclick = function() { appendNumber("2"); };
    tres.onclick = function() { appendNumber("3"); };
    cuatro.onclick = function() { appendNumber("4"); };
    cinco.onclick = function() { appendNumber("5"); };
    seis.onclick = function() { appendNumber("6"); };
    siete.onclick = function() { appendNumber("7"); };
    ocho.onclick = function() { appendNumber("8"); };
    nueve.onclick = function() { appendNumber("9"); };
    cero.onclick = function() { appendNumber("0"); };

    
    reset.onclick = function() { resetear(); };
    suma.onclick = function() { setOperation("+"); };
    resta.onclick = function() { setOperation("-"); };
    multiplicacion.onclick = function() { setOperation("*"); };
    division.onclick = function() { setOperation("/"); };
    igual.onclick = function() { compute(); };

    function appendNumber(number) {
        resultado.textContent = resultado.textContent + number;
    }

    function setOperation(op) {
        if (resultado.textContent === "") return;
        operandoA = resultado.textContent;
        operacion = op;
        limpiar();
    }

    function limpiar() {
        resultado.textContent = "";
    }

    function resetear() {
        resultado.textContent = "";
        operandoA = null;
        operandoB = null;
        operacion = null;
    }

    function compute() {
        if (resultado.textContent === "") return;
        operandoB = resultado.textContent;
        let res;
        switch (operacion) {
            case "+":
                res = parseFloat(operandoA) + parseFloat(operandoB);
                break;
            case "-":
                res = parseFloat(operandoA) - parseFloat(operandoB);
                break;
            case "*":
                res = parseFloat(operandoA) * parseFloat(operandoB);
                break;
            case "/":
                res = parseFloat(operandoA) / parseFloat(operandoB);
                break;
            default:
                return;
        }
        resetear();
        resultado.textContent = res;
    }
}

// Initialize the calculator when the window loads
window.onload = init;
