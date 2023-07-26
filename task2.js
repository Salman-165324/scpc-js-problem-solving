function findSumOfPositiveNumbers(arr){
    const sum = arr.reduce( (pre, current) =>{

        if(current>0){
            return pre + current;
        }
        return pre;
    }, 0)

    return sum;

}


const myArray = [2, -5, 10, -3, 7];

const sum = findSumOfPositiveNumbers(myArray);

console.log(sum);