const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const generateLogo = require('./lib/shapes.js');

const questions = [
    {
      type:'input',
      name: 'text',
      message: 'Enter up to 3 characters for your logo'
    }, 
    {
      type: 'input',
      name: 'text-color',
      message: 'Enter a color keyword or hexadecimal number'
    },
    {
      type: 'checkbox', 
      name: 'shape',
      message: 'Which shape would you like your log to have?:',
      choices:
      [
        'Circle',
        'Square',
        'Triangle'
      ]
    },
    {
      type:'input',
      name:'shape-color',
      message:'Enter a color keyword or hexadecimal number'
    }
  ];

function writeToLog(data) {
  fs.writeFile('logo.svg', data, (err) => {
      if (err) {
        console.error(err);
  } else {
    console.log('Generated logo.svg!')
  }
  });
}
const promptUser = (questions) =>
  inquirer(questions)
    .then((answers) => {
      console.log('Answers:', answers);
      return answers;
    })
    .catch((error) => {
      console.error('An error occurred:', error);
    });
// function promptUser(questions) {
//   return inquirer.prompt(questions)
//     .then((answers) => {
//       console.log('Answers:', answers);
//       return answers;
//     })
//     .catch((error) => {
//       console.error('An error occurred:', error);
//     });
// }
// Function to initialize app
function init() {
  promptUser(questions)
  .then((data) => {
    console.log(data);
    const myData = generateLogo(data);
    writeToFile(myData);
});
}

// Function call to initialize app
init();






    //   console.log(`Your answers: ${answers.join(', ')}`);
    //   writeToFile("logo.svg", generateLogo({ ...answers }));
    // })
    // .catch((error) => {
    //   console.error(error);
    // });

    // function writeToFile(fileName, data) {
    //   fs.writeFile(path.join(__dirname, fileName), data, (err) => {
    //     if (err) {
    //       console.error(err);
    //     } else {
    //       console.log('File written successfully.');
    //     }
    //   });
    // }



// function writeToFile(fileName, data) {
//   fs.writeFile(path.join(fileName), data, (err) =>
//   err ? console.error(err) : console.log('Success!')
//   );
    
// }


