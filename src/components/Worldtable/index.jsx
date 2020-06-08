import React, { Component } from "react";
import MaterialTable from "material-table";
import { forwardRef } from "react";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

class WorldTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      stats: []
    };
    this.tableRef = React.createRef();
  }

  componentDidMount() {
    this.setState({ loading: true });
    fetch("https://corona.lmao.ninja/v2/countries") //data source
      .then(response => response.json())
      .then(res => {
        this.setState({ stats: res, loading: false }, () => console.log(res));
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <MaterialTable
          icons={tableIcons}
          style={{ padding: 30 }}
          columns={[
            { title: "Country", field: "country" },
            { title: "Total Cases", field: "cases" },
            { title: "Current Cases", field: "todayCases" },
            { title: "Total Deaths", field: "deaths", type: "text" },
            { title: "Current Deaths", field: "todayDeaths" },
            { title: "Recovered Patients", field: "recovered" },
            { title: "Active Patients", field: "active" },
            { title: "Critical Patients", field: "critical" },
            { title: "Cases/million", field: "casesPerOneMillion" }
          ]}
          actions={[
            {
              icon: "refresh",
              tooltip: "Refresh",
              isFreeAction: true,
              onClick: () =>
                this.tableRef.current && this.tableRef.current.onQueryChange()
            }
          ]}
          options={{
            headerStyle: {
              backgroundColor: "#3f51b5",
              color: "#FFFF"
            }
          }}
          data={this.state.stats}
          title="Worldwide Covid-19 Stats"
        />
      </div>
    );
  }
}

export default WorldTable;
