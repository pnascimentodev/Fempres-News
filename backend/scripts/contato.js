function enviarEmail() {
    const nome = $("#nome").val();
    const email = $("#email").val();
    const mensagem = $("#mensagem").val();

    // Limpar mensagens de erro
    $(".erro").text("");

    // Verificar se os campos obrigatórios estão preenchidos
    if (!nome) {
        $("#erroNome").text("Por favor, preencha este campo.");
    }

    if (!email) {
        $("#erroEmail").text("Por favor, preencha este campo.");
    }

    if (!mensagem) {
        $("#erroMensagem").text("Por favor, preencha este campo.");
    }

    // Verificar se o formato do e-mail é válido
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailRegex.test(email)) {
        $("#erroEmail").text("Insira um endereço de e-mail válido.");
    }

    // Exibir mensagem de sucesso se não houver mensagens de erro
    if ($("#erroNome").text() === "" && $("#erroEmail").text() === "" && $("#erroMensagem").text() === "") {
        alert('Mensagem enviada com sucesso!');

        $("#nome").val('');
        $("#email").val('');
        $("#mensagem").val('');
    }
}
