

let answer = [];
let a = 0; // a = 스트라이크, b = 볼
let b = 0;
let addMemo = document.querySelector(".memory");

// 1. 답 생성
document.querySelector(".start").addEventListener("click", ranNum);
function ranNum() {
  // 4자리 난수 생성
  clean(); // 지난 기록 초기화
  answer = [];
  while (answer.length < 4) {
    let ran = Math.floor(Math.random() * 10);
    if (answer.indexOf(ran) == -1) {
      // 중복 없을 때만 배열에 추가
      answer.push(ran);
    }
  }
  console.log(answer); // 지워도 됨
}

// 2. 비교
document.querySelector(".submit").addEventListener("click", compare);
function compare() {
  let inputValue = document.querySelector(".inputBox").value; // 문자열로 받음
  let inputArray = [...inputValue];

  for (let i = 0; i < 4; i++) {
    if (inputArray[i] == answer[i]) {
      // 자리 까지 일치
      a++;
    } else if (answer.indexOf(Number(inputArray[i])) > -1) {
      // 숫자 포함 여부만
      b++;
    }
  }

  show(a, b); // 지난 결과 기록

  if (addMemo.childElementCount > 10) {
    console.log("초기화");
    ranNum();
  }
  a = 0;
  b = 0;
}

function show(a, b) {
  // 결과 기록
  let x = document.createElement("div");
  let y = document.createTextNode(
    `${addMemo.childElementCount + 1}번째 결과: 스트라이크 ${a}회 볼 ${b}회`
  );
  x.appendChild(y);
  addMemo.append(x);
}

function clean() {
  // 기록 초기화
  while (addMemo.childElementCount > 0) {
    addMemo.removeChild(addMemo.lastChild);
  }
}
