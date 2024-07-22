class Shapes {
    constructor(color, text, textColor, shapeColor){
      this.color = color;
  
      this.text = text;
  
      this.textColor = textColor;

      this.shapeColor = shapeColor;
    }
    setColor(color){
      this.color = color;
    }
    setText(text) {
      this.text = text;
    }
    setTextColor(textColor) {
      this.textColor = textColor;
    }
    setShapeColor(shapeColor) {
      this.shapeColor = shapeColor;
    }
  };

class Circle extends Shapes {
   
    render() {
        return `
        <svg version="1.2" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">"${this.text}"</text>
      
      </svg>
            `
    }
}
class Square extends Shapes {
   
    render() {
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  
        <rect x="50" y="50" width="200" height="200" fill="${this.shapeColor}"/>
        
      
        <text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      
      </svg>
            `
    }
}
class Triangle extends Shapes {
   
    render() {
        return `
        <svg version="1.1" height="220" width="500" xmlns="http://www.w3.org/2000/svg">

        <polygon points="100,10 150,190 50,190" style="fill:${this.shapeColor};" />
      
        <text x="100" y="170" font-size="35" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      
      </svg>
            `
    }
}


module.exports = {Circle, Square, Triangle};