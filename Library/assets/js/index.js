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
  "The new Publisher",
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
let Niksix = new addBook(
  "Math Basics",
  { firstName: "Nikolay", lastName: "Gyudzenov" },
  "Ritz",
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
autorsArr = [];
for (let i = 0; i < library.length; i++) {
  const element = library[i];
  if (!autorsArr.indexOf(element.autor.firstName) > -1) {
    autorsArr.push(element.autor.firstName);
  }
}
console.log(autorsArr);

// Пълним празния масив
publishersArr = [];
for (let i = 0; i < library.length; i++) {
  const element = library[i];
  if (!publishersArr.indexOf(element.publisher) > -1) {
    publishersArr.push(element.publisher);
  }
}
console.log(publishersArr);
//includes

//Филтрираме дубликатите
//filter metod s index of // 1 metod
let filterPub = publishersArr.filter((element, index) => {
  console.log(element);
  return publishersArr.indexOf(element) === index;
});
console.log(filterPub);
////// 2 metod
let uniques = [];
publishersArr.forEach((element) => {
  if (!uniques.includes(element)) {
    uniques.push(element);
  }
});
console.log(uniques);
/////// 3 metod
uniqueSet = [...new Set(publishersArr)];
console.log(uniqueSet);
