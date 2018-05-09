# Return Types Strings and Fragments
리액트에서 컴포넌트에서 엘리먼트를 반환할 때 컨테이너 역할을 하는 div로 감싸줘야 하는데 이때 불필요한 코드가 발생
import React, { Component, Fragment } from 'react';
컨테이너 역할만 하는 <React.Fragment>를 사용
줄여서 <>, </>를 사용할 수 있지만 create react app이 아직 지원하지 않음
return strings도 가능

# Portals
컴포넌트를 부모 컴포넌트(root)의 DOM 트리 바깥에 붙일 때 사용
리액트는 root id div를 찾아서 마운트함
portals은 리액트 root 밖에서 render 할 때 사용 (다른 페이지 로딩시 유용 전체화면 모달팝업, iframe)

# Error Boundaries
일반적으로 에러가 발생하면 컴포넌트가 멈추데 에러 바운더리를 사용해서 해결
오류가 발생했을 때 동작을 새로운 라이프사이클 componentDidCatch(error, info)에 선언
componentDidCatch 에러를 잡아서 보여줌. 에러가 어디있는지 알려주고 에러정보 제공
만약 컴포넌트에 에러가 있다면 별도 처리, 그리고 그 뒤에 실행되는 함수들도 실행 되게끔 가능 (일반적으로 앱이 에러 발생하면 멈춤) 
에러를 구분하고 에러에 대응 가능
에러가 발생하면 이를 구분하고 관리
{hasError ? <ErrorFallback /> : <ErrorMaker />}
하지만 이런식으로 에러를 관리하는건 비효율적

컨텍스트 바깥에서 발생하는 오류는 잡지 못함
* 이벤트 핸들러
* 비동기 코드
* 서버측 렌더링
* 하위 컴포넌트가 아닌 에러 바운더리 자체에서 발생한 오류