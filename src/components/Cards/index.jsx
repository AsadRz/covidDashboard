import React, { useEffect, useState } from "react";

import useStyles from "./style";
import Card from "./Card";

export default function Cards() {
  const [stats, handleStats] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://corona.lmao.ninja/v2/all");
    const stats = await data.json();
    handleStats(stats);
    // console.log(stats);
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card number={stats.cases} Title="Cases" />
      <Card number={stats.deaths} Title="Deaths" />
      <Card number={stats.recovered} Title="Recovered" />
      <Card number={stats.active} Title="Active Cases" />
      <Card number={stats.tests} Title="Tests" />
    </div>
  );
}
