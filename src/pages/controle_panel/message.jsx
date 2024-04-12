import {useState, useEffect} from "react";
import { DataTable } from "../../components";
import { MessageModel } from "../../models";
import { default_description } from "../../constantes";

function ControleMessage() {
  const [rows, setRows] = useState([MessageModel(1, "wassim@test.com", default_description, "Wassim", "Benatia", "2024-04-12")]);
  const [filters, setFilters] = useState(false);
  const _ = (va)=>{return va};
  const headCells = [
    {
      id: 'sender',
      string: true,
      label: _("sender"),
    },
    {
      id: 'message',
      string: true,
      label: _("message"),
    },
    // {
    //   id: 'name',
    //   label: _("Name"),
    //   string: true,
    // },
    {
      id: 'createdAt',
      label: _("createdAt"),
      string: true,
    },
  ];

  useEffect(() => {
    setRows(()=> [
      MessageModel(1, "wassim@test.com", default_description, "Wassim", "Benatia", "2024-04-12")
    ]);
  
  }, []);
  

  return <div>
    <DataTable
        title={"Messages"}
        data={{rows, headCells}}
        filters={filters} setFilters={setFilters}
        handelAddItem={null}
      />
  </div>;
}

export default ControleMessage;
