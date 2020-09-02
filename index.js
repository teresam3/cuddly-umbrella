const inquirer = require("inquirer")
const fs = require("fs")

inquirer.prompt([
  {
    type: "input",
    message: "Whats the Title?",
    name: "Title"
  },
  {
    type: "input",
    message: "Give description.",
    name: "Description"
  },
  {
    type: "input",
    message: "The Table of Contents?",
    name: "Table of Contents"
  },
  {
    type: "input",
    message: "Installation?",
    name: "Installation"
  },
  {
    type: "input",
    message: "Usage?",
    name: "Usage"
  },
  {
    type: "list",
    message: "Which license?",
    name: "License",
    choices: ["BSD", "MIT", "GPL"] 
 }, 
  {
    type: "input",
    message: "Contributing?",
    name: "Contributing"
  },
  {
    type: "input",
    message: "Test?",
    name: "Test"
  },
  {
    type: "input",
    message: "What is Github username?",
    name: "Questions"
  },
  {
    type: "input",
    message: "What is your email",
    name: "Questions"
  },

  ]).then((userResponse)=>{

    const data = writeHTML(userResponse)
    fs.writeFile("README.MD", data, function(){
      console.log("success")
    })
  })