// =========================================================
// PROTEÇÃO DO PAINEL
// =========================================================

if (sessionStorage.getItem("usuarioLogado") !== "true") {

    window.location.href = "login.html";

}


// =========================================================
// BOTÃO NOVO USUÁRIO
// =========================================================

const botaoNovo = document.getElementById("botao-novo");

botaoNovo.addEventListener("click", function () {

    alert("Tela de cadastro de usuário ainda não implementada.");

});


// =========================================================
// PESQUISA DE USUÁRIOS
// =========================================================

const campoBusca = document.getElementById("buscar");

campoBusca.addEventListener("input", function () {

    const pesquisa = campoBusca.value.toLowerCase();

    const linhas =
        document.querySelectorAll("#lista-usuarios tr");


    linhas.forEach(function (linha) {

        const texto = linha.textContent.toLowerCase();

        if (texto.includes(pesquisa)) {

            linha.style.display = "";

        } else {

            linha.style.display = "none";

        }

    });

});


// =========================================================
// BOTÕES EDITAR
// =========================================================

const botoesEditar =
    document.querySelectorAll(".botao-editar");


botoesEditar.forEach(function (botao) {

    botao.addEventListener("click", function () {

        alert("Tela de edição ainda não implementada.");

    });

});


// =========================================================
// BOTÕES EXCLUIR
// =========================================================

const botoesExcluir =
    document.querySelectorAll(".botao-excluir");


botoesExcluir.forEach(function (botao) {

    botao.addEventListener("click", function () {

        const confirmar =
            confirm("Deseja realmente excluir este usuário?");


        if (confirmar) {

            const linha = botao.closest("tr");

            linha.remove();

        }

    });

});