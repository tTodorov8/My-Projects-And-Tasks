let library = [];
let libraryObj = {};

class addBook {
  constructor(name, autor, publisher, yearOfIssue) {
    (this.name = name),
      (this.autor = autor),
      (this.publisher = publisher),
      (this.yearOfIssue = yearOfIssue);
    library.push({ name, autor, publisher, yearOfIssue });
  }
}

let Tsvetty = new addBook(
  "Knigata na Tsvetina",
  { firstName: "Tsvetina", lastName: "Ruseva" },
  "Lalala",
  2021
);
let TsvettySec = new addBook(
  "Vlad Cepes",
  { firstName: "Tsvetina", lastName: "Ruseva" },
  "NewPub",
  2021
);
let TsvettyThird = new addBook(
  "The way of the hacker",
  { firstName: "Tsvetina", lastName: "Ruseva" },
  "Ritz",
  2021
);
let NikiFirst = new addBook(
  "Knigata na Niki",
  { firstName: "Nikolay", lastName: "Gyudzenov" },
  "Amadeus",
  2019
);
let NikiSecond = new addBook(
  "Kids",
  { firstName: "Nikolay", lastName: "Gyudzenov" },
  "Amadeus",
  2011
);
let NikiThird = new addBook(
  "Adventures",
  { firstName: "Nikolay", lastName: "Gyudzenov" },
  "Amadeus",
  2010
);
let NikiFourth = new addBook(
  "Metal",
  { firstName: "Nikolay", lastName: "Gyudzenov" },
  "ABC",
  2015
);
let NikiFifth = new addBook(
  "Music for Life",
  { firstName: "Nikolay", lastName: "Gyudzenov" },
  "ABC",
  2022
);
let BoriFirst = new addBook(
  "Knigata na Bori",
  { firstName: "Borislava", lastName: "Dimitrova" },
  "ABC",
  2018
);
let BoriSecond = new addBook(
  "Love",
  { firstName: "Borislava", lastName: "Dimitrova" },
  "ABC",
  2012
);
let BoriThird = new addBook(
  "To Chicago and back",
  { firstName: "Borislava", lastName: "Dimitrova" },
  "ABC",
  2012
);
let ToshkoFirst = new addBook(
  "Knigata na Toshko",
  { firstName: "Todor", lastName: "Todorov" },
  "Ritz",
  2017
);
let ToshkoSecond = new addBook(
  "Story",
  { firstName: "Todor", lastName: "Todorov" },
  "Ritz",
  2016
);
let ToshkoThird = new addBook(
  "Advance Academy",
  { firstName: "Todor", lastName: "Todorov" },
  "Siela",
  2022
);
let ToshkoThirdq = new addBook(
  "Advance Academy",
  { firstName: "Todor", lastName: "Todorov" },
  "Siela",
  2022
);

console.log(library);
Object.assign(libraryObj, library);

//1.  да се вземе информация за брой книги в биб. - OK
function countBooks(library) {
  let allBooks = library.length;
  console.log(` ${allBooks} books in library`);
}
countBooks(library);

//2. да се вземе информация за брой автори в библиотеката - OK
function countAutors(library) {
  let autorArr = [];

  for (let i = 0; i < library.length; i++) {
    const element = library[i];
    // Сравнява дали името го има в празния масив (индекса > ли е от -1, ако не е значи го няма и го добавя. Когато е вече добавен , индекса е по голям от -1 и не добавя името !)
    if (!(autorArr.indexOf(element.autor.firstName) > -1)) {
      autorArr.push(element.autor.firstName);
    }
  }
  console.log(autorArr);
}
countAutors(library);

// 3. да се вземе информация за брой издателства в библиотеката

let allPublishersArr = [];
for (let i = 0; i < library.length; i++) {
  const element = library[i];
  if (!(allPublishersArr.indexOf(element.publisher) > -1)) {
    allPublishersArr.push(element.publisher);
  }
}
console.log(allPublishersArr);
// 4. да се вземе информация за издателството с най-много книги

