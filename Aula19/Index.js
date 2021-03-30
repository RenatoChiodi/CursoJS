function meuEscopo(){
    const form = document.querySelector('.form');

    // form.onsubmit = function (evento) {
    //     evento.preventDefault();
    //     alert(1);
    // };

    const pessoas = [];

    function recebeEventoForm(evento){
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push(factoryPessoa(
                nome.value,
                sobrenome.value,
                peso.value,
                altura.value 
                )
            );
           
        mostraPessoas(pessoas);
    }

    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();

 function factoryPessoa(nome, sobrenome, peso, altura){
     return {nome, sobrenome, peso, altura};
 }

 function mostraPessoas(pessoas){
    const resultado = document.querySelector('.resultado');
    pessoas.forEach(element => {
    resultado.innerHTML +=`<p>${element.nome} ${element.sobrenome} ${element.peso} ${element.altura}</p>`
        
    });
 }