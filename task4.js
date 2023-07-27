function findTwoNumbersIndicesAddUptoTargetValue (arr, targetNumber){

   let indices = []; 

   let arrLength = arr.length; 


   for( let i = 0; i< arrLength -1 ; i++){

        if( arr[i] + arr[i+1] === targetNumber){

            return[i, i+1]; 
            break; 
        }
        if(arr[i] > targetNumber){
            arrLength = i; 
        }
       
   }

   let left = 0;
   let right = arrLength; 
   let sum = 0; 
   while(left < right){

    sum = arr[left] + arr[right]; 

     if( sum === targetNumber){

        return [left, right]; 
     }

     else if(sum < targetNumber){
        left ++; 
     }
     else{
        right --; 
     }
   }
    
   return "No number found"; 
}

const targetNumber = 15;
const inputArray = [1, 4, 5, 8, 11, 15];

const resultedIndices = findTwoNumbersIndicesAddUptoTargetValue(inputArray, targetNumber);
console.log(resultedIndices);