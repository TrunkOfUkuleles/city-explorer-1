import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



class Error extends React.Component {
  render() {
    return (
      <>
        <h3>{this.props.displayError}</h3>
      </>
    );
  }
}

export default Error;