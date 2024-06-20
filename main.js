const botoes = document.querySelectorAll(".botao");
const conteudo = document.querySelectorAll(".aba-conteudo");
const contador = document.querySelectorAll(".contador");
contador[0].textContent = "Olá"
const tempoOobjetivo1 = new Data (2025,1,1,00,00)
const tempoOobjetivo2 = new Data (2025,2,1,00,00)
const tempoOobjetivo3 = new Data (2026,0,1,00,00)
const tempoOobjetivo4 = new Data (2027,0,1,00,00)

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
