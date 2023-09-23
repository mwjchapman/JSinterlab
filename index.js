//1
/*const LA = "los angeles"

const str = LA.split(" ");

for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
}

const la = str.join(" ");
console.log(la);
*/
//2
/*
function truncate(str, max){ 
    let result = str.substr(0, max);
    if (str.length > max){
         return result + "...";
    }
    else{
        return str;
    }
}
console.log(truncate('This text will be truncated if it is too long', 25))
console.log(truncate('This text will be truncated if it is too long', 50))
*/
/*
function truncate(str, max){
    return str.length > 25 ? str.substr(0, max) + "..." : str
}
console.log(truncate('This text will be truncated if it is too long', 25))
*/
//3
/*
const animals = ['Tiger', 'Giraffe'];
    animals.push('Lion', 'Hippo');
    animals.unshift('Sheep', 'horse', 'goat');
    animals.sort();
    const replaceMiddleAnimal = animals.splice(3, 1, 'NewValue');
    function findMatchingAnimals(beginsWith) {
    const arr1 = animals.filter((animal) => animal.startsWith('H'));
    console.log(arr1);
    const arr2 = animals.filter((animal) => animal.startsWith('h'));
    console.log(arr2);
    const result = arr1.concat(arr2);
    }
//console.log(animals.length);
//console.log(replaceMiddleAnimal);
//console.log(animals [2]);
//console.log('Animals starting with the same letter ' + startsWithH);
*/
//4

/*
function camelCase(cssProp) {
    return cssProp
      .split('-')
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join('');
  }
console.log(camelCase("margin-left"));
console.log(camelCase("background-image"));
console.log(camelCase("display"));
*/
///5
/*
let tewntyCents = 0.20
let tenCents = 0.10

let fixedTwenty = tewntyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);
*/

//console.log(`${tewntyCents} + ${tenCents} = ${tewntyCents + tenCents}`);
//console.log(fixedTwenty + fixedTen);

/*5aBecause floating point numbers can’t be accurately represented in binary, some operations lead to unexpected results. Internally, computers use a format (binary floating-point) that cannot accurately represent a number like 0.1, 0.2 or 0.3 at all.
When the code is compiled or interpreted, your “0.1” is already rounded to the nearest number in that format, which results in a small rounding error even before the calculation happens.*/
/*5bfunction currencyAddition (float1, float2){
    return (parseFloat(float1) + parseFloat(float2)).toFixed(2);
 
}
console.log(currencyAddition("0.2", "0.1"));

5cfunction currencyOperation(float1, float2, operation) {
    if (operation === '+') {
        return float1 + float2;
    } else if (operation === '-') {
        return float1 - float2;
    } else if (operation === '/') {
        if (float2 === 0) {
            return "Error: Division by zero";
        } else {
            return float1 / float2;
        }
    } else if (operation === '*') {
        return float1 * float2;
    } else {
        return "Error: Invalid operation";
    }
}

let result = currencyOperation(7, 6, '+');
console.log(result);*/

//5d
/*
function currencyOperation(float1, float2, operation, numDecimals) {
    if (operation === '+') {
        return (float1 + float2).toFixed(numDecimals);
    } else if (operation === '-') {
        return (float1 - float2).toFixed(numDecimals);
    } else if (operation === '/') {
        if (float2 === 0) {
            return "Error: Division by zero";
        } else {
            return (float1 / float2).toFixed(numDecimals);
        }
    } else if (operation === '*') {
        return (float1 * float2).toFixed(numDecimals);
    } else {
        return "Error: Invalid operation";
    }
}
let result = currencyOperation(7, 6, '+', 2);
console.log(result);
*/
/*6
function unique(duplicatesArray){

const uniqueArray = [];

duplicatesArray.forEach(function(item) {
    if (!uniqueArray.includes(item)){
        uniqueArray.push(item);
    }
});

return uniqueArray;
    
}
    const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow'];
    const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43];
    const numbers = [7654, 9872, 8, 3456, 7654, 7654, 9872, 9872, 9872, 9872, 8];

    const uniqueValues = unique(colours);
    const uniqueScores = unique(testScores);
    const uniqueNumbers = unique(numbers);
    console.log(uniqueValues);
    console.log(uniqueScores);
    console.log(uniqueNumbers);*/
7    
const books = [
    {id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925},
    {id: 2, title: 'To Kill A Mockingbird', author: 'Harper Lee', year: 1960 },
    {id: 3, title: '1984', author: 'George Orwell', year: 1949 },
    {id: 2, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
    {id: 2, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
];

//7a
/*
    function getBookTitle(bookId){
        const book = books.find(book => book.id === bookId);
        return book.title;   
    }
    console.log(getBookTitle(3));
    */
   //7b
   /*
    function getOldBooks() {
        const oldBooks = books.filter(book => book.year <= 1950);
        oldBooks.forEach((book) => console.log(book.title));
        return oldBooks;
    };
    function addGenre(books) {
        return books.map(book => ({ ...book, genre: 'classic' }));
        };
        getOldBooks();
        */
       //7c
/*
//7d
      
      const booksWithGenre = addGenre(books);
        console.log(booksWithGenre);
        function getTitles(authorInitial, books) {
    return books
      .filter(book => book.author.startsWith(authorInitial))
      .map(book => book.title);
  }
        const titles = getTitles('G', books);
        console.log(titles);
     */
    //7e
    /*function latestBook(books) {
        
        let latest = books[0]; 
        books.forEach((book) => {
          if (book.year > latest.year) {
            latest = book;
          }
        });
        return latest;
        };
        const latestBook = latestBook(books);
        console.log(latestBook.title);
        */

       //8 
       /*
const phoneBookABC = new Map()
phoneBookABC.set('Annabelle', '041232343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182');


const phoneBookDEF = new Map()
phoneBookDEF.set('David', '87585865487')
phoneBookDEF.set('Edwin', '87585374')
phoneBookDEF.set('Frank', '98676475465438675');

phoneBookABC.set('Caroline', '123');
console.log(phoneBookABC);

function printPhoneBook(contacts){
    console.log(phoneBookABC)
};
printPhoneBook();

const phoneBook = new Map ([...phoneBookABC, ...phoneBookDEF]);
console.log(phoneBook);

*/
//9a
/*
let salaries = {
    "Timothy" : 35000,
    "David" : 25000,
    "Mary" : 55000,
    "Christina" : 75000,
    "James" : 43000
};
function sumSalaries(salaries) {
    return Object.values(salaries).reduce((a, b) => a + b, 0);
  };

let total = sumSalaries(salaries);
console.log(total); 

//9b

let top = topEarner(salaries);
  console.log(top);
  
function topEarner(salaries) {
    let maxSalary = 0;
    let topEarner = "";
    for (let [name, salary] of Object.entries(salaries)) {
      if (salary > maxSalary) {
        maxSalary = salary;
        topEarner = name;
      }
    }
    return topEarner;
  };
  */
 //10

 const today = new Date();
 console.log('Current time is ' + today.toLocaleTimeString())

 console.log(today.getHours() + ' hours have passed so far today');
 console.log(today.getMinutes() + ' minutes have passed so far today');
 console.log(today.getSeconds() + ' seconds have passed so far today');


const birthDate = new Date('1983-09-15');
const years = today.getFullYear() - birthDate.getFullYear();
const months = today.getMonth() - birthDate.getMonth();
const days = today.getDate() - birthDate.getDate();

console.log('I am ' + years + ' years, ' + months + ' months, and ' + days + ' days old.');


