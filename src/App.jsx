import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import "./App.css";

import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import SinglePageNote from "./pages/SingleNotePage";
import LoginPage from "./pages/LoginPage";
import Footer from "./components/Footer";
import Page404Error from './pages/Page404Error';

function App() {
  return (
    <>
      <Navigation />
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/note" component={SinglePageNote} />
          <Route component={Page404Error} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
