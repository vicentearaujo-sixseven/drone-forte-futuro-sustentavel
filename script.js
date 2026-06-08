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
// REVEAL
// =====================================

const reveals = document.querySelectorAll(".reveal");

function revelar() {

    reveals.forEach((item) => {

        const top = item.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {

            item.classList.add("active");
        }

    });
}

window.addEventListener("scroll", revelar);
revelar();

// =====================================
// DASHBOARD
// =====================================

let xp = 0;
let nivel = "Iniciante 🌱";
let conquistas = 0;
let aguaEconomizada = 0;

function atualizarDashboard() {

    document.getElementById("xp").textContent = xp;

    document.getElementById("nivel").textContent = nivel;

    document.getElementById("conquistas").textContent =
    conquistas;

    document.getElementById("agua").textContent =
    aguaEconomizada.toLocaleString("pt-BR");
}

function adicionarXP(valor) {

    xp += valor;

    if (xp >= 300) {

        nivel = "Mestre do Agro 👑";

    } else if (xp >= 200) {

        nivel = "Especialista 🚁";

    } else if (xp >= 100) {

        nivel = "Produtor Rural 🚜";

    }

    atualizarDashboard();
}

// =====================================
// CONTADORES
// =====================================

const contadores =
document.querySelectorAll(".contador");

let contadorIniciado = false;

function iniciarContadores() {

    if (contadorIniciado) return;

    const impacto =
    document.querySelector(".impacto");

    if (!impacto) return;

    const topo =
    impacto.getBoundingClientRect().top;

    if (topo < window.innerHeight) {

        contadorIniciado = true;

        contadores.forEach((contador) => {

            const alvo =
            Number(contador.dataset.target);

            let atual = 0;

            const incremento =
            alvo / 60;

            function atualizar() {

                atual += incremento;

                if (atual < alvo) {

                    contador.innerText =
                    Math.floor(atual);

                    requestAnimationFrame(
                        atualizar
                    );

                } else {

                    contador.innerText =
                    alvo + "%";
                }
            }

            atualizar();

        });
    }
}

window.addEventListener(
    "scroll",
    iniciarContadores
);

// =====================================
// ASSISTENTE VIRTUAL
// =====================================

const dicas = [

    "🚁 Drones conseguem monitorar dezenas de hectares rapidamente.",

    "🌱 A agricultura sustentável reduz impactos ambientais.",

    "💧 Tecnologias de precisão ajudam a economizar água.",

    "🌎 Menos desperdício significa mais preservação.",

    "📡 Sensores ajudam a identificar problemas antes que se agravem.",

    "🚜 A inovação é uma das chaves para o futuro do campo."

];

let indiceDica = 0;

const assistenteTexto =
document.getElementById(
    "assistenteTexto"
);

if (assistenteTexto) {

    setInterval(() => {

        indiceDica++;

        if (
            indiceDica >= dicas.length
        ) {
            indiceDica = 0;
        }

        assistenteTexto.innerHTML =
        dicas[indiceDica];

    }, 5000);
}

// =====================================
// SIMULADOR
// =====================================

const calcular =
document.getElementById("calcular");

let simuladorFeito = false;

if (calcular) {

    calcular.addEventListener(
        "click",
        () => {

            const hectares =
            Number(
                document.getElementById(
                    "hectares"
                ).value
            );

            const resultado =
            document.getElementById(
                "resultado"
            );

            if (
                hectares <= 0 ||
                isNaN(hectares)
            ) {

                resultado.innerHTML =
                "Digite um valor válido.";

                resultado.style.color =
                "red";

                return;
            }

            const economia =
            hectares * 50;

            aguaEconomizada +=
            economia;

            resultado.innerHTML =
            `💧 Sua propriedade pode economizar aproximadamente <strong>${economia.toLocaleString("pt-BR")}</strong> litros de água.`;

            resultado.style.color =
            "#1f7a3f";

            adicionarXP(25);

            simuladorFeito = true;

            atualizarDashboard();

        }
    );
}

// =====================================
// QUIZ
// =====================================

let quizConcluido = false;
let pontuacao = 0;

function responder(correta) {

    const resultado =
    document.getElementById(
        "quizResultado"
    );

    if (correta) {

        pontuacao++;

        document.getElementById(
            "pontuacao"
        ).innerHTML =
        "Pontuação: " +
        pontuacao;

        resultado.innerHTML =
        "✅ Correto!";

        resultado.style.color =
        "green";

        adicionarXP(30);

        quizConcluido = true;

    } else {

        resultado.innerHTML =
        "❌ Resposta incorreta.";

        resultado.style.color =
        "red";
    }
}

// =====================================
// MINI GAME DO DRONE
// =====================================

const playerDrone =
document.getElementById("playerDrone");

const crops =
document.querySelectorAll(".crop");

const scoreElement =
document.getElementById("score");

let score = 0;

let droneX = 50;
let droneY = 150;

