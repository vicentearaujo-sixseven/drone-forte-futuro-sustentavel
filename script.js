// =====================================
// SIMULADOR DE ECONOMIA
// =====================================

const botaoCalcular = document.getElementById("calcular");

botaoCalcular.addEventListener("click", () => {

    const hectares =
    Number(document.getElementById("hectares").value);

    const resultado =
    document.getElementById("resultado");

    if (hectares <= 0 || isNaN(hectares)) {

        resultado.innerHTML =
        "Digite uma quantidade válida de hectares.";

        resultado.style.color = "red";

        return;
    }

    const economia = hectares * 50;

    resultado.innerHTML =
    `Sua propriedade pode economizar aproximadamente <strong>${economia.toLocaleString("pt-BR")}</strong> litros de água utilizando tecnologias de precisão.`;

    resultado.style.color = "#1f7a3f";

});

// =====================================
// QUIZ INTERATIVO
// =====================================

function responder(correta) {

    const resultado =
    document.getElementById("quizResultado");

    if (correta) {

        resultado.innerHTML =
        "✅ Correto! Os drones agrícolas ajudam a reduzir desperdícios e aumentam a precisão das aplicações.";

        resultado.style.color = "green";

    } else {

        resultado.innerHTML =
        "❌ Resposta incorreta. Tente novamente.";

        resultado.style.color = "red";
    }
}

// =====================================
// CURIOSIDADES
// =====================================

const curiosidades = [

    "🚁 Um drone pode monitorar dezenas de hectares em poucos minutos.",

    "🌱 Drones ajudam a identificar pragas antes que elas se espalhem.",

    "💧 A agricultura de precisão reduz o desperdício de água.",

    "📡 Imagens aéreas ajudam os produtores a tomar decisões mais rápidas.",

    "🌎 O uso de drones contribui para uma produção mais sustentável.",

    "🚜 Muitas fazendas já utilizam drones para mapear áreas inteiras.",

    "🌾 A tecnologia permite aumentar a produtividade sem ampliar áreas de cultivo."

];

let indiceCuriosidade = 0;

const botaoCuriosidade =
document.getElementById("novaCuriosidade");

const textoCuriosidade =
document.getElementById("curiosidadeTexto");

botaoCuriosidade.addEventListener("click", () => {

    indiceCuriosidade++;

    if (indiceCuriosidade >= curiosidades.length) {

        indiceCuriosidade = 0;
    }

    textoCuriosidade.innerHTML =
    curiosidades[indiceCuriosidade];

});

// =====================================
// BOTÃO VOLTAR AO TOPO
// =====================================

const botaoTopo =
document.getElementById("topo");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        botaoTopo.style.display = "block";

    } else {

        botaoTopo.style.display = "none";
    }
});

botaoTopo.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"
    });

});

// =====================================
// ANIMAÇÃO AO ROLAR
// =====================================

const reveals =
document.querySelectorAll(".reveal");

function revelarElementos() {

    reveals.forEach(elemento => {

        const alturaJanela =
        window.innerHeight;

        const topoElemento =
        elemento.getBoundingClientRect().top;

        const pontoAtivacao = 120;

        if (topoElemento < alturaJanela - pontoAtivacao) {

            elemento.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revelarElementos);

revelarElementos();

// =====================================
// CONTADORES ANIMADOS
// =====================================

const contadores =
document.querySelectorAll(".contador");

let contadoresAnimados = false;

function animarContadores() {

    const secaoImpacto =
    document.querySelector(".impacto");

    const topo =
    secaoImpacto.getBoundingClientRect().top;

    const alturaTela =
    window.innerHeight;

    if (topo < alturaTela && !contadoresAnimados) {

        contadoresAnimados = true;

        contadores.forEach(contador => {

            const alvo =
            Number(contador.dataset.target);

            let atual = 0;

            const incremento =
            alvo / 60;

            const atualizar = () => {

                atual += incremento;

                if (atual < alvo) {

                    contador.innerText =
                    Math.floor(atual);

                    requestAnimationFrame(atualizar);

                } else {

                    contador.innerText =
                    alvo + "%";
                }
            };

            atualizar();
        });
    }
}

window.addEventListener("scroll", animarContadores);

animarContadores();

// =====================================
// EFEITO SUAVE NOS CARDS
// =====================================

const cards =
document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect =
        card.getBoundingClientRect();

        const x =
        e.clientX - rect.left;

        const y =
        e.clientY - rect.top;

        const rotateY =
        ((x / rect.width) - 0.5) * 12;

        const rotateX =
        ((y / rect.height) - 0.5) * -12;

        card.style.transform =
        `perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-8px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
        "translateY(0)";
    });

});

// =====================================
// ANO AUTOMÁTICO NO RODAPÉ (OPCIONAL)
// =====================================

console.log(
"Projeto Agrinho 2026 carregado com sucesso!"
);