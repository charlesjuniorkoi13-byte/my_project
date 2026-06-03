// ==========================================================
// LAB 5: FUNCTIONS (REUSABLE CODE BLOCKS)
// ==========================================================

// --- Task 1: Create a basic greeting function (No parameters, no return) ---
console.log("--- Task 1: Basic Function ---");
function showWelcomeMessage() {
    console.log("Welcome to IS216 Lab 5: Mastering Functions!");
}

// Calling the function to execute it
showWelcomeMessage(); 
console.log("-------------------------------------------\n");


// --- Task 2: Create a function with parameters and a return statement ---
console.log("--- Task 2: Parameters & Return Values ---");
function calculateTotalScore(assignmentGrade, examGrade) {
    // This calculates the overall grade weight
    let totalScore = assignmentGrade + examGrade;
    return totalScore; 
}

// Calling the function and storing what it gives back
let finalResult = calculateTotalScore(40, 45); 
console.log(`Your calculated total score is: ${finalResult} out of 100`);
console.log("-------------------------------------------\n");


// --- Task 3 & 4: Create an Arrow Function and experiment with arguments ---
console.log("--- Task 3 & 4: Arrow Functions & Testing ---");

// Modern JavaScript shorthand arrow function format
const multiplyNumbers = (a, b) => {
    return a * b;
};

// Running the arrow function with test arguments
let areaCalculated = multiplyNumbers(10, 5);
console.log("Testing arrow function (10 multiplied by 5):", areaCalculated);

// Testing with a second set of different numbers
let differentCalculation = multiplyNumbers(7, 3);
console.log("Testing arrow function with different inputs (7 multiplied by 3):", differentCalculation);
console.log("-------------------------------------------");