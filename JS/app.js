// todo = [];

// let req;
//  req=prompt("Enter the action you wanna perform");
   


// while(true){

//     if(req== "quit"){
//         console.log("Quitting app");
//         break;
//     }

// if(req== "list"){
//     console.log("----------------------");
//     for(task of todo){  
//        console.log(task);}
//     console.log("----------------------");}

// else if(req == "add"){
//     task=prompt("Enter the task you wanna add");
//     todo.push(task);}

 
    
// req=prompt("Enter the action you wanna perform");
// }

const max =prompt("Enter the maximum number till which you wanna guess");
const random = Math.floor(Math.random()*max)+1;


let guess = prompt("Guess the number");

while(true){
    if(guess == random){
        console.log("You are right");

    }


    