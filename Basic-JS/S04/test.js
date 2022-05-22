//var name = "Youssef";
//var firstName = "Youssef";

// const name = "Youssef";
// let firstName = "Youssef";

// name = "totot";

// firstName = "Malik";

// console.log(firstName);
// console.log(name);
// const str = " j'ai été elu président de la republique";

//const array = ["orange", "kiwi", 2, true, "yellow"];
//console.log("typeof array ==>", typeof array);

//console.log("length ==>", array.length);
// console.log(
//   "length ==>",
//   array.map(item, () => {
//     console.log("item", item);
//   })
// );

// console.log(array);
// console.log(array[0]);
// console.log(array[3]);

// array.push("test");
// console.log(array);

// const person = {
//   firstName: "Youssef",
//   lastName: "Slim",
//   age: 31,
// };
// console.log(person["lastName"]);
// console.log(person.lastName);

// const name = "Youssef";
// const lastName = "Slim";
// const number = 100;

// console.log(typeof name);
// console.log(typeof number);

//console.log(name + " " + lastName);

// opérateur logique

// const isOpen = true;
// const isClose = true;

// const openOrClose = isOpen && isClose;
// const openOrCloseSecond = isOpen || isClose;

// console.log(openOrClose);
// console.log(openOrCloseSecond);

// égalitées

// const firstName = "1";
// const age = 1;

// console.log(firstName === age);

// une fonction nommer
function sayHello() {
  //console.log("ma première function nommer");
}
// une fonction annonyme
const sayHello2 = function () {
  //console.log("ma première function annonyme");
};

// arrow function (les fonctions flechées) es6

const arrowFunction = () => {
  console.log("arrowFunction");
};

const firstFunction = (param1, param2, param3) => {
  console.log(
    "Bonjour" + " " + param1 + "j'ai" + param2 + "et j'habite" + param3
  );
};

firstFunction("youssef", 41, "Paris");
firstFunction("Marion", 29, "Lyon");
