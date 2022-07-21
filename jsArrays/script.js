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

var vet = [1, 2, 5, 6]

function sum(vet) {
    let soma = 0;
    for (let i=0; i<vet.length; i++) {
        soma = vet[i] + soma;
    }
    return soma;
}

function sumodds(vet) {
    let soma = 0;
    for (let i=0; i<vet.length; i++) {
        if(vet[i]%2!=0){soma = vet[i] + soma;}
    }
    return soma;
}

function product(vet) {
    let soma = 1;
    for (let i=0; i<vet.length; i++) {
        soma = vet[i] * soma;
    }
    return soma;
}

botao1.addEventListener("click", () => {
    escreveValor("#resposta01", sum(vet))
    escreveValor("#resposta01-2", sumodds(vet))
    escreveValor("#resposta01-3", product(vet))
})

// Questao 2

const botao2 = document.querySelector(".executa02")

function primoum(num1){
    let txt ="", aux;
    let qtdd = 0;
    for(let num = 2; qtdd<num1; num++){
        var resultado = 0;
        for(aux = 2; aux < num; aux++){
            if(num % aux == 0){
                resultado++;
                break;
            }
        }
        if(resultado == 0){
            txt = txt+num+", ";
            qtdd++;
        }
    }
    return txt;
}

function primos(num1, num2){
    let txt ="", aux;
    for(let num = num1; num<num2; num++){
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

botao2.addEventListener("click", () => {
    
    let texto = document.querySelector("#questao2-n1").value
    texto = texto+","
    const arraytxt = texto.split(",", 2);

    const num1 = parseFloat(arraytxt[0])
    const num2 = parseFloat(arraytxt[1])
   

    if(arraytxt[1]==''){
        escreveValor("#resposta02", primoum(num1))
    }
    else{
        escreveValor("#resposta02", primos(num1, num2))
    }
})

// Questao 3

const botao3 = document.querySelector(".executa03")

function romano(num1){
    let txt = "";

    if(num1<3999){
        let num = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
        let sym = ["I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M"];
        let i=12;   
        while(num1>0){
            let div = num1/num[i];
            num1 = num1%num[i];
            while(div>=1){
                txt = txt+sym[i];
                div=div-1;
            }
            i=i-1;
        }
    }

    /* Maneira menos compacta de resolver
    if(num1<3999){
        while(num1>=1000){
            txt = txt+"M";
            num1=num1-1000;
        }
        while(num1>=900){
            txt = txt+"CM";
            num1=num1-900;
        }
        while(num1>=500){
            txt = txt+"D";
            num1=num1-500;
        }
        while(num1>=400){
            txt = txt+"CD";
            num1=num1-400;
        }
        while(num1>=100){
            txt = txt+"C";
            num1=num1-100;
        }
        while(num1>=90){
            txt = txt+"XC";
            num1=num1-90;
        }
        while(num1>=50){
            txt = txt+"L";
            num1=num1-50;
        }
        while(num1>=40){
            txt = txt+"XL";
            num1=num1-40;
        }
        while(num1>=10){
            txt = txt+"X";
            num1=num1-10;
        }
        while(num1>=9){
            txt = txt+"IX";
            num1=num1-9;
        }
        while(num1>=5){
            txt = txt+"V";
            num1=num1-5;
        }
        while(num1>=4){
            txt = txt+"IV";
            num1=num1-4;
        }
        while(num1>=1){
            txt = txt+"I";
            num1=num1-1;
        }
    }*/
    return txt;
}

botao3.addEventListener("click", () => {
    
    const num1 = obtemValor("#questao3-n1")

    escreveValor("#resposta03", romano(num1))
})

// Questao 4

const botao4 = document.querySelector(".executa04")

function atm(num){
    let valor = [2,5,10,20,50,100];
    let qtd = [0,0,0,0,0,0]; //2,5,10,20,50,100
    let i=5;   
    while(num>0){
        let div = num/valor[i];
        num = num%valor[i];
        while(div>=1){
            qtd[i]=qtd[i]+1;
            div=div-1;
        }
        i=i-1;
    }

    let txt = "";
    txt = `100: ${qtd[5]} | 50: ${qtd[4]} | 20: ${qtd[3]} | 10: ${qtd[2]} | 5: ${qtd[1]} | 2: ${qtd[0]}`;
    return txt;
}

botao4.addEventListener("click", () => {
    
    const num = obtemValor("#questao4-n1")

    escreveValor("#resposta04", atm(num))
})