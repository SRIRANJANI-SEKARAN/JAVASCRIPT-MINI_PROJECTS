import { countries } from "./countries.js";
const getCount = document.querySelector('.count')
getCount.innerHTML = `Total Number of Countries: ${countries.length}` 

const getSearchPara = document.querySelector('.search')


const getInput = document.querySelector('input')

const getStartLetterBtn = document.querySelector('.startLetter')
getStartLetterBtn.classList.add('getStartLetterBtn')

const getAnyLetterBtn = document.querySelector('.anyLetter')
getAnyLetterBtn.classList.add('getAnyLetterBtn')

//sequence
const getsequenceBtn = document.querySelector('.sequence')

 

//starting word
    let inputValue = ''
getStartLetterBtn.addEventListener('click',()=>{
  btnClrChange(getStartLetterBtn, getAnyLetterBtn, getsequenceBtn)
  getInput.value = ""
  countriesFunc(countries)
  getInput.addEventListener('input',(e)=>{
    inputValue = e.target.value
    console.log(inputValue)

    let filterArr = countries.filter((country)=>{
      return country.toLowerCase().startsWith(inputValue)
    })
    if (inputValue === ''){
      getSearchPara.innerHTML = ''
    }else{
      getSearchPara.innerHTML = `Countries Starts With <span class="letter">${inputValue}</span> are <span class="countryCount">${filterArr.length}</span>`
    }
    
    countriesFunc(filterArr)
  })
    


})

//search any word
getAnyLetterBtn.addEventListener('click',()=>{
  btnClrChange(getAnyLetterBtn, getStartLetterBtn, getsequenceBtn)
  getInput.value = ""
  countriesFunc(countries)
  getInput.addEventListener('input',(e)=>{

    inputValue = e.target.value
    console.log(inputValue)

    let filterArr = []
    countries.forEach((country)=>{
  
      if (country.toLowerCase().includes(inputValue)){
        
        filterArr.push(country) 
      }
      
    })
    if (inputValue === ''){
      getSearchPara.innerHTML = ''
    }else{
      getSearchPara.innerHTML = `Countries Containg <span class="letter">${inputValue}</span> are <span class="countryCount">${filterArr.length}</span>`
    }
    console.log(filterArr)
    countriesFunc(filterArr)
  })
})

getsequenceBtn.addEventListener('click',()=>{
  btnClrChange(getsequenceBtn, getStartLetterBtn, getAnyLetterBtn)

})

//sequence
let count = 0
getsequenceBtn.addEventListener('click',()=>{
  count++
  if (count % 2 !== 0){
    getsequenceBtn.innerHTML = `Z -> A`
    countriesReverce(countries)
  }
  else{
    getsequenceBtn.innerHTML = 'A -> Z'
    countriesFunc(countries)
  }
  console.log(count)

})

//button
function btnClrChange(changeBtn, otherBtn1, otherBtn2){
  changeBtn.style.backgroundColor = 'rgb(69, 20, 114)'
  otherBtn1.style.backgroundColor = 'blueviolet'
  otherBtn2.style.backgroundColor = 'blueviolet'
}

//countries reverce function
function countriesReverce(array){
  getOverlayDiv.innerHTML = ''
  for (let i = array.length-1; i >= 0; i--){
    const createDiv = document.createElement('div')
    createDiv.classList.add('createDiv')
  
    createDiv.innerHTML = array[i]
  
    getOverlayDiv.appendChild(createDiv)
  }
}
//cuntries function
const getOverlayDiv = document.querySelector('.countryOverlay')
function countriesFunc(array){
  getOverlayDiv.innerHTML = ''
for (let i = 0; i < array.length; i++){
  const createDiv = document.createElement('div')
  createDiv.classList.add('createDiv')

  createDiv.innerHTML = array[i]

  getOverlayDiv.appendChild(createDiv)
}
}

window.onload = ()=>{
  countriesFunc(countries)
}