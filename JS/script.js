// 1.) Write a function that prints the multiplication table for a given number up to 10.

// function multiplicationTable(num){
//     for(let i=1; i<=10; i++){
//         console.log(`${num} * ${i} = ${num*i}`);
//     }
// }

// multiplicationTable(9);


// 2.) Write a function to reverse an array without using the built-in reverse method.

// function revArr(arr){
//     let newArr = [];
//     for(let i=arr.length-1; i>=0; i--){
//         newArr.push(arr[i]);
//     }
//     console.log(newArr);
// }

// let arr = [1,2,3,4,5];
// revArr(arr);


// 3.) Write a function that prints all prime numbers up to a given number N.

// function prime(num){
//     let prime = [];
//     if(num == 0 || num == 1) {
//         console.log(null); 
//         return;
//     }
//     for(let i=2; i<=num; i++){
//         let flag = true;
//         for( let j=2; j<+(i/2)+1; j++){       
//             if(i%j == 0){
//                 flag = false;
//                 break;
//             }
//         }
//         if(flag) prime.push(i);
//     }
//     console.log(prime);
    
// }
// prime(99);


// 4.) Write a function to calculate the factorial of a given number using a loop.

// function factorial(num){
//     let itr = num;
//     while(itr>1){
//         itr--;
//         num *= itr;
//     }
//     return num;
// }

// console.log(factorial(6));
// console.log(factorial(10));


// 5.) Write a function that prints numbers from 1 to 100. For multiples of 3, print "Fizz",
// for multiples of 5 print "Buzz", and for multiples of both 3 and 5, print "FizzBuzz".

// function print(){
//     let arr = [];
//     for(let i=1; i<=100; i++){
//         if(i%3==0 && i%5==0) arr.push('FizzBuzz');
//         else if(i%3 == 0) arr.push('Fizz');
//         else if(i%5 == 0) arr.push('Buzz');
//         else arr.push(i);
//     }
//     console.log(arr);
// }

// print();



// 6.) Write a function that performs basic arithmetic operations (add, subtract, multiply,
//     divide) based on user input.
    
// function arith(){
//     const operation = prompt('Enter operation number : 1.Add 2.Sub 3.Mul 4.Div 5.Mod');
//     const num1 = +prompt('Enter first number');
//     const num2 = +prompt('Enter second number');

//     if(operation === '1') document.write(`<h1>Addition of ${num1} & ${num2} = ${num1 + num2}</h1>`);
//     else if(operation === '2') document.write(`<h1>Subtraction of ${num1} & ${num2} = ${num1 - num2}</h1>`);
//     else if(operation === '3') document.write(`<h1>Multiplication of ${num1} & ${num2} = ${num1 * num2}</h1>`);
//     else if(operation === '4') document.write(`<h1>Division of ${num1} & ${num2} = ${num1 / num2}</h1>`);
//     else if(operation === '5') document.write(`<h1>Modulus of ${num1} & ${num2} = ${num1 % num2}</h1>`);
//     else document.write(`<h1>Invalid Input</h1>`);
// }

// arith();



// 7.) Write a function to count the number of vowels in a given string

// function countVowels(str){
//     str = str.toLowerCase();
//     let vowels = ['a', 'e', 'i', 'o', 'u'];
//     let count = 0;
//     for(let i=0 ; i<str.length; i++){
//         for (vowel of vowels){
//             if(vowel === str[i]) count+=1;
//         }
//     }
//     console.log('Number of vowels = ',count);
// }

// countVowels('Welcome to Javascript');



// 8.) Write a function to split an array into chunks of a specified size.

// function splitArr(arr, size){
//     let splitArr = [];
//     for(let i=0; i<arr.length; i+=size){
//         splitArr.push(arr.slice(i,i+size))
//     }
//     console.log(splitArr);
// }

// let arr = [1,2,3,4,5,6,7,8,9,0];
// let size = 2;
// splitArr(arr, size);
// size = 3;
// splitArr(arr, size);



// 9.) Write a function to check if two strings are anagrams of each other.

// function anagram(str1, str2){
//     if(str1.length != str2.length) return;
//     let str1Arr = str1.split('').sort();
//     let str2Arr = str2.split('').sort();
//     for(let i=0; i<str1Arr.length; i++){
//         if(str1Arr[i] != str2Arr[i]) {
//             console.log('Not Anagram');
//             return;
//         }
//     }
//     console.log('Strings are anagrams');
// }

