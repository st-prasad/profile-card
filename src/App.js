import React from 'react'
import CardHeader from './components/CardHeader';
import './App.css';
import CardBody from './components/CardBody';
import CardFooter from './components/CardFooter';


function App() {
  return (
    <div className="App">
      <CardHeader />
      <CardBody />
      <CardFooter />
    </div>
  );
}

export default App