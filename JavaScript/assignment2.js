//Find big number of two numbers
let p=20;
let q=10;
if(p>q){
    console.log("p is big");
}
else{
    console.log("q is big");
}
//Find big one in three numbers
let a= 60;
let b= 40;
let c = 30;
if(a>b&a>c){
    console.log("a is big");
}
else if(b>c){
     console.log("b is big");
}
else{
    console.log("c is big");
}
//Find Factors of given number
let x = 6;
for(let i=1;i<=x;i++){
    if(x%i==0){
    console.log(i);
    }
}
//check given number is prime or not
let n = 5;
let isPrime = true;

if (n <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            isPrime = false;
            break;
        }
    }
}

console.log(isPrime)

//print even factors oa a given number
let z = 8;
for(let i=1;i<=x;i++){
    if(z%i==0 & i%2==0){
    console.log(i);
    }
}
//function to receive a number as arg and print sum of its digits
function DigitSum(m){
    m_str = str(m);
    digit_sum = 0;
    for(m_char in m_str){
        if (m_char == isdigit){
            return digit_sum += m_char;
        }
    }
}
console.log(digit_sum);
