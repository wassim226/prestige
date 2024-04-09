import React from "react";
import { DataGridView } from "../../components";

function Users() {
  return <div>
    <DataGridView title={"Users"} type={"user"} data={[1,2,3,4]} />
  </div>;
}

export default Users;
