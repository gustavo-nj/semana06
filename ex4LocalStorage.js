function salvarUsuario () {
    const nome = prompt("Digite seu nome:");
    const idade = prompt("Digite sua idade:");
    const email = prompt("Digite seu e-mail:");

    const usuario = {
        nome: nome,
        idade: idade,
        email: email
    };

    localStorage.setItem("usuario", JSON.stringify(usuario));
}

salvarUsuario();