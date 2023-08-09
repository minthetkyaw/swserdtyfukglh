// // // // let x = 10;
// // // // let y = "hello world";
// // // // let bol = true;
// // // // let un;
// // // // let nall = null;
// // // // let nann = y - x;
// // // // console.log(y);
// // // // console.log(x);
// // // // console.log(bol);
// // // // console.log(un);
// // // // console.log(nall);
// // // // console.log(nann);

// // // const { Toast } = require("bootstrap");

// // // // let ary = ["apple", "mango", true, null, 20, undefined];

// // // // let obj = {
// // // //   name: "min thet kyaw",
// // // //   age: 20,
// // // //   location: "north okkalapa",
// // // // };

// // // let fruits = {
// // //   orange: 200,
// // //   mango: 300,
// // //   banana: 100,
// // //   apple: 400,
// // // };

// // // const total = [];
// // // let totalIndex = 0;

// // // function buy(amount, fruit = "banana") {
// // //   let cost = amount * fruits[fruit];

// // //   let totalAmount = {
// // //     amount,
// // //     fruit,
// // //     cost,
// // //   };
// // //   total[totalIndex++] = totalAmount;
// // //   return cost;
// // // }

// // // function calcTax(originalPrice, taxPercentage = 5) {
// // //   let taxValue = originalPrice * (taxPercentage / 100);
// // //   return taxValue;
// // // }

// // // console.log(buy(5, "banana"));
// // // console.log(buy(5, "banana"));
// // // console.log(buy(5, "orange"));

// // // console.log(total);

// // // let x;
// // // function go() {
// // //   return (x = 1);
// // // }

// // // const result = [];
// // // let resultIndex = 0;
// // // function calcArea(w, b) {
// // //   let area = w * b;
// // //   let obj = {
// // //     width: w + " ft",
// // //     breadth: b + " ft",
// // //     area: area + " sqft",
// // //   };

// // //   // result[result.length] = obj;
// // //   result[resultIndex++] = obj;
// // //   return area + " sqft";
// // // }

// // // console.log(calcArea(100, 200));
// // // console.log(calcArea(200, 400));
// // // console.log(calcArea(700, 900));

// // // // // console.log(x);

// // // // // console.log(go());
// // // // // console.log(x);

// // // console.log(result);

// // // const rates = {
// // //   usd: 2100,
// // //   eur: 2200,
// // //   sgd: 2000,
// // // };

// // // function toMMKV2(amount, currency) {
// // //   let result = amount * rates[currency];
// // //   return result + " MMK";
// // // }
// // // function toMMK(amount) {
// // //   return amount * rates.usd;
// // // }

// // // console.log(toMMK(1000));

// // // console.log(toMMKV2(1000, "usd"));
// // // console.log(toMMKV2(2000, "sgd"));
// // // console.log(toMMKV2(5000, "eur"));

// // // function toForeginCurrency(mmkAmount, fromCurrecny) {
// // //   return mmkAmount / rates[fromCurrecny] + " " + fromCurrecny;
// // // }

// // // console.log(toForeginCurrency(200000, "usd"));
// // // console.log(toForeginCurrency(400000, "sgd"));
// // // console.log(toForeginCurrency(500000, "eur"));

// // // function anyCurrency(amount, fromAnyCurrecny, toAnyCurrency) {
// // //   let toMMK = amount * rates[fromAnyCurrecny];

// // //   let result = toMMK / rates[toAnyCurrency];
// // //   return result + toAnyCurrency;
// // // }

// // // console.log(anyCurrency(2, "usd", "usd"));

// // let fruits = {
// //   orange: 200,
// //   mango: 300,
// //   banana: 50,
// //   apple: 300,
// // };

// // let allAmount = [];
// // let totalAmount = 0;
// // function buy(amount, fruitName) {
// //   let result = amount * fruits[fruitName];
// //   let total = result + tax(result);
// //   let obj = {
// //     fruitName,
// //     amount,
// //     total,
// //   };

// //   totalAmount += total;

// //   allAmount[allAmount.length] = obj;
// //   return `Original price is ${result} and tax is ${tax(
// //     result
// //   )} . So Net Total Price is ${total}`;
// // }

