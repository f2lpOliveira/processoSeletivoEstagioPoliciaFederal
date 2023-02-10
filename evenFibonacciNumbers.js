function arrList(arr) {
  let notExceed = 4000000;

  for (let i = 0; i < arr.length; i++) {
    if (
      arr[arr.length - 1] < notExceed &&
      arr[arr.length - 1] + arr[arr.length - 2] < notExceed
    ) {
      arr.push(arr[i] + arr[i + 1]);
    }
  }
  console.log(`Fibonacci sequence is: ${arr}.`);
  return sumValuedEven(arr);
}

function sumValuedEven(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) sum += arr[i];
  }
  return sum;
}

const sumEven = arrList([1, 2]);
console.log(`The sum of the even-valued terms is: ${sumEven}`);
