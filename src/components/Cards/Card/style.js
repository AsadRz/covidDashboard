import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  card: {
    margin: 5,
    textAlign: "center",
    minWidth: 230
  },
  cardTitle: {
    borderBottom: "inset",
    fontSize: 20
  },
  cardBody: {
    fontSize: 30,
    fontWeight: "bold"
  }
});

export default useStyles;
