// import logo from './logo.svg';
import React from 'react';
import { Alert } from 'reactstrap';
import './App.css';
import { Badge, Button } from 'reactstrap';
function App() {
  return (
   <div className="App">
    <Alert color="danger">
    Hello !! Akhil Kumar
      </Alert>
      <Button color="primary" outline>
          Notifications <Badge color="secondary">4</Badge>
        </Button></div>
  );
}

export default App;
