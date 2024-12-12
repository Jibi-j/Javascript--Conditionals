
let num = prompt("Enter a number between 0 and 1 million:");

num = Number(num);

if (num >= 0 && num <= 1000000) {
    
    let sum = 0;

     for (let i = 1; i <= num; i++) {
        sum += i;
    }

    
    console.log(`Sum of numbers up to ${num} is ${sum}`);
} else {
    // If the number is invalid
    console.log("Invalid number");
}
