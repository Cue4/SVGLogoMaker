const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const generateLogo = require("./lib/shapes.js");











// function promptUser(questions) {
//   return inquirer.prompt(questions)
//     .then((answers) => {
//       console.log('Answers:', answers);
//       // You can process the answers here or return them for further processing
//       return answers;
//     })
//     .catch((error) => {
//       console.error('An error occurred:', error);
//     });
// }

// const questions = [
//     {
//       type:'input',
//       name: 'text',
//       message: 'Enter up to 3 characters for your logo'
//     }, {
//       type: 'input',
//       name: 'text-color',
//       message: 'Enter a color keyword or hexadecimal number'
//     },
//     {
//     type: 'checkbox', 
//     name: 'shape',
//     message: 'Which shape would you like your log to have?:',
//     choices:[
//       'Circle',
//       'Square',
//       'Triangle'
//     ]
//     },
//   {
//     type:'input',
//     name:'shape-color',
//     message:'Enter a color keyword or hexadecimal number'
//   }
// ]

//     .then((response) => {
//       console.log(response);
//       const myData = generateLogo(response);
//       fs.writeFile(path.join(__dirname, 'logo.svg'), myData, (err) => {
//         if (err) {
//           console.error(err);
//         } else {
//           console.log('File written successfully.');
//         }
//       });
//     })
//     .catch((error) => {
//       console.error(error);
//     });







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

// Function to initialize app
// function init() {
//   inquirer.prompt(questions)
//   .then((data) => {
//     console.log(data);
//     writeToFile("logo.svg", generatelogo({...data}) )
// });
// }

// Function call to initialize app
// init();