// // const tax = function (amount, taxPercentage = 5) {
// //   let result = (amount * taxPercentage) / 100;
// //   return result;
// // };

// // console.log(buy(2, "apple"));
// // console.log(buy(4, "mango"));
// // console.log(buy(6, "banana"));
// // console.log(buy(4, "orange"));

// // // console.log(tax(buy(6, "banana")));

// // console.log(allAmount);
// // console.log(totalAmount);

// // function canICome(wakeUpTime) {
// // let result;
// // if (wakeUpTime <= 9) {
// //   result = "you can come";
// // } else {
// //   result = "you can't come ";
// // }
// // return result;

// //   if (wakeUpTime <= 9) {
// //     return "အတန်းထဲဝင်ပါ";
// //   }
// //   return "အတန်းထဲ မဝင်ပါနဲ့ ";
// // }

// // console.log(canICome(6));
// // console.log(canICome(10));
// // console.log(canICome(7));

// // const mgmgInfo = {
// //   name: "mg mg",
// //   age: 15,
// //   marks: [
// //     {
// //       id: 1,
// //       subject: "myanmar",
// //       mark: 70,
// //     },
// //     {
// //       id: 2,
// //       subject: "english",
// //       mark: 80,
// //     },
// //     {
// //       id: 3,
// //       subject: "math",
// //       mark: 88,
// //     },
// //     {
// //       id: 4,
// //       subject: "chem",
// //       mark: 90,
// //     },
// //     {
// //       id: 5,
// //       subject: "physics",
// //       mark: 99,
// //     },
// //     {
// //       id: 6,
// //       subject: "bio",
// //       mark: 98,
// //     },
// //   ],
// // };

// // mgmgInfo.totalMark = 0;
// // mgmgInfo.results = {};
// // mgmgInfo.markOfEachSubject = {};

// // for (let i = 0; i < mgmgInfo.marks.length; i++) {
// //   // console.log(mgmgInfo.marks[i].mark);

// //   mgmgInfo.totalMark += mgmgInfo.marks[i].mark;
// //   mgmgInfo.results[mgmgInfo.marks[i].subject] =
// //     mgmgInfo.marks[i].mark >= 40 ? "success" : "fail";
// //   mgmgInfo.markOfEachSubject[mgmgInfo.marks[i].subject] =
// //     mgmgInfo.marks[i].mark;
// // }

// // // console.log(mgmgInfo.totalMark);

// // console.log(mgmgInfo);

// // console.table(mgmgInfo.results);
// // console.table(mgmgInfo.markOfEachSubject);

// // console.log(mgmgInfo.totalMark);

// // for (let i = 1; i <= 6; i++) {
// //   let stars = "";
// //   for (let x = 1; x <= i; x++) {
// //     stars += "* ";
// //   }
// //   console.log(stars);
// //   // console.log("*", i);
// // }

// // for (let i = 6; i >= 1; i--) {
// //   let stars = "";
// //   for (let x = 1; x <= i; x++) {
// //     stars += "* ";
// //   }
// //   // console.log("*", i);
// //   console.log(stars);
// // }

// // function starGenerator(count, element = "*") {
// //   let stars = "";
// //   for (let i = 1; i <= count; i++) {
// //     stars += element;
// //   }
// //   return stars;
// // }

// // console.log(starGenerator(6));

// // for (let i = 1; i <= 5; i++) {
// //   console.log(starGenerator(i, "="), i);
// //   console.log(starGenerator(i, "*"), i);
// // }
// // for (let i = 1; i <= 5; i++) {
// //   let result = "";
// //   for (let x = 1; x <= 5; x++) {
// //     if (x <= i) {
// //       result += "* ";
// //     } else {
// //       result += "= ";
// //     }
// //   }
// //   console.log(result, i);
// // }

// // for (let i = 1; i <= 5; i++) {
// //   let result = "";
// //   for (let x = 1; x <= 5; x++) {
// //     // if (x <= i) {
// //     //   result += "*";
// //     // } else {
// //     //   result += "=";
// //     // }
// //     result += x <= i ? "*" : "=";
// //   }
// //   console.log(result, i);
// // }

