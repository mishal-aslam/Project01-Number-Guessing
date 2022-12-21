#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import showBanner from "node-banner";
let score = 0;
let play = true;
(async () => {
    await showBanner('GUESSING GAME', 'Guess To Win ', "blue");
})();
async function guessNum() {
    while (play) {
        let randomNumber = Math.floor(Math.random() * 2) + 1;
        let ans = await inquirer.prompt([{
                name: "userNumber",
                type: "number",
                message: "Enter any Number from 1 - 3:"
            }]);
        if (ans.userNumber === randomNumber) {
            console.log(chalk.green("You Guess a Right Number!!"));
            score += 10;
            console.log(chalk.yellow(`Your Score Are: ${score}`));
        }
        else {
            console.log(chalk.red("Try Again!!"));
            play = false;
        }
    }
}
setTimeout(() => {
    guessNum();
}, 1000);
