//container
const getDiv = document.querySelector('.container');
console.log(getDiv)
getDiv.style.margin= 'auto'; // to center
getDiv.style.width = '50%' //width adjustment
getDiv.style.cursor = 'default'

//year color change
const year = document.querySelector('.year')
year.style.fontSize = '60px' //font size

const colorArr = ['red','green','blue','yellow','pink','violet']
let colorIndex = 0 ;
function colorChange(){
  year.style.color = colorArr[colorIndex];
  colorIndex = (colorIndex+1) % colorArr.length //for chainging
}
setInterval(colorChange,1000)

//center div2 elements
const getDiv2 = document.querySelector('.container2')
getDiv2.style.textAlign = 'center'
 

//h2
const getH2 = document.querySelector('h2')
getH2.style.color = 'purple'
getH2.style.textDecoration = 'underline'


// updating time
function setTime(){
  const date = new Date()
  const optionDate = { month: 'long' , day: '2-digit', year: 'numeric'} // to remove 'at seperating date and time'
  const optionTime = { hour: '2-digit', minute: '2-digit', second: '2-digit'}
  const formattedDate = date.toLocaleString('en-US', optionDate)
  const formattedTime = date.toLocaleString( 'en-US', optionTime)
  const formattedDateTime = `${formattedDate} ${formattedTime}`
  const getTime = document.querySelector('.time')
  getTime.textContent = formattedDateTime

}
setInterval(setTime,1000)
setTime() // initial call

//time bg color change
const getTime = document.querySelector('.time')
getTime.style.display = 'inline-block' //div take full width so doing it
getTime.style.padding = '5px'
const timeColorArr = ['yellow','lightgray','red','green','orange','cyan']
let timeColorIndex = 0
 function colorTime(){
   getTime.style.backgroundColor = timeColorArr[timeColorIndex]
   timeColorIndex = (timeColorIndex+1) % timeColorArr.length
 }
 setInterval(colorTime,1000)

//list
//completed
const getListCompleted = document.querySelectorAll('.completed')
getListCompleted.forEach(list=>{ // if we add any list in completed class that color will also change to green
  list.style.backgroundColor = 'green'
  list.style.marginBottom = '5px'
  list.style.listStyleType = 'none'
  list.style.padding = '10px'
  list.style.paddingLeft = '15px'
  list.style.fontSize = '20px'
  list.style.fontWeight = 'bold'
})
//ongoing
const getListOngoing = document.querySelectorAll('.onGoing')
getListOngoing.forEach(list=>{
  list.style.backgroundColor = 'yellow'
  list.style.marginBottom = '5px'
  list.style.listStyleType = 'none'
  list.style.padding = '10px'
  list.style.paddingLeft = '15px'
  list.style.fontSize = '20px'
  list.style.fontWeight = 'bold'
}) 
//coming
const getListComing = document.querySelectorAll('.coming')
getListComing.forEach(list=>{
  list.style.backgroundColor = 'red'
  list.style.marginBottom = '5px'
  list.style.listStyleType = 'none'
  list.style.padding = '10px'
  list.style.paddingLeft = '15px'
  list.style.fontSize = '20px'
  list.style.fontWeight = 'bold'
})









