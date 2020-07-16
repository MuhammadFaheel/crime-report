import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, Nav, Footer, Login, Registration,
         ComplaintList, CrimeList, MissingList,
         ComplaintForm, CrimeForm, MissingForm
        } from './components/Index';

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
