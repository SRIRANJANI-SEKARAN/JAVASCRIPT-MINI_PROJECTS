import { countriesData } from "./countries.js";

//All languages array
let languages = []
countriesData.forEach(countries=>{
  countries.languages.forEach(lang=>{
    languages.push(lang)
  })
})

let freq = {}

languages.forEach((lang)=>{ 
    if (!freq.hasOwnProperty(lang)){

      freq[lang] = 1
    }
    else if (freq.hasOwnProperty(lang)){
      freq[lang]++
    }
  }

)
let freqArr = Array.from(Object.entries(freq))
freqArr.sort((a,b)=>{
 return b[1]-a[1]
})

freqArr.slice(0,10)
let slicedLangArr = freqArr.slice(0,10)
let totalNoOfLang = freqArr.length


//population
let populationArr = countriesData.map(country=>([country.name,country.population]))
populationArr.sort((a,b)=>b[1]-a[1])
let totalPopulation = populationArr.reduce((acc,crr)=>{
  acc+=crr[1]
  return acc
},0)
let world = ['World',totalPopulation]
populationArr.unshift(world)
let slicedPopArr = populationArr.slice(0,11)
console.log(slicedPopArr)




//dom
const getSubHeading = document.querySelector('.subHeading')
getSubHeading.innerHTML = `Currently we have ${countriesData.length} Countries`

//buttons
const populationBtn = document.querySelector('.populationBtn')
const languagesBtn = document.querySelector('.languagesBtn')

//eventListeners
//population
populationBtn.addEventListener('click',()=>{
  const getPopLangDiv = document.querySelector('.popLang')
  getPopLangDiv.innerHTML = '10 most populated countries in the World'
  getUl.innerHTML = ''
  events(slicedPopArr,slicedPopArr[0][1])
})

//lang
languagesBtn.addEventListener('click',()=>{
  const getPopLangDiv = document.querySelector('.popLang')
  getPopLangDiv.innerHTML = '10 most spoken languages in the World'
  getUl.innerHTML = ''
  events(slicedLangArr,totalNoOfLang)
})
 
const getUl = document.querySelector('ul')
function events (array,total){

  
  for (let i = 0; i < array.length; i++){
  const span1 = document.createElement('span')
  span1.classList.add('span1')

  const span2 = document.createElement('span')
  span2.classList.add('span2')

  const span3 = document.createElement('span')
  span3.classList.add('span3')
  /* const miniSpan1 = document.createElement('span')
  
  miniSpan1.classList.add('miniSpan1')
  const miniSpan2 = document.createElement('span')
  miniSpan2.classList.add('miniSpan2')
  /* miniSpan1.innerHTML = 'ji' 

  miniSpan1.appendChild(miniSpan2)
  span2.appendChild(miniSpan1) */

    console.log(array)
    let createLi = document.createElement('li')
    createLi.classList.add('createdLi')
    span1.innerHTML = array[i][0]
    
   /*  miniSpan1.style.width = '90%'
    miniSpan1.style.backgroundColor = 'red' */
    let bar = (array[i][1] / total) * 100;
    console.log(typeof bar)
    /* miniSpan2.innerHTML = ' .'
    miniSpan2.style.background = 'yellow';
    miniSpan2.style.width = `${bar}%`; */
    span2.style.width = `${bar}%`;
    span2.style.backgroundColor = 'orange'

    span3.innerHTML = array[i][1]

    createLi.appendChild(span1)
    createLi.appendChild(span2)
    createLi.appendChild(span3)
    createLi.style.listStyleType = 'none'
    
    getUl.appendChild(createLi)
  }
  
}

window.onload = ()=>{
  const getPopLangDiv = document.querySelector('.popLang')
  getPopLangDiv.innerHTML = '10 most populated countries in the World'
  events(slicedPopArr,slicedPopArr[0][1])
}