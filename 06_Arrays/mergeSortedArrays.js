let array1 = [0, 3, 4, 31];
let array2 = [4, 6, 30];

//solution 1*
function mergeSortedArrays(arr1, arr2) {
  return arr1.concat(arr2).sort((a, b) => a - b);
}

console.log(mergeSortedArrays(array1, array2));
