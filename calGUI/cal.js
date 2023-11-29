// cal

// 연산자이면서 prev !== curr
let prev = ""; // 마지막 직전 입력값
let curr = ""; // 마지막 입력값

// Number Button
const nButton = (num) => {
  let exp = document.getElementById("output").value;
  if (exp === "0") {
    exp = "";
  }
  let result = String(exp) + String(num);
  document.getElementById("output").value = result;
  prev = result.substr(-2, 1);
  //
  console.log("입력: 숫자");
  console.log(`prev: ${prev}`);
  curr = result.substr(-1, 1);
  console.log(`curr: ${curr}`);
};

// Operator Button
const oButton = (ope) => {
  let exp = document.getElementById("output").value;

  // state: 0 에서 연산자 입력 불가.
  if (exp === "0") {
    document.getElementById("exp").value = "숫자를 먼저 입력하세요.";
    return;
  }

  // 연산자 버튼 누른 시점에서 curr는 숫자.
  // console.log(`prev: ${prev}`);
  // console.log(`curr: ${curr}`);

  // curr가 연산자가 아니면(curr가 숫자면)
  if (curr !== "+" && curr !== "-" && curr !== "*" && curr !== "/") {
    // if (typeof parseInt(curr) === "number") {
    // 수식에 연산자 추가
    let result = String(exp) + String(ope);
    document.getElementById("output").value = result;
    console.log("입력: 연산자");
    prev = result.substr(-2, 1);
    console.log(`prev: ${prev}`);
    curr = result.substr(-1, 1);
    console.log(`curr: ${curr}`);
    return;
    // }
    return;
  }
};

// Result Button
const resultButton = () => {
  let exp = document.getElementById("output").value;
  // 예외처리: 입력없음.
  if (exp === "0") {
    document.getElementById("exp").value = "계산식을 입력하세요.";
    return;
  }

  // 계산결과
  let result = eval(exp);
  // 예외처리: Infinity, Not a Number 제외.
  if (+result === Infinity || isNaN(result)) {
    document.getElementById("exp").value = "계산할 수 없습니다.";
    return;
  }
  document.getElementById("exp").value = exp;
  document.getElementById("output").value = result;
};

// Clear Button
const delButton = () => {
  document.getElementById("exp").value = "";
  document.getElementById("output").value = "0";
};

// test
// test
// test
// test
// test
document.querySelector('test .testBtn1').addEventListener('click', function() {
  console.log('eventlistner test')
})
document.querySelector('section').addEventListener('click', function() {
  console.log('eventlistner test')
})