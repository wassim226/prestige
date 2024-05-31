import { useState, useEffect, useRef } from "react";
import { Backdrop, CircularProgress, Typography } from "@mui/material";
import { MessageModel } from "../../models";
import { MessageController } from "../../controllers";
import { useParams } from "react-router-dom";

function MessageDetail(props) {
  const { id } = useParams();
  const [msg, setMsg] = useState(null);
  const [serverError, setServerError] = useState(null);
  const abortController = useRef(null);
  const message_controller = new MessageController(
    abortController,
    setServerError
  );
  const [loading, setLoading] = useState(true);

  const getdata = async (elemnt_id) => {
    let res = await message_controller.getMessage(elemnt_id);
    if (res) {
      setMsg(() =>
        MessageModel(
          res.id,
          res.sender,
          res.message1,
          res.senderStName,
          res.senderLstName,
          res.createdAt
        )
      );
    }
    setLoading(() => false);
  };

  useEffect(() => {
    setLoading(() => true);
    const search_msg = MessageController.MESSAGES.find((val) => val.id == id);
    console.log("this is search : ", search_msg);
    if (search_msg) {
      setMsg(() =>
        MessageModel(
          search_msg.id,
          search_msg.sender,
          search_msg.message1,
          search_msg.senderStName,
          search_msg.senderLstName,
          search_msg.createdAt
        )
      );
      setLoading(() => false);
    } else {
      getdata(id);
    }
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
        <div className="flex flex-col my-20 mx-5">
          <Typography variant="h3" gutterBottom>
            {msg.senderStName + " " + msg.senderLstName}
          </Typography>
          <Typography variant="body2" gutterBottom color={"GrayText"}>
            {msg.sender}
          </Typography>
          <Typography variant="body2" gutterBottom color={"GrayText"}>
            {msg.createdAt}
          </Typography>
          <Typography variant="body1">{msg.message}</Typography>
        </div>
      )}
    </div>
  );
}

export default MessageDetail;
