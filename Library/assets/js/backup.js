let library = [];

let addBook = function (name, autor, publisher, yearOfIssue) {
  library.push({ name, autor, publisher, yearOfIssue });
};
addBook();
let Tsvetty = addBook("Knigata na Tsvetina", "Tsvetina Ruseva", "Lalala", 2021);
let NikiFirst = addBook("Knigata na Niki", "Nikolay G", "Amadeus", 2019);
let NikiSecond = addBook("Kids", "Nikolay G", "Amadeus", 2011);
let NikiThird = addBook("Adventures", "Nikolay G", "Amadeus", 2010);
let NikiFourth = addBook("Metal", "Nikolay G", "ABC", 2015);
let NikiFifth = addBook("Music for Life", "Nikolay G", "ABC", 2022);
let BoriFirst = addBook("Knigata na Bori", "Borislava D", "ABC", 2018);
let BoriSecond = addBook("Love", "Borislava D", "ABC", 2012);
let ToshkoFirst = addBook("Knigata na Toshko", "Todor T", "Ritz", 2017);
let ToshkoSecond = addBook("Story", "Todor T", "Ritz", 2016);
let ToshkoThird = addBook("Advance Academy", "Todor T", "Siela", 2022);
console.log(library);

// let obj_all = { library };
// console.log(obj_all);
// // да се вземе информация за брой книги в библиотеката
let bookCount = library.length - 1;
console.log(bookCount);
// // avtora kolko knigi ima // nqma go v uslovieto
let countAutIssInObj = function (obj, value) {
  let count = 0;
  for (const property in obj) {
    if (typeof obj[property] === "object") {
      count = count + countAutIssInObj(obj[property], value);
    }

    if (obj[property] === value) {
      return 1;
    }
  }
  return count;
};
console.log(countAutIssInObj(library, "Tsvetina Ruseva"));
console.log(countAutIssInObj(library, "Nikolay G"));
console.log(countAutIssInObj(library, "Borislava D"));
console.log(countAutIssInObj(library, "Todor T"));

// // да се вземе информация за брой книги в библиотеката
let books = 0;
for (let i = 0; i < library.length; i++) {
  if (library[i].name) {
    books++;
    console.log(library[i].name);
    if (library[i].name === library[i - 1].name) {
      //tozi if e da proverish dali nqma povtarqshti se knigi
      books--;
    }
  }
}
console.log(books);
// // да се вземе информация за брой автори в библиотеката

let aut = 0;
for (let i = 0; i < library.length; i++) {
  if (library[i].autor) {
    aut++;
    console.log(library[i].autor);
    if (library[i].autor === library[i - 1].autor) {
      aut--;
    }
  }
}
console.log(aut);
// // да се вземе информация за брой издателства в библиотеката
let publishers = 0;
for (let i = 0; i < library.length; i++) {
  if (library[i].publisher) {
    publishers++;
    console.log(library[i].publisher);
    if (library[i].publisher === library[i - 1].publisher) {
      publishers--;
    }
  }
}
console.log(publishers);

// да се вземе информация за издателството с най-много книги
let publisherLalala = 0;
let publisherSiela = 0;
let publisherAmadeus = 0;
let publisherABC = 0;
let publisherRitz = 0;
countPub = [];
for (let i = 0; i < library.length; i++) {
  switch (library[i].publisher) {
    case "Lalala":
      publisherLalala++;
      break;
    case "Siela":
      publisherSiela++;
      break;
    case "Amadeus":
      publisherAmadeus++;
      break;
    case "ABC":
      publisherABC++;
      break;
    case "Ritz":
      publisherRitz++;
      break;
  }
}
console.log(publisherABC);
console.log(publisherSiela);
console.log(publisherAmadeus);
console.log(publisherRitz);
console.log(publisherLalala);