// // let rates = [
// //   {
// //     no: 1,
// //     name: "nang nang",
// //     rating: 4,
// //   },
// //   { no: 2, name: "kyaw kyaw", rating: 4 },
// //   { no: 3, name: "hla hla", rating: 4 },
// //   { no: 4, name: "mya mya ", rating: 4 },
// //   { no: 5, name: "su su", rating: 4 },
// // ];

// // for (let i = 0; i < rates.length; i++) {
// //   let result = "";
// //   for (let x = 1; x <= 5; x++) {
// //     if (x <= rates[i].rating) {
// //       result += "*";
// //     } else {
// //       result += "=";
// //     }
// //   }
// //   console.log(result, i);
// // }

// // const ratings = [
// //   { id: 1, name: "kyaw kyaw", rate: 4 },
// //   { id: 2, name: "nang nang", rate: 5 },
// //   { id: 3, name: "su su", rate: 3 },
// //   { id: 4, name: "hla hla", rate: 3 },
// //   { id: 5, name: "mya mya", rate: 5 },
// // ];

// // for (let i = 0; i < ratings.length; i++) {
// //   let result = "";
// //   for (let x = 1; x <= 5; x++) {
// //     if (x <= ratings[i].rate) {
// //       result += "*";
// //     } else {
// //       result += "=";
// //     }
// //   }
// //   console.log(result, ratings[i].name);
// // }

// // ratings.forEach((rating) => console.log(rating));

// // let filter = function (name) {
// //   if (typeof name === "string") {
// //     return name;
// //   }
// //   return false;
// // };

// // console.log(filter(3));
// // console.log(filter("min"));

// // console.log(typeof filter);

// // let name = "mg mg";
// // let age = 15;
// // let townShip = "kyauk myaung";
// // let pocketMoney = 200;
// // let orange = 50;

// // let leftMoney = pocketMoney - orange;
// // // console.log(leftMoney);

// // let student1 = {
// //   name,
// //   age,
// //   townShip,
// // };

// // console.log(student1);
// // console.log(student1.age);

// // let student2 = {
// //   name: "mya mya",
// //   age: 13,
// //   townShip: "bahan",
// // };

// // let stunent3 = {
// //   name: "su su",
// //   age: 14,
// //   townShip: "sanchaung",
// // };

// // let student4 = {
// //   name: "nang nang",
// //   age: 15,
// //   townShip: "sule",
// // };

// // let students = [student1, student2, stunent3, student4];

// // console.log(students);
// // console.log(students[0]);
// // console.log(students[0].name);
// // console.log(students[3].name);

// // const results = [];
// // let resultsIndex = 0;
// // function calcArea(w, b) {
// //   const area = w * b;
// //   const result = {
// //     width: w,
// //     breadth: b,
// //     area: area + "sqft",
// //   };

// //   results[resultsIndex++] = result;
// //   return result;
// // }

// // console.log(calcArea(17, 50));
// // console.log(calcArea(500, 600));
// // console.log(calcArea(600000, 5000000));
// // console.table(results);

// // const rates = {
// //   usd: 2100,
// //   sgd: 1579,
// //   eur: 2350,
// // };

// // console.log(rates.usd);
// // console.log(rates["usd"]);

// // function toMMk(amount, currency) {
// //   let result = ` ${amount * rates[currency]} MMK`;
// //   return result;
// // }

// // console.log(toMMk(500, "usd"));
// // console.log(toMMk(4000, "sgd"));
// // console.log(toMMk(500000, "eur"));

// // function toCurrency(amount, currency) {
// //   let result = `${amount / rates[currency]} ${currency}`;
// //   return result;
// // }

// // console.log(toCurrency(100000, "usd"));

// //
// //
// //
// //
// //

// // let price = [];
// // let priceIndex = 0;
// // function buy(amount, fruit) {
// //   let price = amount * fruits[fruit];
// //   let obj = {
// //     fruit,
// //     amount,
// //     price,
// //   };
// //   price[priceIndex] = obj;
// //   return price;
// // }

