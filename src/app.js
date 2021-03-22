import React from 'react';
import Header from './header';
import Footer from './footer';
import City from './city';
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
      locationSearch: '',
      displayResults: false,
      mapSrc: ''
    }
  }

  getLocationData = async (e) => {
    e.preventDefault();
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.locationSearch}&format=json`;
    const location = await axios.get(url);
    const locationArray = location.data;
    this.setState({
      location: locationArray[0],
      displayResults: true,
      mapSrc: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_KEY}&center=${locationArray[0].lat},${locationArray[0].lon}&zoom=15`
    })
  }

  render() {
    return (
      <>
        <Header />
        
        <Form onSubmit={this.getLocationData}>
          <Form.Group>
            <Form.Label>City Explorer</Form.Label>
            <Form.Control onChange={(e) => this.setState({ locationSearch: e.target.value })} type="text" placeholder="Enter city" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Explore!
          </Button>
        </Form>

        <City 
          city={this.state.location.display_name}
          latitude={this.state.location.lat}
          longitude={this.state.location.lon}
          displayResults={this.state.displayResults}
          mapSrc={this.state.mapSrc}
        />

        <Footer />

      </>
    );
  }
}


export default App;
