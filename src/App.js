import React, { Component, Fragment } from 'react';
import { createPortal } from 'react-dom';

class ErrorMaker extends Component {
  state = {
    friends: ['Ryan', 'Apeach', 'Frodo', 'Neo']
  };
  componentDidMount(){
    setTimeout(() => {
      this.setState({
        friends: undefined
      });
    }, 2000);
  };
  render(){
    const { friends } = this.state;
    return friends.map(friend => `${friend}`);
  }
}


class Portals extends Component {
  render(){
    return createPortal(<Message />, document.getElementById('touchme'));
  }
}

const Message = () => 'Just touched it!';

class ReturnType extends Component {
  render() {
    return 'hello';
  }
}

const ErrorFallback = () => 'Sorry something went wrong';

class App extends Component {
  state = {
    hasError: false
  };
  componentDidCatch = (error, info) => {
    console.log(`catched ${error} the info i have is ${JSON.stringify(info)}`);
    this.setState({
      hasError: true
    });
  };
  render() {
    const { hasError } = this.state;
    return (
      <Fragment>
        <ReturnType />
        <Portals />
        {hasError ? <ErrorFallback /> : <ErrorMaker />}
      </Fragment>
    );
  }
}

export default App;