let allPublishersRepeated = [];
for (let i = 0; i < library.length; i++) {
  const element = library[i].publisher;
  allPublishersRepeated.push(element);
}
console.log(allPublishersRepeated);
// prazniq obekt , koito 6te dyrji publisher: books
let publisherBooks = {};
// Glavnata funkciq , s 2 for loopa
function findBiggestPublisher(arr) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    // Proverqva dali obekta ima takova property i mu zadava key/value
    if (publisherBooks.hasOwnProperty(element)) {
      // dobavq edinica kym stoinostta na izdatelq
      publisherBooks[element] = publisherBooks[element] + 1;
    } else {
      // dobavq stoinost kym prazniq obekt
      publisherBooks[element] = 1;
    }
  }

  console.log(publisherBooks);
  let publisherNameLow = "";
  let publisherNameHigh = "";
  let publisherHigh;
  let publisherLow;
  // console.log(Object.entries(publisherBooks));
  // vyrti key i value v object entritata
  // proverka za nai mnogo knigi na izdatelstvo
  for (const [key, value] of Object.entries(publisherBooks)) {
    // proverqva ve4e pylniq obekt
    // vry6ta undefined ako nqmame !publisherHigh ili publisherHigh === undefined v ifa
    if (publisherHigh === undefined || value > publisherHigh) {
      publisherHigh = value;
      publisherNameHigh = key;
    } //proverka za nai malko knigi na izdatelstvo
    if (publisherLow === undefined || value < publisherLow) {
      publisherLow = value;
      publisherNameLow = key;
    }
    //proverka za broi izdateli s 1 kniga
    //5. да се вземе информация за издателсвата, които имат издадена само 1 книга
    if (value == 1) {
      console.log(`${key} has only ${value} book`);
    }
  }

  console.log(`${publisherNameHigh} has ${publisherHigh} books`);
  console.log(`${publisherNameLow} has ${publisherLow} books`);
  //kraen resultat za nai mn  i nai malko knigi
}
findBiggestPublisher(allPublishersRepeated);

// 6.да се вземе информация за издателсвато, което е издало книги на най-много различни автори // publisher with most different authors

// probvai ako v knigite (library) ima dve ednakvi property
let publisherArray = [];
let publisherAutorObj = {};

// for (let i = 0; i < library.length; i++) {
//   const element = library[i];
//   pushedAutorsPerPublisher.push(element.publisher, element.autor.firstName);
//   publisherAutors[element.publisher] = element.autor.firstName;
// }

library.forEach((book, i, library) => {
  if (publisherAutorObj.hasOwnProperty(library[i].publisher)) {
  } else {
    publisherAutorObj[library[i].publisher] = [library[i].autor];
  }
  if (!publisherArray.indexOf(book.publisher) > -1) {
  }
  for (const iterator of publisherAutorObj[library[i].publisher]) {
    console.log(iterator);
    if (iterator == library[i].autor) {
      console.log(` ${library[i].publisher}  yoooo`);
    }
    // if (!publisherAutorObj[library[i].publisher].indexOf(iterator)) {
    //   console.log(`Have a iteratorhere`);

    // }
  }
});

// for (let i = 0; i < library.length; i++) {
//   const element = library[i];
//   let test = [library[i].autor];

//   if (publisherAutorObj.hasOwnProperty(library[i].publisher)) {
//   } else {
//     publisherAutorObj[library[i].publisher] = test;
//   }
//   if (library[i] == library[i]) {
//     console.log(`yoas`);
//   }

//   console.log();
// if (element.hasOwnProperty("publisher" && "autor")) {
//   console.log(`yeah`);
// }
//}//

// console.log(publisherArray);
console.log(publisherAutorObj);

////////////////////////////////////////////////////
// @ts-check
//
// ☝🏽 The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion on the web
// and supported IDEs when implementing this exercise. You don't need to
// understand types, JSDoc, or TypeScript in order to complete this JavaScript
// exercise, and can completely ignore this comment block and directive.

// 👋🏽 Hi again!
//
// A quick reminder about exercise stubs:
//
// 💡 You're allowed to completely clear any stub before you get started. Often
// we recommend using the stub, because they are already set-up correctly to
// work with the tests, which you can find in ./annalyns-infiltration.spec.js.
//
// 💡 You don't need to write JSDoc comment blocks yourself; it is not expected
// in idiomatic JavaScript, but some companies and style-guides do enforce them.
//
// Now help Annalyn free her best friend!

/**
 * The fast attack is available when the knight is sleeping
 *
 * @param {boolean} knightIsAwake
 

 *
 * @return {boolean} Whether or not you can execute a fast attack.
 */
const knightIsAwake = true;
const archerIsAwake = true;
const prisonerIsAwake = true;

function canExecuteFastAttack(knightIsAwake) {
  if (knightIsAwake) {
    return false;
  } else {
    return true;
  }
  throw new Error("Implement the canExecuteFastAttack function");
}

/**
  * A useful spy captures information, which they can't do if everyone's asleep.
  *
  * @param {boolean} knightIsAwake
  * @param {boolean} archerIsAwake
  * @param {boolean} prisonerIsAwake
 
  *
  * @returns {boolean} Whether or not you can spy on someone.
  */ //                   false              true            false
function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
  if (knightIsAwake || archerIsAwake || prisonerIsAwake) {
    console.log(`yooo`);
    return true;
  } else {
    return false;
  }

  throw new Error("Implement the canSpy function");
}
canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake);
