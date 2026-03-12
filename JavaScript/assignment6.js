//Synchronous
console.log("To eat Breakfast."); 
    console.log("Complete Breakfast")

console.log("Talk to Friend");
console.log("Friend is busy so wait..")
for(let x=0;x<=2000;x++){
    console.log("Completes talking to friend")
}
console.log("Write an email")
console.log("Completes writting an email")
console.log("Meet manager");
console.log("MAnager is busy so wait..")
for(let x=0;x<=7000;x++){
    console.log("Complete meeting with manager")
}
console.log("fix a bug")


//Asynchronous
console.log("To eat breakfast")
console.log("Completes eating breakfast")
console.log("Talk to a friend")
console.log("Friend is busy talks after 5 sec")
setTimeout(() => {
    console.log("Completes talking to a friend")
}, 5000);
console.log("Write an email")
console.log("Complete writing an email")
console.log("Meet manager")
console.log("Manager is busy meets after 7 sec")
setTimeout(() => {
    console.log("Meeting completed with manager")
}, 7000);
console.log("fix a bug")
console.log("Completed fixing of bug")