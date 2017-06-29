
export const binary = (arr, num) => {

  if(arr.length < 1 || (arr.length == 1 && arr[0] != num)){
    return -1;
  } else if(arr.length == 1 && arr[0] == num){
    return 0;
  }

  let pivot = Math.floor(arr.length/2);
  let first = 0;
  let last = arr.length - 1;

  if(arr[pivot] == num) {
    return pivot;

  } else if(arr[pivot] > num) {
    last = pivot;
    let array = arr.slice(0, last);
    return binary(array, num);

  } else {
    first = pivot;
    let array2 = arr.slice(first, last + 1);
    return binary(array2, num) + pivot;
  }
}
