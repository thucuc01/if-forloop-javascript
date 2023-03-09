//bt1
function checkSNT(n) {
  if (n < 2) {
    return false;
  } else if (n == 2) {
    return true;
  } else if (n % 2 == 0) {
    return false;
  } else {
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
      if (n % i == 0) {
        return false;
      }
    }

    return true;
  }
}
function printSNT(n) {
  checkSNT(n) ? console.log("YES") : console.log("NO");
}

printSNT(5);
printSNT(10);

// bt2
function writeArrNumber(n) {
  if (n >= 1) {
    for (let i = 1; i <= n; i++) {
      console.log(i);
    }
  } else {
    console.log(n + " < 1");
  }
}
// writeArrNumber(10)

// bt3
function sprintOddNumber(n) {
  if (n >= 1) {
    for (let i = 1; i <= n; i += 2) {
      console.log(i);
    }
  }
}
// sprintOddNumber(10);

// bt4
function printArrSNT(n) {
  let result = "";
  if (n > 1) {
    for (let i = 2; i <= n; i++) {
      if (checkSNT(i)) {
        result += i + ` `;
      }
    }
  }
  console.log(result);
}
printArrSNT(12);
//  bt5
function sum(n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result += i;
  }
  console.log(result);
}
sum(10);
// bt6

function sumSquare(n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result += i * i;
  }
  console.log(result);
}
sumSquare(3);
