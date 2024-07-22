// Activity 1: Basic Event Handling
// Task 1: Add a click event listener to a button that changes the text content of a paragraph.
const button = document.getElementById('button');
button.addEventListener('click', function() {
    document.getElementById('paragraph').textContent = 'Button clicked!';
})

// Task 2: Add a double-click event listener to an image that toggles its visibility.
const image = document.getElementById('image');
const para = document.getElementById('para');
image.addEventListener('dblclick', function() {
    image.style.display = 'none';
    para.style.display = 'inline';
})
para.addEventListener('dblclick', function() {
    image.style.display = 'inline';
    para.style.display = 'none';
})

// Activity 2: Mouse Events
// Task 3: Add a mouseover event listener to an element that changes its background color.
button.addEventListener('mouseover', function() {
    button.style.backgroundColor = 'rose';
})

// Task 4: Add a mouseout event listener to an element that resets its background color.
button.addEventListener('mouseout', function() {
    button.style.backgroundColor = '';
})

// Activity 3: Keyboard Events
// Task 5: Add a keydown event listener to an input field that logs the key pressed to the console.
const text = document.getElementById('text');
text.addEventListener('keydown', function(event) {
    console.log(event.key);
})

// Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.
const para2 = document.getElementById('para2');
text.addEventListener('keyup', function(event) {
    para2.innerText = event.target.value;
})

// Activity 4: Form Events
// Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.
const form = document.getElementById('form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    let formData = new FormData(form);
    formData.forEach((value) => {
        console.log(value);
    })
})

// Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.
const select = document.getElementById('select');
const para3 = document.getElementById('para3');
select.addEventListener('change', function() {
    para3.innerText = select.value;
})

// Activity 5: Event Delegation
// Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation.
const ul = document.getElementById('ul');
ul.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        console.log(event.target.textContent);
    }
})

// Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.
ul.addEventListener('click', function(event) {
    if (event.target.matches('.dynamicElement')) {
        console.log('This element is dynamically added');
    }
})
setTimeout(() => {
    const newItem = document.createElement('li');
    newItem.innerText = 'Dynamically added element';
    newItem.className = 'dynamicElement';
    ul.appendChild(newItem);
}, 3000);