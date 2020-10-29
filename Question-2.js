let arr = [1,2,3,4,5,6,7,8,9,0];
function indexOfArr(arr, item){
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
        if(item == arr[i]){
            index = i +1 ;
            break;
        }
    }
    return index;
}
console.log(indexOfArr(arr,4));