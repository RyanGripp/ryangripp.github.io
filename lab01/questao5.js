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

// Questao 5

const botao = document.querySelector(".executa")

function primo(){
    let txt ="", aux;
    for(let num = 2; num<1000; num++){
        var resultado = 0;
        for(aux = 2; aux < num; aux++){
            if(num % aux == 0){
                resultado++;
                break;
            }
        }
        if(resultado == 0){
            txt = txt+num+", ";
        }
    }
    return txt;
}

botao.addEventListener("click", () => {
    escreveValor("#resposta", primo())
})