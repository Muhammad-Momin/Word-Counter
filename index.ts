#! /usr/bin/env node 

import inquirer from "inquirer"

const ans = await inquirer.prompt({
    name: "q1",
    type: "input",
    message: "ENter your sentence to count words"

})
console.log(ans.q1)
let done = ans.q1.trim().split(" ")
console.log(done)
console.log(`your word count is ${done.length}`)

