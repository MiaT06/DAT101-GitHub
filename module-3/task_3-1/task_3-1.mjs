"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/
let kloke = 6;
if (kloke == 7) {
    printOut("i can catch the bus");
}else if (kloke == 8) {
    printOut("I can take the train to school");
}
else {
    printOut("i can catch the car");
}
printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let variable = 0;
if (variable > 0) {
    printOut("The variable is positive");
    } else if (variable == 0) {
        printOut("zero");
    }
else {
    printOut("The variable is negative");
}

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const imageSize = Math.floor(Math.random() * 8) + 1;
printOut("Image size: " + imageSize + "Mp");

if (imageSize >= 4) {
printOut("Thank you"); 
}else 
printOut("The image is small");
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const imageSize2 = Math.floor(Math.random() * 8) + 1;
printOut("Image size: " + imageSize2 + "Mp");

if (imageSize2 >= 6) {
    printOut("Thank you");
} else {
    printOut("The image is small");
}

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const monthList =["January", "February", "Mars", "April", "Mai",
"Jun", "Juli", "August", "September", "October", "November", "December"];
const noOfMonth = monthList.length;
const monthName = monthList[Math.floor(Math.random() * noOfMonth)];

if (monthName.includes("r")) {
    printOut("You must take vitamin D");
} else {
    printOut("You do not need vitamin D");
}

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const monthList2 =["January", "February", "Mars", "April", "Mai",
"Jun", "Juli", "August", "September", "October", "November", "December"];

const dayList = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const noOfMonth2 = monthList2.length;
const monthNumber = Math.floor(Math.random() * noOfMonth2);
const monthName2 = monthList2[monthNumber];

printOut(monthName2);
printOut(dayList[monthNumber]);

if (monthName2.includes("r")) {
    printOut("You must take vitamin D");
} else {
    printOut("You do not need vitamin D");
}
printOut(newLine);

printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const monthList3 =["January", "February", "Mars", "April", "Mai",
"Jun", "Juli", "August", "September", "October", "November", "December"];

const noOfMonth3 = monthList3.length;
const monthName3 = Math.floor(Math.random() * noOfMonth3);
printOut(monthList3[monthName3]);

if (monthName3 == "Mars" || monthName3 == "Mai") {
    printOut("The gallery is closed.");
}else if (monthName3 === "April") {
    printOut("The gallery is temporarily located in the building next door.");
}else {
    printOut("The gallery is open.");
}
printOut(newLine);
