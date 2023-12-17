import { dishes } from './functions.js'; //imports a function named dishes from a file called functions.js in the same directory.

console.log(dishes('canel'));
console.log(dishes('Tacoche'));


let amigo = [1, 2, 3, 7, 8];
(amigo.unshift(44)); //Adds 44 to the beginning of the amigo array. Now amigo becomes [44, 1, 2, 3, 7, 8].
console.log(amigo);
(amigo.shift());//Removes the first element from amigo. Now amigo becomes [1, 2, 3, 7, 8].
console.log(amigo);

const userReview = {} //Declares an empty object userReview.
userReview['Star Wars'] = 7.0; //Adds a property 'Star Wars' with the value 7.0 to userReview.
userReview['Star Trek'] = 5.0;// bracket notation (object['property']) to add or modify a property 
//Bracket notation is useful if property name is dynamic or not a valid JS, like spaces or special characters (space in 'Star Trek').
userReview.amigos = 3.0 //Dot notation is more concise and is typically used when the property name is a valid JavaScript
console.log(userReview);

let x = 11//global scope
// closure is a functyion having acces to the parent scope after it has closed
const parentFunction = () => {
    let my = 300;
    console.log(x);
    console.log(my);
    const childfunction = () => {//since its inside the parent scope it has acces to the parent scope
        console.log(x += 5);
        console.log(my += 1);
    }
    return childfunction;
}
const result = parentFunction()
console.log(result);
result();

const input = document.querySelector('input')
const debounceText = document.getElementById('deb');
const throttleText = document.getElementById('thr');

input.addEventListener('input', e => {
    updateDebounceText(e.target.value)
})



const updateDebounceText = debounce((text) => {
    debounceText.textContent = text;
})
//A higher-order function is a function that can take another function as an argument
//the callback in this case
//A higher-order function can also return a function. debounce does this as well—it returns a new function that manages the timing and invocation of the callback.
function debounce(callback, delay = 150) {
    let timeout = null; //starn an empty timer
    return (...args) => { // return function with any number of arguments
        clearTimeout(timeout) //clear timer
        timeout = setTimeout(() => {// set new timer accepts two parameters the functiona nd the timer
            callback(...args)
        }, delay)
    }
}