// // console.log(buy(10, "banana"));
// // console.log(price);
// // const fruits = {
// //   orange: 300,
// //   mango: 200,
// //   banana: 100,
// // };

// // let total = 0;
// // const voucher = [];
// // let voucherIndex = 0;

// // function buy(item, quantity) {
// //   let itemPrice = fruits[item];
// //   // console.log(itemPrice);
// //   let cost = quantity * itemPrice;
// //   total = total + cost;
// //   let list = {
// //     item,
// //     price: itemPrice,
// //     quantity,
// //     cost,
// //   };

// //   voucher[voucherIndex++] = list;
// //   return cost;
// // }

// // buy("apple", 5);
// // buy("orange", 8);
// // buy("mango", 2);
// // buy("banana", 15);

// // console.table(voucher);

// // const fruits = {
// //   orange: 300,
// //   mango: 200,
// //   banana: 100,
// // };

// // let yourFruitsTotalPrice = 0;
// // const fruitsTotal = [];
// // let fruitsTotalIndex = 0;
// // function buy(quantity, fruit) {
// //   let total = quantity * fruits[fruit];
// //   let obj = {
// //     fruit,
// //     quantity,
// //     price: fruits[fruit],
// //     total,
// //     // totalPrice: yourFruitsTotalPrice,
// //   };

// //   fruitsTotal[fruitsTotalIndex++] = obj;

// //   yourFruitsTotalPrice += total;

// //   return total;
// // }

// // console.log(buy(8, "banana"));
// // console.log(buy(5, "orange"));
// // console.log(buy(7, "mango"));
// // console.log(yourFruitsTotalPrice);
// // console.table(fruitsTotal);
// // console.log(yourFruitsTotalPrice);

// // const total = [];
// // let totalIndex = 0;

// // function calcArea(w, b) {
// //   let area = w * b + " Sqft";
// //   let obj = {
// //     width: w + " ft",
// //     breadth: b + " ft",
// //     area,
// //   };
// //   total[totalIndex++] = obj;
// //   return area;
// // }

// // console.log(calcArea(200, 600));
// // console.log(calcArea(300, 500));
// // console.log(calcArea(200, 800));
// // console.log(total);

// // const rates = {
// //   usd: 2000,
// //   sgd: 1000,
// //   eur: 500,
// // };

// // function calcExchangeRate(amount, fromCurrency, toCurrency) {
// //   if (rates[fromCurrency] === rates[toCurrency]) {
// //     return amount;
// //   } else if (rates[toCurrency] <= rates[fromCurrency]) {
// //     return (amount * rates[fromCurrency]) / rates[fromCurrency];
// //   } else {
// //     return (amount * rates[fromCurrency]) / rates[fromCurrency];
// //   }
// // }

// // console.log(calcExchangeRate(500, "usd", "eur"));

// // const rates = {
// //   USD: 20,
// //   EUR: 5,
// //   SGD: 10,
// // };

// // function exchange(amount, fromCurrency, toCurrency) {
// //   let rate = rates[toCurrency] / rates[fromCurrency];
// //   return `${amount * rate} ${toCurrency}`;
// // }

// // let amountInSgd = 100;
// // let amountInUsd = exchange(amountInSgd, "USD", "USD");
// // console.log(`${amountInSgd} SGD is equivalent to ${amountInUsd}`);

// // console.log(exchange(1, "USD", "EUR"));

// // hello = 0;
// // function x() {
// //   return "this is x";
// // }

// // if ([]) {
// //   console.log("this is true");
// // } else {
// //   console.log("this is false");
// // }

// // const fruits = ["orange", "mango", "banana", "lemon", "apple"];

// // for (let i = 0; i < fruits.length; i++) {
// //   console.log(fruits[i]);
// // }

// // for (let i = fruits.length - 1; i >= 0; i--) {
// //   console.log(fruits[i]);
// // }

// // console.log(
// //   `I'm ${(function () {
// //     let currentYear = 2023;
// //     let myBirthday = 1999;
// //     let result = currentYear - myBirthday;
// //     return result;
// //   })()} years old`
// // );

