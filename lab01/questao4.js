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

// Questao 4

const botao = document.querySelector(".executa")

function fibonacci() {
    let txt = "1, 2", n=1, a=2, r;
    for(var i=1; i<=98; i++){
        r = n+a;
        txt = txt+", "+r;
        n = a;
        a = r;
    }
    return txt;
}

botao.addEventListener("click", () => {
    escreveValor("#resposta", fibonacci())
})