import React from 'react';
import CalcForm from './components/CalcForm';
import OutputPage from './components/OutputPage';
import TopNavbar from './components/layouts/TopNavbar';
import BotNavbar from './components/layouts/BotNavbar';
import './App.css';

import {
	BrowserRouter as Router,
	Route,
	Switch,
} from  "react-router-dom";


class App extends React.Component {
	constructor(){
    super();
    this.state={
      calculations:[]
    }
  }
  getDataFromAPI=()=>{
    fetch("http://localhost:8080/calculators")
    .then((response) => response.json())
    .then((response)=> {
      this.setState ({calculations : response });
    });
  }
  componentDidMount(){
    this.getDataFromAPI();
  }
  render(){
    return (
	      <Router>
					<TopNavbar />
	        <Switch>

	        <Route
	          exact
	          path="/"
	          render={ (props) => <CalcForm {...props} getDataFromAPI={this.getDataFromAPI} />}
	          />

	        <Route
	          path="/calculations"
	          render={ (props) => <OutputPage calculations={this.state.calculations}/> }
	        />

	        </Switch>
					<BotNavbar />
	      </Router>

    );
  }
}

export default App;
