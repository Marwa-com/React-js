
import './App.css';
import Form from 'react-bootstrap/Form';
import {FacebookloginButton} from 'react-social-login-buttons';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FacebookLoginButton } from "react-social-login-buttons";
function App() {
  return (
    <form className="App">
      <header>
        <h2> LOGIN IN </h2>
        <h3> Welcome </h3>
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
  <p> Or continue with your social acount </p>
  <FacebookLoginButton className="facebook" />
  <Container>
  <Row>
    <Col className="c1" > <Button>Forget password</Button></Col>
    <Col className="c2"  ><Button>LOGIN UP</Button></Col>
    <Col className="c3"  ><h4> Contact us : +216 777777777</h4></Col>
  </Row>
   </Container>
   </header>
    </form>
    
  );
}

export default App;
