import { employees } from "./file1.js";

console.log(employees);
let a = employees.map(employees => employees.name)
console.log(a);
let b = employees.filter(function(name, address)
{
    return employees == employees.age >=40 && employees.age <=50;
})
console.log(b);
let c = employees.find(employees => employees.address.city != "hyd")
console.log(c)
let d = employees.filter(function(name, skills){
    return employees =="reactjs";
})
console.log(d)

