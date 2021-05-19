import React from 'react';
import './App.css';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import dashboard from './dashboard';
import info from './info';
import login from './login';

class App extends React.Component {
  render(){
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/dashboard' component={dashboard}/>
          <Route path='/info' component={info}/>
          <Route path='/login' component={login}/>
        </Switch>
      </Router>
    </div>
    )
    }
  
}

export default App;
