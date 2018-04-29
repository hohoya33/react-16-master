# Return Types Strings and Fragments

리액트에서 컴포넌트에서 엘리먼트를 반환할 때 컨테이너 역할을 하는 div로 감싸줘야 하는데 이때 불필요한 코드가 발생
컨테이너 역할만 하는 <React.Fragment>를 사용

import React, { Component, Fragment } from 'react';

줄여서 <>, </>를 사용할 수 있지만 create react app이 아직 지원하지 않음

return strings도 가능
