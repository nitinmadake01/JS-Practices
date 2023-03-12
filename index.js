// Import stylesheets
import './style.css';

// Write Javascript code!

// let doc = document.getElementById('app'); //accessing the dom element
// doc.textContent ='Good Evening, Nitin'; //modifying the dom

// let newPara = document.createElement('h1');
// newPara.textContent ='New Paragraph';

// doc.appendChild(newPara);

// let btn = document.getElementById('button');
// btn.addEventListener('click',()=>{
//   alert('Your fucntion is clicked!!!')
// });

// //adding new class
// btn.classList.add('new-btn');

// //modifying attributes
// let input = document.getElementById('input-id');
// input.setAttribute('value','Sachin M');

// let section = document.getElementById('section');
// let div = document.getElementById('div');
// let btn = document.getElementById('button');

// section.addEventListener('click', () => {
//   console.log('section clicked!!');
// });

// div.addEventListener('load', (e) => {
//   console.log('div clicked!!');
//   // e.stopPropagation(); //to prevent the event bubbliing
// });

// btn.addEventListener('click', (event) => {
//   console.log('button clicked!!');
// });

let obj = {
  a: 1,
  b: 2,
};

// let copy = {...obj}
let copy = Object.assign(obj)


copy.b = 8;

console.log('original', obj);
console.log('copy', copy);
