let library = [];
let libraryObj = {};

function addBook(name, autor, publisher, yearOfIssue) {
  (this.name = name),
    (this.autor = autor),
    (this.publisher = publisher),
    (this.yearOfIssue = yearOfIssue);
  library.push({ name, autor, publisher, yearOfIssue });
}
// addBook(); // ?????
let Tsvetty = new addBook(
  "Knigata na Tsvetina",
  { firstName: "Tsvetina", lastName: "Ruseva" },
  "Lalala",
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

let publisherArr = [];
for (let i = 0; i < library.length; i++) {
  const element = library[i];
  if (!(publisherArr.indexOf(element.publisher) > -1)) {
    publisherArr.push(element.publisher);
  }
}
console.log(publisherArr);

// 4. да се вземе информация за издателството с най-много книги

let pushedPublishers = [];
for (let i = 0; i < library.length; i++) {
  const element = library[i].publisher;
  pushedPublishers.push(element);
}

// Glavnata funkciq , s 2 for loopa
function findBiggestPublisher(arr) {
  let emptyObj = {};
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    // Proverqva dali obekta ima takova property
    if (emptyObj.hasOwnProperty(element)) {
      // dobavq stoinost kym prazniq obekt
      emptyObj[element] = emptyObj[element] + 1;
    } else {
      emptyObj[element] = 1;
    }
  }
  let publisherName = "";
  let publisherNumber = 0;
  // vyrti key i value v object entritata
  for (const [key, value] of Object.entries(emptyObj)) {
    // proverqva ve4e pylniq obekt
    if (value > publisherNumber) {
      publisherNumber = value;
      publisherName = key;
    }
  }
  console.log(emptyObj);
  console.log(`${publisherName} has ${publisherNumber} books`);
  //kraen resultat za nai mn knigi

  //testtttttttt
  // for (const key in emptyObj) {
  //   console.log(emptyObj[key]);
  //   if (emptyObj[key] === emptyObj[key]) {
  //     console.log(`YESSS`);
  //   }
  // }

  // testove za nai malko knigi na avtor - raboti, vadi samo number
  // sortira gi ot malko kym golqmo

  // let test = Object.values(emptyObj);

  // test.sort((a, b) => a - b);
  // let lessBooks = [];
  // let publisherNameSmall = {};

  // for (const i of test) {
  //   if (test[0] === test[i]) {
  //     test[i] = test[i];
  //     let objKeys = Object.keys(emptyObj);
  //     lessBooks.push(test[i]);
  //     publisherNameSmall = emptyObj;
  //   }
  // }

  // for (let i = 0; i < test.length; i++) {
  //   if (test[0] === test[i]) {
  //     test[i] = test[i];
  //     let objKeys = Object.keys(emptyObj);
  //     lessBooks.push(test[i]);
  //   }
  // }
  // console.log(lessBooks);

  // let publisherNumberSmall = 0;
  // for (const [key, value] of Object.entries(emptyObj)) {
  //   // proverqva ve4e pylniq obekt
  //   if (!value == publisherNumberSmall) {
  //     publisherNumberSmall = value;
  //     publisherNameSmall = key;
  //   }
  //   console.log(publisherNameSmall);
  // }
  // //////////////////

  // testove s obekti za malkoto knigi
  // let lowBooksArr = Object.values(emptyObj);
  // console.log(lowBooksArr[0]);

  // for (let i = 0; i < emptyObj.length; i++) {
  //   lowBooksArr.sort((a, b) => a - b);
  //   if (lowBooksArr[0] === lowBooksArr[i]) {
  //     console.log(test);
  //   }
  // }
}
findBiggestPublisher(pushedPublishers);

/////////////////////////////////////////////////////

//Novi testove za nai malko knigi na avtor

// // //5. да се вземе информация за издателсвата, които имат издадена само 1 книга ////////////////

function findSmallestPublisher(arr) {
  let emptyObj = {};
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    // Proverqva dali obekta ima takova property
    if (emptyObj.hasOwnProperty(element)) {
      // dobavq stoinost kym prazniq obekt
      emptyObj[element] = emptyObj[element] + 1;
    } else {
      emptyObj[element] = 1;
    }
  }
  let publisherName = "";
  let publisherNumber = 0;
  // vyrti key i value v object entritata
  for (const [key, value] of Object.entries(emptyObj)) {
    publisherNumber = value;
    publisherName = key;
    // proverqva ve4e pylniq obekt
    console.log(value);
    if (value < publisherNumber) {
      publisherNumber = value;
      publisherName = key;
    }
  }
  console.log(emptyObj);
  console.log(`${publisherName} has ${publisherNumber} books`);
}
findSmallestPublisher(pushedPublishers);

// // function smallestPublisher(arr) {
// //   let emptyObj = {};
// //   for (let i = 0; i < arr.length; i++) {
// //     const element = arr[i];

// //     // Proverqva dali obekta ima takova property
// //     if (emptyObj.hasOwnProperty(element)) {
// //       // dobavq stoinost kym prazniq obekt
// //       emptyObj[element] = emptyObj[element] + 1;
// //     } else {
// //       emptyObj[element] = 1;
// //     }
// //   }
// //   let publisherName = "";
// //   let publisherNumber = 0;
// //   // vyrti key i value v object entritata
// //   for (const [key, value] of Object.entries(emptyObj)) {
// //     // proverqva ve4e pylniq obekt
// //     if (value > publisherNumber) {
// //       publisherNumber = value;
// //       publisherName = key;
// //     }
// //   }
// //   console.log(emptyObj);
// //   console.log(`${publisherName} has ${publisherNumber} books`);
// //   return publisherName;
// // }
// // findBiggestPublisher(pushedPublishers);
