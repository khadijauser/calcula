const prompt = require('prompt-sync')();
function factoriel(n) {
    if (n == 0 || n == 1) {
        return 1; // Le factoriel de 0 ou 1 est 1
    } else {
        return n * factoriel(n - 1); 
    }
}

for (let i = 0; i < 80000000000; i++) {

const operateur = prompt("Entrez un opérateur (+, -, *, /, ^, v ,!) : ");




switch (operateur) {
    case '+':
        num1 = prompt("Entrez un nombre : ");
 num2 = prompt("Entrez un autre nombre : ");
 addition=parseFloat(num1)+parseFloat(num2);
        console.log(`Résultat : ${addition}`);
        break;
    
    case '-':
         num1 = prompt("Entrez un nombre : ");
 num2 = prompt("Entrez un autre nombre : ");
 

        console.log(`Résultat : ${num1 - num2}`);
        break;
    
    case '*':
        num1 = prompt("Entrez un nombre : ");
        num2 = prompt("Entrez un autre nombre : ");
        console.log(`Résultat : ${num1 * num2}`);
        break;
    
    case '/':
        num1 = prompt("Entrez un nombre : ");
        num2 = prompt("Entrez un autre nombre : ");
        if (num2 === 0) {
            console.log("Erreur : Division par zéro.");
        } else {
            console.log(`Résultat : ${num1 / num2}`);
        }
        break;

    case '^':
        num1 = prompt("Entrez un nombre : ");
        num2 = prompt("Entrez un autre nombre : ");
        console.log(`Résultat : ${Math.pow(num1, num2)}`);
        break;
    
    case 'v': 
    num1 = prompt("Entrez un nombre : ");
        if (num1 < 0) {
            console.log("Erreur ");
        } else {
            console.log(`Résultat : ${Math.sqrt(num1)}`);
        }
        break;
         
    case '!': 
    num1 = prompt("Entrez un nombre : ");

            console.log(`Résultat : ${factoriel(num1)}`);
        
        break;

    default:
        console.log("Opérateur invalide !");
}
}