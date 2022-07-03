// //////////////////////// WORKING

const products = [
  {
    number: 1,
    product: "Waffle",
    price: 130,
  },
  {
    number: 2,
    product: "Coca-cola",
    price: 90,
  },
  {
    number: 21,
    product: "Biscuits",
    price: 100,
  },
  {
    number: 22,
    product: "Napkins",
    price: 40,
  },
];

const arr = [200, 100, 50, 20, 10];
let coinArr = [];
// Calculating the Change
function calcChange(change) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (change >= 200) {
      change = change - 200;
      coinArr.push(200);
    } else if (change >= 100) {
      change = change - 100;
      coinArr.push(100);
    } else if (change >= 50) {
      change = change - 50;
      coinArr.push(50);
    } else if (change >= 20) {
      change = change - 20;
      coinArr.push(20);
    } else if (change >= 10) {
      change = change - 10;
      coinArr.push(10);
    }
  }
}
// Creating the final object
function finalResult(product, change) {
  let total = {
    product: product,
    change: change,
  };
  console.log(total);
}
// Main function vendingMachine
const vendingMachine = function (num, money) {
  // Checking if number exist with find method
  let find = products.find((p) => p.number === num);
  if (!find) {
    console.log(`Enter valid number`);
    return;
  }
  for (let i = 0; i < products.length; i++) {
    const el = products[i];
    if (el.number === num) {
      if (money >= el.price) {
        let change = money - el.price;
        calcChange(change);
        finalResult(el.product, coinArr);
      } else {
        console.log(`Not enough money`);
        return;
      }
    }
  }
};
vendingMachine(2, 50);

// const vendingMachine = function (num, money) {
//   let find = products.find((p) => p.number === num);
//   if (!find) {
//     console.log(`Enter valid number`);
//     return;
//   }
//   for (let i = 0; i < products.length; i++) {
//     const el = products[i];
//     const product = products[i].product;
//     if (money >= el.price) {
//       if (el.number === num) {
//         let change = money - el.price;
//         newTest(change);
//         makeObj(el.product, empty);
//         return;
//       }
//     } else if (money < el.price) {
//       console.log(`Not enough money`);
//       return;
//     }
//   }
// };
// vendingMachine(22, 130);

///////////////////////////////////////

// function getChange(amount) {
//   let index = 0;
//   if (amount > 0) {
//     let coin = arr[index];
//   } else if (amount - coin >= 0) {
//     amount -= coin;
//     empty.push(coin);
//   } else {
//     index++;
//   }
// }

// const products = [
//   {
//     number: 1,
//     product: "Snickers",
//     price: 100,
//   },
//   {
//     number: 2,
//     product: "bounty",
//     price: 100,
//   },
//   {
//     number: 3,
//     product: "twix",
//     price: 100,
//   },
//   {
//     number: 4,
//     product: "coca-cola",
//     price: 200,
//   },
//   {
//     number: 5,
//     product: "redbull",
//     price: 300,
//   },
// ];
// let changeArr = [];
// let totalObject = {};

// function test(number, money) {
//   products.forEach((products) => {
//     for (let key in products) {
//       if (products[key] === number) {
//         let change = money - products.price;
//         changeArr.push(change);

//         totalObject[key] = changeArr.push(change);
//         totalObject[key] = products;
//         console.log(totalObject);
//         // console.log(changeArr, products.product);
//         // return products.product;
//       }
//     }
//   });
// }
// test(2, 1000);

// HOMEWORK
// const products = [
//   {
//     number: 1,
//     product: "Waffle",
//     price: 110,
//   },
//   {
//     number: 2,
//     product: "Coca-cola",
//     price: 120,
//   },
//   {
//     number: 31,
//     product: "Biscuits",
//     price: 200,
//   },
//   {
//     number: 33,
//     product: "Napkins",
//     price: 30,
//   },
// ];

// let totalOutcome = {};
// const arr = [200, 100, 50, 20, 10];
// let empty = [];
// function newTest(change) {
//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     if (change >= 200) {
//       change = change - 200;
//       empty.push(200);
//     } else if (change >= 100) {
//       change = change - 100;
//       empty.push(100);
//     } else if (change >= 50) {
//       change = change - 50;
//       empty.push(50);
//     } else if (change >= 20) {
//       change = change - 20;
//       empty.push(20);
//     } else if (change >= 10) {
//       change = change - 10;
//       empty.push(10);
//     }
//   }
// }

// const vendingMachine = function (num, money) {
//   for (let i = 0; i < products.length; i++) {
//     const el = products[i];
//     const product = products[i].product;

// };
// /////////
// vendingMachine(1, 720);

// function getChange(amount) {
//   let coins = [200, 100, 50, 20, 10];
//   let result = [];
//   for (let i = 0; i < coins.length; i++) {
//     let coin = coins[i];
//     if (amount - coin >= 0) {
//       amount -= coin;
//       result.push(coin);
//     }
//   }
//   return result;
// }
// getChange(580);
// let resto = 250;
// const arr = [200, 100, 50, 20, 10];
// const empty = [];
// let x = 0;

// function newTest(change) {
//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     if (change >= 200) {
//       change = change - 200;
//       empty.push(200);
//     } else if (change >= 100) {
//       change = change - 100;
//       empty.push(100);
//     } else if (change >= 50) {
//       change = change - 50;
//       empty.push(50);
//     } else if (change >= 20) {
//       change = change - 20;
//       empty.push(20);
//     } else if (change >= 10) {
//       change = change - 10;
//       empty.push(10);
//     }
//   }
// }
// newTest(1200);
// console.log(empty);

////////////////// BACKUP
// const products = [
//   {
//     number: 1,
//     product: "Waffle",
//     price: 110,
//   },
//   {
//     number: 2,
//     product: "Coca-cola",
//     price: 120,
//   },
//   {
//     number: 21,
//     product: "Biscuits",
//     price: 140,
//   },
//   {
//     number: 22,
//     product: "Napkins",
//     price: 30,
//   },
// ];

// const arr = [200, 100, 50, 20, 10];
// let empty = [];
// function newTest(change) {
//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     if (change >= 200) {
//       change = change - 200;
//       empty.push(200);
//     } else if (change >= 100) {
//       change = change - 100;
//       empty.push(100);
//     } else if (change >= 50) {
//       change = change - 50;
//       empty.push(50);
//     } else if (change >= 20) {
//       change = change - 20;
//       empty.push(20);
//     } else if (change >= 10) {
//       change = change - 10;
//       empty.push(10);
//     }
//   }
// }
// function makeObj(product, change) {
//   let total = {
//     product: product,
//     change: change,
//   };
//   console.log(total);
// }
// // function checkNumMoney(num) {
// //   for (let i = 0; i < products.length; i++) {
// //     const el = products[i];
// //   }
// // }

// const vendingMachine = function (num, money) {
//   let find = products.find((p) => p.number === num);
//   if (!find) {
//     console.log(`Enter valid number`);
//     return;
//   }
//   for (let i = 0; i < products.length; i++) {
//     const el = products[i];
//     const product = products[i].product;
//     if (money >= el.price) {
//       if (el.number === num) {
//         let change = money - el.price;
//         newTest(change);
//         makeObj(el.product, empty);
//         return;
//       }
//     } else if (money < el.price) {
//       console.log(`Not enough money`);
//       return;
//     }
//   }
// };
// vendingMachine(22, 130);
