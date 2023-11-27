
//Exercise 1: Find the Longest Word in a String
function longestWord(str) {
    let maxLenght = 0;
    let longestWord = ""
    let words = str.split(' ')
    for (let i = 0; i < words.length; i++) {
        console.log(words[i].length);
        if (words[i].length > maxLenght) {
            maxLenght = words[i].length
            longestWord = words[i]
        }
    }
    return longestWord
}
//Exercise 2: takes a string as an input and returns the string reversed
function reverseString(str) {
    let lettersArray = str.split("");
    let reversedArray = lettersArray.reverse();
    let rejoinedString = reversedArray.join("");
    return rejoinedString;
}
//EXcercise 3: Objective: Splits an array (first arg) into groups the length of size (second argument) and returns them as a two-dimensional array.
function splitArray(arr, size) {
    let resultArrays = [];
    for (let i = 0; i < arr.length; i += size) {
        let piece = arr.slice(i, i + size)
        resultArrays.push(piece)
    }
    return resultArrays
}
class LinkedListNode {
    constructor(data) {
        this.data = data;// The data value for this node
        this.next = null;// Pointer to the next node in the list, starts as null indicating the list is empty
    }
}

class LinkedList {
    constructor() {
        this.head = null; // The head of the list, starts as null indicating the list is empty
    }
    add(data) {
        const newNode = new LinkedListNode(data);
        if (!this.head) {// If the list is empty, make the new node the head of the list
            this.head = newNode;
            return;
        }
        let current = this.head  // If the list is not empty, traverse to the end of the list
        while (current.next) {
            current = current.next // Move to the next node
        }
        current.next = newNode; // Add the new node at the end of the list
    }
    prepend(data) {
        const newNode = new LinkedListNode(data);
        newNode.next = this.head;
        this.head = newNode;
    }
    remove(data) { // Method to remove a node with the specified data from the list
        if (!this.head) {// If the list is empty, there's nothing to remove
            return;
        }
        if (this.head.data === data) {// If the head needs to be removed, update the head pointer
            this.head = this.head.next;
            return;
        }
        let current = this.head;  // Traverse the list, keeping track of the current node
        while (current.next && current.next.data !== data) {
            current = current.next; // Move to the next node
        }
        if (current.next) {  // If the node to remove is found, unlink it from the list
            current.next = current.next.next;
        }
    }
    size() {
        let count = 0;
        let current = this.head;
        while (current) {
            count++;
            current = current.next;
        }
        return count;
    }
    display() {
        let current = this.head;
        while (current) {
            console.log(current.data); // Print the data of each node
            current = current.next; // Move to the next node
        }
    }
}
/* const ll = new LinkedList();
ll.add(1);
ll.add(2);
ll.add(3);
console.log('Displaying all nodes:');
ll.display();
console.log("size of the list is " + ll.size());
ll.remove(2);
ll.add(8);
console.log("size of the list is " + ll.size());
ll.prepend(5)
ll.display();
console.log("size of the list is " + ll.size()); */
//console.log(splitArray([3, 3, 6, 7, 26, 1, 3, 5, 12, 43, 1, 6], 11));


//fizzbuzz

function fizzBuzz(limit) {
    for (let i = 1; i < limit + 1; i++) {
        if (i % 15 == 0) {
            console.log(i + ' fizz-buzzz');
        }
        else if (i % 3 == 0) {
            console.log(i + ' fizz');
        }
        else if (i % 5 == 0) {
            console.log(i + ' buzz');
        }
        else {
            console.log(i);
        }
    }
}

//console.log(fizzBuzz(100));

//Objective: Create a function that checks if a string is a palindrome (a string that reads the same forward and backward).
function isPalindrome(str) {
    let cleanInput = str.toUpperCase().split(' ').join('');
    let reversed = cleanInput.split('').reverse().join('')
    if (reversed == cleanInput) {
        return true
    }
    return false
}

console.log(isPalindrome("never odd or even"));

//Objective: factorial of a number is the product of all positive integers less than or equal to the number
function factorial(n) {
    let total = 1
    for (let i = 1; i < n + 1; i++) {
        total = total * i;
        console.log(i + ' total ' + total);
    }
    return total
}
console.log(factorial(5));

// Objective: Fibonacci sequence, each number is the sum of the two preceding ones, starting from 0 and 1.
function fibonacci(n) {
    let first = 0
    let second = 1
    for (let i = 1; i < n + 1; i++) {
        console.log(i + ' ' + first);
        let temporalTwo = second
        second = second + first
        first = temporalTwo



    }
    return second
}
console.log(fibonacci(9));

// reduce helps accept the arrow function accum item and after 
//the function coma the number where it starts
let nums = [4, 5, 6, 7, 89, 21, 3]
let sum = nums.reduce((acc,i) => acc+i,2000)
console.log(sum);
//Leon MAP gives us a new array

//reverse array without using array