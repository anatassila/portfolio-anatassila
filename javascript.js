// --------------------------------MENU---------------------------------
const botao = document.getElementById("botao-menu");
const menu = document.getElementById("lista-menu");botao.addEventListener("click", () => 
    {
    menu.classList.toggle("ativo");
});
// -------------------------------FIM MENU------------------------------

// ------------------------------FORMULÁRIO-----------------------------
const formulario = document.getElementById("formulario");
if (formulario) {
    formulario.addEventListener("submit", function(event) {
        event.preventDefault();
        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();
        if (nome === "" || email === "" || mensagem === "") {
            alert("Preencha todos os campos.");
            return;
        }
        alert("Mensagem enviada com sucesso!");
        formulario.reset();
    });
}
// ----------------------------FIM FORMULÁRIO----------------------------

// --------------------------------JQUERY--------------------------------
$(function () {
    // Abrindo a página
    $(".container-principal")
        .css({
            opacity: 0
        })
        .animate({
            opacity: 1
        }, 3000);
    Botões aumentam quando passa o mouse
    $(".editando-botoes a").hover(
        function () {
            $(this).stop().animate({
                paddingLeft: "35px"
            }, 200);
        },
        function () {
            $(this).stop().animate({
                paddingLeft: "20px"
            }, 200);
        }
    );

});

// ---------------------------------JQUERY-------------------------------

// ----------------------------CLARO E ESCURO----------------------------

const tema = document.getElementById("tema");
if (tema) {
    if (localStorage.getItem("tema") === "claro") {
        document.body.classList.add("tema-claro");
        tema.textContent = "🌙";
    }
    tema.addEventListener("click", () => {
        document.body.classList.toggle("tema-claro");
        if (document.body.classList.contains("tema-claro")) {
            tema.textContent = "🌙";
            localStorage.setItem("tema", "claro");
        } else {
            tema.textContent = "☀️";
            localStorage.setItem("tema", "escuro");
        }
    });
}
