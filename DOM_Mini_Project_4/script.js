import {asabenehChallenges2020} from './challenge_info.js'
const getYear = document.querySelector('.year')
getYear.style.fontSize = '55px'
//colour change year
const yearColorarr = ['yellow','red','green','blue','cyan','violet','purple']
let colorIndex = 0;
function yearColorChange(){
  getYear.style.color = yearColorarr[colorIndex]
  colorIndex = (colorIndex+1) % yearColorarr.length
}
setInterval(yearColorChange,1000)

//date
function setTime(){
  const date = new Date()
  const option1 = { month: 'long', day: '2-digit', year:'numeric'}
  const option2 = { hour: '2-digit', minute: '2-digit', second: '2-digit'}
  const formattedDate = date.toLocaleString('en-US',option1)
  const formattedTime = date.toLocaleString('en-US',option2)
  const formattedDateTime = `${formattedDate} ${formattedTime}`
  const getTime = document.querySelector('.time')
  getTime.innerHTML = formattedDateTime
}
setInterval(setTime,1000)
setTime() // to avoid one sec delay in loading after page load

// date bg color change
const timeColorarr = ['red','yellow','lightgray','blue','green','violet','cyan','purple']
let timeColorIndex = 0
const getTime = document.querySelector('.time') //getting element
function timeColorchange(){
  getTime.style.backgroundColor = timeColorarr[timeColorIndex]
  timeColorIndex = (timeColorIndex+1) % timeColorarr.length
}
setInterval(timeColorchange,1000)

// summary
const getUl = document.querySelector('ul')
/* Object.keys(asabenehChallenges2020).forEach(bb=>console.log(asabenehChallenges2020[bb])) */

const challenge = asabenehChallenges2020.challenges
console.log(challenge[5].name)


for (let i = 0; i < challenge.length; i++){
  const createLi = document.createElement('li')
  createLi.setAttribute('class', 'mainList') // line list

  const createSpan1 = document.createElement('span') // 30 days of ...
  const topic = challenge[i].name
  createSpan1.appendChild(document.createTextNode(topic))
  createSpan1.setAttribute('class','course')

  const createSpan2 = document.createElement('span')
  createSpan2.setAttribute('class','status')
  const status = challenge[i].status
  createSpan2.innerHTML = status // for status
//bg color
  if(status === 'Done'){
    createLi.style.backgroundColor = 'lawngreen'
  }
  else if(status === 'Ongoing'){
    createLi.style.backgroundColor = 'yellow'
  }
  else{
    createLi.style.backgroundColor = 'red'
  }
  
  //text color
  if( status === 'Done' || status === 'Ongoing'){
    createSpan1.style.color = 'purple'
    createSpan1.style.textDecoration = 'underline'
    console.log('text color bliue')
  } 

  let createSpan3 = document.createElement('span') //for courses
  //const topics = challenge[i].topics
  createSpan3.setAttribute('class', 'topics')
  let createCourseUl = document.createElement('ul')
  for( let j = 0; j< challenge[i].topics.length; j++){
    let createCourseLi = document.createElement('li')
    createCourseLi.setAttribute('class','topicsLi')
    createCourseLi.appendChild(document.createTextNode(challenge[i].topics[j]))
    //const listItem = challenge[i].topics[j]
    //createCourseLi.appendChild() //course list
    createCourseUl.appendChild(createCourseLi)
  }
  let detailsElement = document.createElement('details')
  let summaryElement = document.createElement('summary')
  summaryElement.appendChild(document.createTextNode(challenge[i].name.slice(10))) //heading
  detailsElement.appendChild(summaryElement) //appending summary
  detailsElement.appendChild(createCourseUl) // appending course list

  createSpan3.appendChild(detailsElement) //appending details element to span

  //createLi.appendChild(document.createTextNode(topic)) // append child expects node items...to append text content
  createLi.appendChild(createSpan1) // 30 days of....
  createLi.appendChild(createSpan3) //details list
  createLi.appendChild(createSpan2) //status
  
  getUl.appendChild(createLi)

}


//---------------------------FOOTER-------------------------------------//
const getFooter = document.querySelector('footer')
const footerTopic = document.createElement('p')
footerTopic.classList.add('footerTopic')
footerTopic.innerHTML = `${asabenehChallenges2020.author.firstName} ${asabenehChallenges2020.author.lastName}` //name

