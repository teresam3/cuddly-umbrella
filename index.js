const inquirer = require("inquirer")
const fs = require("fs")
const x = userResponse

function writeHTML(x) {
  return `
  ## ${x.name}
    ${x.Title}
  ## ${x.TableofContents}

  ## ${x.Installation}

  ## ${x.TableofContents}

  ## ${x.Installation}

  ## ${x.Usage}

  ## ${x.License}

  ## ${x.Questions}
  ` 
}

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
    name: "TableofContents"
  },
  {
    type: "input",
    message: "How to install?",
    name: "Installation"
  },
  {
    type: "input",
    message: "Whats the Purpose",
    name: "Usage"
  },
  {
    type: "list",
    message: "Which license?",
    name: "License",
    choices: ["Apache", "MIT", "GNU"] 
 }, 
  {
    type: "input",
    message: "Who's contributing?",
    name: "Contributors"
  },
  {
    type: "input",
    message: "What year is it?",
    name: "Year"
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
    message: "What is your email?",
    name: "Questions"
  },

  ]).then((userResponse)=>{

    if (x.License === MIT) {
     prepend('README.MD')
    } 
    else if (x.License === Apache) {
      prepend('README.MD')
    }
    else if (x.License === GNU) {
      prepend('README.MD')
    }

    const data = writeHTML(userResponse)
    fs.writeFile("README.MD", data, function(){
      console.log("success")
    })
  })