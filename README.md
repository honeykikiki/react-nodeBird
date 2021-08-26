# react-nodebird

---

## 리엑트 노드버드 1일차

next설치
next의 폴더 구조

public
├── image
├── css
└── video

// 어플리케이션의 기능에 사용되는 소스들
src
├── component // 컴포넌트와 컨테이너 파일들
│ ├── common // 공통적으로 사용되는 컴포넌트들(ex button, modal)
│ └── layout // 각 페이지들의 전체 레이아웃이자 컴포넌트들의 모임
│ ├── app
│ ├── home
│ └── directory
│  
│
├── pages // 페이지를 담당하는 컴포넌트(폴더구조로 url 결정)
│ └── [id]
│── provider  
│  
│── reducer // 데이터를 정리하는 폴더
│── store // Ducks 패턴으로 redux를 정의
│── api // axios를 이용하여 서버와의 통신 로직을 담당
│  
│── hooks // 각 컴포넌트에서 사용되는 공통 로직들을 커스텀 훅으로 관리
└── reduxUtils // redux ducks 패턴에서 사용되는 유틸함수

page와 레이아웃 만들기
Link와 eslint 적용 하기

## 리엑트 노드버드 2일차

### 디자인은 Ant-Design 사용

antd디자인 styled-components 적용하기
반응형 그리드 적용하기
로그인폼 만들기
더미데이터 사용하여 로그인 하기
로그인후 프로필 페이지 만들고 회원가입 페이지 만들기

## 리엑트 노드버드 3~5일차

### 데이터 활용을 위한 리덕스 사용

리덕스 설치와 필요성 공부
리덕스의 필요성 : 리덕스는 상태관리 라이브러리이다. 컴포넌트 끼리의 데이터 및 스테이트 관리를 쉽고 효율성 있게 사용하기 위해

리덕스 구현하기
store 파일에 미들위어와 리덕스 데브툴즈 구현 (데이터 바뀌는 모습을 바로 볼수있다)
스토어 만들기
리덕스 데브툴 구현

reducers 파일에
리덕스 데이터 정의
액션 타입 정의
액션 생성 함수
리듀서 만들기 ()

리듀서 사용하기
useSelector() 리두서 데이터싱테 가져오는 함수
useDispatch() 액션함수 불러와서 사용하는 함수

styled-components = createeFlobalSyle 사용해서 엔트디 스타일 덮어쓸떄 사용

react-slick를 사용해서 이미지 슬라이더 만들기(이미지 줌으로 폴더 따로 뺴서 작성 : 스타일이 많이 들어가서 스타일을 따로 분리하고 재사용 하기위해 )

## 리엑트 노드버드 5~8일차

### redux-thunk, saga, generator

미들웨어는 리덕스의 기능을 향샹시켜주는 역활 (리덕스의 없는기능을 추가해주는 역활 )
redux-thunk는 리덕스의 비동기 액션을 dispatch할수일게 도와주는 역활
redux-saga 리덕스의 비동기 액션을 dispatch할수일게 도와주는 역활

redux-thunk 와 redux-saga의 차이

1. thunk는 간단한 비동기 처리만 가능하고 일일이 만들어줘야는 번거로움이 있다, saga는 내부적으로 사용가능한 api가 있다
2. 간단한 업무일떄는 thunk를 복잡한 업무일떄는 saga를 이용한다

주위할점
이벤트가 반복되지않게 하고 자기 사이트에 도스 공격을 하지않게 주위한다

react-saga 설치
설치후 사가 초기설정 후 sagas파일을 만들기
generator : 함수에 yield 사용해 함수를 .next()룰 할떄마다 일드 전까지만 사용한다

saga 이펙트
{

> take:

    해당 액션이 dispatch 되면 제너레이터를 next 하는 이펙트
    위의 예제에서 take는 yield에서 진행이 멈추어 있는 함수를 HELLO_SAGA 액션이 들어오면 재개시킴 (next를 실행)
    주의할 점은 take 이후의 코드를 실행시킨 다는 것이다.

> takeEvery :

    함수를 계속 반복해서 사용할수있다

> takeLatest:

    이전 액션 요청이 끝나지 않았을떄 여러번 액샨이 요청되면 무시되고 마지막 이벤트만 실행된다 (백엔드에 요청은 여러번 가고 응답만 취소하기 떄문에 백엔드에서도 처리가 필요하다)

> takeLeading:

    처음 이벤트에 값만 실행되고 뒤에 이벤트는 무시된다

> throttle : (자주 사용하지는 않는다. 서버측에서 점검하는게 한다) {요청이 한번애 너무 많이갈게 할뗴만 사용}

    ...초안에 한번만 클릭이 가능하게 하는 이펙트

> put :

    put은 dispatch로 생각하면 된다.

> delay :

    ss

> all :

    모든 코드를 한번에 실행시킨다

> fork ,call :

    fork와 call 모두 함수를 실행시켜주는 이펙트이다. 두 가지는 다음과 같은 차이가 있다.
    fork는 비동기 실행을 한다.
    call은 동기 실행을 한다. 따라서 순서대로 함수를 실행해야하는 API 요청 같은 곳에 쓰인다.

> }

saga를 이용한 비동기 액션처리
3가지로 구분 
Request => Succes => failure 로 작동

immer 불변성을 지켜주는 라이브러리
faker 더미데이터 만들어주는 라이브러리

인피니트 스크롤 스크롤 일정 높이라 내리면 새로운 데이터 받아오기 (데이터 최적화를 위해서는 화면에 보이는 데이터만 저장하는 방법이있다 react-virtualized)
window.scrollY 
document.documentElement.clientHeight  
document.documentElement.scrollHeight
세가지 스크롤값을 이용한다 



