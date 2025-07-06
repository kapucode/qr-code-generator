// Seleções 
const btnColor = document.querySelector("#color-mode-btn")
const body = document.querySelector("body")

// Variáveis 

// Funções
const btnColorAlternate = () => {
  switch (localStorage.getItem('color')) {
    case 'black':
      btnColor.style.color = 'black'
      break;
    case 'white':
      btnColor.style.color = 'white'
      break;
  }
}

const colorAdd = () => {
  switch (localStorage.getItem('color')) {
    case 'black':
      body.classList.add('black')
      break;
    case 'white':
      body.classList.remove('black')
      break;
    default:
      body.classList.add('black')
      break;
  }
  btnColorAlternate()
}

const alternateMode = () => {
  switch (localStorage.getItem('color')) {
    case 'black':
      localStorage.setItem('color', 'white')
      break;
    case 'white':
      localStorage.setItem('color', 'black')
      break;
    default:
      localStorage.setItem('color', 'white')
      break;
  }
  colorAdd()
}

// Eventos
btnColor.addEventListener("click", (e) => {
  e.preventDefault()
  alternateMode()
})

// Inicialização
colorAdd()
