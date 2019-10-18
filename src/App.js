import React from 'react';
import CalcForm from './components/CalcForm';
import OutputPage from './components/OutputPage';
import './App.css';

import {
	BrowserRouter as Router,
	Route,
	Switch,
	Link,
} from  "react-router-dom";


class App extends React.Component {

  render(){
    return (
	      <Router>

				<ul>
					<li>
						<Link to="/">Calculator</Link>
					</li>
					<li>
						<Link to="/calculators">Calculator Entries</Link>
					</li>
				 </ul>
	        <Switch>

	        <Route
	          exact
	          path="/"
	          render={ (props) => <CalcForm />}
	          />

	        <Route
	          path="/calculators"
	          render={ (props) => <OutputPage /> }
	        />

	        </Switch>

	      </Router>

    );
  }
}

export default App;
