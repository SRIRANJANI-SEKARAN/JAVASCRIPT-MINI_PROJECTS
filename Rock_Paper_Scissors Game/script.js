let score=JSON.parse(localStorage.getItem('score')) || {
  Wins:0,
  Losses:0,
  Ties:0
}
let result='';
let ourPick='';
let computerChoice='';
function computerPick(){
  let random= Math.random();
  let computer=''
  if(random>=0 && random<1/3){
    computer='Rock';
  }
  else if(random>=1/3 && random<2/3){
    computer='Paper';
  }
  else{
    computer='Scissors';
  }
  return computer;
}
function toCompare(picks){
 if(picks==='reset'){
   reset();
 }
 else{
  document.querySelector('.js-reset-display').innerHTML='';
  document.querySelector('.js-reset-display').classList.remove('is-reset');
 ourPick=picks;
 computerChoice=computerPick();
 if(computerChoice===ourPick){
   result='Tie.'
 }
 else if((computerChoice==='Rock' && ourPick==='Scissors') || 
          (computerChoice==='Paper' && ourPick==='Rock') ||
         (computerChoice==='Scissors' && ourPick==='Paper'))
 {
     result='You Lose.';
 }
 else{
   result='You Win!'
 }
 if(result==='You Win!'){
   score.Wins+=1;
 }
 else if(result==='You Lose.'){
   score.Losses+=1;
 }
 else{
   score.Ties+=1;
 }
 localStorage.setItem('score',JSON.stringify(score));
 display()



 console.log(`${computerChoice} ${ourPick} ${result} ${score.Wins} ${score.Losses} ${score.Ties}`)
}}
function display(){
  document.querySelector('.js-result').innerHTML=result;
  document.querySelector('.js-picks').innerHTML=`You Picked <img src="/images/${ourPick}-emoji.png" alt=""></img>   <img src="/images/${computerChoice}-emoji.png" alt=""></img> Computer Picked`;
  document.querySelector('.js-score').innerHTML=`Wins: ${score.Wins}  &nbsp; &nbsp;Losses: ${score.Losses}&nbsp;&nbsp; Ties: ${score.Ties}`
  document.querySelector('.js-score').innerHTML.word
}
function reset(){
  score.Wins=0, score.Losses=0, score.Ties=0; 
  localStorage.removeItem('score');
  result='';
  ourPick='',
  computerChoice=''; 
  document.querySelector('.js-score').innerHTML=`Wins: ${score.Wins} Losses: ${score.Losses} Ties: ${score.Ties}`
  document.querySelector('.js-picks').innerHTML='';
  document.querySelector('.js-result').innerHTML=result;
  document.querySelector('.js-reset-display').innerHTML='Play Game!';
  document.querySelector('.js-reset-display').classList.add('is-reset');

}