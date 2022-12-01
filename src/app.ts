#!/user/bin/env node

import inquirer from "inquirer"
import { createSpinner } from "nanospinner";

const sleep = (ms=2000)=> new Promise((resolve)=>setTimeout(resolve,ms))

 console.log("Welcome to Guessing Number ")
 const PlayingFunction=async()=>{
 let NumberToBeGuessed:number = Math.floor(Math.random() * 11);
 let numberEnteredByUser:number;

     const num1 = await inquirer.prompt(
         {
            name:'Number1',
            type:"input",
            message:"Please enter Number between 0-10",
             default(){
                return "Null"
             }
         }
     )
 numberEnteredByUser = parseInt(num1.Number1)

 
 const spinner = createSpinner('Checking Answer...').start();
 await sleep();

 if(numberEnteredByUser===NumberToBeGuessed){
    spinner.success({text:` You Guessed It Right, The Number was ${NumberToBeGuessed}`})
    
 }
 else{
    spinner.error({text: `Better Luck Next Time, The Number was ${NumberToBeGuessed}`})
 }



}

await PlayingFunction()

 const PlayAgain = await inquirer.prompt(
         {
            name:'again',
            type:"input",
            message:"do you want to play again enter in Yes or No?",
             default(){
                return "Null"
             }
         }
     )
if(PlayAgain.again=="Yes"){
  await  PlayingFunction()
}
console.log( "Goood Bye \n");
 await sleep();
