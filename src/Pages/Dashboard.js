import React, { Component } from "react";

import TopTable from "../parts/TopTable";
import MiddleTable from "../parts/MiddleTable";
import BottomTable from "../parts/BottomTable";


export default class Dashboard extends Component {
  render() {
    return (
      <>
        <TopTable></TopTable>
        <MiddleTable ></MiddleTable>
        <BottomTable></BottomTable>
      </>
    );
  }
}