// anagram('heart', 'earth');
// anagram('python', 'typhon');
// anagram('phone', 'hones');



// 10.) Write a function to find the longest word in a given sentence.

// function longestWord(sentence){
//     let sentenceArr = sentence.split(' ');
//     let longestWord = '';
//     for(let i=0; i<sentenceArr.length; i++){
//         if(sentenceArr[i].length > longestWord.length) longestWord = sentenceArr[i];
//     }
//     console.log(longestWord);    
// }

// let sentence = 'JavaScript is a scripting or programming language that allows you to implement complex features on web pages.';
// longestWord(sentence);



// 11.) Difference between Event bubbling and Event capturing? Write an example.

// Event Capturing : The event starts from the root of the DOM, and starts traversing down the tree until it finds the element that triggered the event.
// Event Bubbling : The event starts from the element that dispatched the event, and starts traversing up the tree and finish on DOM's root element.

// const gp = document.getElementById('gp');
// const p = document.getElementById('p');
// const c = document.getElementById('c');
// const para = document.getElementsByTagName('p')[0];
// let arr = [];

// gp.addEventListener('click', (e) => {
//     arr.push('GP was clicked');
//     para.innerHTML = arr.toString();
// },false);
// p.addEventListener('click', (e) => {
//     arr.push('P was clicked');
//     para.innerHTML = arr.toString();
// },false);
// c.addEventListener('click', (e) => {
//     arr.push('C was clicked');
//     para.innerHTML = arr.toString();
// },false);




// 12.) How do you create and remove an element in dom?

// create element using DOM method - createElement();
// remove element using DOM method - remove(); or removeChild()

// const div = document.createElement('div');//creates a div element
// const body = document.getElementsByTagName('body')[0];

// div.innerHTML = `<h1>Hello</h1>`; // set the content of div
// body.appendChild(div); // append the created element to body

// // body.removeChild(div); // removes the div element
// div.remove(); // removes the div element



// 13.) Create a button that counts the number of times it has been clicked. Display the
// counter in a <span> element.

// const button = document.createElement('button');
// button.innerHTML = 'Click Me';
// const body = document.getElementsByTagName('body')[0];
// body.appendChild(button);
// const span = document.createElement('span');
// body.appendChild(span);

// let count = 0;
// button.addEventListener('click', () => {
//     count++;
//     span.innerHTML = `Times Clicked = ${count}`;
// })




// 14.) Detect and display the key that the user presses on the keyboard.

// window.addEventListener('keydown', (e) => {
//     console.log(`key pressed = ${e.key}`);
// })



// 15.) Track and display the mouse's current X and Y coordinates as the user moves the
// mouse over a <div>.

// const div = document.createElement('div');
// div.style.width = '500px';
// div.style.height = '300px';
// div.style.border = '4px solid red';
// const body = document.getElementsByTagName('body')[0];
// body.appendChild(div);

// div.addEventListener('mousemove', (e) => {
//     console.log(e.x, e.y);
// })



// 16.) Change the background color of a <div> when it's double-clicked.

// const div = document.createElement('div');
// div.style.width = '500px';
// div.style.height = '300px';
// div.style.border = '4px solid red';
// const body = document.getElementsByTagName('body')[0];
// body.appendChild(div);

// div.addEventListener('dblclick', (e) => {
//     let rx = Math.floor(Math.random() * 255);
//     let ry = Math.floor(Math.random() * 255);
//     let rz = Math.floor(Math.random() * 255);
//     div.style.background = `rgb(${rx},${ry},${rz})`;
// })



// 17.) When the user hovers over a <div>, display some hidden text. Hide the text when
// the user stops hovering.

// const div = document.createElement('div');
// div.style.width = '400px';
// div.style.height = '200px';
// div.style.border = '4px solid red';
// div.style.padding = '15px';
// const body = document.getElementsByTagName('body')[0];
// body.appendChild(div);
// const p = document.createElement('p');
// p.innerHTML = 'This text is displayed only on hovering this div.'
// p.style.visibility = 'hidden';
// p.style.fontWeight = '800';
// p.style.fontSize = '24px';
// div.appendChild(p);

