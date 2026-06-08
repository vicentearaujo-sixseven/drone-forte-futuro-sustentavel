// ===================================
// SISTEMA DE ABAS
// ===================================

function mostrarAba(id) {

    const abas = document.querySelectorAll(".aba");

    abas.forEach((aba) => {
        aba.classList.remove("ativa");
    });

    document.getElementById(id).classList.add("ativa");
}

// ===================================
// SIMULADOR DE ECONOMIA
// ===================================

function calcularEconomia() {

    const hectares =
    Number(document.getElementById("hectares").value);

    const resultado =
    document.getElementById("resultado");

    if (isNaN(hectares) || hectares <= 0) {

        resultado.innerHTML =
        "⚠️ Digite uma quantidade válida de hectares.";

        resultado.style.color = "red";

        return;
    }

    const economia = hectares * 50;

    resultado.innerHTML =
    `💧 Sua propriedade pode economizar aproximadamente <strong>${economia.toLocaleString("pt-BR")}</strong> litros de água utilizando tecnologias de precisão.`;

    resultado.style.color = "#1f7a3f";
}

// ===================================
// QUIZ
// ===================================

function responderQuiz(correta) {

    const resultado =
    document.getElementById("quizResultado");

    if (correta) {

        resultado.innerHTML =
        "✅ Correto! Os drones agrícolas ajudam a reduzir desperdícios e aumentar a eficiência.";

        resultado.style.color = "green";

    } else {

        resultado.innerHTML =
        "❌ Resposta incorreta. Tente novamente.";

        resultado.style.color = "red";
    }
}

// ===================================
// ANIMAÇÃO DOS NÚMEROS
// ===================================

const numeros =
document.querySelectorAll(".numero h3");

let animado = false;

function animarNumeros() {

    if (animado) return;

    numeros.forEach((numero) => {

        const texto = numero.innerText;

        const alvo =
        parseInt(texto.replace("%", ""));

        let atual = 0;

        const incremento =
        alvo / 50;

        function atualizar() {

            atual += incremento;

            if (atual < alvo) {

                numero.innerText =
                Math.floor(atual) + "%";

                requestAnimationFrame(atualizar);

            } else {

                numero.innerText =
                alvo + "%";
            }
        }

        atualizar();

    });

    animado = true;
}

window.addEventListener("load", animarNumeros);

// ===================================
// EFEITO NOS BOTÕES
// ===================================

const botoes =
document.querySelectorAll("button");

botoes.forEach((botao) => {

    botao.addEventListener("mouseenter", () => {

        botao.style.transform =
        "translateY(-3px)";
    });

    botao.addEventListener("mouseleave", () => {

        botao.style.transform =
        "translateY(0)";
    });

});

// ===================================
// ZOOM SUAVE NA GALERIA
// ===================================

const imagens =
document.querySelectorAll(".galeria img");

imagens.forEach((img) => {

    img.addEventListener("click", () => {

        if (img.classList.contains("zoom")) {

            img.classList.remove("zoom");

        } else {

            document
            .querySelectorAll(".galeria img")
            .forEach((foto) => {

                foto.classList.remove("zoom");
            });

            img.classList.add("zoom");
        }

    });

});

// ===================================
// CURIOSIDADE AUTOMÁTICA
// ===================================

const curiosidades = [

    "🚁 Um drone agrícola pode monitorar dezenas de hectares em poucos minutos.",

    "💧 A agricultura de precisão ajuda a reduzir o desperdício de água.",

    "🌎 O uso de tecnologia no campo contribui para a preservação ambiental.",

    "📡 Sensores agrícolas ajudam a identificar problemas antes que eles se espalhem.",

    "🌱 Produzir mais e preservar o meio ambiente é possível com inovação."
];

let indice = 0;

function mostrarCuriosidade() {

    const elemento =
    document.getElementById("curiosidadeDia");

    if (!elemento) return;

    elemento.innerHTML =
    curiosidades[indice];

    indice++;

    if (indice >= curiosidades.length) {

        indice = 0;
    }
}

setInterval(mostrarCuriosidade, 5000);

// ===================================
// INICIALIZAÇÃO
// ===================================

document.addEventListener("DOMContentLoaded", () => {

    mostrarAba("inicio");

    mostrarCuriosidade();

});