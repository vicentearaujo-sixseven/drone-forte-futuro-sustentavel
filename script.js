// ======================================
// DRONE FORTE
// SCRIPT FINAL - PARTE 1
// ======================================

// ======================================
// SISTEMA DE ABAS
// ======================================

function mostrarAba(id) {

    const abas = document.querySelectorAll(".aba");

    abas.forEach((aba) => {
        aba.classList.remove("ativa");
    });

    const abaSelecionada =
    document.getElementById(id);

    if (abaSelecionada) {
        abaSelecionada.classList.add("ativa");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}

// ======================================
// CURIOSIDADES
// ======================================

const curiosidades = [

    "🚁 Um drone agrícola pode monitorar dezenas de hectares em poucos minutos.",

    "💧 A agricultura de precisão reduz desperdícios de água.",

    "🌎 Drones ajudam a preservar o meio ambiente.",

    "📡 Sensores detectam problemas rapidamente.",

    "🌱 Tecnologia e sustentabilidade caminham juntas.",

    "🚜 A agricultura de precisão aumenta a produtividade.",

    "☀️ Drones criam mapas detalhados das plantações.",

    "🌾 A inovação é essencial para o futuro do campo.",

    "🛰️ O GPS permite monitoramento extremamente preciso."

];

let indiceCuriosidade = 0;

function mostrarCuriosidade() {

    const elemento =
    document.getElementById(
        "curiosidadeDia"
    );

    if (!elemento) return;

    elemento.innerHTML =
    curiosidades[indiceCuriosidade];

    indiceCuriosidade++;

    if (
        indiceCuriosidade >=
        curiosidades.length
    ) {

        indiceCuriosidade = 0;

    }

}

setInterval(
    mostrarCuriosidade,
    5000
);

// ======================================
// ANIMAÇÃO DOS NÚMEROS
// ======================================

let numerosAnimados = false;

function animarNumeros() {

    if (numerosAnimados) return;

    const numeros =
    document.querySelectorAll(
        ".numero h3"
    );

    numeros.forEach(numero => {

        const alvo =
        parseInt(numero.innerText);

        let atual = 0;

        const incremento =
        alvo / 60;

        function atualizar() {

            atual += incremento;

            if (atual < alvo) {

                numero.innerText =
                Math.floor(atual) + "%";

                requestAnimationFrame(
                    atualizar
                );

            } else {

                numero.innerText =
                alvo + "%";

            }

        }

        atualizar();

    });

    numerosAnimados = true;

}

window.addEventListener(
    "load",
    animarNumeros
);

// ======================================
// SIMULADOR
// ======================================

function calcularEconomia() {

    const hectares = Number(
        document.getElementById(
            "hectares"
        ).value
    );

    const resultado =
    document.getElementById(
        "resultado"
    );

    if (
        isNaN(hectares) ||
        hectares <= 0
    ) {

        resultado.style.color =
        "red";

        resultado.innerHTML =
        "⚠️ Digite um valor válido.";

        return;

    }

    const economia =
    hectares * 50;

    resultado.style.color =
    "#15803d";

    resultado.innerHTML =

    `💧 Economia estimada: <strong>${economia.toLocaleString("pt-BR")} litros</strong> de água.`;

}

// ======================================
// QUIZ
// ======================================

let acertosQuiz = 0;

function responderQuiz(correta) {

    const resultado =
    document.getElementById(
        "quizResultado"
    );

    if (!resultado) return;

    if (correta) {

        acertosQuiz++;

        resultado.innerHTML =
        "✅ Resposta correta!";

        resultado.style.color =
        "green";

    } else {

        resultado.innerHTML =
        "❌ Resposta incorreta.";

        resultado.style.color =
        "red";

    }

}

// ======================================
// GALERIA
// ======================================

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const imagens =
        document.querySelectorAll(
            ".galeria img"
        );

        imagens.forEach(img => {

            img.addEventListener(
                "click",
                () => {

                    imagens.forEach(
                        foto => {

                            if (
                                foto !== img
                            ) {

                                foto.classList.remove(
                                    "zoom"
                                );

                            }

                        }
                    );

                    img.classList.toggle(
                        "zoom"
                    );

                }
            );

        });

        mostrarCuriosidade();

        mostrarAba(
            "inicio"
        );

    }
);

// ======================================
// JOGO DRONE FORTE
// ======================================

let area;
let drone;

let pontos = 0;
let posX = 400;

let jogoIniciado = false;

