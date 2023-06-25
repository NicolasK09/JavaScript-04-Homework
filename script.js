//Homework 1
let array = [5, 25, 89, 120, 36];
array.push("javascript", "python");

array.unshift("html", "css");
console.log("მასივში არის " + array.length + " ელემენტი");

array.shift();
array.pop();
console.log(array);

//Homework 2

let array1 = ["ფორთოხალი", "ბანანი", "მსხალი"];

console.log("მასივში გაქვთ " + array1.length + " ელემენტი.");

array1.push("ვაშლი", "ანანასი");

array1.unshift("საზამთრო");

array1.splice(2, 0, "მანგო");

array1.pop();
array1.shift();

console.log("დარჩენილია " + array1.length + " ელემენტი მასივში.");

//Homework 3

let array2 = [1, 2, 3, 4, 5];
array2.splice(3, 0, 'a', 'b', 'c');
console.log(array2);

//Homework 4

let arr = [1, 2, 3, 4, 5];
let sum = 0;

arr.forEach(function(element) {
  sum += element;
});

console.log("რიცხვების ჯამი: " + sum);

//Homework 5 
for (let i = 100; i>= 1; i--) {
    console.log(i);
}

//Homework 6

function compareNumbers(num1, num2) {
    if(num1 > num2) {
        console.log("num1 is the largest");
    } else if (num2 > num1) {
        console.log("num2 is the largest");
    } else {
        console.log("error");
    }
}

compareNumbers(10, 5);
compareNumbers(3, 8);
compareNumbers(5, 5);

//Homework 7

let array3 = [12, 25, 3, 6, 8, 14, 7, 23];

let newArray = array3.map(element => element / 3);

console.log(newArray);

//Homework 8

let languages = ['html', 'css', 'javascript', 'python', 'php'];
let filteredWords = languages.filter(word => word.length > 3);

console.log(filteredWords);

//Homework 9

let words = ['Madrid', 'Rome', 'Milan', 'Berlin'];
let filteredWords2 = words.filter(word => word.includes('m') || word.includes('M'))
console.log(filteredWords2);

//Homework 10
let arr2 = [-1, -2, -3, 4];

let hasPositiveNumber = arr2.some(number => number > 0);
console.log(hasPositiveNumber);

//Homework 11

let array4 = [2, 15, 10 ,24];

let newArray2 = array4.filter(number => number !== 10);

console.log(newArray2);