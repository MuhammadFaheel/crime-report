import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Registration from './components/user/Registration';
import Login from './components/user/Login';
import Home from './components/Home';
import Nav from './components/Nav';
import Footer from './components/Footer';
import ComplaintForm from './components/form/ComplaintForm';
import CrimeForm from './components/form/CrimeForm';
import MissingForm from './components/form/MissingForm';
import ComplaintList from './components/list/ComplaintList';
import CrimeList from './components/list/CrimeList';
import MissingList from './components/list/MissingList';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/sign-up' component={Registration} />
          <Route exact path='/' component={ComplaintList} />
          <Route exact path='/' component={MissingList} />
          <Route exact path='/' component={CrimeList} />
          <Route path='/complaint' component={ComplaintForm} />
          <Route path='/missing-person' component={MissingForm} />
          <Route path='/crime-report' component={CrimeForm} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
