/* For reference : 
    1. https://dmitripavlutin.com/gentle-explanation-of-this-in-javascript/#71-this-in-arrow-function 
    2. https://gist.github.com/fongandrew/f28245920a41788e084d77877e65f22f
*/

// 1st question

const object1 = {
    message: 'Hello, World!',
    getMessage() {
      const message = 'Hello, Earth!';
      return this.message;
    }
  };
//   console.log(object.getMessage()); // What is logged?

// 2nd question

function Pet(name) {
    this.name = name;
    this.getName = () => this.name;
  }
  const cat = new Pet('Fluffy');
//   console.log(cat.getName()); // What is logged?
  const { getName } = cat;
//   console.log(getName());     // What is logged?

// /3rd question

const object3 = {
    message: 'Hello, World!',
    logMessage() {
    //   console.log(this.message); // What is logged?
    }
  };
  setTimeout(object3.logMessage, 1000);

//   if it is undefined write the fix for this to show the message


//   4th question

const object4 = {
    message: 'Hello, World!'
  };
  function logMessage() {
    console.log(this.message); // logs 'Hello, World!'
  }

  // 3 different ways to solve this problem

  // Using func.call() method
  logMessage.call(object4);
  // Using func.apply() method
  logMessage.apply(object4);
  // Creating a bound function
  const boundLogMessage = logMessage.bind(object4);
  boundLogMessage(); 


//   question 5

const object = {
    who: 'World',
    greet() {
      return `Hello, ${this.who}!`;
    },
    farewell: () => {
      return `Goodbye, ${this.who}!`;
    }
  };
  console.log(object.greet());    // What is logged?
  console.log(object.farewell()); // What is logged?



//   question 6

var length = 4;
function callback() {
  console.log(this.length); // What is logged?
}
const object = {
  length: 5,
  method(callback) {
    callback();
  }
};
object.method(callback, 1, 2);


// question 7

// What logs to console the following code snippet:

var length = 4;
function callback() {
  console.log(this.length); // What is logged?
}
const object = {
  length: 5,
  method() {
    arguments[0]();
  }
};
object.method(callback, 1, 2);
  


