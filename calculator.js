let inputBox = document.getElementById("input");
let btns = document.getElementsByClassName("numBtns");
let computeBtn = document.getElementById("calculate");
let deleteBtn = document.getElementById("delete");
let clearBtn = document.getElementById("clear");
let resultDisplay = document.getElementById("result");



for (let i = 0; i < btns.length; i++) { // 버튼에 해당하는 값 추가
  btns[i].addEventListener("click", function addEvent() {
    inputBox.value += btns[i].innerHTML; // 
  });
} 

//  eval()로 문자열 계산 구현, inputBox초기화
computeBtn.addEventListener("click", function () {
  let result = eval(inputBox.value); // 계산
  if (result === undefined) {
    alert("수식을 입력하세요.");
  } else {
    let y = document.createElement("div");
    let z = document.createTextNode(`${inputBox.value} = ${result}`);
    y.appendChild(z);
    resultDisplay.prepend(y);  // 출력 후 계산기록에 추가  / 최신이 위로 가게 함.
    
    if (resultDisplay.childElementCount === 5){
      resultDisplay.removeChild(resultDisplay.lastChild);
    }
  }
  inputBox.value = ""; //초기화
});



deleteBtn.addEventListener("click", function () {  // 값 하나 지우기 Del Btn
  inputBox.value = inputBox.value.slice(0, -1);
});



clearBtn.addEventListener("click", function () { // 값 전체 초기화 C Btn
  inputBox.value = ""; 
});

// 결과 html코드 추가메모리로 보여주기? 




