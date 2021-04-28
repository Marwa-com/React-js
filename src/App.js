
import './App.css';
import Form from 'react-bootstrap/Form';
import {FacebookloginButton} from 'react-social-login-buttons';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function App() {
  return (
    <form className="App">
        <h2> LOGIN IN </h2>
        <h4> Welcome </h4>
        <Form.Group controlId="formBasicEmail">      
    <Form.Label >Email </Form.Label>
    <Form.Control type="email" placeholder="email" />   
  </Form.Group>  
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Button variant="primary" type="submit">
    log in
  </Button>
  <Container>
  <Row>
    <Col className="c1" > <Button>Forget password</Button></Col>
    <Col className="c2"  ><Button>LOGIN UP</Button></Col>
  </Row>
   </Container>
    </form>
 
  );
}

export default App;
