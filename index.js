#! /usr/bin/env node    
import inquirer from "inquirer";
import chalk from "chalk";
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
    {
        type: "number",
        name: "userGuessNumber",
        message: "please Enter Your Guess Number between 1 to 10.",
    },
]);
if (answers.userGuessNumber === randomNumber) {
    console.log(chalk.green("CONGRATULATIONS! You Guessed right number."));
}
else {
    console.log(chalk.red("OOPSS! You Guessed wrong number."));
}
