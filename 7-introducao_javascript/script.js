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

const botao1 = document.querySelector(".executa01")

function somar(num1, num2) {
    return num1 + num2;
}

botao1.addEventListener("click", () => {
    
    const num1 = obtemValor("#questao1-n1")
    const num2 = obtemValor("#questao1-n2")

    escreveValor("#resposta01", somar(num1, num2))
})

// Questao 2

const botao2 = document.querySelector(".executa02")

function maiormenor(num1, num2){
    let txt;
    if(num1 > num2)
        txt = "O número "+num1+" é maior que "+num2;
    else if(num1 < num2)
        txt = "O número "+num2+" é maior que "+num1;
    else
        txt = "Os números são iguais";
    return txt;      
}

botao2.addEventListener("click", () => {
    
    const num1 = obtemValor("#questao2-n1")
    const num2 = obtemValor("#questao2-n2")

    escreveValor("#resposta02", maiormenor(num1, num2))
})

// Questao 3

const botao3 = document.querySelector(".executa03")

function primo(num1){
    let resultado = 0, txt, aux;
    for(aux = 2; aux < num1; aux++){
        if(num1 % aux == 0){
            resultado++;
            break;
        }
    }
    if(resultado > 0){
        txt = "O número "+num1+" não é primo"
    }
    else
        txt = "O número "+num1+" é primo"
    return txt;
}

botao3.addEventListener("click", () => {
    
    const num1 = obtemValor("#questao3-n1")

    escreveValor("#resposta03", primo(num1))
})

// Questao 4

const botao4 = document.querySelector(".executa04")

function hipotenusa(num1, num2){
    let r = Math.pow(num1,2);
    r = r + Math.pow(num2,2);
    r = Math.sqrt(r,2);
    return r;
}

botao4.addEventListener("click", () => {
    
    const num1 = obtemValor("#questao4-n1")
    const num2 = obtemValor("#questao4-n2")

    escreveValor("#resposta04", hipotenusa(num1, num2))
})

// Questao 5

const botao5 = document.querySelector(".executa05")

function reajuste(num1, num2){
    let r = num1;
    r = r + num1*num2;
    return r;
}

botao5.addEventListener("click", () => {
    
    const num1 = obtemValor("#questao5-n1")
    const num2 = obtemValor("#questao5-n2")

    escreveValor("#resposta05", reajuste(num1, num2))
})

// Questao 6

const botao6 = document.querySelector(".executa06")

function custoFinal(num1){
    let r = 0.28*num1 + 0.45*num1 + num1;
    return r;
}

botao6.addEventListener("click", () => {
    
    const num1 = obtemValor("#questao6-n1")

    escreveValor("#resposta06", custoFinal(num1))
})

// Questao 7

const botao7 = document.querySelector(".executa07")

function salarioFinal(num1, num2, num3, num4){
    let r = num3 + num4*num1 + 0.05*num2;
    return r;
}

botao7.addEventListener("click", () => {
    
    const num1 = obtemValor("#questao7-n1")
    const num2 = obtemValor("#questao7-n2")
    const num3 = obtemValor("#questao7-n3")
    const num4 = obtemValor("#questao7-n4")

    escreveValor("#resposta07", salarioFinal(num1, num2, num3, num4))
})

// Questao 8

const botao8 = document.querySelector(".executa08")

function temperatura(num1){
    let r = (num1 - 32)/9;
    r = r * 5;
    return r;
}

botao8.addEventListener("click", () => {
    
    const num1 = obtemValor("#questao8-n1")

    escreveValor("#resposta08", temperatura(num1))
})

// Questao 9

const botao9 = document.querySelector(".executa09")

function mediaFinal(num1, num2, num3){
    let r = (num1*2 + num2*3 + num3*5)/10
    return r;
}

botao9.addEventListener("click", () => {
    
    const num1 = obtemValor("#questao9-n1")
    const num2 = obtemValor("#questao9-n2")
    const num3 = obtemValor("#questao9-n3")

    escreveValor("#resposta09", mediaFinal(num1, num2, num3))
})

// Questao 10

const botao10 = document.querySelector(".executa10")

function maca(num1){
    let r;
    if(num1 < 12)
        r = num1*1.3;
    else
        r = num1*1;
    return r;
}

botao10.addEventListener("click", () => {
    
    const num1 = obtemValor("#questao10-n1")

    escreveValor("#resposta10", maca(num1))
})