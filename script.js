function configurar() {
    codigoMorse = new Array(" ",".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",
                            ".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--..","-----",".----","..---","...--","....-",".....","-....","--...","---..","----.");

    alfabeto = new Array(" ","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9");
}

function validarTextoEntrada(texto) {
    const regex = /^[A-Za-z0-9\s]+$/;
    return regex.test(texto);
}

function textoACodigoMorse() {
    let morse = "";
    let textoEntrada = document.getElementById('textoEntrada').value;
    let textoMayusculas = textoEntrada.toUpperCase();

    for(let i = 0; i < textoMayusculas.length; i++) {
        let letra = textoMayusculas.substring(i, i+1);
        for(let j = 0; j < alfabeto.length; j++) {
            if(letra == alfabeto[j]) {
                morse += codigoMorse[j] + " ";
                break;
            }
        }
    }
    document.getElementById('textoSalida').value = morse;
}

function codigoMorseATexto() {
    let texto = "", inicio = 0, indice = 1;
    let morse = document.getElementById('textoEntrada').value;
    morse += " ";
    let longitud = morse.length - 1;

    while(indice != -1 && indice < longitud) {
        indice = morse.indexOf(" ", inicio);
        if(indice != -1) {
            let simboloMorse = morse.substring(inicio, indice);
            for(let j = 0; j < codigoMorse.length; j++) {
                if(simboloMorse == codigoMorse[j]) {
                    texto += alfabeto[j];
                    break;
                }
            }
        }
        if(morse.substring(indice + 1, indice + 2) == " ") {
            texto += " ";
            indice++;
        }
        indice++;
        inicio = indice;
    }
    document.getElementById('textoSalida').value = texto;
}

function intercambiar() {
    const textoEntrada = document.getElementById('textoEntrada').value;

    if (/^[\.-\s]+$/.test(textoEntrada)) {
        codigoMorseATexto();
    } else {
        textoACodigoMorse();
    }
}

function limpiarCampos() {
    document.getElementById('textoEntrada').value = "";
    document.getElementById('textoSalida').value = "";
}

document.getElementById('botonConvertir').addEventListener('click', function() {
    const textoEntrada = document.getElementById('textoEntrada').value;

    if (!validarTextoEntrada(textoEntrada)) {
        alert("Por favor, ingresa solo letras, números y espacios.");
        document.getElementById('textoSalida').value = "";
        return;
    }

    textoACodigoMorse();
});

document.getElementById('botonIntercambiar').addEventListener('click', intercambiar);
document.getElementById('botonLimpiar').addEventListener('click', limpiarCampos);

configurar();
