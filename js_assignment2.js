// Question No:1) Write a function that creates a closure and returns a function that can add
// specific number to any number passed to it. For example, if the closure is
//created with 5, the returned function should add 5 to any number passed
//to it.

let x = 5
function add(x) {
    return function (y) {
        console.log(x + y)

    }

}
add();
let innerfuntion = add(5)
innerfuntion(7);

// Question No:2
//Write a recursive function that searches an array for a specific value. The
//function should return true if the value is found, and false if it is not. You
//can assume that the array is not nested.

const array1 = [8, 9, 10, 5, 11, 13, 4, 6, 7];
function Findarray(array, value) {
    if (array[0] === value) { //value found
        return true;
    }
    else {
        return Findarray(array.slice(1), value)
    }
}
console.log(Findarray(array1, 9)); // Output: true
console.log(Findarray(array1, 5)); // Output: true

// Question NO:3
//Write a function that adds a new paragraph element to the bottom of an
// HTML document. The function should take a string argument that will be
// used as the text content of the new paragraph element

function addPara(text) {
    const newPara = document.createElement('p'); // it will create a new <p> element
    const paraText = document.createTextNode(text);
    newPara.appendChild(paraText); // it will append text to the <P> element
    document.body.appendChild(newPara); // it will append the element at the end of the html body
}
addPara("Ammara khattak");

// Question No:04
// Write a function that adds a new list item to an unordered list in an HTML
// document. The function should take a string argument that will be used as
// the text content of the new list item

function MyList() {
    // it will create a li :
    const newnode = document.createElement("li");

    // it wil create a text :
    const textnode = document.createTextNode("Banana");

    // it will append the text  to the "li":
    newnode.appendChild(textnode);

    // it will append the "li" to the list:
    document.getElementById("newlist").appendChild(newnode);
}
MyList();

// Question No:05
// Write a function that changes the background color of an HTML element.
// The function should take two arguments: the first argument is a reference
// to the HTML element, and the second argument is a string representing
// the new background color.


function background_color(element, color) {
    element.style.backgroundColor = color
}
const mybox = document.querySelector('#box');
// it will change the background color to pink
background_color(mybox, 'pink');

// Question No:06
// Write a function that saves an object to localStorage. The function should
// take two arguments: the first argument is a string representing the key to
// use for storing the object, and the second argument is the object to store.

const myObject = {
    StudentName: 'Ammara',
    age: 20,
    course: "javascript",
    teacherName: "Sir ishaq"


};
function TosaveObject(key, object) {
    const stringify = JSON.stringify(object);
    localStorage.setItem(key, stringify);
}
TosaveObject('my_obj', myObject);

// Question No:07
// Write a function that retrieves an object from localStorage. The function
// should take one argument, which is a string representing the key used to
// store the object. The function should return the object

function TogetObject(key) {
    const obj_String = localStorage.getItem(key);
    const object = JSON.parse(obj_String);
    return object;
}
const myObject3 = TogetObject('my_obj');

// Question No:08
//  Write a function that takes an object and saves each property to
//   localStorage using the property name as the key and the property value as
//   the value. The function should also retrieve the object from localStorage
//   and return it as a new object.


function TosaveObjProp(obj) {
    // Save each property to localStorage using its name as the key
    for (const prop in obj) {
        const value = obj[prop];
        localStorage.setItem(prop, JSON.stringify(value));
    }

    // Retrieve the object from localStorage and return it
    const Obj2 = {};
    for (const prop in obj) {
        const valueStr = localStorage.getItem(prop);
        const value = JSON.parse(valueStr);
        Obj2[prop] = value;
    }
    return Obj2;
}
const myObj = {
    name: "ammara khattak",
    age: 30,
    course: "javascript",
    teacherName: "Sir ishaq "
};
const storedObj = TosaveObjProp(myObj);



