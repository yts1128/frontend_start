# javascript

## javascript(ECMAScript)버젼

- 2009 : ES5
- 2015 : ES6로 업데이트 함

##ES6 버젼 등장

- 변수 scope 개념 확장
- class 개념 도입
- 함수 선언 형식 / 개념 추가 -프론트엔드 프레임워크 / 라이브러리에 사용
-

##프로그래밍 언어 공부

- 프로그래밍 언어 문법
- 프로그래밍 언어 활용

  - 알고리즘
  - 로직
  - API

## javascript 문법

- 변수(데이터 타입)

- 명령문(구문)

- 함수

- 배열 , 객체, class

## Javascript 활용

- 이벤트

- HTML , CSS와의 관계

##Javascript 변수 : var
https://www.w3schools.com/js/js_variables.asp

- 변수를 정의 / 선언할때 사용하는 키워드(예약어)
- ES5 버젼에서 사용

```
var a;
var b;

var a, b; - 전자는 따로 선언 후자는 같이 선언
```

##Javascript 변수 : let
https://www.w3schools.com/js/js_let.asp

- 변수를 정의 / 선언할때 사용하는 키워드(예약어)

-

##Javascript 변수 : const(상수 변수)
https://www.w3schools.com/js/js_const.asp

- constant : 상수
- 한번 값을 초기화하면 변경할 수 없음

> ES5버젼에서는 일반변수 var 만 존재 , ES6 일반변수 let, 상수변수 const가 추가됨.

### 변수 scope(접근 가능 범위)

> global scope(전역범위)
>
> function scope(함수 지역 범위)
>
> block scope(블럭 지역 범위)

> var(ES5) 키워드는 Block scope 개념이 적용되지 않고 전역변수처럼 인식됨

### 데이터 타입

- 숫자

  - 정수
  - 실수

- 문자

  - 문자(character)
  - 문자열(string)

- 논리
  - 참(true)
  - 거짓(false)

> 자바스크립트는 숫자, 문자, 논리 구분외에 데이터 타입을 구분하지 않음.
> 자바스크립트는 숫자, 문자, 논리 데이터를 구분하는 변수선언 키워드가 없음
> 데이터 타입을 구분해주는 자바스크립트 : 타입 스크립트

## javascript 연산자

https://www.w3schools.com/js/js_operators.asp

### 산술 연산자

- +, -, \*, /, %(나머지)

### 대입(할당) 연산자

- =

```
var b = a + 1

a = a + 2; //여러번 실행시 2씩 증가하는 식

a += 2;

a = a + 1;
a += 1;
a++;

a = a - 1;
a -= 1;
a--;
```

> ++, -- : 증강 연산자

### 연결 연산자

```
"a" + "b" => ab

"a" + 1 => a1

"1" + 1 => 11

console.log("총합계 : " + sum);

```

### 따옴표 사용방법

```
element.innerHTML = "<img src=\"picture.jpg\">"

element.innerHTML = "<img src='picture.jpg'>"
```

### 비교 연산자

- ==, === : 데이터 타입 동시에 비교 여부

- 비교 연산의 결과는 논리 데이터가 출력 : true / false

### 논리 연산자

- 여러개의 비교식을 연결해서 연산할 때 사용
- 논리 데이터를 연산할 때 사용

> &&(and) : && 연결되는 비교식 또는 논리 데이터가 모두 참일 때 전체가 참

```
true && true => true
true && false => false
3<5 && 10<12 => true
```

| : pipe line

> ||(or) : ||로 연결되는 비교식 또는 논리데이터가 하나라도 참이면 전체가 참

```
true || true => true
true || false => true
3<5 || 10<12 => true
```

## 명령문 / 구문 syntax

- 프로그램 실행 흐름을 제어 역할

### 조건문 / 분기문

> if 구문
> https://www.w3schools.com/js/js_if_else.asp

```
if(conditions){
  //코드블럭
}

if(conditions){
  //코드블럭 1
}else{
  //코드블럭 2
}

if(conditions1){
  // 코드블럭 1
}else if(conditions2){
  // 코드블럭 2
}else{
  // 코드블럭 3
}
```

> conditions 식의 결과가 true이면 코드 블럭을 실행 false 이면 실행하지 않음
>
> conditions : 결과가 true / false가 나오는 식
>
> 숫자를 논리 데이터로 인식
>
> - 0 : false
> - 그 외의 정수 : true

> if 사용법
>
> - else if(){} : 필요한 개수만큼 사용 가능
> - else : 마지막 부분에만 사용

> swich 구문
> https://www.w3schools.com/js/js_switch.asp
>
> expressions식의 결과에 따라 여러 갈레로 분기
>
> expressions : 결과가 숫자, 문자의 형태

```
switch(expressions){
  case '결과값1'
    코드블럭1;
    break;

  case '결과값2'
    코드블럭2;
    break;

  case '결과값3'
    코드블럭3;
    break;

  default:
    코드블럭4;
}
```

### 반복문

> for loop
> https://www.w3schools.com/js/js_loop_for.asp
>
> - 특정 횟수만큼 반복 실행

