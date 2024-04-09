import React from 'react'
import { DataGridView } from "../../components";


function ControlePages() {
  return (
    <div>
        <DataGridView title={"Pages"} type={"page"} data={[1,2,3,4]} />
    </div>
  )
}

export default ControlePages