//social links
let socialLinksDiv = document.createElement('div')
let socialLink = document.createElement('a')
socialLinksDiv.classList.add('socialLinks')
let social = asabenehChallenges2020.author.socialLinks
let links = ['https://cdn3.iconfinder.com/data/icons/picons-social/57/11-linkedin-128.png',
'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/x-social-media-logo-icon.png',
'https://cdn0.iconfinder.com/data/icons/font-awesome-brands-vol-1/512/github-square-64.png']

for (let i = 0; i < social.length-1; i++){
  socialLink.setAttribute('href',social[i].url)
  socialLink.setAttribute('target','_blank')//link open in next page

  let image = document.createElement('img')
  image.setAttribute('src',links[i])
  image.setAttribute('width', '30px')
  socialLink.appendChild(image)
}
socialLinksDiv.appendChild(socialLink) 

//bio
const bioPara = document.createElement('p')
bioPara.innerHTML = asabenehChallenges2020.author.bio
bioPara.classList.add('bioPara')


//div
let paraDiv = document.createElement('div')
paraDiv.classList.add('paraDiv')
//titles
let paraTitles = document.createElement('p')
let paraTitleSpan = document.createElement('span')
paraTitleSpan.innerHTML = `Titles`
paraTitles.appendChild(paraTitleSpan)

//title style
paraTitleSpan.classList.add('paraTitleSpan')


let titlesUl = document.createElement('ul')

for (let i = 0; i<asabenehChallenges2020.author.titles.length; i++){
  let titlesLi = document.createElement('li')
  titlesLi.classList.add('titlesLi')
  titlesLi.innerHTML = `${asabenehChallenges2020.author.titles[i][0]}${asabenehChallenges2020.author.titles[i][1]}`
  titlesUl.appendChild(titlesLi)
}
paraTitles.appendChild(titlesUl)
paraDiv.appendChild(paraTitles) // appending in div

//skills
let paraSkills = document.createElement('p')
let paraSkillsSpan = document.createElement('paraSkillsSpan')
paraSkillsSpan.innerHTML = 'Skills'
paraSkills.appendChild(paraSkillsSpan)
//skill class
paraSkillsSpan.classList.add('paraSkillsSpan')

let skillssUl = document.createElement('ul')
skillssUl.setAttribute('class','ulList')

for (let i = 0; i<asabenehChallenges2020.author.skills.length; i++){
  let skillsLi = document.createElement('li')
  skillsLi.innerHTML =asabenehChallenges2020.author.skills[i]
  skillsLi.classList.add('skillLi')
  
  skillssUl.appendChild(skillsLi)
}

console.log(paraDiv)
paraSkills.appendChild(skillssUl)
paraDiv.appendChild(paraSkills)

//qualifications
let paraQualifucation = document.createElement('p')
let paraQualificationsSpan = document.createElement('paraQualificationsSpan')
paraQualificationsSpan.innerHTML = 'Qualification'
paraQualifucation.appendChild(paraQualificationsSpan)

//qualification class
paraQualificationsSpan.classList.add('paraQualificationsSpan')

let qualificationsUl = document.createElement('ul')

for (let i = 0; i < asabenehChallenges2020.author.qualifications.length; i++){
  let qualificationsLi = document.createElement('li')
  qualificationsLi.innerHTML = asabenehChallenges2020.author.qualifications[i]
  qualificationsLi.classList.add('qualificationLi')
  qualificationsUl.appendChild(qualificationsLi)
}

paraQualifucation.appendChild(qualificationsUl)
paraDiv.appendChild(paraQualifucation)


//keywords
let keyWordsPara = document.createElement('p')
keyWordsPara.innerHTML = 'Keywords'

//style
keyWordsPara.classList.add('keyWordPara')



let keywordDiv = document.createElement('div')
keywordDiv.classList.add('keyWordsDiv')
             //color
let KeyWordsColorarr = ['red','blue','cyan','brown','lawngreen','gold','lightgray','wheat','purple']
let KeyWordsColorarrIndex = 0
for (let i = 0; i < asabenehChallenges2020.keywords.length; i++){
  let div = document.createElement('div')
  div.innerHTML = asabenehChallenges2020.keywords[i]
  div.classList.add('keyDiv')
  keywordDiv.appendChild(div)

  div.style.backgroundColor = KeyWordsColorarr[KeyWordsColorarrIndex]
  KeyWordsColorarrIndex = (KeyWordsColorarrIndex+1) % KeyWordsColorarr.length
}
 
getFooter.appendChild(footerTopic)
getFooter.appendChild(socialLinksDiv)
getFooter.appendChild(bioPara)
getFooter.appendChild(paraDiv)
getFooter.appendChild(keyWordsPara)
getFooter.appendChild(keywordDiv)


