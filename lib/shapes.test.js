const {Circle, Square, Triangle} = require(./lib/shapes.js)

//Circle shape size and color
describe('Circle', () => {
   test('renders logo', () => {
        const circle = new Circle();
        circle.setColor('green');
        const svgString = circle.render();
        expect(svgString).toEqual(<circle cx="150" cy="100" r="80" fill="green" />
    );
      });
    });

//Square shape size and color
describe('Square', () => {
    test('renders logo', () => {
         const square = new Square();
         square.setColor('red');
         const svgString = square.render();
         expect(svgString).toEqual(<sq x="50" y="50" width="200" height="200" fill="red"/>);
       });
     });

//Triangle shape size and color
describe('Triangle', () => {
    test('renders logo', () => {
         const triangle = new Triangle();
         triangle.setColor('green');
         const svgString = triangle.render();
         expect(svgString).toEqual(<tri points="100,10 150,190 50,190"/>
     );
       });
     });
  
  