## 함수(function)

- 특정한 기능을 실행할 수 있는 여러 코드를묶어놓은 블럭
- 선언(declaration) : 함수 정의(definition)
- 호출(call) : 함수 실행
- 재사용 가능

## 배열 , 객체 , class

- 데이터 , 함수의 집합

### 배열(array)

https://www.w3schools.com/js/js_arrays.asp

> 배열 데이터가 메모리에 생성되는 구조
>
> - 일반 변수는 선언이 되었을 때 메모리에 값이 직접 할당되는 형태이고 , 배열 변수는 메모리에 배열 데이터가 저장된 곳의 주소값이 할당되는 형태
> - 배열 변수가 const로 선언되었을 때 각 원소들의 변경에는 영향을 미치지 않고, 배열 자체가 변경될 때는 영향을 미치기 때문에 변경할 수 없음

### 객체(object)

> 프로그래밍 상의 데이터를 객체라는 개념으로 대상화시키는 것
>
> - property
> - 객체가 가지고 있는 속성, 특성
>
> - method(함수)
> - 객체의 기능, 동작
>
> - 객체 데이터는 name:value 한 쌍으로 구성됨.
> - name:value 형태는 key:value 형태로도 이야기 함
>
> - 객체 method에서 this 키워드를 사용하면 method를 소유하고 있는 (포함하는) 객체를 가리킨다.

> 내장객체
>
> - js에서 기본으로 가지고 있는 객체

### class

https://www.w3schools.com/js/js_classes.asp

> 객체 데이터를 여러개 생성할 수 있도록 하는 설계도
>
> new 키워드를 사용하여 객체 데이터를 생성

## javascript 활용

### JS Event

> Event는 HTML 문서내의 상태 변화에 따른 발생되는 신호

> Event 종류
>
> Mouse Event
>
> - click. mouse over, scroll up/down
>
>   keyboard Event
>
> - key down(press), change
>
>   focus
>
> 자동으로 발생되는 이벤트
>
> - load

### JS Event Handler / Listener

```
  elementNode. addEventListener(이벤트, 함수);
```

> 함수를 따로 정의해서 매게변수로 넣어주는 경우 함수 이름만 넣어줌(괄호 생략)
>
> 함수를 따로 정의하지 않고 익명함수로 직접 넣어주는 경우도 있음

### JS Form

https://www.w3schools.com/html/html_form_input_types.asp

https://www.w3schools.com/html/html_form_elements.asp

> 폼 요소는 서버측에 데이터를 전달할 때 사용자의 입력을 받을 수 있는 요소

```
<input type="text" />
<input type="password" />
<input type="radio" />

<select>
<option>HTML</option>
<option>CSS</option>
</select>

<button type="button">save</button>

```

> input 버튼과 button태그는 기능상의 차이는 없음
>
> HTML 요소 구성의 차이
>
> - input은 빈 요소이고 button태그는 시작/종료 태그로 구성됨
> - input button은 콘텐츠 구성시 value attribut 를 사용하기 때문에 제약이 있음
> - button 태그는 콘텐츠 구성시 제약이 없음

### JS 작성박식

> HTML , CSS와 Javascript가 같이 사용될 때 3가지가 제대로 적용되기 위한 작성

> External : JS 파일을 따로 생성 - 외부 파일
> Internal : HTML 문서내에 script 태그를 사용하여 코드를 작성
> Inline : HTML Element에 Javascript 코드를 직접 작성

> External, Internal 방식으로 코딩을 하는 경우에는 Javascript의 로딩 시점은 HTML 요소가 모두 로딩(랜더링)된 이후이어야 함
> script 태그에 defer attribute를 사용하면 script 태그 위치에 상관없이 HTML이 모두 코딩된 이후에 코드를 실행할 수 있음
>
> defer attribute는 외부 파일을 불러올때만 적용 가능

```
 - External
  <script src="function.js"></script>

 - Internal
  <script>
  console.log(123);
  </script>

 - Inline
  <button type="button" onclick="show();">버튼</button>
```

### JS DOM

> DOM : document Object Model
>
> - MTML 요소들이 객체로 생성된 것
> - Javascript에서 HTML 요소들을 제어하기 위해서 사용

### JS DOM Access

> HTML4

```
  document.getElementById('id');
  document.getElementsByTagName('tag');
  document.getElementsByClassName('class');
```

> JQuery

```
  $('#id')
  $('tag')
  $('class')
```

> HTML 5

```
document.querySelector('#id');
document.querySelector('tag');
document.querySelector('.class');
document.querySelectorAll(.class);
```

### Create / Read / Update / Delete

> Create

```
// HTML 요소 생성
document.createElement()

// Text 생성
document.createTextNode()

// 부모요소에 자식요소를 추가
parentNode.appendChild(childNode)

// 해당 요소에 클래스 이름 추가
elementNode.classList.add()
```

// input type text 요소의 값을 저장하고 있는 property
inputNode.value

### JS Event Handler

https://github.com/edu-ministori/frontend_08
