import "bootstrap/dist/css/bootstrap.min.css"
import React from 'react'
import {Container} from 'react-bootstrap';
import {Form} from './components/Form'

function App() {
  return (
    <Container className="mt-5">
      <Form />
    </Container>
  );
}

export default App;
