document.querySelector('.colectorCadas').addEventListener('click', function () {
    const nome = document.querySelector('.nome').value;
    const telefone = document.querySelector('.telefone').value;
    const email = document.querySelector('.email').value;
    const senha = document.querySelector('.senha').value;
    const termsAccepted = document.querySelector('.terms').checked; // Verifica se a checkbox está marcada

    // Verifica se todos os campos estão preenchidos e se os termos foram aceitos
    if (nome && telefone && email && senha && termsAccepted) {
        // Cria um objeto com os dados do coletor
        const coletorData = {
            nome: nome,
            telefone: telefone,
            email: email,
            senha: senha
        };

        // Armazena os dados no localStorage
        localStorage.setItem('coletor', JSON.stringify(coletorData));

        alert('Coletor cadastrado com sucesso!');
        // Redirecionar ou limpar os campos
    } else {
        alert('Por favor, preencha todos os campos e aceite os Termos e Condições de Uso.');
    }
});