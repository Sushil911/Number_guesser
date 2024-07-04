let randomNumber=parseInt(Math.random()*100+1)
const userInput=document.querySelector('#guessField')
const submit=document.querySelector('#subt')
const prevGuesses=document.querySelector('.guesses')
const guessRemain=document.querySelector('.lastResult')
const lowOrHi=document.querySelector('.lowOrHi')
const startOver=document.querySelector('.resultParas')

const p=document.createElement('p')

let guessShown=[]
let numOfGuesses=1
let playGame=true

if (playGame){
  submit.addEventListener('click',function(e){
    e.preventDefault()
    const guess=parseInt(userInput.value)
    validateGuess(guess)
  })
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert('Please enter a valid number')
  }
  else if(guess<1){
    alert('Please enter a number greater than 1')
  }
  else if(guess>100){
    alert('Please enter number less than 100')
  }
  else if(isNaN(guess)){
    alert('Please enter a valid number')
  }
  else{
    guessShown.push()
    if(numOfGuesses>10){
      displayGuess(guess)
      displayMessage(`Game Over. Random Number was ${randomNumber}`)
      endGame()
    }
    else{
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess){
  if(guess===randomNumber){
    displayMessage(`You guessed it right`)
    endGame()
  }
  else if(guess<randomNumber){
    displayMessage(`Number is TOO low`)
  }
  else if(guess>randomNumber){
    displayMessage(`Number is TOO high`)
  }
}

function displayGuess(guess){
  userInput.value=''
  prevGuesses.innerHTML+=`${guess} `
  numOfGuesses++
  guessRemain.innerHTML=`${11-numOfGuesses}`
}

function displayMessage(message){
  lowOrHi.innerHTML=`<h2>${message}</h2>`
}

function endGame(){
  userInput.value=''
  userInput.setAttribute('disabled','')
  p.classList.add('button')
  p.innerHTML=`<h2 id='newGame'>Start New Game</h2>`
  startOver.appendChild(p)
  playGame=false
  newGame()
  
}

function newGame(){
  const newGameButton=document.querySelector('#newGame')
  newGameButton.addEventListener('click',function(e){
    randomNumber=parseInt(Math.random()*100+1)
    guessShown=[]
    numOfGuesses=1
    prevGuesses.innerHTML=''
    guessRemain.innerHTML=`${11-numOfGuesses}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame=true
  })
}