import { useState, useEffect, useRef } from "react";
import { DataTable } from "../../components";
import { MessageModel } from "../../models";
import { MessageController } from "../../controllers";
import { Backdrop, CircularProgress } from "@mui/material";

function ControleMessage() {
  const [serverError, setServerError] = useState(null);
  const abortController = useRef(null);
  const message_controller = new MessageController(
    abortController,
    setServerError
  );
  const [loading, setLoading] = useState(true);

  const [rows, setRows] = useState([]);
  const [filters, setFilters] = useState(false);
  const _ = (va) => {
    return va;
  };
  const headCells = [
    {
      id: "sender",
      string: true,
      label: _("sender"),
    },
    {
      id: "message",
      string: true,
      label: _("message"),
    },
    {
      id: "createdAt",
      label: _("createdAt"),
      string: true,
    },
  ];

  const getData = async () => {
    setLoading(() => true);
    let res = await message_controller.getMessages();
    if (res) {
      const data = res.map((val) =>
        MessageModel(
          val.id,
          val.sender,
          val.message1,
          val.senderStName,
          val.senderLstName,
          val.createdAt
        )
      );
      setRows(() => data);
    }
    setLoading(() => false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {loading ? (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
        <DataTable
          title={"Messages"}
          data={{ rows, headCells }}
          filters={filters}
          setFilters={setFilters}
          handelAddItem={null}
        />
      )}
    </div>
  );
}

export default ControleMessage;
