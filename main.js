const botoes = document.querySelectorAll(".botao");
const conteudo = document.querySelectorAll(".aba-conteudo");
const contador = document.querySelectorAll(".contador");
const tempoOobjetivo1 = new Date (2025,1,1,00,00)
const tempoOobjetivo2 = new Date (2025,2,1,00,00)
const tempoOobjetivo3 = new Date (2026,0,1,00,00)
const tempoOobjetivo4 = new Date (2027,0,1,00,00)

let agora = new Date ();
contador[0].textContent = tempoOobjetivo1 - agora
contador[1].textContent = tempoOobjetivo2 - agora
contador[2].textContent = tempoOobjetivo3 - agora
contador[3].textContent = tempoOobjetivo4 - agora

for (let i = 0; i < botoes.length; i++){
    botoes [i].onclick = function(){
        for (let j = 0; j < botoes.length; j++ ){
            botoes[j].classList.remove("ativo")
            conteudo[j].classList.remove("ativo")
        }
        botoes[i].classList.add("ativo")
        conteudo[i].classList.add("ativo")
    }
}
