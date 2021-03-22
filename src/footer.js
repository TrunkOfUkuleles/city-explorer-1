import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

class Footer extends React.Component {
  render() {
    return (
      <>
        <Card bg='dark' text='info'>
          <Card.Body>
            <p>&copy; 2021 Audrey Patterson - Code Fellows 301</p>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default Footer;