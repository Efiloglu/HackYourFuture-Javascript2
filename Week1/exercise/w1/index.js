console.log('Hack your future Belgium!');

// EXERCISE 1

// 1a: create a function called "changeHeader", put a console.log() inside this function to test

// 1d: add an event listener to the "Change header" button 
//     and call the "changeHeader" function when clicked ( you should see your console.log() )

// 1b: inside this function: select the header element and assign that to a variable called "header"

// 1c: change the inner html of the header element to your name
function changeHeader(){
    console.log('test');
let header = document.getElementsByTagName("h1")[0];
header.innerHTML = "Mesut";
}

document.getElementById("change-header").addEventListener("click" ,changeHeader);

// ====================================== //


// EXERCISE 2

// 2a: create a function called "changeImage", put a console.log() inside this function to test

// 1b: add an event listener to the "Change image" button and call the "changeImage" function when clicked

// inside this function:

// 2c: select the "imageInput" element and assign to a variable called "imageInputValue"

// 2d: select the image element and assign to a variable called "imageToChange"

// 2e: to change the image: assign the imageInputValue to the image src

function changeImage(){
let imageInput = document.querySelector('input');
let imageInputValue = document.querySelector('img');
imageInputValue.src = imageInput.value;
}

document.getElementById('btn-changeImage').addEventListener('click', changeImage)
// ====================================== //


// Exercise 3:

// 3a: select "add todo" button & add click event listener to execute addTodo() function on click event

// 3b: define addTodo() function, in this function:

// 3c: get todoList element

// 3d: get todoInput element & log todoInput value

// 3e: create a <li> element

// 3f: set created <li> element innerHtml to todoInput value

// 3g: add <li> element to todoList

function addTodo(){


    const createLi = document.createElement('li');
    const textLi = document.createTextNode(document.getElementById('todoInput').value);
    createLi.appendChild(textLi);
    document.getElementById('todoList').appendChild(createLi)

}


document.getElementById('btn-addTodo').addEventListener('click', addTodo)