// div.addEventListener('mouseover', () => {
//     p.style.visibility = 'visible';
// })
// div.addEventListener('mouseout', () => {
//     p.style.visibility = 'hidden';
// })




// 18.) Create an input field that displays how many characters the user has typed.

// const input1 = document.createElement('input');
// input1.setAttribute('placeholder', 'Enter anything here');
// const input2 = document.createElement('input');
// input2.setAttribute('placeholder', 'Shows total chars entered');
// const body = document.getElementsByTagName('body')[0];
// body.appendChild(input1);
// body.appendChild(input2);

// input1.addEventListener('keypress', () => {
//     input2.value = `Characters typed = ${input1.value.length+1}`;
// })




// 19.) When the user clicks on a <div>, change the text inside it.

// const div = document.createElement('div');
// div.style.width = '400px';
// div.style.height = '200px';
// div.style.border = '4px solid red';
// div.style.padding = '15px';
// div.style.fontWeight = '800';
// div.style.fontSize = '24px';
// div.innerHTML = 'This text will change on clicking this div.'
// const body = document.getElementsByTagName('body')[0];
// body.appendChild(div);

// div.addEventListener('click', () => {
//     div.innerHTML = 'The text has been changed after clicking the div.';
// })



// 20.) When the user types in an input field, automatically convert the text to uppercase.

// const input1 = document.createElement('input');
// input1.setAttribute('placeholder', 'Enter anything here');
// const body = document.getElementsByTagName('body')[0];
// body.appendChild(input1);

// input1.addEventListener('keyup', () => {
//     input1.value = input1.value.toUpperCase();
// })



// 21.) Change an image to another when the user hovers over it and revert to the original
// image when the user stops hovering.

// const img = document.createElement('img');
// img.style.width = '400px';
// img.style.height = '300px';
// img.setAttribute('src','https://images.unsplash.com/photo-1516147697747-02adcafd3fda?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D');
// const body = document.getElementsByTagName('body')[0];
// body.appendChild(img);

// img.addEventListener('mouseenter', () => {
//     img.setAttribute('src', 'https://images.unsplash.com/photo-1486425091969-f62210f08a26?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D');
// })
// img.addEventListener('mouseleave', () => {
//     img.setAttribute('src', 'https://images.unsplash.com/photo-1516147697747-02adcafd3fda?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D');
// })



// 22.) Change the background color of the page when the user scrolls past a certain
// point.

// const body = document.getElementsByTagName('body')[0];
// body.style.height = '1000px';

// window.addEventListener('scroll', (e) => {
//     if(window.scrollY > 50){
//         body.style.background = 'indigo';
//     }
//     if(window.scrollY > 100){
//         body.style.background = 'blue';
//     }
//     if(window.scrollY > 150){
//         body.style.background = 'green';
//     }
//     if(window.scrollY > 200){
//         body.style.background = 'yellow';
//     }
//     if(window.scrollY > 250){
//         body.style.background = 'orange';
//     }
// })




// 23.) Create a button that, when the button is clicked, Add a new list item to an
// unordered list.


// const body = document.getElementsByTagName('body')[0];
// const button = document.createElement('button');
// body.appendChild(button);
// const ul = document.createElement('ul');
// body.appendChild(ul);
// button.innerHTML = 'Click to Add to List';

// button.onclick = function(){
//     const li = document.createElement('li');
//     li.innerHTML = 'new item';
//     ul.appendChild(li);
// }




// 24.) Once the user clicks a button, disable it and display a message that the button has
// been clicked.

// const body = document.getElementsByTagName('body')[0];
// const button = document.createElement('button');
// button.innerHTML = 'Click Me Once';
// body.appendChild(button);
// const p = document.createElement('p');
// body.appendChild(p);

// button.onclick = () => {
//     // button.setAttribute('disabled', 'true');
//     button.disabled = true;
//     p.innerHTML = 'This button has been clicked';
// }




// 25.) Write a program that detects when the user copies text from a <textarea> and
// displays a message.

const body = document.getElementsByTagName('body')[0];
const textArea = document.createElement('textarea');
body.appendChild(textArea);
const p = document.createElement('p');
body.appendChild(p);
textArea.innerHTML = 'Welcome to JS';

textArea.addEventListener('copy', (e) => {
    p.innerHTML = 'text is copied from the textArea';
})
