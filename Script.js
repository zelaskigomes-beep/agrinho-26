const darkBtn = document.getElementById("darkBtn");

darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

function resposta(correta){

    const resultado =
    document.getElementById("resultado");

    if(correta){
        resultado.innerHTML =
        "✅ Correto! Os drones ajudam a monitorar plantações.";
        resultado.style.color = "green";
    }
    else{
        resultado.innerHTML =
        "❌ Resposta incorreta. Tente novamente.";
        resultado.style.color = "red";
    }
}

function animarNumero(id, final){

    let numero = 0;

    const elemento =
    document.getElementById(id);

    const intervalo = setInterval(() => {

        numero += Math.ceil(final / 100);

        if(numero >= final){
            numero = final;
            clearInterval(intervalo);
        }

        elemento.innerHTML =
        numero.toLocaleString("pt-BR");

    },20);
}

animarNumero("prod", 50000);
animarNumero("arvores", 12000);
animarNumero("tecnologiaNum", 250);