import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'

class Error extends React.Component {
  render() {
    return (
      <>
       {this.props.returnsError &&
          <>
            <Card style={{ width: '33rem' }}>
              <Card.Header as="h4">{this.props.err}</Card.Header>
              <ListGroup variant="flush">
               <ListGroup.Item>{this.props.err}</ListGroup.Item>
              </ListGroup>
            </Card>
          </>
        }
      </>
    );
  }
}

export default Error;