
function reverseString(str){

    const strArray = str.split(""); 
    const reversedArray = []; 

    for(let i = strArray.length - 1 ; i >= 0 ; i--){

        reversedArray.push(strArray[i]); 

    }

    console.log(reversedArray);


    return reversedArray.join("");

}

const myString = "hello world"; 
const reversedString = reverseString(myString);
console.log(reversedString);






// function reverseString (str) {
//     let reversedString = ""; 
//     console.log(str);
//     for ( let i= str.length -1; i>=0 ; i--){

//         reversedString += str[i]; 
       
//     }

//     return reversedString; 
// }


// const myString = "hello world"

// const reversedString = reverseString(myString); 

// console.log(reversedString);


