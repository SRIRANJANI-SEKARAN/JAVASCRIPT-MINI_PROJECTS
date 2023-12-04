/* const gravity = [3.7, 8.87, 3.71, 24.79, 10.44, 8.69, 11.15, 0.62, 1.62]
const [mercuryG, venusG, marsG, jupiterG, saturnG, uranusG, neptuneG, PlutoG, moonG] = gravity
console.log(mercuryG)

function weightCalculator(mass,gravity){
  let weight = (mass*gravity).toFixed(2)
  return console.log(weight)
}
/* let planet = (prompt('enter planet')).toLowerCase()
let mass = parseInt(prompt('enter weight')) 
switch (planet){
  case 'mercury':
  weightCalculator(mass,mercuryG)
  break;
  case 'venus':
  weightCalculator(mass,venusG)
  break;
  case 'mars':
  weightCalculator(mass,marsG)
  break;
  case 'jupiter':
  weightCalculator(mass,jupiterG)
  break;
  case 'saturn':
  weightCalculator(mass,saturnG)
  break;
  case 'uranus':
  weightCalculator(mass,uranusG)
  break;
  case 'neptune':
  weightCalculator(mass,neptuneG)
  break;
  case 'PlutoG':
  weightCalculator(mass,PlutoGG)
  break;
  case 'moon':
  weightCalculator(mass,moonG)
  break;
  default:
    console.log('Enter a valid data')
}
 */
//---------------getting elements from html------------------------

const getMass = document.querySelector('.mass')
const getOptions = document.querySelector('.options')
const getButton = document.querySelector('.button')
const getMain = document.querySelector('main')

//input mass 
let massValue = ''
getMass.addEventListener('input',(e)=>{
  let massPattern = /^\d+$/
 
  massValue = e.target.value
  if (massPattern.test(massValue)){
    getMass.classList.remove('massError')
    massValue = parseInt(e.target.value)
  }
  else{
    if(!massPattern.test(massValue) && massValue !== '' ){
      massValue = 'error'
    getMass.classList.add('massError')
    }
    else if(massValue === ''){
      massValue = 'error'
      getMass.classList.remove('massError')

    }
    
  }
  console.log(typeof massValue, massValue)
})

//select planet
let planet = 'none'
getOptions.addEventListener('change',(e)=>{
  planet = e.target.value
  console.log(planet)
})

//weight button
getButton.addEventListener('click',()=>{
  console.log(massValue)
  if(massValue === '' || massValue === 'error'){
    getMain.innerHTML = ''
    
    const massErrorDiv = document.createElement('div')
    massErrorDiv.classList.add('massErrorDiv')
    massErrorDiv.innerHTML = 'Mass is required'
    getMain.appendChild(massErrorDiv)
  }
  else if (planet === 'none' & typeof massValue === 'number'){
    getMain.innerHTML = ''
    
    const massErrorDiv = document.createElement('div')
    massErrorDiv.classList.add('massErrorDiv')
    massErrorDiv.innerHTML = 'You did not choose a planet yet'
    getMain.appendChild(massErrorDiv)

  }
 else{
  getMain.innerHTML = `<img src='./images/${planet}.png' class="planetsImg" />`

//content container
  getMain.classList.add('planetsMain')
  const planetDiv = document.createElement('div') 
  planetDiv.classList.add('planetDiv')
  planetDiv.innerHTML = ''

//heading
  const topicDiv = document.createElement('div')
  topicDiv.classList.add('topicDiv')
  topicDiv.innerHTML = `The weight of the object on <span class="planetName">${planet.toUpperCase()}</span>`
  planetDiv.appendChild(topicDiv)

  //weight calculation
  const gravity = [3.7, 8.87, 3.71, 24.79, 10.44, 8.69, 11.15, 0.62, 9.8, 1.62]
  const [mercuryG, venusG, marsG, jupiterG, saturnG, uranusG, neptuneG, plutoG, earthG, moonG] = gravity
  let mass = massValue
  switch (planet){
    case 'mercury':
    weightCalculator(mass,mercuryG)
    break;
    case 'venus':
    weightCalculator(mass,venusG)
    break;
    case 'mars':
    weightCalculator(mass,marsG)
    break;
    case 'jupiter':
    weightCalculator(mass,jupiterG)
    break;
    case 'saturn':
    weightCalculator(mass,saturnG)
    break;
    case 'uranus':
    weightCalculator(mass,uranusG)
    break;
    case 'neptune':
    weightCalculator(mass,neptuneG)
    break;
    case 'pluto':
    weightCalculator(mass,plutoG)
    break;
    case 'moon':
    weightCalculator(mass,moonG)
    break;
    case 'earth':
    weightCalculator(mass,earthG)
    break;
    
  }
  function weightCalculator(mass,gravity){
    let weight = (mass*gravity).toFixed(2)
    let weightPara = document.createElement('p')
    weightPara.classList.add('weightPara')
    weightPara.innerHTML = `${weight} N`
    let para = planetDiv.appendChild(weightPara)
    return para
  }
  getMain.appendChild(planetDiv)
 }
})


//onload
window.onload = ()=>{
  getMain.innerHTML = `<img src='./images/earth.png' class="planetImage" />`
}

