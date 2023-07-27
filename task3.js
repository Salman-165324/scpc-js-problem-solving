
function findMostFrequentElement(arr){

    let mostFrequentElement = "Empty Array";
    let currentCount = 0; 
    let mostCounted = 0; 

    for(let i = 0; i< arr.length; i++){
        
        currentCount = 0;
        for( let j = 0; j < arr.length; j++){

            if(arr[i] === arr[j]){
                currentCount++;
            }
        }

        if( currentCount > mostCounted){
            mostFrequentElement = arr[i];
            mostCounted = currentCount
        }

        // console.log(mostCounted);
    }


    return mostFrequentElement;

}


const myArray =  [3, 5, 2, 5, 3, 3, 1, 4, 5];
const mostFrequentElement = findMostFrequentElement(myArray);
console.log(mostFrequentElement);



