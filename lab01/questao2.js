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

// Questao 2

const botao = document.querySelector(".executa")

function potencia() {
    let txt = "";
    for(var i=1; i<=30; i++){
        txt = txt+"4^"+i+" = "+Math.pow(4,i)+"____";
    }
    return txt;
}

botao.addEventListener("click", () => {
    escreveValor("#resposta", potencia())
})