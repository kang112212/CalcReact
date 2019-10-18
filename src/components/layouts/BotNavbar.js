import React from 'react';
import { makeStyles, BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import BusinessIcon from '@material-ui/icons/Business';
import ViewListIcon from '@material-ui/icons/ViewList';
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
      className={classes.nav} >

      <BottomNavigationAction className={classes.root} label="Submit Company" value="folder" icon={<BusinessIcon  />}  component={Link} to="/" />

      <BottomNavigationAction className={classes.root} label="Companies" value="storage" icon={<ViewListIcon />}  component={Link} to="/calculations" />

    </BottomNavigation>
  </div>
  )
}
