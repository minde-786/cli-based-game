#! /usr/bin/env node
import inquirer from "inquirer"; 
const number=Math.floor(Math.random()* 10);
const answer=await inquirer.prompt({
    name:"num1",
    type:"number",
    message:"guess the number",
});
if (answer.num1===number){
    console.log("congrast!you guess a right number");
}
else {
    console.log("sorry!you guess a wrong nuber");
}












