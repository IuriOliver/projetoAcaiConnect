document.querySelector('.cadas').addEventListener('click', function () {
    const nome = document.querySelector('.nome').value;
    const telefone = document.querySelector('.telefone').value;
    const endereco = document.querySelector('.endereco').value;
    const email = document.querySelector('.email').value;
    const senha = document.querySelector('.senha').value;
    const cpfCnpj = document.querySelector('.cpf-cnpj').value;
    const tipo = document.querySelector('.cpf-cnpj-selector').value;
    const termsAccepted = document.querySelector('.terms').checked; // Verifica se a checkbox está marcada

    // Verifica se todos os campos estão preenchidos e se os termos foram aceitos
    if (nome && telefone && endereco && email && senha && cpfCnpj && termsAccepted) {
        // Cria um objeto com os dados do vendedor
        const vendedorData = {
            nome: nome,
            telefone: telefone,
            endereco: endereco,
            email: email,
            senha: senha,
            cpfCnpj: cpfCnpj,
            tipo: tipo
        };

        // Armazena os dados no localStorage
        localStorage.setItem('vendedor', JSON.stringify(vendedorData));

        alert('Vendedor cadastrado com sucesso!');
        // Redirecionar ou limpar os campos
    } else {
        alert('Por favor, preencha todos os campos e aceite os Termos e Condições de Uso.');
    }
});