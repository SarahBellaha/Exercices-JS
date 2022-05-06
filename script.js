// const animals = [
//     {name: "Billy", species: "cat", sound: "Meow"},
//     {name: "Elios", species: "dog", sound: "Woof"},
//     {name: "Felix", species: "cat", sound: "Meow"},
//     {name: "Louise", species: "cow", sound: "Meuuuh"}
// ];

// for(i = 0; i < animals.length; i++) {
// console.log(animals[i].sound);
// };

// const  billyTheCat = {
//     name: "Billy", 
//     species: "Cat", 
//     isHungry: true, 
//     feed:function(){
//     if(this.isHungry){
//     console.log("Billy n'a pas faim.");
//     } else {
//     this.isHungry = false;
//     console.log("Billy est affamé!")
//     }
// }}

// console.log(billyTheCat.isHungry);
// billyTheCat.feed();
// console.log(billyTheCat.isHungry);
// billyTheCat.feed();


// const bearsPictures = [
//     "https://placebear.com/500/279",
//     "https://placebear.com/500/280",
//     "https://placebear.com/500/300",
//     "https://placebear.com/500/302",
//     "https://placebear.com/500/305"
// ];

// let murrayPictures = document.querySelectorAll("img");

// for(i = 0; i < murrayPictures.length; i++) {
// murrayPictures[i].src = bearsPictures[i];
// }

const dogPictures = document.querySelectorAll(".img-dog");

for( i = 0; i < dogPictures.length; i++) {
    dogPictures[i].remove();
    console.log('test');
}