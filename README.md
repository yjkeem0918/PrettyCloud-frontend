# PrettyCloud 프론트엔드

## 구현한 웹사이트 동영상보기

### 프로젝트 소개 및 목적

- 소개: 공간 대여 서비스 플랫폼

- 목적

1. github을 이용하여 프로젝트를 공동으로 관리해 본다.
2. React를 사용하여 데이터 통신, 컴포넌트 분리 및 관리, 컴포넌트 간 데이터 바인딩을 적용해 본다.
3. Sass를 사용하여 컴포넌트 단위로 스타일을 적용하고 관리해본다.
4. React class component활용을 통해 state, props의 개념 확립 및 적용을 해본다.
5. CRA setting을 통한 기본적 세팅의 중요성을 깨닫는다
6. map, filter, reduce등 기초적인 메서드의 활용법을 깨닫는다
7. Git conflict해결을 통해 git 사용의 중요성을 깨닫는다
8. Back-end와의 소통을 통해 데이터타입선정의 중요성을 깨닫는다

## 프로젝트 참가자

- <a href ="https://github.com/wecode-bootcamp-korea/11-PrettyCloud-backend">Back-end (이용민, 이호현)</a>
 <ul>
  <li>
    <a href ="https://github.com/yoonminsohappy">조윤민</a>
 </li>
   <li>
    <a href ="https://github.com/yjkeem0918">김영지</a>
 </li>
   <li>
    <a href ="https://github.com/jjwlsdk">박진아</a>
 </li>
   <li>
    <a href ="https://github.com/choaceb">조은별</a>
 </li>
</ul>

## 프로젝트 기간

- 약 2주 (2020.08.31 ~ 2020.09.11)

## 적용기술

- HTML/CSS
- JavaScript
- Team Project Set-up with CRA
- React
- React(Router)
- Scss

## 구현기능

## 주의사항 :rage:

- 코드의 가독성을 높인다 (Ex. 함수와 함수 사이는 한 줄 띄우기)
- 클래스명은 카멜케이스로 통일한다. (Ex. className: helloWorld)
- 함수명은 동사로 하고 함수 기능에 대한 내용이 드러날 수 있게 한다. (Ex. ~~functionThree~~ getIdValue)
- 푸시할 때 컨벤션 지킨다. (Ex. 불필요한 주석 및 console.log 등 삭제)

## Git reference[git flow]

### 1. 초기 세팅된 git repository clone하기

`git clone https://github.com/wecode-bootcamp-korea/11-PrettyCloud-frontend.git`

### 2. master branch에서 feature 브랜치 만들고 해당 브랜치로 checkout 하기

`git branch feature/페이지 or 기능`

`git checkout feature/페이지 or 기능`

### 3. 자기 브랜치에서만 작업하기(master는 건드리지 않기로 한다)

### 4. 작업 완료 후에 바로 add commit push를 하는 게 아니라 github을 확인한 후 master 브랜치가 update되었는지 확인하기(update가 되었다면 5번부터 읽기, 안되었다면 8번부터 읽기)

### 5. 만약 master 브랜치가 update되었다면(혹시나 혹시나 common.scss가 update되었다면?!) master 브랜치로 checkout하기

`git checkout master`

### 6. update된 코드 다운로드 받기

`git pull origin master`

### 7. feature 브랜치로 다시 이동해서 master branch merge하기

`git checkout feature/페이지 or 기능`

`git merge master`

### 8. 자기 코드에 이상이 없는지 확인 후에 add, commit, push 하기

`git add .`

`git commit -m "ADD : 적용된 내용"`

`git push origin feature/페이지 or 기능`

### 9. github repo에서 PR(Pull Request) 보내기
