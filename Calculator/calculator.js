let inputBox = document.getElementById("input");
let btns = document.getElementsByClassName("cal");
let computeBtn = document.getElementById("calculate");
let deleteBtn = document.getElementById("delete");
let clearBtn = document.getElementById("clear");

//  숫자나 연산자를 클릭할 때마다 inputBox에 추가
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function addEvent() {
    inputBox.value += btns[i].innerHTML; // click 할 때마다 숫자나 연산자가 추가
  });
} // addEventListener에서는 레퍼런스, - 넣어야함

//  eval()로 문자열 계산 구현, inputBox초기화
computeBtn.addEventListener("click", function () {
  let result = eval(inputBox.value); // 계산
  if (result === undefined) {
    alert("수식을 입력하세요.");
  } else {
    alert(`${inputBox.value} = ${result}`); // 출력
  }
  inputBox.value = ""; //초기화
});

// 지우기 기능

deleteBtn.addEventListener("click", function () {
  inputBox.value = inputBox.value.slice(0, -1); // string 뒤에서 하나 제거
});

// 전체 지우기 기능

clearBtn.addEventListener("click", function () {
  inputBox.value = "";
});

// 결과 html코드 추가메모리로 보여주기? 연산자로 끝나거나 오류 발생시 어떠캄
