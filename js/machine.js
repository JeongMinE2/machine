// 2번 현재 잔액을 알려주는 showPrice() 함수를 작성하세요.
// (초반 시드머니는 10000원입니다.)(innerHTML은 아직 배우지 않았기에 검색후 사용하세요.)

let price = 10000;

function showPrice() {
  document.querySelector("#price").innerHTML = price;
}

// 3번 세 번의 랜덤을 응용해서 각각의 id first_num, second_num, third_num 에 난수를 넣으십시오.
const button = document.querySelector("#btn");

const randomNum = document.querySelector("#first_num");
const randomNum2 = document.querySelector("#second_num");
const randomNum3 = document.querySelector("#third_num");

function onClick() {
  const first_num = Math.floor(Math.random() * 10);
  const second_num = Math.floor(Math.random() * 10);
  const third_num = Math.floor(Math.random() * 10);

  randomNum.innerHTML = first_num;
  randomNum2.innerHTML = second_num;
  randomNum3.innerHTML = third_num;

  // 6번 0원 이하 일시 슬롯머신을 돌릴수없게 알림을 띄우세요.
  if (price < 1000) {
    alert("슬롯머신을 돌릴 수 없습니다.");
  }

  price -= 1000;

  // 4번 버튼 클릭시 현재잔액에 1000원을 차감합니다.
  // 세개의 숫자가 같으면 나온 수의 X 5000을 더해서 현재 잔액에 더합니다.(555 => 25000)(0 0 0 이 나오면 만원을 더합니다.)
  if (first_num == second_num && second_num == third_num) {
    price += first_num*5000;
    if (first_num == second_num && second_num == third_num && third_num == 0) {
      price += 10000;
    }
  }
  // 5번 세개의 숫자중 7이 하나라도 나오면 2500원을 더합니다. (777 은 예외입니다.)
  else if (first_num == 7 || second_num == 7 || third_num == 7) {
    price += 2500;
  }

  // 7번 마지막으로 console.log()를 나온수와 현재 잔고의 이력을 남깁니다.
  console.log(first_num, second_num, third_num, price);

  showPrice();
}

button.addEventListener("click", onClick);