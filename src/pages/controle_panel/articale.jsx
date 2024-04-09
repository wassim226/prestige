import {useRef, useState} from "react";
import { DataGridView } from "../../components";

function ControleArticale(props) {
  return <div>
    <DataGridView title={"Articales"} type={"articale"} data={[1,2,3,4]} />
  </div>;
}

export default ControleArticale;
