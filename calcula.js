const prompt = require('prompt-sync')();
function factoriel(n) {
    if (n == 0 || n == 1) {
        return 1;
    } else {
        return n * factoriel(n - 1); 
    }
}

for (let i = 0; i < 80000000000; i++) {

const operateur = prompt("Enter an operator (+, -, *, /, ^, v ,!) : ");




switch (operateur) {
    case '+':
        num1 = prompt("Enter a number  : ");
 num2 = prompt("Enter the second number : ");
 addition=parseFloat(num1)+parseFloat(num2);
        console.log(`Result : ${addition}`);
        break;
    
    case '-':
         num1 = prompt("Enter a number : ");
 num2 = prompt("Enter the second number : ");
 

        console.log(`Result : ${num1 - num2}`);
        break;
    
    case '*':
        num1 = prompt("Enter a number : ");
        num2 = prompt("Enter the second number: ");
        console.log(`Result: ${num1 * num2}`);
        break;
    
    case '/':
        num1 = prompt("Enter a number : ");
        num2 = prompt("Enter the second number : ");
        if (num2 === 0) {
            console.log("Erreur : Division par zéro.");
        } else {
            console.log(`Result : ${num1 / num2}`);
        }
        break;

    case '^':
        num1 = prompt("Enter a number : ");
        num2 = prompt("Enter the second number : ");
        console.log(`Result : ${Math.pow(num1, num2)}`);
        break;
    
    case 'v': 
    num1 = prompt("Enter a number : ");
        if (num1 < 0) {
            console.log("Erreur ");
        } else {
            console.log(`Result : ${Math.sqrt(num1)}`);
        }
        break;
         
    case '!': 
    num1 = prompt("Enter a number : ");

            console.log(`Result : ${factoriel(num1)}`);
        
        break;

    default:
        console.log("Invalid Operator !");
}
}