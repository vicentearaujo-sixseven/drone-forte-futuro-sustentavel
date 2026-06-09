// ======================================
// SISTEMA DE ABAS
// ======================================

function mostrarAba(id) {

    const abas = document.querySelectorAll(".aba");

    abas.forEach((aba) => {
        aba.classList.remove("ativa");
    });

    document.getElementById(id).classList.add("ativa");

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

    "💧 A agricultura de precisão ajuda a reduzir o desperdício de água.",

    "🌎 Drones ajudam a proteger o meio ambiente através do uso inteligente de recursos.",

    "📡 Sensores conseguem identificar problemas antes mesmo de serem visíveis.",

    "🌱 A tecnologia está transformando o futuro da agricultura.",

    "🚜 A agricultura de precisão aumenta a produtividade e reduz custos.",

    "☀️ Os drones conseguem gerar mapas detalhados das plantações."

];

let indiceCuriosidade = 0;

function mostrarCuriosidade() {

    const elemento =
    document.getElementById("curiosidadeDia");

    if (!elemento) return;

    elemento.innerHTML =
    curiosidades[indiceCuriosidade];

    indiceCuriosidade++;

    if (indiceCuriosidade >= curiosidades.length) {
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
    document.querySelectorAll(".numero h3");

    numeros.forEach(numero => {

        const texto =
        numero.innerText;

        const alvo =
        parseInt(texto);

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

    const hectares =
    Number(
        document.getElementById("hectares").value
    );

    const resultado =
    document.getElementById("resultado");

    if (
        hectares <= 0 ||
        isNaN(hectares)
    ) {

        resultado.innerHTML =
        "⚠️ Digite um valor válido.";

        resultado.style.color = "red";

        return;
    }

    const economia =
    hectares * 50;

    resultado.style.color =
    "#15803d";

    resultado.innerHTML =

    `💧 Sua propriedade pode economizar aproximadamente <strong>${economia.toLocaleString("pt-BR")}</strong> litros de água utilizando tecnologias de precisão.`;
}

// ======================================
// QUIZ
// ======================================

let pontuacaoQuiz = 0;

function responderQuiz(correta) {

    const resultado =
    document.getElementById(
        "quizResultado"
    );

    if (correta) {

        pontuacaoQuiz++;

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
// GALERIA ZOOM
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

                    if (
                        img.classList.contains(
                            "zoom"
                        )
                    ) {

                        img.classList.remove(
                            "zoom"
                        );

                    } else {

                        imagens.forEach(
                            foto => {

                                foto.classList.remove(
                                    "zoom"
                                );

                            }
                        );

                        img.classList.add(
                            "zoom"
                        );
                    }
                }
            );

        });

    }
);

// ======================================
// MINI GAME DRONE FORTE
// ======================================

let area;
let drone;

let pontos = 0;

let posX = 420;

let jogoIniciado = false;

let intervaloPlantas;

// ======================================

function iniciarJogo() {

    if (jogoIniciado) return;

    jogoIniciado = true;

    area =
    document.getElementById(
        "gameArea"
    );

    drone =
    document.getElementById(
        "drone"
    );

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
        1000
    );
}

// ======================================
// MOVIMENTO
// ======================================

document.addEventListener(
    "keydown",
    (e) => {

        if (!jogoIniciado) return;

        if (e.key === "a") {

            posX -= 25;

            if (posX < 0) {
                posX = 0;
            }

            drone.style.left =
            posX + "px";
        }

        if (e.key === "d") {

            posX += 25;

            if (posX > 840) {
                posX = 840;
            }

            drone.style.left =
            posX + "px";
        }

        if (e.code === "f") {

            atirar();
        }

    }
);

// ======================================
// TIROS
// ======================================

function atirar() {

    const tiro =
    document.createElement(
        "div"
    );

    tiro.className =
    "tiro";

    tiro.innerHTML =
    "💦";

    tiro.style.left =
    (posX + 20) + "px";

    tiro.style.bottom =
    "70px";

    area.appendChild(
        tiro
    );

    const mover =
    setInterval(() => {

        let atual =
        parseInt(
            tiro.style.bottom
        );

        tiro.style.bottom =
        (atual + 15) + "px";

        verificarAcerto(
            tiro
        );

        if (atual > 520) {

            clearInterval(
                mover
            );

            tiro.remove();
        }

    }, 20);
}

// ======================================
// PLANTAS
// ======================================

function criarPlanta() {

    const planta =
    document.createElement(
        "div"
    );

    planta.className =
    "planta";

    planta.innerHTML =
    "🌱";

    planta.style.left =
    Math.random() * 850 +
    "px";

    planta.style.top =
    "-50px";

    area.appendChild(
        planta
    );

    const cair =
    setInterval(() => {

        let atual =
        parseInt(
            planta.style.top
        );

        planta.style.top =
        (atual + 4) + "px";

        if (atual > 520) {

            clearInterval(
                cair
            );

            planta.remove();
        }

    }, 20);
}

// ======================================
// COLISÃO
// ======================================

function verificarAcerto(
    tiro
) {

    document
    .querySelectorAll(
        ".planta"
    )
    .forEach(planta => {

        const t =
        tiro.getBoundingClientRect();

        const p =
        planta.getBoundingClientRect();

        if (

            t.left < p.right &&
            t.right > p.left &&
            t.top < p.bottom &&
            t.bottom > p.top

        ) {

            planta.remove();

            tiro.remove();

            pontos += 10;

            document.getElementById(
                "pontos"
            ).innerText =
            pontos;

            let recorde =
            Number(
                localStorage.getItem(
                    "recordeDroneForte"
                )
            ) || 0;

            if (
                pontos > recorde
            ) {

                localStorage.setItem(
                    "recordeDroneForte",
                    pontos
                );

                document.getElementById(
                    "recorde"
                ).innerText =
                pontos;
            }

        }

    });

}

// ======================================
// INICIALIZAÇÃO
// ======================================

document.addEventListener(
    "DOMContentLoaded",
    () => {

        mostrarCuriosidade();

        mostrarAba(
            "inicio"
        );

    }
);