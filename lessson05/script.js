'use strict';

const checkArr = function() {
  let arr = ['4234', '14155', '12345', '1234567', '8848252', '217327', '32255234'];

for (let i = 0; i < arr.length; i++) {
  if (Number(arr[i][0]) === 2 || Number(arr[i][0]) === 4) {
    console.log(arr[i]);
  }
}
};



  const isPrime = function (num) {
    for (let i = 2, max = Math.sqrt(num); i <= max; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num > 1;
  };

  const getPrimes = function (num) {
    for (let i = 2; i <= num; i++) {
      if (isPrime(i)) {
        console.log(i);
      }
    }
  };


  checkArr();
  getPrimes(100);