let intervaloPlantas;

// ======================================
// INICIAR JOGO
// ======================================

function iniciarJogo() {

    if (jogoIniciado) return;

    area =
    document.getElementById("gameArea");

    drone =
    document.getElementById("drone");

    if (!area || !drone) {
        alert("Erro: gameArea ou drone não encontrados.");
        return;
    }

    jogoIniciado = true;

    posX = 400;

    drone.style.left =
    posX + "px";

    pontos = 0;

    document.getElementById(
        "pontos"
    ).innerText = pontos;

    let recorde =
    localStorage.getItem(
        "recordeDroneForte"
    );

    if (!recorde) {
        recorde = 0;
    }

    document.getElementById(
        "recorde"
    ).innerText = recorde;

    intervaloPlantas =
    setInterval(
        criarPlanta,
        1200
    );

}

// ======================================
// MOVIMENTO
// A = esquerda
// D = direita
// F = atirar
// ======================================

document.addEventListener(
    "keydown",
    (e) => {

        if (!jogoIniciado) return;

        // ESQUERDA

        if (
            e.key === "a" ||
            e.key === "A"
        ) {

            posX -= 25;

            if (posX < 0) {
                posX = 0;
            }

            drone.style.left =
            posX + "px";
        }

        // DIREITA

        if (
            e.key === "d" ||
            e.key === "D"
        ) {

            posX += 25;

            if (posX > 850) {
                posX = 850;
            }

            drone.style.left =
            posX + "px";
        }

        // TIRO

        if (
            e.key === "f" ||
            e.key === "F"
        ) {

            atirar();
        }

    }
);

// ======================================
// TIRO
// ======================================

function atirar() {

    const tiro =
    document.createElement("div");

    tiro.className = "tiro";

    tiro.innerHTML = "💦";

    tiro.style.position =
    "absolute";

    tiro.style.left =
    (posX + 20) + "px";

    tiro.style.bottom =
    "70px";

    tiro.style.fontSize =
    "30px";

    tiro.style.zIndex =
    "999";

    area.appendChild(tiro);

    let altura = 70;

    const mover =
    setInterval(() => {

        altura += 15;

        tiro.style.bottom =
        altura + "px";

        verificarAcerto(tiro);

        if (altura > 600) {

            clearInterval(mover);

            tiro.remove();
        }

    }, 20);

}

// ======================================
// PLANTAS
// ======================================

function criarPlanta() {

    if (!jogoIniciado) return;

    const planta =
    document.createElement("div");

    planta.className =
    "planta";

    planta.innerHTML =
    "🌱";

    planta.style.position =
    "absolute";

    planta.style.left =
    Math.random() * 850 +
    "px";

    planta.style.top =
    "-50px";

    planta.style.fontSize =
    "40px";

    area.appendChild(planta);

    const cair =
    setInterval(() => {

        let topo =
        parseInt(
            planta.style.top
        );

        topo += 4;

        planta.style.top =
        topo + "px";

        if (topo > 520) {

            clearInterval(cair);

            planta.remove();

        }

    }, 20);

}

// ======================================
// COLISÃO
// ======================================

function verificarAcerto(tiro) {

    const plantas =
    document.querySelectorAll(
        ".planta"
    );

    plantas.forEach(planta => {

        const t =
        tiro.getBoundingClientRect();

        const p =
        planta.getBoundingClientRect();

        const colidiu =

            t.left < p.right &&
            t.right > p.left &&
            t.top < p.bottom &&
            t.bottom > p.top;

        if (colidiu) {

            planta.remove();
            tiro.remove();

            pontos += 10;

            document.getElementById(
                "pontos"
            ).innerText = pontos;

            let recorde =
            Number(
                localStorage.getItem(
                    "recordeDroneForte"
                )
            ) || 0;

            if (pontos > recorde) {

                recorde = pontos;

                localStorage.setItem(
                    "recordeDroneForte",
                    recorde
                );

                document.getElementById(
                    "recorde"
                ).innerText =
                recorde;

            }

        }

    });

}

// ======================================
// REINICIAR JOGO
// ======================================

function reiniciarJogo() {

    clearInterval(
        intervaloPlantas
    );

    document
    .querySelectorAll(
        ".planta"
    )
    .forEach(planta => {

        planta.remove();

    });

    document
    .querySelectorAll(
        ".tiro"
    )
    .forEach(tiro => {

        tiro.remove();

    });

    jogoIniciado = false;

    iniciarJogo();

}