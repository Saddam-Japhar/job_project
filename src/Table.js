import React, { Component } from "react";
import tableData from "./assets/table.json";
import { connect } from "react-redux";

class Table extends Component {
  state = {
    tableData: {}
  };

  componentDidMount() {
    if (tableData) {
      this.setState({ tableData });
    }
  }

  render() {
    const { tableData } = this.state;
    const { state } = this.props;
    console.log("state", state);
    let tableDataContent;

    if (Object.keys(tableData).length > 0) {
      console.log(tableData.user);
      tableDataContent = tableData.user.map(aUser => (
        <tr>
          <td>{aUser.id}</td>
          <td>{aUser.name}</td>
          <td>{aUser.email}</td>
          <td>{aUser.gender}</td>
          <td>{aUser.age}</td>
          <td>{aUser.phoneNo}</td>
        </tr>
      ));
    }

    return (
      <div class="container tex-center">
        <h1>Table</h1>
        <table border="1" Style={{ border: "dotted 2" }}>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Phone Number</th>
          </tr>
          {tableDataContent}
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  state
});

export default connect(
  mapStateToProps,
  {}
)(Table);
