//take number array print sum of it
let arr = [10, 20, 30, 40];
let sum = 0;
for(let i=0;i<arr.length;i++){
    sum +=arr[i];
}
console.log(sum)
//take number array print even numbers of it
let b = [2, 3, 4, 5, 6, 7];
let start = 2;
let end = 7;
for(let even = start; even<+ end; even +=2){
    console.log(even);
}

//take number array print prime numbers of it
primeNumbers = [];
for(let i=0;i<b.length;i++){
    num = b[i];
    let isPrime = true;

    if (num<= 1){
        isPrime =false;
    }
    else{
        for(let j=2;j<=Math.sqrt(num);j++){
            if(num%j ==0){
                isPrime = false;
                break;
            }
        }
    }
    if(isPrime){
        primeNumbers.push(num);
    }
}
console.log(primeNumbers);