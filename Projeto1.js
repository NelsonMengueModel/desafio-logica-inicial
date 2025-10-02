// Variáveis do herói
let nomeHeroi = "Arthas"
let Pontuacao = 1500  // Experiência do herói
let valorNivel = " "
console.log(nomeHeroi)

// Estrutura de decisão para classificar o herói
if(Pontuacao === 1000){
  valorNivel =  "Ferro"
   console.log(valorNivel)
}else if(1001 >= Pontuacao <= 2000){
    valorNivel = "Bronze"
}else if(2001 >= Pontuacao <= 5000){
    valorNivel = "Prata Ouro"
}else if(Pontuacao <= 8000){
    valorNivel = "Platina Diamante"
}else if(8001 >= Pontuacao <= 9000){
   valorNivel = "Ascendente"
}else{
    valorNivel = "Imortal ou Radiante"  // Extra (caso Pontuacao ultrapasse 9000)
 }
// Resultado
console.log("O herói!" + nomeHeroi+ " está no nível "+ valorNivel + " com "+ Pontuacao + " XP")
