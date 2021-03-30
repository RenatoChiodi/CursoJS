function FactoryPessoa(nome, sobrenome, idade){
    return{ nome, sobrenome, idade }
};

const pessoa1 = FactoryPessoa('Renato', 'Chiodi', '28');

console.log(pessoa1.nome)