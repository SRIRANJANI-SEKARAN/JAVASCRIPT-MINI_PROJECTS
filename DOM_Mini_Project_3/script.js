import { countries } from "./countries.js";
const getPara = document.querySelector('.first')
getPara.innerHTML = `Total Number of countries: ${countries.length}`

//countries
const getDiv2 = document.querySelector('.container2')
countries.forEach(country=>{
  const getDivs = document.createElement('div')
  getDivs.innerText = country
  getDiv2.appendChild(getDivs)
  getDivs.setAttribute('class','country')
})