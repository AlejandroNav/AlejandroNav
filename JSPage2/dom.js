import { dishes } from './functions.js'; //imports a function named dishes from a file called functions.js in the same directory.

console.log(dishes('canel'));
console.log(dishes('Tacoche'));


let amigo = [1,2,3,7,8];
(amigo.unshift(44)); //Adds 44 to the beginning of the amigo array. Now amigo becomes [44, 1, 2, 3, 7, 8].
console.log(amigo);
(amigo.shift());//Removes the first element from amigo. Now amigo becomes [1, 2, 3, 7, 8].
console.log(amigo);

const userReview ={} //Declares an empty object userReview.
userReview['Star Wars'] = 7.0; //Adds a property 'Star Wars' with the value 7.0 to userReview.
userReview['Star Trek'] = 5.0;// bracket notation (object['property']) to add or modify a property 
//Bracket notation is useful if property name is dynamic or not a valid JS, like spaces or special characters (space in 'Star Trek').
userReview.amigos = 3.0
console.log(userReview);