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
