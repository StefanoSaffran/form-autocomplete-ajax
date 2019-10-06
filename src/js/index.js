function preencheCampos(cep, form) {
    form.endereco.value = cep.logradouro;
    form.bairro.value = cep.bairro;
    form.complemento.value = cep.complemento;
    form.cidade.value = cep.localidade;
    form.estado.value = cep.uf;

    const mensagem = `
        CEP: ${cep.cep},
        Logradouro: ${cep.logradouro},
        Complemento: ${cep.complemento},
        Bairro: ${cep.bairro},
        Cidade ${cep.localidade},
        Estado: ${cep.uf}
    `;
    console.log(mensagem);
}

function buscarCep(event, form) {
    event.preventDefault();
    const inputCep = form.cep;
    if (inputCep) {
        const cep = inputCep.value.replace('-', '');
        if (cep.length === 8) {
            const url = `http://viacep.com.br/ws/${cep}/json`;
            fetch(url)
                .then(res => this.handleErrors(res))
                .then(res => res.json())
                .then(data => preencheCampos(data, form))
                .catch(erro => console.error(erro));
        }
    }
}

function handleErrors(res) {
    if (!res.ok) throw new Error(res.statusText);
    return res;
}

    /* 
    *** ¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨ ***

        ***  Esta seria a requisicão por XHR  ***

  let xhr = new XMLHttpRequest();
 xhr.open('GET', url, true);

 xhr.onreadystatechange = function() {
     if (xhr.readyState == 4) {
         if (xhr.status = 200)

             preencheCampos(JSON.parse(xhr.responseText));

     }
 }
 xhr.send();

    *** ¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨ *** */