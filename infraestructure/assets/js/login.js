// =========================================================
// ELEMENTOS DO FORMULÁRIO
// =========================================================

const formulario = document.getElementById("login-form");
const mensagemErro = document.getElementById("mensagem-erro");


// =========================================================
// CREDENCIAIS DO LOGIN
// =========================================================

const emailCorreto = "davitestando@gmail.com";
const senhaCorreta = "12345678";


// =========================================================
// LOGIN
// =========================================================

formulario.addEventListener("submit", function (event) {

    event.preventDefault();

    mensagemErro.textContent = "";


    // Verifica as validações básicas do HTML5

    if (!formulario.checkValidity()) {

        mensagemErro.textContent =
            "Preencha os campos corretamente.";

        formulario.reportValidity();

        return;
    }

    // Verifica se as credenciais estão corretas

    const emailDigitado =
        document.getElementById("email").value;

    const senhaDigitada =
        document.getElementById("senha").value;


    if (
        emailDigitado !== emailCorreto ||
        senhaDigitada !== senhaCorreta
    ) {

        mensagemErro.textContent =
            "Credenciais incorretas.";

        return;
    }


    // Login realizado com sucesso

    sessionStorage.setItem("usuarioLogado", "true");

    window.location.href = "admin.html";

});