# Wow Chat

---

![ezgif-1-62c209cb83.gif](Wow%20Chat%2078987c0f431b4fb4a100e1148f7dc125/ezgif-1-62c209cb83.gif)

<aside>
💡 양방향 통신을 이용해서 주고 받는 실시간 메시지 웹 애플리케이션

</aside>

## 파일 구조 📝

---

## 📂 WOW CHAT

```xml
README.md
📁 Client
- node_modules
    - react-scroll-to-bottom
    - socket.io-client
- public
		- index.html
- components
   - Chat.jsx
- App.css
- App.jsx
- index.js
- .gitignore
- package-lock.json
- package.json
---------------------
📁 Server
- node_modules
	- cors
	- express
	- nodemon
	- socket.io
- index.js
- package-lock.json
- package.json
```

## 사용한 도구 ⛏

---

- React - `SPA가 가능한 JavaScript Framework`
- Node - `Chrome V8 JavaScript 엔진으로 빌드된 JavaScript 런타임`
- [socket.io](http://socket.io) - **`WebSocket**을 기반으로 클라이언트와 서버의 양방향 통신을 가능하게 해주는 모듈`
- Express - `http와 Connect 컴포넌트를 기반으로 하는 웹 프레임워크`
- React-router - `선택 데이터 렌더링 라이브러리`
- github desktop `Github 버전 관리 GUI tool`
- vscode - `소스 코드 편집기`

### CRA와 Node.js를 사용하여 제작한 프로젝트.

```xml
$ npx create-react-app .
```

### 프로젝트 실행

```xml
$ cd client
$ npm update
$ npm start
$ cd ../
$ cd server
$ npm update
$ npm start
```

## 배운 점 🤠

---

1. [Socket.io](http://Socket.io) , Express가 무엇이고 어떠한 역할을 하기 위해 존재하는지.
2. Node와 React의 연결 방법
3. Node란 무엇일까?

## 느낀 점 😁

---

1. Node를 이용하기 위해서는 React와 같이 서버를 실행하여 해당 코드들이 작동될 수 있도록

   해야하는 것 같다.

2. Node는 처음으로 접한 백엔드 도구로서 정말 어렵고 이해하기 어려운 개념들이 많았던 것 같다.
3. 같은 JavaScript였을..텐데..?
4. 제대로 구현되고 나니 쾌감이 2배였던 것 같다.

## 아쉬웠던 점 😥

---

1. 메세지를 받았을 때, 그 시간까지 정확히 표기해주었으면 좋았을 것 같다.
2. 학교에서 쉬는 시간을 짬내서 만들어서 퀄리티가 많이 좋지 않다. (CSS라던지..)
3. 다른 웹브라우저에서는 서로 통신이 되지 않는 것으로 확인되었다.
4. React를 충분히 공부했음에도 state를 사용하기가 쉽지 않았다.
5. Node는 React와는 기본적인 기반(`JavaScript`)만 같은 도구기에 뭐 [하나](https://developer.mozilla.org/ko/docs/Learn/Server-side/Express_Nodejs/Introduction) 하기에도 정말

   어려웠다..