// // const myHeart = [
// //   {
// //     name: "Ma Ma",
// //     toYou: "Wife",
// //     hasBeen: "3 years",
// //   },
// //   {
// //     name: "Nyi Ma Lay",
// //     toYou: "Sweet Heart",
// //     hasBeen: "2 years",
// //   },
// //   {
// //     name: "သူငယ်ချင်းမလေး",
// //     toYou: "Best supporter",
// //     hasBeen: "5 years",
// //   },
// // ];

// // let x = 10;
// // if (x > 5) {
// //   console.log("x is greater than 5");
// // } else if (x > 8) {
// //   console.log("x is greater than 8");
// // } else {
// //   console.log("x is equal to 10");
// // }

// // (function () {
// //   return alert(123);
// // })();

// // function run() {
// //   let x = 1;
// //   console.log(x);
// // }

// // run();

// // console.log(x);

// const ary = ["orange", "mango", "apple", "banana", "lemon", "6", "7", "8"];

// let arr = [];
// for (i in ary) {
//   // console.log(ary[i]);

//   arr[arr.length] = ary[i];
//   if (i == 6) {
//     break;
//   }
// }

// console.log(arr);

// console.log("Loop Practicals");

// const points = [34, 15, 2, 52, 19, 56, 30, 57];
// const product = [
//   {
//     id: 1,
//     title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//     price: 109.95,
//     description:
//       "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//     category: "men's clothing",
//     image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//     rating: {
//       rate: 3.9,
//       count: 120,
//     },
//   },
//   {
//     id: 2,
//     title: "Mens Casual Premium Slim Fit T-Shirts ",
//     price: 22.3,
//     description:
//       "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
//     category: "men's clothing",
//     image:
//       "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
//     rating: {
//       rate: 4.1,
//       count: 259,
//     },
//   },
//   {
//     id: 3,
//     title: "Mens Cotton Jacket",
//     price: 55.99,
//     description:
//       "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
//     category: "men's clothing",
//     image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
//     rating: {
//       rate: 4.7,
//       count: 500,
//     },
//   },
//   {
//     id: 4,
//     title: "Mens Casual Slim Fit",
//     price: 15.99,
//     description:
//       "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
//     category: "men's clothing",
//     image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
//     rating: {
//       rate: 2.1,
//       count: 430,
//     },
//   },
//   {
//     id: 5,
//     title:
//       "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
//     price: 695,
//     description:
//       "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
//     category: "jewelery",
//     image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
//     rating: {
//       rate: 4.6,
//       count: 400,
//     },
//   },
//   {
//     id: 6,
//     title: "Solid Gold Petite Micropave ",
//     price: 168,
//     description:
//       "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
//     category: "jewelery",
//     image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
//     rating: {
//       rate: 3.9,
//       count: 70,
//     },
//   },
//   {
//     id: 7,
//     title: "White Gold Plated Princess",
//     price: 9.99,
//     description:
//       "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
//     category: "jewelery",
//     image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
//     rating: {
//       rate: 3,
//       count: 400,
//     },
//   },
//   {
//     id: 8,
//     title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
//     price: 10.99,
//     description:
//       "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
//     category: "jewelery",
//     image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
//     rating: {
//       rate: 1.9,
//       count: 100,
//     },
//   },
//   {
//     id: 9,
//     title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
//     price: 64,
//     description:
//       "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
//     category: "electronics",
//     image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
//     rating: {
//       rate: 3.3,
//       count: 203,
//     },
//   },
//   {
//     id: 10,
//     title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
//     price: 109,
//     description:
//       "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
//     category: "electronics",
//     image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
//     rating: {
//       rate: 2.9,
//       count: 470,
//     },
//   },
//   {
//     id: 11,
//     title:
//       "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
//     price: 109,
//     description:
//       "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
//     category: "electronics",
//     image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
//     rating: {
//       rate: 4.8,
//       count: 319,
//     },
//   },
//   {
//     id: 12,
//     title:
//       "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
//     price: 114,
//     description:
//       "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
//     category: "electronics",
//     image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
//     rating: {
//       rate: 4.8,
//       count: 400,
//     },
//   },
//   {
//     id: 13,
//     title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
//     price: 599,
//     description:
//       "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
//     category: "electronics",
//     image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
//     rating: {
//       rate: 2.9,
//       count: 250,
//     },
//   },
//   {
//     id: 14,
//     title:
//       "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
//     price: 999.99,
//     description:
//       "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
//     category: "electronics",
//     image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
//     rating: {
//       rate: 2.2,
//       count: 140,
//     },
//   },
//   {
//     id: 15,
//     title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
//     price: 56.99,
//     description:
//       "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
//     category: "women's clothing",
//     image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
//     rating: {
//       rate: 2.6,
//       count: 235,
//     },
//   },
//   {
//     id: 16,
//     title:
//       "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
//     price: 29.95,
//     description:
//       "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
//     category: "women's clothing",
//     image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
//     rating: {
//       rate: 2.9,
//       count: 340,
//     },
//   },
//   {
//     id: 17,
//     title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
//     price: 39.99,
//     description:
//       "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
//     category: "women's clothing",
//     image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
//     rating: {
//       rate: 3.8,
//       count: 679,
//     },
//   },
//   {
//     id: 18,
//     title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
//     price: 9.85,
//     description:
//       "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
//     category: "women's clothing",
//     image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
//     rating: {
//       rate: 4.7,
//       count: 130,
//     },
//   },
//   {
//     id: 19,
//     title: "Opna Women's Short Sleeve Moisture",
//     price: 7.95,
//     description:
//       "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
//     category: "women's clothing",
//     image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
//     rating: {
//       rate: 4.5,
//       count: 146,
//     },
//   },
//   {
//     id: 20,
//     title: "DANVOUY Womens T Shirt Casual Cotton Short",
//     price: 12.99,
//     description:
//       "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
//     category: "women's clothing",
//     image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
//     rating: {
//       rate: 3.6,
//       count: 145,
//     },
//   },
// ];
// let totalPoint = 0;
// for (point of points) {
//   totalPoint += point;
// }

