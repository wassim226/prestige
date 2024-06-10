import React from "react";
import { DataGridView } from "../../components";
import { navList } from "../../constantes/data";

function ControlePages() {
  return (
    <div>
      <DataGridView
        title={"Pages"}
        type={"page"}
        data={navList.map((val, ind) => {
          return { page: val };
        })}
      />
    </div>
  );
}

export default ControlePages;
