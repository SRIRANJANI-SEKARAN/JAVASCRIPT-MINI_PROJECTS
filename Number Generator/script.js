const inputGroup = document.querySelector('.inputGrp')
const input = document.querySelector('input')
const button = document.querySelector('button')
let error = document.querySelector('.error')
console.log(error)

button.addEventListener('click',()=>{
  let value = input.value.trim()
  let pattern = /^\d+$/
 /*  value = parseInt(value) */
  if (pattern.test(value)){
    error.innerHTML = ' '
    numberGenerator(value)
    input.classList.remove('errorInp')
  }
  else{
    error.innerHTML = `*Enter a Valid Number`
    input.classList.add('errorInp')
  }
  
})

//numbers
const container2Div = document.querySelector('.container2')
function numberGenerator(count){
  container2Div.innerHTML = '';
  for (let i=0; i <= count; i++){
    let createNumberDiv = document.createElement('div')
    createNumberDiv.classList.add('numberDiv')
    createNumberDiv.innerHTML = i
    container2Div.appendChild(createNumberDiv)
    if (i % 2 === 0){
      createNumberDiv.style.backgroundColor = 'green'
      }
    else {
      createNumberDiv.style.backgroundColor = 'red'
    }
    
    if (i > 1){
      let isPrime = true;
      for (let j = 2; j <= Math.sqrt(i); j++){
        if (i % j === 0){
          isPrime = false
          break
        }
      }
      if (isPrime){
        createNumberDiv.style.backgroundColor = 'yellow'
      }
 
    }
  }
}

window.onload = ()=>{
  const defaultCount = 50
  input.innerHTML = ''
  numberGenerator(defaultCount)
}

