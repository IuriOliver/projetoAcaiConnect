document.getElementById('login-btn').addEventListener('click', function () {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    // Verifica se os dados do coletor estão no localStorage
    const coletor = JSON.parse(localStorage.getItem('coletor'));
    const vendedor = JSON.parse(localStorage.getItem('vendedor'));

    if (coletor && coletor.email === email && coletor.senha === senha) {
        alert('Login como coletor bem-sucedido!');
        // Redirecionar para a página do coletor
        window.location.href = '/colector/historicoColector.html';
    } else if (vendedor && vendedor.email === email && vendedor.senha === senha) {
        alert('Login como vendedor bem-sucedido!');
        // Redirecionar para a página do vendedor
        window.location.href = '/seller/historicoSeller.html';
    } else {
        alert('Email ou senha incorretos.');
    }
});