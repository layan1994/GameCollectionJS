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
    image.src ="cat-chat.gif";
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

var all_buttons = document.getElementsByTagName('button')
console.log(all_buttons); 

let copyAllButtons = [];

for(let i = 0 ; i<all_buttons.length; i++){
    copyAllButtons.push(all_buttons[i]);
}

function changeBackgroundColor(buttonThing){
    if(buttonThing.value === 'red'){
        buttonsRed();
    }else if(buttonThing.value === 'yello'){
        buttonsblue();
    }else if(buttonThing.value === 'blue'){
        buttonsYello();
    }else if(buttonThing.value === 'random'){
        buttonsRandom();
    }else if(buttonThing.value === 'reset'){
        buttonsReset();
    }


}