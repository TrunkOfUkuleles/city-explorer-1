import React from 'react';
import './app.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {},
      locationSearch: ''
    }
  }

  getLocationData = async () => {
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.locationSearch}&format=json`;
    const location = await axios.get(url);
    const locationArray = location.data;
    this.setState({
      location: locationArray[0]
    })
  }

  render() {
    return (
      <>
        <h1>City Explorer</h1>
        <Form>
          <Form.Group>
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="Enter city" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Explore!
          </Button>
        </Form>

      </>
    );
  }
}


export default App;
