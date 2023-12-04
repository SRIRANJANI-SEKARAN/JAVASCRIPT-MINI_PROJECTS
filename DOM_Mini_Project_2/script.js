const getDiv = document.querySelector('.container2')

for (let i = 0; i < 102; i++){
  const para = document.createElement('p')
  para.innerText = i
  if (i%2 === 0){
    getDiv.appendChild(para)
    para.style.backgroundColor = 'green'
    /* para.style.padding = 'auto auto' */
   
  } 
  else {
    getDiv.appendChild(para)
    para.style.backgroundColor = 'red'
    /* para.style.padding = 'auto auto' */
       

  }
  if (i > 1){
    let isPrime = true
    for (let j = 2; j <= Math.sqrt(i); j++){
      if (i%j === 0){
       isPrime = false
       break
        
      }   
    }
    if (isPrime){
    para.style.backgroundColor = 'yellow' // this it prime number background color change
    }
  }
  para.style.paddingTop = '25px'
    para.style.fontSize = '25px'
    para.style.height = '70px'
}