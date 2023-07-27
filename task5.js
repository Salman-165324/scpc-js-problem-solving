function calculator(num1, num2, operator){

       
        if(operator === "/" && num2 === 0){

            return "Invalid Input. Can't divide by Zero"
        }
        if( isNaN(num1) || isNaN(num2) || operator === undefined || operator === null){
            return "Please include two valid number and a valid operator between (+,-,*/)."
        }

        switch (operator) {

            case "+":
                return num1 + num2;
                break;

            case "-":
                return num1 - num2;
                break;

            case "*":
                return num1 * num2;
                break;

            case "/":
                return (num1 / num2).toFixed(2);
                break;
        
            default:
                return "Invalid input operator."; 
                break;
        }
}


const inputNum1 = 10;
const inputNum2 = 0; 
const inputOperator = "/"; 

const result = calculator(inputNum1,inputNum2, inputOperator);
console.log(result);