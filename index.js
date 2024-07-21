const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const {Circle, Square, Triangle} = require('./lib/shapes.js');

function render(answers) {
  const {text, textColor, shape, shapeColor } = answers;
  
  let shapeElement;
  if (shape.includes('Circle')) {
      shapeElement = new Circle(shapeColor);
  } else if (shape.includes('Square')) {
      shapeElement = new Square(shapeColor);
  } else if (shape.includes('Triangle')) {
      shapeElement = new Triangle(shapeColor);
  }

  return `
      <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
          ${shapeElement.render()}
          <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-size="24">${text}</text>
      </svg>
  `;
}
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

// let superCoolLogo = new Triangle();

//   superCoolLogo.setColor("")
//   superCoolLogo.setText("")
//   superCoolLogo.setTextColor("")
  
  
//   fs.writeFile('logo.svg' , superCoolLogo.render(), (err, res)=> {
//     err? console.error(err): console.log("logo created", res)
//   })




// Function to write rendered SVG to a file2
// function writeToFile(text) {
//   const svgData = render(text); // Use the render function to prepare the data
//   fs.writeFile('logo.svg', svgData, (err) => {
//     if (err) {
//       console.error(err);
//     } else {
//       console.log("Generated logo.svg!");
//     }
//   });
// }


// Start prompting the user
// inquirer.prompt(questions)
//     .then(answers => {
//         const svgContent = render(answers);
//         fs.writeFile('logo.svg', svgContent, err => {
//             if (err) {
//                 console.error(err);
//             } else {
//                 console.log("Generated logo.svg!");
//             }
//         });
//     })
//     .catch(error => {
//         console.error("Error during prompts:", error);
//     });
const promptUser = (questions) =>
  inquirer.prompt(questions)
    .then((answers) => {
      console.log('Answers:', answers);
      return answers;
    })
    .catch((error) => {
      console.error('An error occurred:', error);
    });

// Function to initialize app
function init() {
  promptUser(questions)
  .then((data) => {
    const svgContent = render(data);
    fs.writeFile('logo.svg', svgContent, (err) => {
      if (err) {
        console.error(err);
      }else {
        console.log("Generated logo.svg!");
      }
    })
});
}

// Function call to initialize app
init();
