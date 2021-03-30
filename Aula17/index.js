function Saudacao(nome){
    return `Olá ${nome}`;
}

const variavel = Saudacao('luis');
console.log(variavel);


function soma(x = 1, y = 1){
    return x+y;
}

console.log(soma(4));

const raiz = function (n){
    return n ** 0.5;
};

const raizAero = n => n ** 0.5;

console.log(raizAero(9))