import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const useStyles = makeStyles(theme => ({
  root: {
    margin: "10px auto",
    minWidth: "300px",
    maxWidth: "300px",
    fontFamily: " 'Open Sans', sans-serif",
    fontWeight: "600",
    border: "1px solid black",
    borderRadius: "10px",
  },
  output: {
    display: "flex",
    flexWrap: "wrap",
  },
  key:{
    padding: "20px",
    marginBottom: "20px",
    overflowX: 'auto',
    fontFamily: " 'Open Sans', sans-serif",
    fontWeight: "600",
    border: "1px solid black",
  }
}));

export default function OutputPage(props){
  const classes = useStyles();

  let calculatorsArr = props.calculations.map((calc, index)=>{
    return(
      <Paper key={index} className={classes.root}>
        <List>
          <ListItem>
            Calculation: {index + 1}
          </ListItem>
          <ListItem>
            Operation: {calc.operation}
          </ListItem>
          <ListItem>
            Number One: {calc.num1}
          </ListItem>
          <ListItem>
            Number Two: {calc.num2}
          </ListItem>
          <ListItem>
            Answer: {calc.answer}
          </ListItem>
          <ListItem>
            Roman Answer: {calc.roman}
          </ListItem>
        </List>
      </Paper>
    )
  })

  return(
    <div>
    <Grid
      container
      spacing={1}
      direction="column"
      alignItems="center"
    >
      <Grid item xs={10} >
        <Paper className={classes.key}>
          <div> Roman Numeral Key:</div>
          <hr/>
          <div> 0 = Nulla</div>
          <div> I = 1</div>
          <div>(I) = 1000</div>
          <div>((I)) = 1,000,000</div>
          <div>(((I))) = 1,000,000,000</div>
          <div>((((I)))) = 1,000,000,000,000</div>
        </Paper>
      </Grid>
      <Grid className={classes.output} item xs={10} >
        {calculatorsArr}
      </Grid>
    </Grid>
    </div>
  )
}
