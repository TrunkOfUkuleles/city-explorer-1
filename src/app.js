import React from 'react';
import Header from './header';
import Footer from './footer';
import City from './city';
import Error from './error';
import './app.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {},
      locationSearch: '',
      displayResults: false,
      mapSrc: '',
      displayError: '',
      returnsError: false
    }
  }

  getLocationData = async (e) => {
    e.preventDefault();
    try {
      const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.locationSearch}&format=json`;
      const location = await axios.get(url)
      const locationArray = location.data;
      this.setState({
          location: locationArray[0],
          displayResults: true,
          mapSrc: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_KEY}&center=${locationArray[0].lat},${locationArray[0].lon}&zoom=15&markers=icon:small-red-cutout|${locationArray[0].lat},${locationArray[0].lon}`
        })
    }catch(err) {
      console.log(err.message);
      this.setState({
        returnsError: true,
        displayError: err.message,
        displayResults: true,
      });
    }
  }

  render() {
    return (
      <>
        <Header />
        
        <Form inline onSubmit={this.getLocationData}>
          {/* <Form.Row>
            <Col>
             <Form.Label>City Explorer</Form.Label>
            </Col>
          </Form.Row> */}
          <Form.Row>
            <Col>
             <Form.Group>
              <Form.Control onChange={(e) => this.setState({ locationSearch: e.target.value })} type="text" placeholder="Enter city" />
            </Form.Group>
            </Col>
            <Col>
              <Button variant="primary" type="submit">
                Explore!
              </Button>
            </Col>
          </Form.Row>
        </Form>

        <City 
          city={this.state.location.display_name}
          latitude={this.state.location.lat}
          longitude={this.state.location.lon}
          displayResults={this.state.displayResults}
          mapSrc={this.state.mapSrc}
        />

        <Error 
          returnsError={this.state.returnsError}
          displayError={this.state.displayError}
        />

        <Footer />

      </>
    );
  }
}


export default App;
