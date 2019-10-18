import React from 'react';
import { makeStyles, BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import StorageIcon from '@material-ui/icons/Storage';
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    color: "white",
    fontFamily: "Garamond",
  },
  marginUp: {
    marginTop: "100px",
  },
  nav: {
    position: "fixed",
    bottom: "0",
    width: "100vw",
    backgroundColor: "#3f51b5",
  }
}));

export default function BotNavbar() {
  const classes = useStyles()
  const [value, setValue] = React.useState('folder');

  function handleChange(event, newValue) {
    setValue(newValue);
  }

return (
  <div className={classes.marginUp}>
    <BottomNavigation
      value={value} onChange={handleChange}
      showLabels
      className={classes.nav}
    >

      <BottomNavigationAction className={classes.root} label="Submit Company" value="folder" icon={<AddIcon  />}  component={Link} to="/" />
      <BottomNavigationAction className={classes.root} label="Companies" value="storage" icon={<StorageIcon />}  component={Link} to="/calculations" />

    </BottomNavigation>
  </div>
  )
}
