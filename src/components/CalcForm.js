import React, { useState } from 'react';
import { Card, Grid, Button, makeStyles, TextField, Typography  } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: 'white',
    fontFamily: " 'Open Sans', sans-serif",
    fontWeight: "600",
  },
  card: {
    maxWidth: "275px",
    minWidth: "275px",
    margin: "40px auto 0",
    padding: "30px 0",
    backgroundColor: "#DCDCDC",
    border: "3px solid black",
    borderStyle: "double",

  },
  button: {
    fontFamily: " 'Open Sans', sans-serif",
    fontWeight: "600",
  },
  type: {
    textAlign: "center",
  }
}));

export default function CalcForm(props){

  const classes = useStyles();
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');

  const onFirstNumberInput=(e)=>{
    setNum1(e.target.value);
  }
  const onSecondNumberInput=(e)=>{
    setNum2(e.target.value);
  }
  const postClick = (operator) => {
  fetch('http://localhost:8080/calculations/' + operator, {
    method: 'post',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      num1: num1,
      num2: num2,
      operation: operator,
    })
  }).then(()=>{
          props.getDataFromAPI();
          props.history.push('/calculations');
      })
  }
  return (
    <div>
      <Typography className={classes.type} variant="h3" component="h2" gutterBottom>
        Enter Your Two Numbers Below:
      </Typography>
      <Card className={classes.card}>
        <Grid
          container
          spacing={1}
          direction="column"
          alignItems="center"
        >
          <Grid item xs={6} >
            <TextField
              label="First Number"
              onChange={onFirstNumberInput}
              variant="outlined"
              fullWidth
              className={classes.root}
            />
          </Grid>
          <Grid item xs={6} >
            <TextField
              label="Second Number"
              onChange={onSecondNumberInput}
              variant="outlined"
              fullWidth
              className={classes.root}
            />
          </Grid>
          <Grid item xs={6} >
            <Button className={classes.button} variant="contained" color="primary" onClick={()=>postClick("Addition")}>
              Add
            </Button>
          </Grid>
          <Grid item xs={6} >
            <Button className={classes.button} variant="contained" color="primary" onClick={()=>postClick("Subtraction")}>
              Subtract
            </Button>
          </Grid>
          <Grid item xs={6} >
            <Button className={classes.button} variant="contained" color="primary" onClick={()=>postClick("Division")}>
              Divide
            </Button>
          </Grid>
          <Grid item xs={6} >
            <Button className={classes.button} variant="contained" color="primary" onClick={()=>postClick("Multiplication")}>
              Multiply
            </Button>
          </Grid>

        </Grid>
      </Card >
    </div>
  )
}
