import React from 'react';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import makeStyles from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: 'green',
    flexWrap: 'wrap',
  },
}));

class CalcForm extends React.Component{
  const classes = useStyles();
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');

  }
  onFirstNumberInput=(e)=>{
    this.setState({num1:  e.target.value});
  }
  onSecondNumberInput=(e)=>{
    this.setState({num2:  e.target.value});
  }
  postClick = (operator) => {
    fetch('http://localhost:8080/calculator/' + operator, {
      method: 'post',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        num1: this.state.num1,
        num2: this.state.num2,
      })
    });
  }
    render(){
      return (
        <Card id="card">
          <Grid
            container
            spacing={1}
            direction="column"
            alignItems="center"
          >
            <Grid item xs={6} >
                <TextField
                  label="First Number"
                  onChange={this.onFirstNumberInput}
                  variant="outlined"
                  fullWidth
                />
            </Grid>
            <Grid item xs={6} >
                <TextField
                  label="Second Number"
                  onChange={this.onSecondNumberInput}
                  variant="outlined"
                  fullWidth
                />
            </Grid>

            <Grid item xs={6} >
              <Button variant="contained" color="primary" onClick={()=>this.postClick("add")}>
                Add
              </Button>
              </Grid>
              <Grid item xs={6} >
              <Button variant="contained" color="primary" onClick={()=>this.postClick("sub")}>
                Subtract
              </Button>
              </Grid>
              <Grid item xs={6} >
              <Button variant="contained" color="primary" onClick={()=>this.postClick("div")}>
                Divide
              </Button>
              </Grid>
              <Grid item xs={6} >
              <Button variant="contained" color="primary" onClick={()=>this.postClick("mult")}>
                Multiply
              </Button>
            </Grid>

          </Grid>
        </Card >
      )
  }
}
