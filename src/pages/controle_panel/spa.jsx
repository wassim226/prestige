import React from "react";
import { DataGridView } from "../../components";

function ControleSpa() {
  return <div>
    <DataGridView title={"Spas"} type={"spa"} data={[1,2,3,4]} />
  </div>;
}

export default ControleSpa;
