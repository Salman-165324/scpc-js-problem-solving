function findSecondSmallestNumber(arr){


    let sortedArray =  arr.sort((a, b) => a-b);
    return sortedArray[1]; 

}

const inputArray = [12, 12, 6, 6, 1, 7, 2]; 

const secondSmallestNumber = findSecondSmallestNumber(inputArray); 

console.log(secondSmallestNumber);