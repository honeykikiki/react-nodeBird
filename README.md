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


## 리엑트 노드버드 8~10일차

### 노드로 서버 구동하기 (express, Postman, MySQL, MySQLWorkbench, sequelize, nodemon)

>express : 
    Express.js, 또는 간단히 익스프레스는 Node.js를 위한 웹 프레임워크의 하나로, MIT 허가서로 라이선스되는 자유-오픈 소스 소프트웨어로 출시되었다. 웹 애플리케이션, API 개발을 위해 설계되었다. 
    Node.js의 사실상의 표준 서버 프레임워크로 불리고 있다.

>Postman : 
    Postman은 개발한 API를 테스트하고, 테스트 결과를 공유하여 API 개발의 생산성을 높여주는 플랫폼입니다.

>MySQL : 
    MySQL은 세계에서 가장 많이 쓰이는 오픈 소스의 관계형 데이터베이스 관리 시스템이다. 다중 스레드, 다중 사용자 형식의 구조질의어 형식의 데이터베이스 관리 시스템으로서 오라클이 관리 및 지원하고 있으며, 
    Qt처럼 이중 라이선스가 적용된다

>MySQLWorkbench:
    MySQL 워크벤치(MySQL Workbench)는 SQL 개발과 관리, 데이터베이스 설계, 생성 그리고 유지를 위한 단일 개발 통합 환경을 제공하는 비주얼 데이터베이스 설계 도구이다. 
    fabFORCE.NET의 DBDesigner4의 후속 판이며, 이전 소프트웨어 패키지인 MySQL GUI 툴즈 번들을 대체한 것이다.

>sequelize :
    ORM(Object-Relational Mapping)은 객체지향 패러다임을 활용하여 관계형 데이터베이스(RDB)의 데이터를 조작하게 하는 기술이다. 
    이를 활용하면 쿼리를 작성하지 않고도 객체의 메서드를 활용하는 것처럼 쿼리 로직을 작성할 수 있다. 
    Sequelize는 MySQL, PostgreSQL, MariaDB 등 많은 RDBMS를 지원하고 Promise 기반으로 구현되었기 때문에 비동기 로직을 편리하게 작성할 수 있다.

>nodemon :
    nodemon은 node monitor의 약자로, 노드가 실행하는 파일이 속한 디렉터리를 감시하고 있다가 파일이 수정되면 자동으로 노드 애플리케이션을 재시작하는 확장 모듈입니다. 이 확장 모듈을 이용하면 개발 중인 노드 애플리케이션의 소스 코드를 수정할 때마다 매번 노드 명령어를 통해 새로 시작할 필요가 없으므로 매우 편리합니다.

> 폴더별 역활 : 
    config : 서버의 정보가 들어가잇음
    module :  MySQL의 테이블 역활을 하는 폴더
    passport : 로그인에 필요한 코드들이 들어있는 폴더
    routes : 프론트와 통신하기 위한 폴더

>라우터 분리 :  
    reutes 폴더에서 user,post로 분리해준다


    

## 리엑트 노드버드 10~일차

### 노드로 서버 데이터 저장하기 (테이블 만들기, 회원가입, cors문제 해결하기, 로그인, 로그인 쿠키화, dotenv)

>mysql 테이블생성 :
    필요한 테이블들을 만들어 모델이름(테이블)설정 > 엑설을 만든다고 생각한다 (기본정보 등록)

>mysql 관계설정 :
    각각의 테이블의 관계를 설정해 주어야한다
    hasone : 일 대 일 관계 : belongTo
    hasMany : 일 대 다 관계 : belongsTo (00Id 가 생긴다)
    belongsToMany : 다 대 다 관계 : belongsToMany (중간 테이블이 생겨 서로 관계가 있어 찾을수있다)

> npx sequelize db:create
    Mysql 테이블 생성

>회원가입 :
    1. routes 폴터에 user파일에 프론트에서 데이터를 받아오는 코드를 작성
    2. 패스워드를 암호와 진행 bcrypt로 진행 (const hashedPassword = await bcrypt.hash(req.body.password, 10);
    3. 회원가입 cors문제 해결하기



>로그인 : 
    passport : 아이디 로그인 도와주는 라이브러리
    passport-local : 로그인을 직접 구현할 때 사용 (로그인 전력세우기)
    session : 세션 데이터는 쿠키 자체에 저장 되지 않고 세션 ID에만 저장됩니다. 세션 데이터는 서버 측에 저장됩니다.
    dotenv : 중요한 모듈들 암호화 (한곳에서 비밀키 관리)
    findOne로 필요한 정보 추가해주고 뺴고싶은 정보 뺴기

>로그아웃  