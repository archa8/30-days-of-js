// Activity 1: Selecting and manipulating elements
// Task 1: Select an HTML element by its ID and change its text content.
let changeID = document.getElementById('heading')
changeID.textContent = "I have changed the text content of this element!";

// Task 2: Select an HTML element by its class and change its background color.
let changeClass = document.getElementsByClassName('task2')
changeClass.style.backgroundColor = 'cyan';

// Activity 2: Creating and appending elements
// Task 3: Create a new div element with some text content and append it to the body.
let newDiv = document.createElement('div');
newDiv.textContent = 'This div is now centered :P';
document.body.appendChild(newDiv);

// Task 4: Create a new li element and add it to an existing ul list.
let oldul = document.querySelector('ul');
let newli = document.createElement('li');
newli.textContent = 'I am a new list item';
oldul.appendChild(newli);

// Activity 3: Removing elements
// Task 5: Select an HTML element and remove it from the DOM.
let removeElement = document.querySelector('p');
removeElement.remove();

// Task 6: Remove the last child of a specific HTML element.
let lastChild = document.getElementById('task6');
lastChild.lastElementChild.remove();

// Activity 4: Modifying attributes and classes
// Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag).
let changeAttribute = document.querySelector('img');
changeAttribute.src = "https://images.unsplash.com/photo-1630348556264-52340da87359?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

// Task 8: Add and remove a CSS class to/from an HTML element.
let cssClass = document.getElementById('task8');
cssClass.classList.add('centre-aligned');
cssClass.classList.remove('green-bg');

// Activity 5: Event handling
// Task 9: Add a click event listener to a button that changes the text content of a paragraph.
let button = document.querySelector('button');
button.addEventListener('click', () => {
    let para = document.querySelector('p');
    para.textContent = "Wohoo! The click worked!";
});

// Task 10: Add a mouseover event listener to an element that chnages its border color.
let mouseover = document. getElementById('task10');
mouseover.addEventListener('mouseover', () => {
    mouseover.style.border = '2px solid green';
});
mouseover.addEventListener('mouseout', () => {
    mouseover.style.border = ''; // resets to default
});