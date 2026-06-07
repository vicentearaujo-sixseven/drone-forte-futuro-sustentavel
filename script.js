// =====================================
// CURSOR PERSONALIZADO
// =====================================

const cursor = document.querySelector(".cursor");

if (cursor) {
    document.addEventListener("mousemove", (e) => {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
    });
}

// =====================================
// REVEAL AO ROLAR
// =====================================

const reveals = document.querySelectorAll(".reveal");

function revelarElementos() {

    reveals.forEach((elemento) => {

        const alturaJanela = window.innerHeight;
        const topoElemento = elemento.getBoundingClientRect().top;

        if (topoElemento < alturaJanela - 120) {

            elemento.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revelarElementos);
revelarElementos();

// =====================================
// CONTADORES ANIMADOS
// =====================================

const contadores = document.querySelectorAll(".contador");

let contadorAtivado = false;

function iniciarContadores() {

    const impacto = document.querySelector(".impacto");

    if (!impacto) return;

    const topo = impacto.getBoundingClientRect().top;

    if (topo < window.innerHeight && !contadorAtivado) {

        contadorAtivado = true;

        contadores.forEach((contador) => {

            const alvo = Number(contador.dataset.target);

            let atual = 0;

            const incremento = alvo / 60;

            function atualizar() {

                atual += incremento;

                if (atual < alvo) {

                    contador.innerText = Math.floor(atual);

                    requestAnimationFrame(atualizar);

                } else {

                    contador.innerText = alvo + "%";
                }
            }

            atualizar();
        });
    }
}

window.addEventListener("scroll", iniciarContadores);
iniciarContadores();

// =====================================
// PLANTA CRESCENDO
// =====================================

const planta = document.querySelector(".planta");

window.addEventListener("scroll", () => {

    if (!planta) return;

    if (window.scrollY > 1800) {

        planta.classList.add("cresceu");
    }
});

// =====================================
// SIMULADOR
// =====================================

let simuladorUtilizado = false;

const botaoCalcular = document.getElementById("calcular");

if (botaoCalcular) {

    botaoCalcular.addEventListener("click", () => {

        const hectares =
        Number(document.getElementById("hectares").value);

        const resultado =
        document.getElementById("resultado");

        if (hectares <= 0 || isNaN(hectares)) {

            resultado.innerHTML =
            "Digite uma quantidade válida.";

            resultado.style.color = "red";

            return;
        }

        const economia = hectares * 50;

        resultado.innerHTML =
        `Sua propriedade pode economizar aproximadamente <strong>${economia.toLocaleString("pt-BR")}</strong> litros de água utilizando tecnologias de precisão.`;

        resultado.style.color = "#1f7a3f";

        simuladorUtilizado = true;

        verificarConquista();
    });
}

// =====================================
// QUIZ
// =====================================

let pontos = 0;
let quizRespondido = false;

function responder(correta) {

    const resultado =
    document.getElementById("quizResultado");

    if (correta) {

        pontos++;

        document.getElementById("pontuacao").innerHTML =
        "Pontuação: " + pontos;

        resultado.innerHTML =
        "✅ Correto! Os drones ajudam a reduzir desperdícios.";

        resultado.style.color = "green";

        quizRespondido = true;

        verificarConquista();

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

    "🌱 Drones ajudam a identificar pragas antes que elas causem prejuízos.",

    "💧 A agricultura de precisão reduz o desperdício de água.",

    "📡 Sensores permitem detectar áreas com deficiência nutricional.",

    "🌎 O uso de drones contribui para uma agricultura mais sustentável.",

    "🚜 Fazendas modernas utilizam drones para aumentar a produtividade.",

    "🌾 A tecnologia ajuda o produtor a tomar decisões mais rápidas."

];

let indiceCuriosidade = 0;

const botaoCuriosidade =
document.getElementById("novaCuriosidade");

const textoCuriosidade =
document.getElementById("curiosidadeTexto");

if (botaoCuriosidade) {

    botaoCuriosidade.addEventListener("click", () => {

        indiceCuriosidade++;

        if (indiceCuriosidade >= curiosidades.length) {

            indiceCuriosidade = 0;
        }

        textoCuriosidade.innerHTML =
        curiosidades[indiceCuriosidade];
    });
}

// =====================================
// CONQUISTAS
// =====================================

function verificarConquista() {

    const status =
    document.getElementById("statusConquista");

    if (!status) return;

    if (simuladorUtilizado && quizRespondido) {

        status.innerHTML =
        "🏆 Parabéns! Você desbloqueou o selo Especialista em Agricultura Sustentável!";
    }
}

// =====================================
// BOTÃO TOPO
// =====================================

const botaoTopo =
document.getElementById("topo");

window.addEventListener("scroll", () => {

    if (!botaoTopo) return;

    if (window.scrollY > 500) {

        botaoTopo.style.display = "block";

    } else {

        botaoTopo.style.display = "none";
    }
});

if (botaoTopo) {

    botaoTopo.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"
        });
    });
}

// =====================================
// EFEITOS NOS BOTÕES
// =====================================

document.querySelectorAll("button").forEach((botao) => {

    botao.addEventListener("mouseenter", () => {

        botao.style.transform = "scale(1.05)";
    });

    botao.addEventListener("mouseleave", () => {

        botao.style.transform = "scale(1)";
    });
});

// =====================================
// EASTER EGG DO DRONE
// =====================================

let cliquesDrone = 0;

const drone =
document.getElementById("drone");

if (drone) {

    drone.addEventListener("click", () => {

        cliquesDrone++;

        if (cliquesDrone >= 5) {

            alert(
                "🚁 Você encontrou o segredo do drone! A tecnologia é uma grande aliada da agricultura sustentável."
            );

            cliquesDrone = 0;
        }
    });
}

// =====================================
// BOAS-VINDAS
// =====================================

setTimeout(() => {

    console.log(
        "🌱 Bem-vindo ao projeto Agro Forte, Futuro Sustentável!"
    );

}, 1000);