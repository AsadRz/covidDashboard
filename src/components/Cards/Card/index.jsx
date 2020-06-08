import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import useStyles from "./style";
import clsx from "clsx";

export default function(props) {
  const classes = useStyles();
  const { number, Title } = props;
  return (
    <>
      <Card
        className={clsx(
          classes.card,
          true && "animate__animated animate__zoomInDown"
        )}
        variant="outlined"
      >
        <CardContent>
          <Typography
            color="textSeconday"
            gutterBottom
            variant="h5"
            className={classes.cardTitle}
          >
            Total {Title}
          </Typography>

          <Typography className={classes.cardBody}>{number}</Typography>
        </CardContent>
      </Card>
    </>
  );
}
