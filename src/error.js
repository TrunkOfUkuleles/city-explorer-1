import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



class Error extends React.Component {
  render() {
    return (
      <>
       {this.props.returnsError &&
          <>
          <h3>{this.props.err}</h3>

          </>
        }
      </>
    );
  }
}

export default Error;