document.addEventListener("keydown", (e) => {

    if (!playerDrone) return;

    const velocidade = 15;

    if (e.key === "ArrowUp") {
        droneY -= velocidade;
    }

    if (e.key === "ArrowDown") {
        droneY += velocidade;
    }

    if (e.key === "ArrowLeft") {
        droneX -= velocidade;
    }

    if (e.key === "ArrowRight") {
        droneX += velocidade;
    }

    droneX = Math.max(0, Math.min(droneX, 840));
    droneY = Math.max(0, Math.min(droneY, 340));

    playerDrone.style.left =
    droneX + "px";

    playerDrone.style.top =
    droneY + "px";

    verificarColisoes();

});

// =====================================
// COLISÕES
// =====================================

function verificarColisoes() {

    if (!playerDrone) return;

    const droneRect =
    playerDrone.getBoundingClientRect();

    crops.forEach((crop) => {

        if (
            crop.style.display ===
            "none"
        ) {
            return;
        }

        const cropRect =
        crop.getBoundingClientRect();

        const colidiu =
        droneRect.left <
            cropRect.right &&
        droneRect.right >
            cropRect.left &&
        droneRect.top <
            cropRect.bottom &&
        droneRect.bottom >
            cropRect.top;

        if (colidiu) {

            crop.style.display =
            "none";

            score += 10;

            scoreElement.textContent =
            score;

            adicionarXP(20);

            verificarVitoria();

        }

    });

}

// =====================================
// VITÓRIA
// =====================================

function verificarVitoria() {

    const restantes =
    [...crops].filter(
        crop =>
        crop.style.display !==
        "none"
    );

    if (restantes.length === 0) {

        setTimeout(() => {

            alert(
                "🎉 Parabéns! Você coletou todas as plantações!"
            );

            desbloquearConquista(
                "badgeDrone"
            );

        }, 200);

    }

}

// =====================================
// CONQUISTAS
// =====================================

function desbloquearConquista(id) {

    const badge =
    document.getElementById(id);

    if (!badge) return;

    if (
        badge.dataset.desbloqueada ===
        "sim"
    ) {
        return;
    }

    badge.dataset.desbloqueada =
    "sim";

    badge.style.background =
    "#ffffff";

    badge.style.color =
    "#1f7a3f";

    badge.style.fontWeight =
    "700";

    conquistas++;

    atualizarDashboard();

}

// =====================================
// VERIFICADOR DE CONQUISTAS
// =====================================

setInterval(() => {

    if (quizConcluido) {

        desbloquearConquista(
            "badgeQuiz"
        );
    }

    if (aguaEconomizada > 0) {

        desbloquearConquista(
            "badgeAgua"
        );
    }

    if (xp >= 150) {

        desbloquearConquista(
            "badgeAgro"
        );
    }

}, 1000);

// =====================================
// BARRAS DE PROGRESSO
// =====================================

const barras =
document.querySelectorAll(
    ".progress-fill"
);

function ativarBarras() {

    barras.forEach((barra) => {

        barra.style.opacity =
        "1";

    });

}

window.addEventListener(
    "load",
    ativarBarras
);

// =====================================
// BOTÃO TOPO
// =====================================

const topo =
document.getElementById(
    "topo"
);

window.addEventListener(
    "scroll",
    () => {

        if (!topo) return;

        if (
            window.scrollY > 500
        ) {

            topo.style.display =
            "block";

        } else {

            topo.style.display =
            "none";

        }

    }
);

if (topo) {

    topo.addEventListener(
        "click",
        () => {

            window.scrollTo({

                top: 0,

                behavior:
                "smooth"

            });

        }
    );

}

// =====================================
// EFEITO NOS BOTÕES
// =====================================

document
.querySelectorAll("button")
.forEach((botao) => {

    botao.addEventListener(
        "mouseenter",
        () => {

            botao.style.transform =
            "scale(1.05)";

        }
    );

    botao.addEventListener(
        "mouseleave",
        () => {

            botao.style.transform =
            "scale(1)";

        }
    );

});

// =====================================
// MENSAGEM DE BOAS-VINDAS
// =====================================

setTimeout(() => {

    console.log(
        "🌱 Agro Forte, Futuro Sustentável - Agrinho PRO"
    );

}, 1000);

// =====================================
// EASTER EGG DO DRONE
// =====================================

const droneDecorativo =
document.getElementById(
    "drone"
);

let cliquesDrone = 0;

if (droneDecorativo) {

    droneDecorativo
    .addEventListener(
        "click",
        () => {

            cliquesDrone++;

            if (
                cliquesDrone >= 5
            ) {

                alert(
                    "🚁 Segredo descoberto! A tecnologia é uma grande aliada da agricultura sustentável."
                );

                adicionarXP(50);

                cliquesDrone = 0;

            }

        }
    );

}

// =====================================
// INICIALIZAÇÃO
// =====================================

atualizarDashboard();
iniciarContadores();