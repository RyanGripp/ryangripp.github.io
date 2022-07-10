function obtemValor(seletor) {
    const val = document.querySelector(seletor)
    let num = isNaN(parseFloat(val.value)) ? 0 : parseFloat(val.value)
    val.value = ""
    return num
}

function escreveValor(seletor, valor) {
    const nodeConteudo = document.createTextNode(valor)
    document.querySelector(seletor).textContent = ""
    document.querySelector(seletor).appendChild(nodeConteudo)
}

// Questao 1

const botao = document.querySelector(".executa")

function fatorial(num1) {
    let aux = num1, valor = num1;
    for(var i=2; i<num1; i++){
        valor = valor * (aux-1);
        aux = aux-1;
    }
    return valor;
}

botao.addEventListener("click", () => {
    
    const num1 = obtemValor("#n1")

    
    escreveValor("#resposta", fatorial(num1))
})

escreveValor("#resposta2", "fatorial de 12 = "+fatorial(12))