import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';


class Header extends React.Component {
  render() {
    return (
      <>
       <Navbar expand="lg" bg="dark" variant="dark">
          <Navbar.Brand className="m-auto"><h1>🏙️ City Explorer 🏙️</h1></Navbar.Brand>
       </Navbar>

      </>
    );
  }
}

export default Header;