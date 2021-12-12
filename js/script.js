//Challenge 01
function ageInDays() {
let birthYear = prompt('What is your Birth Year my friend?');
let agedays = ( 2021 - birthYear)*365;
let h1 = document.createElement('h1');
let answeris = document.createTextNode('You Are ' + agedays + ' Days Old')
h1.setAttribute('id','ageInDays');
h1.appendChild (answeris);
document.getElementById('flex-box-results').appendChild(h1);
}

function reset(){
    document.getElementById('ageInDays').remove();
}

/* Getting Actual Date

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
document.write(today);
*/

//Challenge 02
function generateCat() {

    let image = document.createElement('img');
    let div = document.getElementById('flex-cat-gen');
    image.src ="images/cat-chat.gif";
    div.appendChild(image);

}
function reset2(){
    document.getElementById('generateCat').exit();
}


//----------------------------Cha-llenge 3 , Rock Paper Scissor --------------------------------

function rpsGame(yourChoice){
    console.log(yourChoice);
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberTochoice(randomRps());
    console.log('computer Choice: ' , botChoice);
    results = decideWinner(humanChoice, botChoice);
    console.log(results);
    message = finalMessage(results) // you won
    console.log(message);
    rpsFrontEnd(yourChoice.id, botChoice, message);
}
function randomRps(){

    return Math.floor(Math.random() * 3);
}
function numberTochoice(number){
    return ['rock','paper', 'scissor'][number];
}

function decideWinner(yourChoice,computerChoice){
   var rpsDatabase = {
       'rock' : {'scissor':1, 'rock':0.5, 'paper':0},
       'paper' : {'rock':1, 'paper':0.5, 'scissor':0},
       'scissor' : {'paper':1, 'scissor':0.5, 'rock':0} 
};
      let yourScore = rpsDatabase[yourChoice][computerChoice];
      let botScore = rpsDatabase[computerChoice][yourChoice]; 

      return [yourScore , botScore];  
}
function finalMessage ([yourScore, botScore]) {
    if (yourScore == 0){
        return{'message':'You lost', 'color':'red'};
    } else if(yourScore == 0.5){
        return{'message':'You tied', 'color':'yellow'};
    }else {
        return{'message':'You won', 'color':'blue'}
    }
}
function rpsFrontEnd(humanImgChoice, botImgChoice, finalMessage) {
    let imagesDataBase = {
        'rock': document.getElementById('rock').src ,
        'paper': document.getElementById('paper').src,
        'scissor': document.getElementById('scissor').src    
};
      document.getElementById('rock').remove();
      document.getElementById('paper').remove();
      document.getElementById('scissor').remove();

      let humanDiv = document.createElement('div');
      let botDiv = document.createElement('div');
      let lostMsgDiv = document.createElement('div');

      humanDiv.innerHTML = "<img src='" +imagesDataBase[humanImgChoice]+ "'wieght=150 width=150 style ='box-shadow: 0px 10px 50px rgba(37,50,233,1);'>"
      lostMsgDiv.innerHTML = "<h1 style ='color:" + finalMessage ['color']+"; font-size: 30px; paddinng:20px'>"+ finalMessage['message'] + "</h1>"
      botDiv.innerHTML = "<img src='" +imagesDataBase[botImgChoice]+ "'wieght=150 width=150 style ='box-shadow: 0px 10px 50px rgba(255,0,0);'>"

      document.getElementById('flex-box-rps-div').appendChild(humanDiv);
      document.getElementById('flex-box-rps-div').appendChild(lostMsgDiv);
      document.getElementById('flex-box-rps-div').appendChild(botDiv);                
}

//Challenge 4 color changer--------------------------------------------------

var all_buttons = document.getElementsByTagName('button')
console.log(all_buttons); 

let copyAllButtons = [];

for(let i = 0 ; i<all_buttons.length; i++){
    copyAllButtons.push(all_buttons[i].classList[1]);
}

function changeBackgroundColor(buttonThing){
    if(buttonThing.value === 'red'){
        buttonsRed();
    }else if(buttonThing.value === 'blue'){
        buttonsBlue();
    }else if(buttonThing.value === 'yellow'){
        buttonsYellow();
    }else if(buttonThing.value === 'reset'){
        buttonsReset();
    }else if(buttonThing.value === 'random'){
        buttonsRandom();
    }
}

function buttonsRed(){
    for(let i=0 ; i<all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger'); 
    }
}
function buttonsBlue(){
    for(let i=0 ; i<all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-primary'); 
    }
}
function buttonsYellow(){
    for(let i=0 ; i<all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-warning'); 
    }
}
function buttonsReset(){
    for(let i=0; i<all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
}

function buttonsRandom(){
    let randomList = ['btn-danger','btn-primary','btn-warning','btn-success'];

    for (let i=0 ; i<all_buttons.length ; i++){
       let randomNumber = Math.floor(Math.random()*4); 
       all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(randomList[randomNumber]);
    }
}
  
// Challenge 5 : Black Jack ------------------------------------------------

let blackJackGame = {
    'you': {'scoreSpan':'#your-score', 'div':'#your-box', 'score':0},
    'dealer': {'scoreS,pan':'#bot-score', 'div':'#bot-box', 'score':0},
    'cards':['2','3','4','5','6','7','8','9','10','J','K','Q','A'],
    'cardsMap':{'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'J':10,'K':10,'Q':10,'A':[1,11]},

};

const YOU = blackJackGame['you'];
const DEALER = blackJackGame['dealer'];
const hitSound = new Audio('./sounds/swish.m4a');


document.querySelector('#bj-hit-button').addEventListener('click', blackJackHit);
document.querySelector('#bj-deal-button').addEventListener('click', blackJackDealer);

function blackJackHit() {
    let card = randomPicker();
    updateScore(card, YOU);
    showCard(card, YOU);
    console.log(YOU['score']);
}

function randomPicker(){
    let randoCard = Math.floor(Math.random()*13);
    return blackJackGame['cards'][randoCard]; 
}
 
function showCard(card ,activePlayer){
    var imageCard = document.createElement('img');
    imageCard.src = `./images/${card}.png`;
    document.querySelector(activePlayer['div']).appendChild(imageCard);
    hitSound.play();
}

function blackJackDealer(){
    let yourImg = document.querySelector('#your-box').querySelectorAll('img');
    let dealerImg = document.querySelector('#bot-box').querySelectorAll('img');

    for(let i=0 ; i<yourImg.length ; i++){
        yourImg[i].remove();
    }
    for(let i=0 ; i<dealerImg.length ; i++){
        dealerImg[i].remove();
    }
 
}

function updateScore(card, activePlayer){

    activePlayer['score'] += blackJackGame['cardsMap'][card];
}
