#! /usr/bin/env node

// This line is called a shebang, it tells the operating system to run it with nodejs

// Import the "inquirer" module , which is a command line interface for Node.js
import inquirer from "inquirer";

// Declare a constant "answers" and assign it to the result of inquirer .prompt function

const answers:{
    Sentence: string
} = await inquirer.prompt(
    [
        {
            name: "Sentence",
            type:"input",
            message:"Enter your sentence to count the word:",
        }
    ]
)

const words = answers.Sentence.trim().split(" ")

// print the arry of word to the console
console.log(words)

// print the word count of the sentence to the console
console.log(`your sentence word count is. ${words.length}`);