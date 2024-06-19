const caixaPrincipal = document.queryselector("caixa-principal")
const caixaPerguntas = document.querySelector("caixa-perguntas")
const caixaAlternativas = document.querySelector(".caixa-resultado")
const caixaResultado = document.querySelector (".caixa-resultado")
const textoResultado = document.querySelector =(".texto-resultado")
                                                
const perguntas = [
  {
    enunciado:"quem é mais calvo?",
    alternativas:[
      {  
 texto: "hyronei",
  afirmação: "afirmação",
      }
      {
      texto:"marcos" 
  afirmação:"afirmaçao",
      }
      ]
        
    ]
  },
   {
    enunciado:"voce é sigma ou clt?",
    alternativas:[
  "sigma",
  "CLT",
    ]
  }, 
   {
    enunciado:"bk ou mac?",
    alternativas:[
  "mac",
  "bk",
    ]
  }, 
   {
    enunciado:"ficaria com o cr7?",
    alternativas:[
  "sim",
  "não",
    ]
  }, 
   {
    enunciado:"bolsonaro ou lula?",
    alternativas:[
  "sim",
  "não",
    ]
  }, 
   {
    enunciado:"Pergunta1",
    alternativas:[
      let atual = 0;
let perguntaAtual;
let perguntaAtual;
let historiaFinal= "";

function mostraPergunta() {
if(atual >= perguntas.lenght){
  mostraResultado();
  return;
}
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
      botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}
function respostaSelecionada(opcaoSelecionada){
  const afirmacoes = opcaoSelecionada.afirmacoes
  historiaFinal += afirmacoes + "";
  atual++;
  mostraPergunta();
}
function mostraResultado(){
  caixaPerguntas.textCOntent= "";
}
mostraPergunta();
  "alternativas",
  "alternativas 2",
    ]
  }, 
];
