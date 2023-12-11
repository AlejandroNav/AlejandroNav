import { dishes } from './functions.js';

console.log(dishes('canel'));
console.log(dishes('Tacoche'));


let amigo = [1,2,3,7,8];
(amigo.unshift(44));
console.log(amigo);
(amigo.shift(1));
console.log(amigo);

const userReview ={}
userReview['Star Wars'] = 7.0;
userReview['Star Trek'] = 5.0;
userReview.amigos = 3.0
console.log(userReview);