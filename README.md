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

react-slick를 사용해서 이미지 슬라이더 만들기(이미지 줌으로 폴더 따로 뺴서 작성 )
