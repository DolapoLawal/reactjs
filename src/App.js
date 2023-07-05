import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import ceo from './images/ceo.jpg';
import popoo from './images/popoo.jpeg';
import oriamo2 from './images/oriamo2.jpeg'


function App() {
  return (

    <div className="App">
      <>
    <Navbar bg="dark" variant='dark' >
        <Navbar.Brand href="#home">React-Bootstrap Navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Navbar>

        <Container className="mt-4 md-4">
          <h1> meet the ceo binary kidstablet</h1>

      <div className="row"> 
      <div className="col-md-4">
    <Card>
      <Card.Img  style={{ color: 'blue', height: 100, width: 100, lineHeight : 10, padding: 20 }} className='h-30' variant="top" src={ceo} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
            React Bootstrap Checkpoint
        </Card.Text>
      </Card.Body>
      </Card>
      </div>
      
      <div className='col-md-4'>
      <Card>
        <Card.Img  style={{ color: 'blue', height: 100, width: 100, lineHeight : 10, padding: 20 }} className='h-30' variant="top" src={popoo} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
            React Bootstrap Checkpoint
        </Card.Text>
      
      </Card.Body>
    </Card> 
    </div>

    <div className="col-md-4">
      <Card>
        <Card.Img  style={{ color: 'blue', height: 100, width: 100, lineHeight : 10, padding: 20 }} className='h-30' variant="top" src={oriamo2} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
            React Bootstrap Checkpoint
        </Card.Text>
      
      </Card.Body>
    </Card> 
    </div>
    </div>
      </Container>
  </>
  </div>

  ); 
}

export default App;
