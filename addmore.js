

const ChangeColor = document.getElementById('arrowWrapper3')

function alterarCor(event){
  console.log(event.key)
  if(event.Key == 'a'){
    console.log('LLLLLLLLLLLLLLL')
  }else if(event.key ==='b'){
    ChangeColor.classList.remove('blue')
  }
}


window.addEventListener('keydown',alterarCor)


//NAVIGAÇÃO

const navegacao = document.querySelectorAll('.navegation .Nav-opcao')
const conteudo = document.querySelectorAll('.direito [class^="Show"]')

function ShowHideDiv(index){

  navegacao.forEach( (item) => {
    item.classList.remove('AtivoNav')
  })

  conteudo.forEach( (item) => {
    item.classList.remove('aparecerconteudo')
  })

  navegacao[index].classList.add('AtivoNav')
  conteudo[index].classList.add('aparecerconteudo')
}

navegacao.forEach( (item,index) => {

  item.addEventListener('click', () => {
    ShowHideDiv(index)
  })
})

//BOT

const jogos = document.querySelector('.trein-jogos')
const desafios = document.querySelectorAll('.Challenge')
const botaodesafio = document.querySelectorAll('.buttomBot')


function Challenge(index){

  jogos.classList.add('desaparecerconteudo')

  desafios.forEach((item) => {
    item.classList.add('desaparecerconteudo')
  })

  desafios[index].classList.remove('desaparecerconteudo')
  desafios[index].classList.add('aparecerconteudo')
  
}

botaodesafio.forEach((item,index) => {
  item.addEventListener('click', () => {
    Challenge(index)
  })
})

const voltar = document.querySelectorAll('.voltar img')
function Clickvoltar(){

  desafios.forEach((item) => {
    item.classList.remove('aparecerconteudo')
    item.classList.add('desaparecerconteudo')
  })

  jogos.classList.remove('desaparecerconteudo')
  jogos.classList.add('aparecerconteudo')
}

voltar.forEach((item) => {

  item.addEventListener('click',Clickvoltar)
})

//Color botao Inverter




//Animacao Gear 

const animationgear = document.querySelector('.gear')

function gear(){
  animationgear.classList.toggle('rotated');
}
  

animationgear.addEventListener('click',gear)


//Alterar Fundo

const itemFundo = document.querySelectorAll('.item-fundo')
const container = document.getElementById('container')


function alterarfundo(index){
  container.classList.remove('background1')
  container.classList.remove('background2')
  container.classList.remove('background3')
  container.classList.remove('background4')
  container.classList.remove('background5')

  if(index == 0 ){
    container.classList.add('background1')
  }else if(index == 1){
    container.classList.add('background5')
  }else if(index ==2){
    container.classList.add('background2')
  }else if(index ==3){
    container.classList.add('background3')
  }else if(index ==4){
    container.classList.add('background4')
  }
}


itemFundo.forEach((item,index) => {

  item.addEventListener('click',() => {
    alterarfundo(index)
  })
})






