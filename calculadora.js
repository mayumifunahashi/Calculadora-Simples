//inserir os números
function insert(num) {
    const numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

//limpar todo o campo
function clean() {
    document.getElementById('resultado').innerHTML = "";
}

//apagar último número
function back() {
    const resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1);
}

//para fazer os cáculos
function calcular() {
    const resultado = document.getElementById('resultado').innerHTML;
    if (resultado) {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }

}
