import React from 'react';
import logo from './logo.svg';
import './App.css';
import Confirmation from './components/Confirmation';

import { BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route path="/view/meeting/confirmation/:meetingid" component={Confirmation}></Route>
    </Router>
  );
}

export default App;
