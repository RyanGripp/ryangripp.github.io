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

// Questao 3

const botao = document.querySelector(".executa")

function somaPar() {
    let r=0;
    for(var i=0; i<=1000; i++){
        if(i%2==0)
            r=r+i;
    }
    return r;
}

botao.addEventListener("click", () => {
    escreveValor("#resposta", somaPar())
})