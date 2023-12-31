'use strict'

/*** 
 * 
 * Directions:
 * 1. Extract hw1.zip
 * 2. In the hw1 directory you'll find a hw1.js and hw1.test.js file. hw1.js is the only file you need to modify.
 * 3. Open hw1.js in VS Code, or your preferred text editor or IDE.
 * 4. Implement all the TODOs described in commments below and save your work.
 * 
 * 
 * Validating your changes:
 * 1. Ensure you have Node.js LTS or newer installed: https://nodejs.org/en/download/
 * 2. Open cmd or terminal, change directory (cd) to the location of your hw1 directory.
 * 3. Once inside the hw1 directory, execute the following command: npm install
 * 4. The above command will install the jest dependency which will allow you to execute the unit tests in hw1.test.js
 * 5. Execute the following command to validate your changes in hw1.js are working as expected: npm test
 * 6. You will see output indicating the tests have passed or failed; if you see failures, there is an issue with your implementation
 * 
 ***/

const Homework1 = class Homework1 {

    // This is already implemented to indicate what a passing test looks like
    static sum = (a, b) => {
        return a + b;
    }

}

/**
 * *****************
 * ***** TODO ******
 * *****************
 * 
 * Implement the Circle class below. It needs to have a radius(Number) property and a color(String) properties. Both properties should be set in a constructor
 * Additionally, the Circle class should have a method called `calcArea` which will return the area (radius*radius*pi) of the circle. 
 * Be sure to use the built-in Math object Javascript provides to retrieve the value of PI.
 * 
 * References: 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
 */

 const Circle = class Circle {
    constructor(radius, color) {
      this.radius = radius;
      this.color = color;
    }
  
    calcArea() {
      return Math.PI * this.radius * this.radius;
    }
  };
  
  const circle1 = new Circle(5, 'red');
  console.log('Circle 1 area:', circle1.calcArea()); 
  
  const circle2 = new Circle(98, 'red');
  console.log('Circle 2 area:', circle2.calcArea());


/**
 * *****************
 * ***** TODO ******
 * *****************
 * 
 * Implement the Student class below. 
 * 
 * The student class should have the following properties set by the constructor:
 * firstName(String), lastName(String), gpa(Number), degreeType(String)
 * 
 * The student class should have two additional properties initialized with the following default values:
 * grade(String) = undefined
 * graduated(Boolean) = false
 * 
 * References: 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 */

 class Student {
    constructor(firstName, lastName, gpa, degreeType) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.gpa = gpa;
      this.degreeType = degreeType;
      this.grade = undefined;
      this.graduated = false;
    }
  }
  


/**
 * *****************
 * ***** TODO ******
 * *****************
 * 
 * Implement the Product class below. 
 * 
 * The product class should have the following properties set by the constructor:
 * name(String), price(Number), availability(String)
 * The constructor should only accept a single String parameter as input, the input format will be as follows: 'Apple,1.00,In Stock'
 * The constructor must parse this input and set the above properties appropriately
 */

 const Product = class Product {
    constructor(input) {
      const [name, price, availability] = input.split(',');
      this.input = input;
      this.name = name;
      this.price = parseFloat(price);
      this.availability = availability;
    }

    /**
     * *****************
     * ***** TODO ******
     * *****************
     * 
     * Implement the static method inStock below 
     * 
     * This method will accept an array of Products and return an array only containing products which are in stock
     * This can be implmeneted in one line.
     * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array 
     */
     static inStock(products) {
        return products.filter(product => product.availability.toLowerCase() === 'in stock');
      }


    /**
     * *****************
     * ***** TODO ******
     * *****************
     * 
     * Implement the static method halfOff below 
     * 
     * This method will accept an array of Products and return an array of the same products with every price reduced by 50%
     * This method can also be written in one line; if doing so, consider using String interpolation when calling the product constructor
     * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array 
     */
     static halfOff(products) {
        return products.map(product => {
          const halfPrice = product.price * 0.5;
          const updatedInput = `${product.name},${halfPrice},${product.availability}`;
          return new Product(updatedInput);
        });
      }

    /**
     * *****************
     * ***** TODO ******
     * *****************
     * 
     * Implement the static method printProducts below 
     * 
     * This method will accept an array of Products and will console.log all the products in the following format: 
     * Product: Apple, Cost: $1.00, Available: Yes
     * Take note, for 'Available' we are not returning 'In Stock' or 'Out of Stock' but 'Yes' or 'No' 
     * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array 
     * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat (currency formatting)
     */
     static printProducts(products) {
        products.forEach(product => {
          const available = product.availability === 'In Stock' ? 'Yes' : 'No';
          console.log(`Product: ${product.name}, Cost: $${product.price.toFixed(2)}, Availability: ${available}`);
        });
      }
    }
     
// ----------------------------------
// DO NOT MODIFY CODE BELOW THIS LINE
// ----------------------------------

module.exports = {
    'Homework1': Homework1,
    'Circle': Circle,
    'Student': Student,
    'Product': Product
};