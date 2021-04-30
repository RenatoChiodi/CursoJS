// First-class objects (objetos de primeira classe)
// Function expression
const souUmDado = function(){
    console.log('Sou um Dado.');
};


function executaFuncao(funcao){
    console.log('Vou executar a funcao abaixo:');
    
    funcao();
}

executaFuncao(souUmDado);

// Arrow function

const arrowFunction = () => {
    console.log('Sou uma arrow function');
}


arrowFunction();

// Dentro de um objeto

const obj = {
    falar(){
        console.log('Estou falando...');
    }
};

obj.falar();