// console.log(totalPoint);
// Problems ( Tasks )
// 1. point စုစုပေါင်း
// 2. number တွေပဲပါတဲ့ array ကို input အနေနဲ့ထည့်လိုက်ရင် စုစုပေါင်းပြန်ပေးနိုင်တဲ့ function
// 3. စုံသီးသန့်၊ မသီးသန့် ခွဲပေးနိုင်တဲ့ function
// 4. array 5ခန်း ခွဲထုတ်ပြပါ
// 5. ကြိုက်တဲ့ index ကစ ကြိုက်သလောက် အခန်းအရည်အတွက် ခွဲထုတ် နိုင်တဲ့ function
// 6. CopyArray, Modified Array, Filter Array

// Problems
// 3 x 3 square လေးဖန်တီးရအောင်
// * * *
// * * *
// * * *
// n x n square လေးဖန်တီးရအောင်
// 3row triangle လေးဖန်တီးရအောင်
// *
// * *
// * * *

//

// Problems
// 1. marks, studentMark စုစုပေါင်း ရေးပြပါ
// 2. studentMark မှဘာသာရပ်တစ်ခုစီ ကျရှံးတွက်ပေးပါကြရှုံး
// 3. over all အောင်မြင်၊ ကျရှုံးတွက်ပေးပါ
// 4. ကျောင်းသားအားလုံး အောင်မြင်၊ ကျရှုံးတွက် ပေးပါ
// 5. အောင်မြင်တဲ့လူတွေဆို Distinction ပါရင် ထည့်ရည်တွက်ပေးပါ

// function patternChess(count , ptn1, ptn2){
//   let chessResult = "" ;

//   if(let column = 0 ; column < count ; column++)
//   {
//     for(let row=0; row < count ; row++){
//       if((column %2 === 0 && row % 2 ===0 ) || (column %2 != 0 && row % 2 !=0))
//       {
//         chessResult += `${ptn1}`;
//       }else{
//         chessResult += `${ptn2}`;
//       }
//     }
// chessResult += "\n";
//   }
//   return chessResult;
// };
