import { FormEvent, useState } from "react";
import FlashCard from "../models/FlashCard";
import "./Main.css";
import Card from "./Card";

const Main = () => {
  const [deck, setDeck] = useState<FlashCard[]>([]);

  const [HTML] = useState<FlashCard[]>([
    {
      question: ["How do we link our style sheet in our HTML?"],
      answer: [
        "you can use the <link> element within the <head> section of your HTML document",
      ],
      example: [
        "<!DOCTYPE html>",
        "<html>",
        "<head>",
        '<link rel="stylesheet" href="styles.css">',
        "</head>",
        "<body></body>",
        "</html>",
      ],
    },
    {
      question: ["An article is use for...?"],
      answer: [
        "The <article> tag in HTML is used to define a self-contained piece of content within a document. Tipically used for individual, standalone content.",
      ],
    },
    {
      question: [
        "How do we apply attributes to an element? (class, id, etc.)?",
      ],
      answer: [
        "Attributes are added directly within the opening tag of an HTML element.",
      ],
      example: ["<div class='my-class-name' id='my-unique-id'></div>"],
    },
    {
      question: ["What do you need in a form element?"],
      answer: [
        "At least one input with a label associated to it, and a button",
      ],
      example: [
        "<form>",
        "<label for='first-name'> First Name </label>",
        "<input type='text' name='first-name' id='first-name' />",
        "<button> Submit </button>",
        "</form>",
      ],
    },
    {
      question: ["How do you link a label with the input?"],
      answer: [
        "by making the 'for' attribute on the label match the 'id' attribute on the input",
      ],
      example: [
        "<label for='this-must-match'> Label1 </label>",
        "<input type='text' name='blah' id='this=-must-match' />",
      ],
    },
    {
      question: ["What are h1, h2, h3... elements for?"],
      answer: [
        "Heading tags signify importance to webpage (NOT USED FOR SIZE)",
      ],
    },
    {
      question: ["A div is used for..."],
      answer: ["general styling purposes"],
    },
    {
      question: ["A section element is used for..."],
      answer: ["A part of the application that includes at least one heading"],
    },
  ]);
  const [styling] = useState<FlashCard[]>([
    {
      question: [
        "What is the property that is used to generate space around an element's content, inside of any defined borders?",
      ],
      answer: ["Padding"],
    },
    {
      question: [
        "What is the property use to create space around an element outside of any definded borders?",
      ],
      answer: ["Margin"],
    },
    {
      question: [
        "Which positioning allows an element to stay in the flow of the document but can be effected by offsets? (top, right, bottom, left)",
      ],
      answer: ["Relative"],
    },
    {
      question: [
        "Which positioning allows an element to be removed from the flow of the document and can be effected by offsets",
      ],
      answer: ["Absolute"],
    },
    {
      question: [
        "Which positioning allows an element to stay regaurdless of scroll and be effected by offsets?",
      ],
      answer: ["Fixed"],
    },
    {
      question: [
        "How can we center an element vertically and horizontally with offsets?",
      ],
      answer: [
        "position: absolute",
        "left: 50%",
        "top: 50%",
        "transform: translate(-50%, -50%)",
      ],
    },
    {
      question: [
        "How can we center an element vertically and horizontally using flexbox?",
      ],
      answer: [
        "display: flex",
        "justify-content: center",
        "align-items: center",
      ],
    },
    {
      question: ["How do we make our styling responsive?"],
      answer: [
        "media queries",
        "@media only screen and (min-width: 768px) {}, or by using perctentage values like vh and vw",
      ],
    },
    {
      question: ["How do we use CSS selectors on an element, class, and id?"],
      answer: ["element - tagName {}", "class - .className {}", "id - #id {}"],
    },
    {
      question: [
        "What is the difference between these selectors?",
        "div .nav {}",
        "div.nav {}",
        "div > .nav {}",
      ],
      answer: [
        "an element with class 'nav' somewhere inside of a div",
        "a div with a class of 'nav'",
        "an element with class of 'nav' directly nested inside of a div",
      ],
    },
  ]);
  const [variablesFunctions] = useState<FlashCard[]>([
    {
      question: [
        "What two declarative words do we use when creating variables?",
      ],
      answer: ["let and const"],
    },
    {
      question: ["What is the difference between let and const?"],
      answer: ["let allows reassignment const does not"],
    },
    {
      question: [
        "What are the placeholders for the data that a function needs to do it's job?",
      ],
      answer: ["Parameters"],
    },
    {
      question: ["How do we call/envoke a function with parameters?"],
      answer: [
        "function name followed by () with arguments for each parameter myFunction()",
      ],
    },
    {
      question: ["What do we place in the () when we envoke a function?"],
      answer: ["arguments", "myFunction(argument1, argument2, ...)"],
    },
    {
      question: [
        "What function declaration type is this?",
        "const myFunction = function(){}",
      ],
      answer: ["function declration"],
    },
    {
      question: [
        "The number of parameters should always match the number of _______?",
      ],
      answer: ["arguments"],
    },
    {
      question: [
        "What function declaration type is this?",
        "const myFunction = () => {}",
      ],
      answer: ["arrow function"],
    },
    {
      question: [
        "What function declaration type is this?",
        "function myFunction(){}",
      ],
      answer: ["function expression"],
    },
    {
      question: [
        "What does the variable X hold as it's value?",
        "const myFunction = () => return 'hello';",
        "let X = myFunction()",
      ],
      answer: ["X = 'hello'"],
    },
    {
      question: [
        "What is the name of this function?",
        "const potato = (zebra) => {return 250;}",
      ],
      answer: ["potato!"],
    },
    {
      question: [
        "What is the name of this functions paramater(s)?",
        "const myFunction = (one, two) => {}",
        "myFunction(three,four)",
      ],
      answer: ["one and two"],
    },
    {
      question: [
        "What is the name of this functions argument(s)?",
        "const myFunction = (one, two) => {}",
        "myFunction(three,four)",
      ],
      answer: ["three and four"],
    },
    {
      question: ["How do we test a function that returns a value?"],
      answer: [
        "we envoke the function inside of a console.log()",
        "console.log(myFunction())",
      ],
    },
  ]);
  const [ifElse] = useState<FlashCard[]>([
    {
      question: ["What is the if/else template?"],
      answer: ["if ( condition ) {", "} else if ( condition2 ) {", "} else{}"],
    },
    {
      question: [
        "What would this if/else chain return?",
        "let x = true",
        "let y = false",
        "if ( x ) {",
        "return true;",
        "} else {",
        "return false",
        "}",
      ],
      answer: ["True"],
    },
    {
      question: [
        "What would this if/else chain return?",
        "let x = true",
        "let y = false",
        "if ( y ) {",
        "return true;",
        "} else {",
        "return false",
        "}",
      ],
      answer: ["false"],
    },
    {
      question: [
        "What would this if/else chain return?",
        "let x = true",
        "let y = false",
        "if( x && y ) {",
        "return true;",
        "} else {",
        "return false",
        "}",
      ],
      answer: ["False", "&& - and operator meaning both have to be truthy"],
    },
    {
      question: [
        "What would this if/else chain return?",
        "let x = true",
        "let y = false",
        "if( x || y ){",
        "return true;",
        "} else {",
        "return false",
        "}",
      ],
      answer: [
        "True",
        "|| - or operator meaning if either are truthy it fires",
      ],
    },
    {
      question: ["What does this mean?", "x !== y"],
      answer: ["x is not equal to y"],
    },
    {
      question: ["What does this mean?", "!x"],
      answer: ["the opposite of x"],
    },
    {
      question: [
        "What is the name of this and what would be the return value?",
        "20 > 15 ? 'yes' : 'no'",
      ],
      answer: ["terenary operator, it will return 'yes'"],
    },
    {
      question: [
        "What will return from this if/else chain?",
        "let x = 10;",
        "if ( x < 7 ){",
        "return 'yes'",
        "} else if ( x > 9 ) {",
        "return 'no'",
        "} else {",
        "return 'maybe'",
        "}",
      ],
      answer: ["no", "x is greater than 9 so the second block fires"],
    },

    {
      question: ["What is the purpose of an if statement in JavaScript?"],
      answer: [
        "An if statement is used to execute a block of code if a specified condition is true.",
      ],
    },
    {
      question: ["How do you write a basic if statement in JavaScript?"],
      answer: [
        "You write an if statement by using the 'if' keyword followed by a condition in parentheses, and then the code block you want to execute if the condition is truthy.",
      ],
    },
    {
      question: ["What is the 'else' clause used for in an if-else statement?"],
      answer: [
        "The 'else' clause is used to specify a block of code to be executed if the condition in the 'if' statement is false.",
      ],
    },
    {
      question: ["What is the purpose of 'else if' in an if-else statement?"],
      answer: [
        "'else if' allows you to specify additional conditions to test when the initial 'if' condition is false. It's useful for handling multiple cases.",
      ],
    },
    {
      question: [
        "How do you write a ternary conditional (ternary operator) in JavaScript?",
      ],
      answer: [
        "A ternary conditional is written using the '?' operator and is used for inline conditional expressions. It has the form:",
        "'condition ? valueIfTrue : valueIfFalse'.",
      ],
    },
    {
      question: [
        "What is the purpose of 'truthy' and 'falsy' values in JavaScript conditionals?",
      ],
      answer: [
        "In JavaScript, values are considered 'truthy' if they evaluate to true in a boolean context, and 'falsy' if they evaluate to false. These values are used in conditionals.",
      ],
    },
  ]);
  const [loops] = useState<FlashCard[]>([
    {
      question: ["What loop is best for a known start and end?"],
      answer: ["for loop"],
    },
    {
      question: [
        "what is the best loop for going through an array all the way to the end?",
      ],
      answer: ["for...of loop"],
    },
    {
      question: ["what loop will go until your condition is false or a break?"],
      answer: ["while loop"],
    },
    {
      question: ["What is the template for a for loop?"],
      answer: ["for (let i = start; i <div end; i += step){}"],
    },
    {
      question: ["What is the template for a while loop?"],
      answer: ["while (true) {", "break;", "}"],
    },
    {
      question: ["What is the template for a for...of loop?"],
      answer: ["for (let item of array) {}"],
    },
    {
      question: ["What keyword will allow you to exit a loop right away?"],
      answer: ["break;"],
    },

    {
      question: ["What is the purpose of loops in JavaScript?"],
      answer: [
        "Loops are used to repeatedly execute a block of code until a specified condition is met or for a specific number of iterations.",
      ],
    },
    {
      question: [
        "What is the key difference between a 'for' loop and a 'while' loop?",
      ],
      answer: [
        "A 'for' loop is typically used when you know the number of iterations in advance, while a 'while' loop is used when the number of iterations is uncertain.",
      ],
    },
    {
      question: ["What is an 'infinite loop' in JavaScript?"],
      answer: [
        "An infinite loop is a loop that continues to execute indefinitely because its condition is always true or it lacks an exit condition.",
      ],
    },
    {
      question: ["How can you exit a loop prematurely in JavaScript?"],
      answer: [
        "You can use the 'break' statement to exit a loop prematurely when a specific condition is met.",
      ],
    },
    {
      question: ["What is the purpose of the 'continue' statement in a loop?"],
      answer: [
        "The 'continue' statement is used to skip the current iteration of a loop and move to the next iteration.",
      ],
    },
  ]);
  const [objects] = useState<FlashCard[]>([
    {
      question: ["What brackets signify an object?"],
      answer: ["curly brackets {}"],
    },
    {
      question: [
        "How would you console.log() the dog's name?",
        "let family = {",
        "dog: {",
        "name: 'bingo'",
        "}",
        "}",
      ],
      answer: ["console.log(family.dog.name)"],
    },
    {
      question: ["What is an object in JavaScript?"],
      answer: [
        "An object is a collection of key-value pairs, where keys are strings (or symbols) and values can be of any data type, including other objects.",
      ],
    },
    {
      question: ["How do you create an empty object in JavaScript?"],
      answer: ["You can create an empty object using curly braces"],
      example: [" like this: 'const myObject = {};'"],
    },
    {
      question: ["What is a property in an object?"],
      answer: [
        "A property is a key-value pair within an object. The key is a string (or symbol), and the value can be any JavaScript data type.",
      ],
    },
    {
      question: ["what are the ways we access a property inside an object?"],
      answer: ["dot notation or bracket notation"],
      example: [
        "dot notation: object.property",
        "bracket notation:  object[property]",
      ],
    },
    {
      question: ["What is a method in an object?"],
      answer: [
        "A method is a function that is a property of an object. It can be invoked to perform actions or calculations related to the object.",
      ],
    },
    {
      question: ["How do you add a new property to an object?"],
      answer: [
        "You can add a new property to an object by assigning a value to a new or existing key",
      ],
      example: [
        "adding newPropery to myObject",
        "with dot notation: myObject.newProperty = value;",
        "with bracket notation: myObject['newProperty'] = value;'.",
      ],
    },
  ]);
  const [arrays] = useState<FlashCard[]>([
    {
      question: ["how do we access a particular spot in an array?"],
      answer: ["index"],
      example: [
        "if I wanted the 2 out of const array = [1,2,3,4]",
        "array[1]",
        "because it is the second one from the start and index starts at 0",
      ],
    },
    {
      question: ["how do we modify an element in an array?"],
      answer: [
        "using the index and = sign array[index] = to the value that you want that spot to be",
      ],
      example: [
        "let array = [1, 2, 3]",
        "array[1] = 4",
        "array now equals = [1,4,3]",
      ],
    },
    {
      question: [
        "how do we access the name of the second dog?",
        " let pets = [",
        "{name: 'harry'},",
        " {name: 'larry'},",
        " {name: 'jerry'},",
        "]",
      ],
      answer: ["pets[1].name"],
    },
    {
      question: ["how do we get the last index of any array?"],
      answer: ["array.length - 1"],
    },
    {
      question: ["What is an array in JavaScript?"],
      answer: [
        "An array is a data structure that can hold multiple values, which can be of different types, and is indexed by numbers.",
      ],
    },
    {
      question: ["How do you create an empty array in JavaScript?"],
      answer: [
        "You can create an empty array using square brackets, like this: 'const myArray = [];'",
      ],
    },
    {
      question: ["What is the purpose of indexing in arrays?"],
      answer: [
        "Indexing allows you to access individual elements in an array by their position. The index starts at 0 for the first element.",
      ],
    },
    {
      question: ["How do you add elements to an array in JavaScript?"],
      answer: [
        "You can add elements to an array using methods like 'push', 'unshift', or by directly assigning a value to a specific index.",
      ],
      example: ["array.push(newItem) or array[3] = newItem"],
    },
    {
      question: ["What is the 'length' property of an array?"],
      answer: [
        "The 'length' property of an array returns the number of elements in the array. It's one more than the highest index in the array.",
      ],
    },
    {
      question: ["How do you remove elements from an array in JavaScript?"],
      answer: ["You can remove elements from an array using array.splice()"],
    },
    {
      question: [
        "What is the difference between 'forEach' and 'map' array methods?",
      ],
      answer: [
        "'forEach' is used for iterating over array elements and performing an action on each element, while 'map' creates a new array by applying a function to each element.",
      ],
    },
    {
      question: ["How do you check if an element exists in an array?"],
      answer: [
        "You can use methods like 'indexOf', 'includes', 'find', or 'some' to check if an element exists in an array.",
      ],
    },
  ]);
  const [arrayMethods] = useState<FlashCard[]>([
    {
      question: ["what is the best array method to add to an array"],
      answer: ["array.push() / array.unshift()"],
      example: [
        "let names = ['James', 'Mitch']",
        "names.push('Andrea')",
        "console.log(names)",
        "['James', 'Mitch', 'Andrea']",
      ],
    },
    {
      question: ["what array method is synonymous with delete?"],
      answer: ["array.splice( index, numberOfDeletions )"],
      example: [
        "let names = ['James', 'Mitch', 'Andrea']",
        "names.slice( 0 , 1 )",
        "console.log(names)",
        "['Mitch', 'Andrea']",
      ],
    },
    {
      question: [
        "what array method loops through the whole array allowing you to do something to each element in the array?",
      ],
      answer: ["array.forEach() / array.map()"],
      example: [
        "let names = ['James', 'Mitch', 'Andrea']",
        "names.forEach( (name) => {",
        "console.log(name)",
        "}",
        "James",
        "Mitch",
        "Andrea",
      ],
    },
    {
      question: [
        "what array method will go through an array and return the FIRST element to pass it's condition?",
      ],
      answer: ["array.find()"],
      example: [
        "let names = ['James', 'Mitch', 'Andrea']",
        "let foundName = names.find( (name) => name === 'James')",
        "console.log(foundName)",
        "James",
      ],
    },
    {
      question: [
        "what array method will return a new array with only elements passing the given condition?",
      ],
      answer: ["array.filter()"],
      example: [
        "let numbers = [ 5, 10, 20, 25]",
        "let over15 = numbers.filter( (number) => number > 15)",
        "console.log(over15)",
        "[20, 25]",
      ],
    },
    {
      question: [
        "what array method will return either true or false depending on the given condition?",
      ],
      answer: ["array.some() / array.includes()"],
      example: [
        "let names = ['James', 'Mitch', 'Andrea']",
        "let isMitch = names.includes(Mitch)",
        "console.log(isMitch)",
        "true",
        "let numbers = [ 5, 10, 20, 25]",
        "let hasGreaterThan10 = numbers.some( (number) => number > 10 )",
        "console.log(hasGreaterThan10)",
        "true",
      ],
    },
    {
      question: [
        "what array method is best used on superlative functions? (min, max, avg, sum)",
      ],
      answer: ["array.reduce()"],
      example: [
        "let numbers = [ 5, 10, 20, 25]",
        "let sum = numbers.reduce( (cv, ac) => cv + ac )",
        "console.log(sum)",
        "60",
      ],
    },
    {
      question: ["what array method is best to grab a section of a string?"],
      answer: ["array.slice( start, end ) / string.substring( start, end )"],
      example: [
        "let testString = 'I love JavaScript!'",
        "let firstTwoWords = testString.substring( 0, 6 )",
        "let testArray = [ 5, 10, 20, 25 ]",
        "let lastTwoNum = testArray.slice( 2 ) // we leave the last argument empty implying to go to the end.",
      ],
    },
    {
      question: [
        "what array method is best to find the index of an element in an array?",
      ],
      answer: ["array.findIndex()"],
      example: [
        "let names = ['James', 'Mitch', 'Andrea']",
        "let index = names.findIndex( (name) => name === 'Andrea' );",
        "console.log(index)",
        "2",
      ],
    },
    {
      question: ["How do you find the sum of an array of numbers with reduce?"],
      answer: ["array.reduce( ( ac , cv ) => ac + cv)"],
    },
    {
      question: [
        "How do you find the max of an array of objects with a price property?",
      ],
      answer: ["array.reduce( ( ac , cv ) => ac.price > cv.price ? ac : cv )"],
      example: [
        "let shoppingList = [ { name: 'chair', price: 20 }, { name: 'table', price: 25 }, { name: 'couch', price: 30 } ]",
        "let mostExpensive = shoppingList.reduce( ( ac , cv ) => ac.price > cv.price ? ac : cv )",
        "console.log(mostExpensive)",
        "{ name: 'couch', price: 30 }",
      ],
    },
  ]);
  const [DOM] = useState<FlashCard[]>([
    {
      question: ["What does DOM stand for?"],
      answer: ["DOM stands for Document Object Model."],
    },
    {
      question: ["What is the purpose of the DOM in web development?"],
      answer: [
        "The DOM allows developers to interact with and manipulate the content and structure of a web page using JavaScript.",
      ],
    },
    {
      question: ["What is a DOM node?"],
      answer: [
        "A DOM node is an individual element of a web page represented in the DOM. Each HTML tag, attribute, and text content is a DOM node.",
      ],
    },
    {
      question: ["What is an event in the DOM?"],
      answer: [
        "An event in the DOM is an action such as a user clicking a button or submitting a form.",
      ],
    },
    {
      question: ["What is event delegation in the DOM?"],
      answer: [
        "Event delegation is a technique in which you attach a single event listener to a common ancestor of multiple elements instead of attaching separate listeners to each element. ",
      ],
    },
    {
      question: ["How do we pull in HTML nodes into our JavaScript?"],
      answer: ["document.querySelector"],
      example: [
        "HTML",
        "<div id='id' class='class'></div>",
        "JS",
        "any of the below",
        "let div = document.queryselector(div)",
        "let div = document.queryselector(.class)",
        "let div = document.queryselector(#id)",
      ],
    },
    {
      question: ["What does document.querySelectorAll return?"],
      answer: ["A NodeList (array of objects)"],
    },
    {
      question: ["What does document.querySelector return?"],
      answer: ["A Node (object)"],
    },
    {
      question: ["How do we add an attribute to a Node?"],
      answer: ["node.setAttribute('attribute', 'value')"],
      example: [
        "let newDiv = document.createElement('div')",
        "newDiv.setAttribute('id', 'zebra')",
        "<div id='zebra></div>",
      ],
    },
    {
      question: ["How do we add and/or remove classes from a Node?"],
      answer: [
        "node.classList.add() ",
        "node.classList.remove()",
        "node.classList.toggle()",
      ],
      example: [
        "<div></div>",
        "node.classList.add('blah')",
        "<div class='blah'></div>",
        "node.classList.remove('blah')",
        "<div></div>",
        "node.classList.toggle('blah')",
        "<div class='blah'></div>",
        "node.classList.toggle('blah')",
        "<div></div>",
      ],
    },
    {
      question: [
        "What are the methods we use to target our querySelector for class, id, and element?",
      ],
      answer: [
        "class - document.querySelector('.className')",
        "id - document.querySelector('#id')",
        "element - document.querySelector('tagName')",
      ],
    },
    {
      question: ["How do you modify a Node's property such as innerText?"],
      answer: ["dot notation", "node.innerText = 'blah'"],
    },
    {
      question: [
        "How do you change a style of a Node such as background-color?",
      ],
      answer: ["accessing the style property through dot notation"],
      example: [
        "let newDiv = document.createElement('div')",
        "newDiv.style.backgroundColor = 'blue'",
      ],
    },
    {
      question: ["How do you get rid of a node from the DOM entirely?"],
      answer: ["node.remove()"],
      example: ["let div = document.queryselector(div)", "div.remove();"],
    },
    {
      question: [
        "Because a NodeList is an array of objects this allows us to do things like...?",
      ],
      answer: [
        "use index to select particular Node",
        "Allows you to use array methods on the NodeList like .forEach()",
        "Use index and dot notation to access properties on the Nodes in the NodeList",
      ],
    },
  ]);
  const [events] = useState<FlashCard[]>([
    {
      question: ["What is an event in JavaScript?"],
      answer: [
        "An event in JavaScript is an action that can be detected and responded to by your code, such as a user clicking a button, pressing a key, or submitting a form.",
      ],
    },
    {
      question: ["What are some commonly used DOM events?"],
      answer: [
        "Commonly used DOM events include `click`, `mouseover`, `keydown`, `submit`, `mousedown`, among others.",
      ],
    },
    {
      question: ["What is the purpose of the `preventDefault` method?"],
      answer: [
        "The `preventDefault` method is used to prevent the default behavior of a submit event.",
      ],
    },
    {
      question: ["What is event chaining in JavaScript?"],
      answer: [
        "Event chaining, also known as event chaining or event composition, involves linking multiple events together so that one event's action triggers another event. This can be useful for creating complex interactions and workflows in web applications.",
      ],
    },
    {
      question: ["How do we add an event listener to a Node?"],
      answer: ["node.addEventListener('event', ()=>{})"],
      example: [
        "let div = document.queryselector(div)",
        "div.addEventListener('click', ()=>{",
        "console.log('hello');",
        "}",
      ],
    },
    {
      question: ["How do we remove an event listener to a Node?"],
      answer: ["node.removeEventListener(event, myFunction)"],
      example: [
        "let div = document.queryselector(div)",
        "div.addEventListener('click', myFunction)",
        "the event must be a named function to be able to removed",
        "div.removeEventListener('click', myFunction)",
      ],
    },
    {
      question: ["What event do we use for a form?"],
      answer: ["A submit event on the form element."],
      example: [
        "let form = document.querySelector(form);",
        "form.addEventListener('submit', (e)=>{",
        "e.preventDefault();",
        "})",
      ],
    },
    {
      question: ["What is event delegation?"],
      answer: [
        "using one event listener on a parent node in place of many event listeners on the children",
      ],
      example: [
        "document.body.addEventListener('click', (e) => {",
        "if( e.target.classList.contains('blah') ){",
        "console.log('hello');",
        "} else if( e.target.classList.contains('zebra') ){",
        "console.log('goodbye')",
        "}) ",
      ],
    },
    {
      question: [
        "How do we specify what to click when using event delegation?",
      ],
      answer: ["making a condition based on class/tagName"],
      example: [
        "node.addEventListener('click', ()=>{",
        "if (e.target.classList.contains('blah')) {}",
        "if (e.target.tagName === 'DIV') {}",
        "})",
      ],
    },
    {
      question: ["In a click event how do we say 'the thing we clicked'?"],
      answer: ["event.target"],
    },
    {
      question: ["How do we pull in inputs for a form submit event?"],
      answer: [
        "querySelector inside of submit event listener and using .value (.checked for checkboxes)",
      ],
      example: [
        "form.addEventListener('submit', (e)=>{",
        "e.preventDefault()",
        "const input = document.querySelector(#input)",
        "let inputValue = input.value",
        "const checkbox = document.querySelector(#checkbox)",
        "let ifChecked = checkbox.checked",
        "})",
      ],
    },
  ]);
  const [jest] = useState<FlashCard[]>([
    {
      question: ["What is Jest?"],
      answer: ["Jest is a JavaScript testing framework developed by Facebook."],
    },
    {
      question: ["What is a test suite in Jest?"],
      answer: [
        "A test suite in Jest is a collection of related test cases or test files. It is defined using the `describe` function and is used to group tests together for organization and execution.",
      ],
    },
    {
      question: ["What is a test case in Jest?"],
      answer: [
        "A test case in Jest is an individual test that verifies a specific behavior or functionality of your code. Test cases are defined using the `test` function.",
      ],
    },
    { question: ["What is the testing library we use?"], answer: ["Jest"] },
    {
      question: [
        "What do we use to export our functions from our script file?",
      ],
      answer: ["module.exports = {}"],
    },
    {
      question: ["What do we use to import our functions into our test file?"],
      answer: ["const {} = require('./filePath')"],
    },
    {
      question: ["What is the template for a jest test?"],
      answer: [
        "discribe( 'functionName', () => {",
        "test('testCase', () => {})",
        "});",
      ],
    },
    {
      question: ["What is the jest matcher toBe() for?"],
      answer: ["primitive data types (strings, numbers, booleans)"],
    },
    {
      question: ["What is the jest matcher toEqual() for?"],
      answer: ["Arrays and Objects"],
    },
    {
      question: [
        "in the following code block what should go in the expect and toEqual?",
        "describe('description', () => {",
        "test('functionName', () =>{",
        "let object = {name: 'James', age: 29}",
        "let array=[];",
        "let results = addObjectToArray(object);",
        "expect(?).toEqual(?);",
        "})",
        "})",
      ],
      answer: ["array, [object] or [ { name: 'James', age: 29 } ]"],
    },
  ]);
  const [typeScript] = useState<FlashCard[]>([
    {
      question: ["What are interfaces in TypeScript?"],
      answer: [
        "Interfaces in TypeScript are used to define the structure of objects like a blueprint.",
      ],
    },
    {
      question: ["How does TypeScript improve JavaScript development?"],
      answer: [
        "TypeScript improves JavaScript development by providing type safety, better tooling support, enhanced code quality through static analysis, and improved code maintainability through clear type annotations.",
      ],
    },
    {
      question: ["What is typescript?"],
      answer: [
        "an open-source programming language developed and maintained by Microsoft that's statically typed superset of JavaScript, which means that it builds upon JavaScript by adding static types to the language.",
      ],
    },
    {
      question: ["How do we use type annotations for variables?"],
      answer: [
        "adding a : with the type to the end of the variable name statically sets the type",
      ],
      example: [
        "let name: string = 'james'",
        "let arrayOfNames: string[] = ['a', 'b', 'c']",
      ],
    },
    {
      question: ["How do we use type annotations for functions?"],
      answer: [
        "adding return type after params and annotating any params given to the function",
      ],
      example: [
        "const myFunction = (param1: string, param2: number):number[] => {returns array of numbers}",
      ],
    },
    {
      question: ["What is the return type of a function without a return?"],
      answer: ["void"],
    },
    {
      question: ["How do we make a parameter optional?"],
      answer: ["Adding a ? to the end before the type"],
      example: [
        "param 2 is optional here",
        "const myFunction = (param1: string, param2?: number):number[] => {}",
      ],
    },
    {
      question: ["What is an interface?"],
      answer: ["An interface is a blueprint that describes an object"],
    },
    {
      question: ["What is an interface template look like?"],
      answer: [
        "interface MyInterface {",
        "property1: type",
        "property2: type",
        "}",
      ],
    },
    {
      question: ["How do you say a property is optional in an interface?"],
      answer: ["a ? at the end of the property name"],
      example: [
        "property1 is optional here",
        "interface MyInterface {",
        "property1?: type",
        "property2: type",
        "}",
      ],
    },
    {
      question: ["How do you add a method onto an interface?"],
      answer: [
        "We declare the method with params and return type and thats it.",
      ],
      example: [
        "interface MyInterface {",
        "property1: type",
        "myMethod: ( params ) => returnType",
        "↑ like this ↑",
        "}",
      ],
    },
    {
      question: [
        "How do we type annotate something that is either a string or null?",
      ],
      answer: ["using the pipe | or operator but only one"],
      example: ["const thing: string | null = null;"],
    },
    {
      question: ["how do we export default an interface?"],
      answer: ["adding 'export default' to start of interface declration"],
      example: [
        "export default interface MyInterface {",
        "property1: type",
        "}",
      ],
    },
    {
      question: ["How do we import our interfaces?"],
      answer: [
        "either using the quick fix option or manually typing out the import",
      ],
      example: ["import MyInterface from '../filePath'"],
    },
    {
      question: ["How do we export more than one thing?"],
      answer: ["adding 'export' to start of the declaration"],
    },
    {
      question: ["How do we import more than one thing?"],
      answer: ["import with destructing"],
      example: ["import { thing1, thing2 } from '../filePath'"],
    },
    {
      question: ["How do we test our TypeScript files?"],
      answer: ["npx nodemon filePath/file.ts"],
    },
  ]);
  const [classes] = useState<FlashCard[]>([
    {
      question: ["What is a class in JavaScript?"],
      answer: [
        "A blueprint for creating objects. It defines the structure and behavior of objects that can be created using the class as a template.",
      ],
    },
    {
      question: ["What is a constructor in a class?"],
      answer: [
        "A  special method that is automatically called when an object is created from the class. It is used to initialize object properties to their values.",
      ],
    },
    {
      question: ["What is the `this` keyword in a constructor?"],
      answer: [
        "The `this` keyword in a constructor refers to the instance of the object being created. It is used to access and set object properties within the constructor.",
      ],
    },
    {
      question: ["How do you create an object from a class in JavaScript?"],
      answer: [
        "You use the `new` keyword followed by the class name and any required constructor arguments.",
      ],
      example: ["const myObject = new MyClass();"],
    },
    {
      question: ["What is a Class?"],
      answer: [
        "A class is like a blueprint for objects much like an interface however a Class has the ability to create objects as well",
      ],
    },
    {
      question: ["What is a Class template?"],
      answer: [
        "class MyClass {",
        "property1: type",
        "constructor( property1: type ) {",
        "this.property1 = property1;",
        "}",
        "methods(){}",
        "}",
      ],
    },
    {
      question: [
        "How do we create an instance of a Class? (use class to make object)",
      ],
      answer: [
        "using the keyword 'new' followed by the name of the Class. Here we have a Food class",
      ],
      example: ["let hotdog: Food = new Food('hotdog');"],
    },
    {
      question: ["What does the constructor do in a class?"],
      answer: ["sets the values to the properties that are on this class."],
      example: [
        "Here we have property1 being set by the constructor",
        "class MyClass {",
        "property1: type",
        "constructor( property1: type ) {",
        "this.property1 = property1;",
        "}",
        "}",
      ],
    },
    {
      question: ["How do we add a method on a Class?"],
      answer: ["after the constructor we create the method"],
      example: [
        "class MyClass {",
        "constructor() {}",
        "myMethod(params): returnType {}",
        "}",
      ],
    },
    {
      question: [
        "How do we extend a Class? Or how do we make a subclass of another class?",
      ],
      answer: ["using our 'extends' keyword to create a subclass. "],
      example: [
        "Second is a subclass of First",
        "class First {}",
        "class Second extends First {}",
      ],
    },
    {
      question: ["What is inheritance and why is it important?"],
      answer: [
        "Inheritance allows new sub-classes to also contain all the properties and methods of it's parent giving them the same functionality plus anything new.",
      ],
    },
    {
      question: ["What is the 'super()' in a subclass?"],
      answer: [
        "super() is how we call the parent's constructor for any inherited properties that still need to be initalized",
      ],
    },
    {
      question: [
        "How can we override a method from the parent class on a sub-class?",
      ],
      answer: ["Simply define the same method again in the subclass."],
    },
    {
      question: ["What is Polymorphism?"],
      answer: [
        "The act of a subclass being allowed in place of a parent class. 'A square is still a rectangle' type of thing",
      ],
    },
    {
      question: ["What is Encapsulation?"],
      answer: [
        "The process that keeps the properties, values, and methods tied to the object created from the instance of a class",
      ],
    },
    {
      question: ["What is Abstraction?"],
      answer: [
        "The process of hidding all but the relevant data about an object in order to reduce complexity and increase efficiency",
      ],
    },
    {
      question: ["how do you set an inital value for a property on a class?"],
      answer: ["setting the value when you make the property"],
      example: [
        "class MyClass {",
        "property1: type = 'inital value'",
        "constructor() {}",
        "methods(){}",
        "}",
      ],
    },
    {
      question: [
        "How to set at optional constructor property value with a Class?",
      ],
      answer: [
        "by making the constructor parameter optional by giving it a default value",
      ],
      example: [
        "class MyClass {",
        "property1: type",
        "constructor( property1: type = 'default value') {",
        "this.property1 = property1;",
        "}",
        "methods(){}",
        "}",
      ],
    },
    {
      question: ["What does the keyword 'this' mean?"],
      answer: [
        "this.property means that we are targeting the property that lives on the class you are working in.",
      ],
      example: [
        "For example with the constructor",
        "constructor( newProperty1 ) {",
        "this.property1 = newProperty1;",
        "}",
        "this classes property1 will have the value passed as newProperty1",
      ],
    },
    {
      question: ["What are the class member modifiers?"],
      answer: [
        "Public - the default, can be used anywhere",
        "Private - cannot be used outside of the class",
        "Protected - can only be used inside of the class or subclasses",
        "readonly - cannot be changed. Only read.",
      ],
    },
  ]);
  const [relationalDB] = useState<FlashCard[]>([
    {
      question: ["What is a relational database?"],
      answer: [
        "A  type of database that uses a structured format with tables and relationships between data.",
      ],
    },
    {
      question: ["What is PostgreSQL?"],
      answer: [
        "PostgreSQL is an open-source relational database management system (RDBMS) known for its robustness, scalability, and support for advanced features. It is commonly used for both small and large-scale database applications.",
      ],
    },
    {
      question: ["What is pgAdmin?"],
      answer: [
        "pgAdmin is a popular open-source administration and management tool for PostgreSQL databases. It provides a graphical interface for performing tasks like creating, modifying, and querying databases.",
      ],
    },
    {
      question: ["What are tables in a relational database?"],
      answer: [
        "Tables are data structures that organize data into rows and columns.",
      ],
    },
    {
      question: ["What is a primary key in a database table?"],
      answer: [
        "A unique identifier for each record in a database table. It ensures that each row has a distinct identity and is used to establish relationships between tables.",
      ],
    },
    {
      question: ["What is a foreign key in a database table?"],
      answer: [
        "A column in a database table that is used to establish a link between the data in two tables. It creates referential integrity by enforcing relationships between related tables.",
      ],
    },
    {
      question: ["What is a Relational Database? (PostgreSQL)"],
      answer: [
        "A database that organizes data into one or more tables of rows and columns with a unique key for each row.",
      ],
    },
    {
      question: ["What is the name of the unique value for each row?"],
      answer: ["foreign key / primary key"],
      example: [
        "CREATE TABLE test(id SERIAL PRIMARY KEY, column2, column3...)",
      ],
    },
    {
      question: ["What data type do we use for whole numbers?"],
      answer: ["SMALLINT, INT, MEDIUMINT, BIGINT"],
    },
    {
      question: ["What data type do we use for decimal numbers?"],
      answer: ["REAL, FLOAT"],
    },
    {
      question: ["What data type is used for strings?"],
      answer: ["CHAR(LENGTH), VARCHAR(LENGTH), TEXT"],
    },
    {
      question: ["In PgAdmin, how do we make a new table?"],
      answer: ["CREATE TABLE tableName(column1, column2, column3...)"],
      example: [
        "CREATE TABLE heroes(id SERIAL PRIMARY KEY, name VARCHAR(20), super_power VARCHAR(30))",
      ],
    },
    {
      question: ["In PgAdmin, how do we add values to the table?"],
      answer: [
        "INSERT INTO tableName (column1, column2,column3...)",
        "VALUES(value1, value2, value3...)",
      ],
      example: [
        "INSERT INTO heroes (name, super_power)",
        "VALUES(the Churpis, coding)",
      ],
    },
    {
      question: ["In PgAdmin, How do we retrieve data froma a table?"],
      answer: ["SELECT * FROM tableName"],
      example: [
        "SELECT * FROM heroes",
        "| name ------ | super_power |",
        "| the Chripus | coding ---- |",
      ],
    },
    {
      question: ["In PgAdmin, How do we modify data in a table?"],
      answer: ["UPDATE tableName SET property=value WHERE..."],
      example: [
        "UPDATE heroes SET super_power=REACT WHERE heroes.name='the Chripus'",
        "| name ------ | super_power |",
        "| the Chripus | REACT ----- |",
      ],
    },
    {
      question: ["In PgAdmin, How do we delete data within a table?"],
      answer: ["DELETE FROM tableName WHERE..."],
      example: [
        "| name ------ | super_power |",
        "| the Chripus | REACT ----- |",
        "| Hulk ------ | Strength -- |",
        "DELETE FROM heroes WHERE heroes.name='the Chripus'",
        "| name ------ | super_power |",
        "| Hulk ------ | Strength -- |",
      ],
    },
    {
      question: ["In PgAdmin, How do we target a specific column in a table?"],
      answer: ["using WHERE and making a conditional query"],
      example: [
        "| name ------ | super_power |",
        "| the Chripus | REACT ----- |",
        "| Hulk ------ | Strength -- |",
        "SELECT * FROM staff WHERE name='Hulk'",
        "| name ------ | super_power |",
        "| Hulk ------ | Strength -- |",
      ],
    },
    {
      question: ["In PgAdmin, How do we return the data in a sorted manner?"],
      answer: [
        "ORDER BY is how we sort data and using ASC or DESC for accending and descending order",
      ],
      example: [
        "SELECT * FROM heroes ORDER BY name ASC",
        "SELECT * FROM heroes ORDER BY super_power DESC",
      ],
    },
    {
      question: ["In PgAdmin, How do we return data from more than one table?"],
      answer: [
        "With a JOIN and a corresponding key",
        "SELECT * FROM tableA JOIN tableB ON tableA.id = tableB.id",
      ],
    },
    {
      question: ["What is the left/right join?"],
      answer: [
        "left join will show all the data from the left table and only the data that matches from the right. Right join is the same thing just shows all data from right table and only matches from left.",
      ],
    },
    {
      question: ["What is the full join?"],
      answer: [
        "Full join will join both tables showing all of the data from both",
      ],
    },
    {
      question: ["What is the inner join (join)?"],
      answer: [
        "join shows data from both tables but only the rows that have the matching value.",
      ],
    },
    {
      question: [
        "How do we search for something that either starts with or ends with a string?",
      ],
      answer: ["LIKE 'startsWith%' ", "LIKE '$endsWith'"],
      example: [
        "| name ------ | super_power |",
        "| the Chripus | REACT ----- |",
        "| name ------ | super_power |",
        "| Hulk ------ | Strength -- |",
        "SELECT * FROM staff WHERE name LIKE 'Hu%'",
        "or",
        "SELECT * FROM staff WHERE name LIKE '$lk'",
        "| name ------ | super_power |",
        "| Hulk ------ | Strength -- |",
      ],
    },
    {
      question: [
        "How do we only return the number of rows that we want in a request?",
      ],
      answer: ["LIMIT 10 would limit the results to 10"],
      example: ["SELECT * FROM table LIMIT 10"],
    },
  ]);
  // above has ben checked with chatGTP
  const [noSQLDatabase] = useState<FlashCard[]>([
    {
      question: ["What is a noSQL database? (MongoDB)"],
      answer: [
        "It is a document store. It stores collections of documents which are JSON objects",
      ],
    },
    {
      question: ["What does a MongoDB document look like and behave as?"],
      answer: ["Just like a JS object."],
    },
    {
      question: ["How do we create a collection in MongoDB?"],
      answer: [
        "Simply inserting into a collection will create it. If it doesn't exist already",
      ],
    },
    {
      question: ["What unique property will MongoDB add to EVERY document?"],
      answer: [
        "_id which will have a special MongoDB value called ObjectId",
        "_id: ObjectId('f64ghe5r6gtr6e')",
      ],
    },
    {
      question: ["In MongoDB, how do we add a document?"],
      answer: ["db.collectionName.insertOne({})"],
      example: [
        "db.students.insertOne( {name: 'James'} )",
        "creates the following document",
        "{ {_id: ObjectId('64db99b10ab1d7bcf5a0769d'), name: 'James'} }",
      ],
    },
    {
      question: ["In MongoDB, how do we list all documents?"],
      answer: [
        "db.collectionName.find()",
        "Leaving the find() method empty returns everything",
      ],
    },
    {
      question: ["In MongoDB, how do we list only specified documents?"],
      answer: [
        "The find method takes in a query document that only returns the matching documents.",
        "db.collectionName.find({query})",
      ],
      example: ["db.students.find({name: 'James'})"],
    },
    {
      question: [
        "In MongoDB, how do we switch which database we are currently using?",
      ],
      answer: ["use databaseName"],
    },
    {
      question: [
        "In MongoDB, how do we add more than one document to a collection at once?",
      ],
      answer: ["db.collectionName.insertMany([{},{}])"],
      example: [
        "db.collectionName.insertMany([{name: 'James'},{name: 'Mitch}])",
        "creates the following documents",
        "{ {_id: ObjectId('64db99b10ab1d7bcf5a0769d'), name: 'James'},{_id: ObjectId('1d7bcf5a0769d64db99b10ab'), name: 'Mitch'} }",
      ],
    },
    {
      question: [
        "In MongoDB, how do we return just one document based on a search?",
      ],
      answer: ["db.collectionName.findOne()"],
      example: ["db.students.findOne( {name: 'James'} )"],
    },
    {
      question: [
        "In MongoDB, how do we make it so only a set amount of results are returned?",
      ],
      answer: [
        "the .limit() at the end allows it and the number you want to come back goes in the () like .limit(4) for 4 results",
      ],
      example: ["db.students.find().limit(4)"],
    },
    {
      question: ["In MongoDB, how do we return the data in an ordered manner?"],
      answer: [
        ".sort() allows us to sort our results with a condition like .sort( {name: 1} )",
      ],
      example: ["db.collectionName.find().sort( {name: 1} )"],
    },
    {
      question: ["In MongoDB, how do we search for more than one condition?"],
      answer: [
        "$or / $and allows the query to take in more than one condition",
      ],
      example: [
        "db.students.find( { $or: [{name: 'james'},{name: 'mitch'}] } )",
      ],
    },
    {
      question: ["In MongoDB, how do we use projection?"],
      answer: [
        "Projection is used to limit which fields are shown in the results",
      ],
      example: [
        "db.students.find({query}, {name: 1})",
        "only the name property would be returned along with the _id which always returns unless projection is used to hide it.",
      ],
    },
    {
      question: [
        "In MongoDB, how do we totally subsitute the whole document with a new one?",
      ],
      answer: ["db.collectionName.replaceOne()"],
      example: [
        "db.students.replaceOne( { name: 'James' }, { name: 'Bob' } )",
        "Now the document that had the name of 'James' has been replaced with 'Bob'",
      ],
    },
    {
      question: ["In MongoDB, how do we access embedded documents?"],
      answer: [
        "putting the property in quotes and using dot notation for the index and property.",
      ],
      example: [
        "{name: 'James', tutors: [{name: 'Josh'},{name: 'Kim'}]}",
        "If I wanted to access Kim",
        "db.students.updateOne({'tutors.1.name': 'Kim'}, {$set: {name: 'Kimberly'} })",
        "if I wanted to search for any Josh's",
        "db.students.find({'tutors.name': 'Josh'})",
      ],
    },
    {
      question: ["How do you search for starts with/ends with in MongoDB?"],
      answer: ["Using a regular expression and it's syntax with ^ and $"],
      example: [
        "This will look for anything starting with a capital J",
        "db.students.find({name: /^J/})",
        "This will look for anything ending with .com",
        "db.students.find({name: /.edu$/})",
      ],
    },
    {
      question: ["How do you add a new feild to a document in MongoDB?"],
      answer: [
        "using the updateOne and $set you can add a new property that wasn't already there",
      ],
      example: [
        "Even if this document doesn't have an age property it will after this command.",
        "db.students.updateOne({name: 'James'}, {$set: {age: 23} })",
      ],
    },
  ]);
  const [express] = useState<FlashCard[]>([
    {
      question: ["What is Express?"],
      answer: [
        "Express is a framework for node.js that creates HTTP servers and RESTful APIs. It's a very popular, powerful, and relatively easy to use.",
      ],
    },
    {
      question: ["What is REST?"],
      answer: [
        "Representational State Transfers. REST is an architecture style of designing network applications. It relies on HTTP actions and endpoints. (GET, POST, PUT, DELETE)",
      ],
    },
    {
      question: ["What is an endpoint?"],
      answer: [
        "The URI of an URL. Everything after the .whatever like .com .org",
      ],
      example: [
        "Ex: http://example.com/search/things",
        "The endpoint is: /search/things",
      ],
    },
    {
      question: ["What is an URI?"],
      answer: [
        "Everything that comes after the base URL",
        "Ex: http://example.com/blueberry",
        "The Base URL is http://example.com",
        "The URI is /blueberry",
      ],
    },
    {
      question: ["What is CRUD?"],
      answer: [
        "It stands for the REST HTTP actions:",
        "Create (post)",
        "Read (get)",
        "Update (put/patch)",
        "Delete (delete)",
      ],
    },
    {
      question: ["What status codes mean what kind of response?"],
      answer: [
        "200 - OK (GET, PUT, PATCH)",
        "201 - Created (POST)",
        "204 - No Content (DELETE)",
        "400 - Bad Request (POST, PUT, PATCH)",
        "404 - Not Found (GET, POST, PUT, PATCH, DELETE)",
        "500 - Internal Server Error",
      ],
    },
    {
      question: ["What is the 'Body' in for example a POST request?"],
      answer: [
        "The Body is the name of the data passed along with the request. In the case of a POST it is the thing you want to add to your database.",
      ],
    },
    {
      question: ["What is a route param and how do we add them to endpoints?"],
      answer: [
        "Route params are data passed along in the URI",
        "myRouter.get( `/endpoint/:routeParam` , () => {} )",
        "...com/endpoint/blahblahblah",
      ],
    },
    {
      question: ["What is a Query String Param and how do we pass them?"],
      answer: [
        "Query String Params are data passed along with the request in the URI prefixed with a '?'",
        "...com/blah?queryParam=123ABC",
      ],
    },
    {
      question: ["How do we write an endpoint in our router file?"],
      answer: [
        "where HTTPmethod would be either GET, POST, PUT or DELETE",
        "router.HTTPmethod('/endpoint', async (req, res) => {",
        "try {",
        "} catch (err) {",
        "errorResponse(err, res);",
        "}",
        "});",
      ],
    },
    {
      question: ["How do we let our application know about our routers?"],
      answer: [
        "Importing and telling our app to use them in the index.ts file",
        "app.use('/', router)",
      ],
    },
    {
      question: [
        "How do we write the command that tells our Mongo server what to do?",
      ],
      answer: [
        "const client = await getClient()",
        "const cursor = await client.db().collection<Type>('collectionName').find().toArray();",
        "res.status(200).json(cursor);",
      ],
    },
    {
      question: [
        "How does a full endpoint that connects to a mongo server to get all look like?",
      ],
      answer: [
        "router.get('/getAll', async (req, res) => {",
        "try {",
        "const client = await getClient()",
        "const cursor = await client.db().collection<Type>('collectionName').find().toArray();",
        "res.status(200).json(cursor);",
        "} catch (err) {",
        "errorResponse(err, res);",
        "}",
        "});",
      ],
    },
    {
      question: [
        "How do you pull in a route param and query string param in an endpoint?",
      ],
      answer: [
        "route param - let name = req.param.name",
        "query string param - let name = req.query.name as string;",
        "(let firstName = req.query['first-name'] as string; for params with '-' in them)",
      ],
      example: [
        "router.get('/endpoint/:zebra', async (req, res) => {",
        "const zebra = req.param.zebra",
        "const potato = req.query.potato as string;",
        "}",
        "...com/endpoint/blueberry?potato=tomato",
        "then, zebra = 'blueberry'",
        "and, potato = 'tomato'",
      ],
    },
    {
      question: [
        "What does it mean when something is asynchronous? What key word do we use on async functions?",
      ],
      answer: [
        "Asynchronous means to follow it's own sequence. It will not wait it's turn to run it will run on its own.",
        "The key word we use is await. Await allows us to tell our async function to wait until this line is done before moving onto the next within the async function.",
      ],
    },
    {
      question: ["How do we make our dynamic optional query object?"],
      answer: [
        "using the spread operator (...) and a ternary operator we can make an object that will replicate what our query object in mongoDB would be.",
      ],
      example: [
        `const maxPrice: number = parseInt(req.query["max-price"] as string);`,
        `const prefix: string = req.query.prefix as string;`,
        "const query = {",
        "...(maxPrice ? { price: { $lte: maxPrice } } : {}), ",
        "// if maxPrice is true, ...{price: { $lte: maxPrice } } === price: {$lte: maxPrice}",
        "// if maxPrice is false, ...{} === nothing at all, blank.",
        "...(prefix ? { name: new RegExp(prefix, 'i') } : {}),",
        "// if prefix is true, ...{name: new RegExp(prefix, 'i')} === name: /prefix/i",
        "// if prefix is false, ...{} === nothing at all, blank",
        "};",
        "// if both true, query = { price: { $lte: maxPrice}, name: /prefix/i }",
        "// if both false, query = {}, if both false they are blank nothing at all so there is nothing in the object",
        "// if only maxPrice is true, query = { price: { $lte: maxPrice } }, because prefix is blank!",
        "// if only prefix is true, query = { name: /prefix/i }, because maxPrice is blank!",
      ],
    },
  ]);
  const [react] = useState<FlashCard[]>([
    {
      question: ["What is React?"],
      answer: [
        "A open source JavaScript library that lets us make single page applications with complicated web UIs more easily.",
      ],
    },
    {
      question: ["What is a React Component?"],
      answer: [
        "The pieces, or building blocks, that make up a webpage. A React Component are functions that return JSX.",
      ],
    },
    {
      question: [
        "What is Component-Based Architecture and what are some advantages?",
      ],
      answer: [
        "Each component bundles together the HTML, CSS, and JS (TS) for that 'block' of the code.",
        "They are reuseable, testable, scalable, and independent.",
      ],
    },
    {
      question: ["How would you render the component 'Main'?"],
      answer: ["<Main />"],
    },
    {
      question: ["What does a react component look like?"],
      answer: [
        "const Component = () => {",
        "return (",
        "<div className='Component'></div>",
        ")",
        "};",
        "export default Component;",
      ],
    },
    {
      question: ["What is State?"],
      answer: [
        "each react component can have state. It is react's variables which are updated in real time asynchronously and immutability",
      ],
    },
    {
      question: ["How do we make a state variable?"],
      answer: ["const [state, setState] = useState<type>( initalValue );"],
    },
    {
      question: ["How do we change the state?"],
      answer: [
        "using the second provided variable in the state declaration, setState.",
        "setState( newValue )",
      ],
      example: [
        "const [name, setName] = useState<string>('James');",
        "setName( 'Mitch');",
        "console.log( name );",
        "Mitch",
      ],
    },
    {
      question: [
        "How do we keep track of the previous state when setting a new state?",
      ],
      answer: [
        "a callback in the setState function",
        "setState( (prev) => prev+1 )",
        "this increments the state by 1",
      ],
      example: [
        "const [number, setNumber] = useState<number>(0);",
        "number++ //Wrong, will error",
        "setNumber( (prev) => prev++ ); //correct",
      ],
    },
    {
      question: ["What is a react Hook?"],
      answer: [
        "hooks are built in react functions that were built to provide a streamlined development experience. They all start with 'use', for example: useState() is a hook.",
      ],
    },
    {
      question: ["How do we handle DOM events like click events in react?"],
      answer: [
        "By using the attribute such as onClick and passing an inline function to a handler function",
      ],
      example: [
        "const clickHandler = ( e:MouseEvent ):void => console.dir(e.target)",
        "<button onClick={ (e) => clickHandler(e) }> onClick </button>",
      ],
    },
    {
      question: ["What is a fragment?"],
      answer: [
        "A way to group multiple nodes together as one. Used when you need to return a single JSX node but have more than one",
      ],
      example: [
        "Like a ternary operator or 'if' you can only return a single node but here we use fragment to return both an h1 and p",
        "{ isShown &&",
        "<>",
        "<h1>Hello</h1>",
        "<p>Welcome to blah</p>",
        "</>",
        "}",
      ],
    },
    {
      question: ["What is immutability?"],
      answer: [
        "If something is immutable it means it will not ever change. It can be replaced however.",
      ],
      example: [
        "Think of a open close sign hanging in the door of a coner store. We have an open side and a closed side. They are immutable they cannot change. However we can flip the sign to replace weither we show the open side or the closed side.",
      ],
    },
    {
      question: ["How do we add/delete on an immutable array?"],
      answer: [
        "Replacing the whole array with a new array. We can do this by taking advantage of prev, and the spread operator (...) inside of our setState function.",
      ],
      example: [
        "const [numbers, setNumbers] = useState([1, 2]);",
        "lets add 3, 4, and 5 to the array",
        "setNumbers( (prev) => [...prev, 3, 4, 5])",
        "Now lets remove the number at index = 2 (3)",
        "setNumbers( (prev) => [...prev.slice(0, index), ...prev.slice(index + 1) ] )",
      ],
    },
    {
      question: [
        "How do we replace an object on an immutable array of objects?",
      ],
      answer: [
        "Replacing the whole array with a new array that slices off the one we are replacing and inputs the new object.",
      ],
      example: [
        "const [staff, setStaff] = useState([",
        "{ name: 'James', age: 28 }",
        "{ name: 'Bill', age: 102 }",
        "{ name: 'Mitch', age: 27 }",
        "]);",
        "lets replace Bill with Andrea",
        "let index = 1;",
        "setStaff( (prev) => [...prev.slice( 0, index ), { name: 'Andrea', age: 26 }, ...prev.slice( index + 1 )] )",
      ],
    },
    {
      question: ["What is a controlled component? (component with form)"],
      answer: [
        "React's recommended tatic for forms by keeping our state in sync with our form inputs with state updating from onChange based on the value from the input and vise versa",
      ],
      example: [
        "const [name, setName] = useState<string>('')",
        "<form>",
        "<input type='text' name='input1' id='input1' value={name} onChange={ (e) => setName(e.target.value)} />",
        "</form>",
        "See how we have the value as the state variable and in the onChange we are using the setState function to keep it in sync",
      ],
    },
    {
      question: [
        "On form submission, how do we handle the form data on submit?",
      ],
      answer: [
        "using the onSubmit attribute which will reference a handler function which then handles the form data how we wish",
      ],
      example: [
        "const submitHandler = (e: FormEvent) => {",
        "e.preventDefault(); //stops page reloading",
        "console.log(name); //We are just going to console log whatever the user puts in the input",
        "}",
        "const [name, setName] = useState<string>('')",
        "<form onSubmit={ submitHandler }>",
        "<input type='text' name='input1' id='input1' value={name} onChange={ (e) => setName(e.target.value)} />",
        "</form>",
      ],
    },
    {
      question: ["What do we use props for?"],
      answer: ["Props are used to pass data from one component to another."],
      example: [
        "In the following line we are redering the component List.tsx and going to pass the prop of 'theme' that has a value of 'darkTheme'",
        "<List theme={darkTheme} />",
        "In the List.tsx we recieve the props",
        "interface Props {",
        "theme: boolean;",
        "}",
        "const List = ( {theme}: Props ) => {}",
      ],
    },
    {
      question: ["What is a callback prop?"],
      answer: [
        "A function passed as a prop where the child can call the function.",
      ],
      example: [
        "<List myFunction={(params) => myFunction(params)} />",
        "<List myFunction={myFunction} /> // if no params we can shorten to this",
      ],
    },
  ]);
  const [reactAPI] = useState<FlashCard[]>([
    {
      question: [
        "Why do we make interfaces and what tells us what should be in them?",
      ],
      answer: [
        "We make interfaces to model the JSON response that we get from our service call and all the properties that we are going to use.",
      ],
    },
    {
      question: [
        "What are the functions that we use to fetch data from an API?",
      ],
      answer: ["Service calls"],
    },
    {
      question: ["What is Axios?"],
      answer: [
        "A AJAX library that we use to make our service calls that allows us to use get, post, put, patch, and delete.",
      ],
    },
    {
      question: ["Where do we call our service calls to avoid rerendering?"],
      answer: [
        "We call our service calls in a useEffect so that it doesn't cause rerendering on change.",
      ],
    },
    {
      question: ["What is useEffect?"],
      answer: [
        "useEffect hook that allows code to run on load only once and not again on rerender. Or, unless the item in it's dependency array is updated.",
      ],
    },
    {
      question: ["How do we keep things like an API key a secret?"],
      answer: [
        "We put them in our .env.local file and then use process.env to access it in our service file.",
      ],
    },
    {
      question: [""],
      answer: [""],
    },
    {
      question: [""],
      answer: [""],
    },
  ]);

  const shuffleArray = (array: FlashCard[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  };

  const deckHandler = (choice: FlashCard[]) => {
    let flippedCards = document.querySelectorAll(".flip");
    flippedCards.forEach((card) => card.classList.remove("flip"));
    let examples = document.querySelectorAll(".example");
    examples.forEach((card) => card.classList.add("hidden"));
    shuffleArray(choice);
    setDeck(choice);
  };

  const handleClick = (e: any) => {
    if (e.target.tagName === "BUTTON") {
      document
        .querySelectorAll("button")
        .forEach((button) => button.classList.remove("active"));
      e.target.classList.add("active");
    }
  };

  return (
    <div className="Main">
      <h1>Pick A topic to Study!</h1>
      <header>
        <div id="button-container" onClick={handleClick}>
          <button onClick={() => deckHandler(HTML)}>HTML</button>
          <button onClick={() => deckHandler(styling)}>Styling</button>
          <button onClick={() => deckHandler(variablesFunctions)}>
            Variables and Functions
          </button>
          <button onClick={() => deckHandler(ifElse)}>if/else</button>
          <button onClick={() => deckHandler(loops)}>Loops</button>
          <button onClick={() => deckHandler(objects)}>Objects</button>
          <button onClick={() => deckHandler(arrays)}>Arrays</button>
          <button onClick={() => deckHandler(arrayMethods)}>
            Array Methods
          </button>
          <button onClick={() => deckHandler(DOM)}>DOM</button>
          <button onClick={() => deckHandler(events)}>Events</button>
          <button onClick={() => deckHandler(jest)}>Jest</button>
          <button onClick={() => deckHandler(typeScript)}>TypeScript</button>
          <button onClick={() => deckHandler(classes)}>Classes</button>
          <button onClick={() => deckHandler(relationalDB)}>
            Relational Databases
          </button>
          <button onClick={() => deckHandler(noSQLDatabase)}>
            No SQL Databases
          </button>
          <button onClick={() => deckHandler(express)}>Express</button>
          <button onClick={() => deckHandler(react)}>React</button>
        </div>
      </header>
      {deck.length > 1 && (
        <div>
          <ul>
            {deck.map((card, i) => (
              <Card key={i} card={card} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Main;
