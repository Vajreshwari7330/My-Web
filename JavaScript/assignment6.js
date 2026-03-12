//Synchronous
// console.log("Customers enter into the restaurant.");
// console.log("Customer1 orders Pizza");
// for(let x=0;x<=5000;x++){
//     console.log("Customer1 recieves Pizza")
// }
// console.log("Customer2 orders Ice Cream");
// for(let x=0;x<=2000;x++){
//     console.log("Customer1 recieves Ice Cream")
// }
// console.log("Customer1 orders Biryani");
// for(let x=0;x<=7000;x++){
//     console.log("Customer1 recieves Biryani")
// }


//Asynchronous
console.log("Customers enter into the restaurant.");
console.log("Customer1 orders Pizza");
setTimeout(() => {
    console.log("Customer1 receives Pizza")
}, 5000);
console.log("Customer2 orders Ice Cream");
setTimeout(() => {
    console.log("Customer2 receives Ice Cream")
}, 2000);
console.log("Customer3 orders Biryani");
setTimeout(() => {
    console.log("Customer3 recieves Briyani")
}, 7000);


