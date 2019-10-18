import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Card, Grid, Button, makeStyles, TextField  } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: 'white',
    fontFamily: " 'Open Sans', sans-serif",
    fontWeight: "600",
  },
  card: {
    maxWidth: "275px",
    minWidth: "275px",
    margin: "auto",
    padding: "30px 0",
    backgroundColor: "#DCDCDC",
    border: "3px solid black",
    borderStyle: "double",
  },
  button: {
    fontFamily: " 'Open Sans', sans-serif",
    fontWeight: "600",
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
    fetch('http://localhost:8080/calculator/' + operator, {
      method: 'post',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        num1: num1,
        num2: num2,
      })
    }).then(()=>{
            props.getDataFromAPI();
            setNum1("");
            setNum2("");
            props.history.push('/calculations');
        })
  }
      return (
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
              <Button className={classes.button} variant="contained" color="primary" onClick={()=>postClick("add")}>
                Add
              </Button>
            </Grid>
            <Grid item xs={6} >
              <Button className={classes.button} variant="contained" color="primary" onClick={()=>postClick("sub")}>
                Subtract
              </Button>
            </Grid>
            <Grid item xs={6} >
              <Button className={classes.button} variant="contained" color="primary" onClick={()=>postClick("div")}>
                Divide
              </Button>
            </Grid>
            <Grid item xs={6} >
              <Button className={classes.button} variant="contained" color="primary" onClick={()=>postClick("mult")}>
                Multiply
              </Button>
            </Grid>

          </Grid>
        </Card >
      )
  }
