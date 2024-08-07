// MINIMUM HW TASK 

// 1 task 
// User age
const userAge = Number(prompt("Please enter your age:"));

// input is valid
if (userAge < 0) {
    alert("Please enter a valid age.");
} else {
    // Determine the user's category based on their age
    if (userAge >= 0 && userAge <= 11) {
        alert("You are a child.");
    } else if (userAge >= 12 && userAge <= 17) {
        alert("You are a teenager.");
    } else if (userAge >= 18 && userAge <= 59) {
        alert("You are an adult.");
    } else if (userAge >= 60) {
        alert("You are a senior.");
    } else {
        alert("Please enter a valid age.");
    }
}

// 2 task 
let singleDigitNumber = prompt("Please enter a number from 0 to 9:");

// Array to map numbers to special characters
const specialCharacters = [')', '!', '@', '#', '$', '%', '^', '&', '*', '('];

// next step 
if (singleDigitNumber !== null && singleDigitNumber.trim() !== "" && !isNaN(singleDigitNumber)) {
    singleDigitNumber = Number(singleDigitNumber);
    if (singleDigitNumber >= 0 && singleDigitNumber <= 9) {
        alert(`The special character for ${singleDigitNumber} is: ${specialCharacters[singleDigitNumber]}`);
    } else {
        alert("Please enter a valid number between 0 and 9.");
    }
} else {
    alert("Please enter a valid number between 0 and 9.");
}

// 3 task 

let rangeStart = prompt("Enter the start of the range:");
let rangeEnd = prompt("Enter the end of the range:");

// 1 step
if (isNaN(rangeStart) || isNaN(rangeEnd) || rangeStart === null || rangeEnd === null || rangeStart.trim() === "" || rangeEnd.trim() === "") {
    alert("Please enter valid numbers for both the start and end of the range.");
} else {
    rangeStart = Number(rangeStart);
    rangeEnd = Number(rangeEnd);

    // 2 step
    if (rangeStart > rangeEnd) {
        [rangeStart, rangeEnd] = [rangeEnd, rangeStart];
    }

    // 3 step 
    let sum = 0;
    for (let i = rangeStart; i <= rangeEnd; i++) {
        sum += i;
    }

    // Display the result
    alert(`The sum of all numbers from ${rangeStart} to ${rangeEnd} is: ${sum}`);
}

function greatestCommonDivisor(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// 4 TASK

// 1 step
let firstNumber = prompt("Enter the first number:");
let secondNumber = prompt("Enter the second number:");

// 2 step
if (isNaN(firstNumber) || isNaN(secondNumber) || firstNumber === null || secondNumber === null || firstNumber.trim() === "" || secondNumber.trim() === "") {
    alert("Please enter valid numbers.");
} else {
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);

    // 3 step
    let gcdResult = greatestCommonDivisor(firstNumber, secondNumber);

    // Results
    alert(`The greatest common divisor of ${firstNumber} and ${secondNumber} is: ${gcdResult}`);
}

// 5 TASK

// 1 step
let userNumber = prompt("Please enter a number:");

// 2 step 
if (isNaN(userNumber) || userNumber === null || userNumber.trim() === "") {
    alert("Please enter a valid number.");
} else {
    userNumber = Number(userNumber);

    // 3 step
    let divisors = [];
    for (let i = 1; i <= userNumber; i++) {
        if (userNumber % i === 0) {
            divisors.push(i);
        }
    }

    // 4 step
    alert(`All divisors of the number ${userNumber}: ${divisors.join(", ")}`);
}

// MEDIUM HW TASK 

// 1 TASK 

// 1 step
let fiveDigitNumber = prompt("Please enter a five-digit number:");

// 2 step
if (isNaN(fiveDigitNumber) || fiveDigitNumber === null || fiveDigitNumber.trim() === "" || fiveDigitNumber.length !== 5) {
    alert("Please enter a valid five-digit number.");
} else {
    // 3 step
    let reversedNumber = fiveDigitNumber.split('').reverse().join('');
    if (fiveDigitNumber === reversedNumber) {
        alert(`The number ${fiveDigitNumber} is a palindrome.`);
    } else {
        alert(`The number ${fiveDigitNumber} is not a palindrome.`);
    }
}

// 2 TASK 

// 1 step
let purchaseAmount = prompt("Please enter the total purchase amount:");

// 2 step
if (isNaN(purchaseAmount) || purchaseAmount === null || purchaseAmount.trim() === "" || purchaseAmount < 0) {
    alert("Please enter a valid purchase amount.");
} else {
    purchaseAmount = Number(purchaseAmount);
    let discount = 0;

    // 3 step
    if (purchaseAmount >= 200 && purchaseAmount < 300) {
        discount = 0.03;
    } else if (purchaseAmount >= 300 && purchaseAmount < 500) {
        discount = 0.05;
    } else if (purchaseAmount >= 500) {
        discount = 0.07;
    }

    // 4 step
    let discountedAmount = purchaseAmount * (1 - discount);
    
    // 5 step 
    alert(`The total amount after a discount is: ${discountedAmount.toFixed(2)}`);
}

// 3 TASK

// 1 step
let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;
let evenCount = 0;
let oddCount = 0;

// 2 step
for (let i = 0; i < 10; i++) {
    let numberInput = prompt(`Please enter number ${i + 1}:`);

    // 3 step
    if (isNaN(numberInput) || numberInput === null || numberInput.trim() === "") {
        alert("Invalid input, please enter a valid number.");
        i--; // Repeat the current iteration
        continue;
    }

    let number = Number(numberInput);

    // 4 step
    if (number > 0) {
        positiveCount++;
    } else if (number < 0) {
        negativeCount++;
    } else {
        zeroCount++;
    }

    // 5 step
    if (number % 2 === 0) {
        evenCount++;
    } else {
        oddCount++;
    }
}

// 6 step
alert(`Statistics:
- Positive numbers: ${positiveCount}
- Negative numbers: ${negativeCount}
- Zeros: ${zeroCount}
- Even numbers: ${evenCount}
- Odd numbers: ${oddCount}`);

// 4 TASK

// 1 step
const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let currentDayIndex = 0;

// 2 step
function showNextDay() {
    let nextDay = confirm(`Day of the week: ${daysOfWeek[currentDayIndex]}. Do you want to see the next day?`);
    if (nextDay) {
        currentDayIndex = (currentDayIndex + 1) % daysOfWeek.length;
        showNextDay();
    }
}

// 3 step
showNextDay();
