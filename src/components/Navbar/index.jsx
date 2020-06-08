import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

import useStyles from "./style";
//importing stops here

//stylying starts

//styling ends

//function
export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            Worldwide Covid-19 Statistics
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
