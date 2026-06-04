// =====================
// SIMULADOR DE ECONOMIA
// =====================

const botaoCalcular = document.getElementById("calcBtn");

botaoCalcular.addEventListener("click", function(){

    let hectares =
    Number(document.getElementById("hectares").value);

    let economia = hectares * 50;

    document.getElementById("resultado").innerHTML =
    `Sua propriedade pode economizar aproximadamente ${economia} litros de água utilizando tecnologias de precisão.`;

});


// =====================
// QUIZ
// =====================

function verificarResposta(correta){

    const resultado =
    document.getElementById("quizResultado");

    if(correta){

        resultado.innerHTML =
        "✅ Correto! Os drones agrícolas ajudam a reduzir desperdícios.";

        resultado.style.color = "green";

    }else{

        resultado.innerHTML =
        "❌ Resposta incorreta. Tente novamente.";

        resultado.style.color = "red";
    }
}


// =====================
// CURIOSIDADES
// =====================

const curiosidades = [

"Um drone pode monitorar dezenas de hectares em poucos minutos.",

"Drones ajudam a identificar pragas mais rapidamente.",

"O uso de drones reduz desperdícios de recursos.",

"Mapeamentos aéreos aumentam a precisão das decisões no campo.",

"A agricultura de precisão ajuda a preservar o meio ambiente."
];

let indice = 0;

const botaoCuriosidade =
document.getElementById("curiosidadeBtn");

botaoCuriosidade.addEventListener("click", function(){

    indice++;

    if(indice >= curiosidades.length){
        indice = 0;
    }

    document.getElementById("curiosidade").innerHTML =
    curiosidades[indice];

});
