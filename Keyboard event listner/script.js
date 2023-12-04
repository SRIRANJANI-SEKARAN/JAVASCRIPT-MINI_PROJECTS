 const container1 = document.querySelector('.container1')
 const content = document.querySelector('.content')
 const codeDiv = document.createElement('div')


document.body.addEventListener('keydown',(e)=>{
const key = e.key
console.log(e.code)
container1.appendChild(codeDiv)
codeDiv.classList.add('code')

if (e.code === 'Space'){
  content.innerHTML = `You Pressed <span class="key">'Backspace'</span>`
  codeDiv.innerHTML = e.keyCode


}
else{
  content.innerHTML = `You Pressed <span class="key">" ${key} "</span>`;
  codeDiv.innerHTML = e.keyCode
}
 

})
 window.onload = ()=>{
  content.innerHTML = 'Press any keyboard key'
  container1.removeChild(codeDiv)
} 