

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

const itemFundo = document.querySelectorAll('.fundo')
const container = document.getElementById('container')


function alterarfundo(index){
  container.classList.remove('background1')
  container.classList.remove('madeira0')
  container.classList.remove('madeira1')
  container.classList.remove('madeira2')
  container.classList.remove('madeira3')
  container.classList.remove('madeira4')
  container.classList.remove('madeira5')
  container.classList.remove('outro')
  container.classList.remove('outro2')
  container.classList.remove('outro3')
  container.classList.remove('outro4')
  container.classList.remove('outro5')
  container.classList.remove('outro6')
  container.classList.remove('outro7')

  if(index == 0 ){
    container.classList.add('madeira0')
  }else if(index == 1){
    container.classList.add('madeira1')
  }else if(index ==2){
    container.classList.add('madeira2')
  }else if(index ==3){
    container.classList.add('madeira3')
  }else if(index ==4){
    container.classList.add('madeira4')
  }else if(index ==5){
    container.classList.add('madeira5')
  }else if(index ==6){
    container.classList.add('outro')
  }else if(index ==7){
    container.classList.add('outro1')
  }else if(index ==8){
    container.classList.add('outro2')
  }else if(index ==9){
    container.classList.add('outro3')
  }else if(index ==10){
    container.classList.add('outro4')
  }else if(index ==11){
    container.classList.add('outro5')
  }else if(index ==12){
    container.classList.add('outro6')
  }else if(index ==13){
    container.classList.add('outro7')
  }
}


itemFundo.forEach((item,index) => {

  item.addEventListener('click',() => {
    alterarfundo(index)
  })
})






