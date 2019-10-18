import React from 'react';

class OutputPage extends React.Component{
  constructor(){
    super();
    this.state={
      calculators:[]
    }
  }
  getDataFromAPI=()=>{
    fetch("http://localhost:8080/calculators")
    .then((response) => response.json())
    .then((response)=> {
      this.setState ({calculators : response });
    });
  }
  componentDidMount(){
    this.getDataFromAPI();
  }

  render(){
    let calculatorsArr = this.state.calculators.map((calculator, index)=>{
      return(
        <ul key={index}>
          <li>Calcuation: {index+1}</li>
          <li>Number One: {calculator.num1}</li>
          <li>Number Two: {calculator.num2}</li>
          <li>Answer: {calculator.answer}</li>
          <li>Roman Answer: {calculator.roman}</li>
        </ul>
      )
    })
    return(
      <div>
        <div>Key: (I) = 1,000, ((I)) = 1,000,000, (((I))) = 1,000,000,000, ((((I)))) = 1,000,000,000,000 </div>
        {calculatorsArr}
      </div>
    )
  }
}


export default OutputPage
