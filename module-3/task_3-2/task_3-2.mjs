"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let task1line = "line 1: ";
for (let i = 1; i <= 10; i++){
    task1line += i + " ";
}
printOut(task1line);
task1line = "line 2: "; // Reset the variable for the second 
for (let i = 10; i >= 1; i--){
    task1line += i + " ";
}
printOut(task1line);

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const task2GuessNumber = 45;
let task2RandomNumber = 0;
while (task2RandomNumber !== task2GuessNumber){
    task2RandomNumber = Math.floor(Math.random() * 60) +1;
}
printOut("The random number is: " + task2RandomNumber)

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const task3GusessNumber = 45;
let task3RandomNumber = 0;
let task3Atempts = 0;
let task3TimesStart = Date.now();
while (task3RandomNumber !== task3GusessNumber){
    task3RandomNumber = Math.floor(Math.random() * 100000000) + 1;
    task3Atempts++;
}
let task3TimeEnd = Date.now();
let task3TimeTaken = (task3TimeEnd - task3TimesStart);
printOut(`The random number is: ${task3RandomNumber}`);
printOut(`Number of attempts: ${task3Atempts}`);
printOut(`Time taken: ${task3TimeTaken} ms`);
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let primes = "";
for(let i =2; i <= 200; i++){
    let isPrime = true
    let j = i - 1;
    while(!isPrime && j > 1){
        if(i % j === 0){
            isPrime = false;
        }
        j--;
    }
 if (isPrime === true){
    primes += " " + i;
}
}
printOut(primes);

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut(newLine);
