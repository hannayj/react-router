import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  const Home = () => <h1>This is the homepage</h1>
  const About = () => <h1>About</h1>
  const Contact = () => <h1>Contact</h1>

  return (
    <div className="App">
      <BrowserRouter>
       <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="/">Welcome to React Router</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav classname="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>{' '}
              <Nav.Link href="/about">About</Nav.Link>{' '}
              <Nav.Link href="/contact">Contact</Nav.Link>{' '}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
           <Route exact path="/" component={Home} />
           <Route path="/about" component={About} />
           <Route path="/contact" component={Contact} />
           <Route render={() => <h1>Page not found</h1>} />
         </Switch>
       </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
