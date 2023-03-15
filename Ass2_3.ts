function findSecondLargestElem(arr){
    let first = 0, second = 0;

    for(let i = 0; i <= arr.length-1; i++){
        if(arr[i] > first){
            second = first;
            first = arr[i];
        }
        else if( arr[i] > second && arr[i] != first){
            second = arr[i];
        }
    }
    return second;
    
}
let arr = [23, 89, 6, 29, 56, 45,77,32];
 let final =findSecondLargestElem(arr);
 console.log("second largest number is:"+final);
