"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";


printOut("--- Part 1 ----------------------------------------------------------------------------------------------");

const orgMatExp = "2 + 3 * 2 - 4 * 6";
const newgMatExp = "2 + 3 * (2 - 4) * 6";
const part1Answer = 2 + 3 * (2 - 4) * 6;
printOut (orgMatExp);
printOut (newgMatExp);
printOut (part1Answer);
printOut(newLine);
printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let millimeter = 0;
let meter = 25;
let centimeter = 34;

millimeter = (meter * 1000 + centimeter * 10);
let milliPrInch = millimeter / 25.4;
printOut(milliPrInch.toFixed(2) + " inches.");
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let days = 3;
let hours = 12;
let minutes = 14;
let seconds = 45;

let totalMinutes = days * 24 * 60 + hours * 60 + minutes + seconds / 60;
printOut(totalMinutes.toFixed(0) + " minutes in a day.");
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const totalDays = 6322.52 / (24*60); // (result: 4.390638)
const WholeDayse = Math.floor(totalDays); // (result: 4)

let LeftoverFraction = totalDays - WholeDayse; // (result: 0.390638)
const totalHours = LeftoverFraction * 24; // (result: 9.375312)
const wholeHours = Math.floor(totalHours); // (result: 9)

LeftoverFraction = 9.375312 - wholeHours; // (result: 0.375312)
let totalMinutes2 = LeftoverFraction * 60; // (result: 22.51872)
let wholeMinutes = Math.floor(totalMinutes2); // (result: 22)

  LeftoverFraction = 22.521872 - wholeMinutes; // (result: 0.51872)
let totalSeconds = LeftoverFraction * 60; // (result: 31.1232)
let wholeSeconds = Math.floor(totalSeconds); // (result: 31)

printOut(WholeDayse + " days, " + wholeHours + " hours, " + wholeMinutes + " minutes, and " + wholeSeconds + " seconds.");  

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let dollaramount = 54;
let NOK = 76 / 8.6;
let USD = 8.6 / 76;
let dollar = dollaramount * USD;
let krone = dollaramount * NOK;

printOut(Math.round(dollaramount) + " NOK is " + dollar.toFixed(2) + " USD.");
printOut(Math.round(dollaramount) + " USD is " + krone.toFixed(2) + " NOK.");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let sentence = "There is much between heaven and eart that we do not understand.";
let sentenceLength = sentence.length;
printOut("The sentence is : " + sentenceLength);
printOut("The character at position 19 is : " + sentence.charAt(19));
printOut("the substring from position 35 and 8 is : " + sentence.substring(35, 43));
printOut("the word earth is found at position : " + sentence.indexOf("earth"));

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let one = 5 > 3;
printOut(one);

let two = 7 >= 7;
printOut(two);

let three = "a" > "b";
printOut(three);

let four = "1" < "a";
printOut(four);

let Five = "2500" < "abcd";
printOut(Five);

let six = "arne" !== "thomas";
printOut(six);

let seven = (2 == 5);
printOut(seven);

let eight = ("abcd" > "bcd") === false;
printOut(eight);

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const text = Number.parseInt("254");
printOut(text);

const text2 = Number.parseFloat("57.23");
printOut(text2);

const text3 = Number.parseInt("25 kroner");
printOut(text3);

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let r = Math.floor(Math.random() * 360) + 1;
printOut(r);

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let division = Math.floor(131 / 7);

let fullweeks = division;
let modulus = 131 % 7;

printOut(fullweeks);
printOut(modulus);

printOut(newLine);