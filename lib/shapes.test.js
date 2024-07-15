const {Circle, Square, Triangle} = require('./shapes.js')

//Circle shape size and color
describe('Circle', () => {
   test('renders logo', () => {
        const circle = new Circle();
        circle.setColor('green');
        circle.setText('ABC');
        circle.setTextColor('red');
        const svgString = circle.render();
        expect(svgString).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="80" fill="green" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="red">ABC</text>
      
      </svg>`
      );
    });
})
// Square shape size and color
// describe('Square', () => {
//     test('renders logo', () => {
//         const square = new Square();
//         square.setColor('green');
//         square.setText('ABC');
//         square.setTextColor('red');
//         const svgString = square.render();
//         expect(svgString).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  
//         <rect x="50" y="50" width="200" height="200" fill="green" />
       
//         <text x="150" y="150" font-size="60" text-anchor="middle" fill="red">ABC</text>
       
//        </svg>`
//         );
//     });
// });

//Triangle shape size, color, text, text color
// describe('Triangle', () => {
//     test('renders logo', () => {
//          const triangle = new Triangle();
//          triangle.setColor('purple');
//          triangle.setText('GHI');
//          triangle.setTextColor('black');
//          const svgString = triangle.render();
//          expect(svgString).toEqual(`<svg version="1.1" height="220" width="500" xmlns="http://www.w3.org/2000/svg">

//          <polygon points="100,10 150,190 50,190" style="fill:purple;" />
       
//          <text x="100" y="170" font-size="35" text-anchor="middle" fill="black">GHI</text>
       
//        </svg>`
//      );
//        });
//      });
  
  