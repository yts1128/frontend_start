const hamburger = document.querySelector(".hamburger");
const gnb = document.querySelector(".gnb");
const close = document.querySelector(".close");
hamburger.addEventListener("click", function () {
  gnb.classList.add("on");
  close.classList.add("on");
});

close.addEventListener("click", function () {
  gnb.classList.remove("on");
  close.classList.remove("on");
});

// 시간의 개념이 포함된 반복 실행 함수
// setInterval(함수, 시간)
// 일정 시간이 지난 후 실행 함수
// setTimeout(함수, 시간)
// 시간 매개변수 값의 단위가 ms : 1000ms = 1s(초)
let currentIndex = 0;
let nextIndex = 1;
const slide = document.querySelectorAll(".slide");

setInterval(function () {
  //이미지 슬라이드 반복 함수
  if (nextIndex > 2) {
    nextIndex = 0;
  }

  slide[currentIndex].classList.remove("active");
  slide[nextIndex].classList.add("active");

  currentIndex = nextIndex;
  nextIndex++;
}, 3000);
