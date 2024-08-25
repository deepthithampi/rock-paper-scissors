const choices = ["R","P","S"];
let ties = 0;
let wins = 0;
let lose = 0;
let systemChoice;
let labelties = document.getElementById('label-ties')
let labelwins = document.getElementById('label-wins')
let labellose = document.getElementById('label-lose')
let S = 0;
let R = 0;
let P = 0;



let validChoice = false;
// function playGame(){
//   if(validChoice == true){
//     if(myChoice1 == sysChoice){
        
//       alert(" Its a tie!! " )
//       ties++;
//       labelties.textContent = ties +" Ties";
//       confirm("Do you want to continue")
//       inputText.value = ""

      
      
//   }else
//    if(((myChoice1 =='P')&&(sysChoice =='R'))||((myChoice1 =='R')&&(sysChoice =='S'))||((myChoice1 =='S')&&(sysChoice =='P'))){
      
//       alert("You win!! "  );
//       wins++
//       labelwins.textContent=wins + " Wins";
//       confirm("Do you want to continue")
//       inputText.value = ""
//   }else{
      
//       alert("You lose!! " );
//       lose++
//       labellose.textContent=lose + " Loss"
//       console.log(lose)
//       confirm("Do you want to continue ")
//        inputText.value = ""
//   }
//   }
// }

function startGame(){
    
    let inputText = document.getElementById('choice-id');
    let myChoice = inputText.value;
    let myChoice1 = myChoice.toUpperCase();
    
    console.log(`User's Choice : ${myChoice1}`);
    const randomIndex = Math.floor(Math.random()*choices.length);
    let sysChoice = choices[randomIndex];
    console.log(`Random Choice : ${sysChoice}`)

    if(myChoice1 =="R"||myChoice1 =="S"||myChoice1 =="P"){
      validChoice = true;
    if(myChoice1 == sysChoice){
        
        alert(" Its a tie!! " )
        ties++;
        labelties.textContent = ties +" Ties";
        confirm("Do you want to continue")
        inputText.value = ""

        
        
    }else
     if(((myChoice1 =='P')&&(sysChoice =='R'))||((myChoice1 =='R')&&(sysChoice =='S'))||((myChoice1 =='S')&&(sysChoice =='P'))){
        
        alert("You win!! "  );
        wins++
        labelwins.textContent=wins + " Wins";
        confirm("Do you want to continue")
        inputText.value = ""
    }else{
        
        alert("You lose!! " );
        lose++
        labellose.textContent=lose + " Loss"
        console.log(lose)
        confirm("Do you want to continue ")
         inputText.value = ""
    }
      // playGame();
  } 
  else{
    let promptValue = prompt("Please Enter a valid choice")
    myChoice1 = promptValue.toUpperCase();
    console.log(`User's Choice : ${myChoice1}`);
    inputText.validChoice = ""
   if(myChoice1 =="R"||myChoice1 =="S"||myChoice1 =="P")
   {
    validChoice = true;
    inputText.value = myChoice1
   }
   while(!validChoice){
   
    console.log(validChoice)
    if(myChoice1 == sysChoice){
        
        alert(" Its a tie!! " )
        ties++
        labelties.textContent= ties+" Ties";
        confirm("Do you want to continue")
        inputText.value = ""
    }else
     if(((myChoice1 =='P')&&(sysChoice =='R'))||((myChoice1 =='R')&&(sysChoice =='S'))||((myChoice1 =='S')&&(sysChoice =='P'))){
        
        alert("You win!! "  );
        wins++
        labelwins.textContent= wins+" Wins";
        confirm("Do you want to continue")
        inputText.value = ""
    }else{
        
        alert("You lose!! " );
        lose++
        labellose.textContent=lose + " Loss"
        console.log(lose)
        confirm("Do you want to continue ")
         inputText.value = ""
    }
    // playGame();
   
   }//while 
  
  }
  
}




