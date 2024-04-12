import React from "react";
import {Typography} from '@mui/material';
import { MessageModel } from "../../models";
import { default_description } from "../../constantes";

function MessageDetail(props) {
  const msg = MessageModel(1, "wassim@test.com", default_description, "Wassim", "Benatia", "2024-04-12");
  return (
  <div className="flex flex-col my-20 mx-5">
    <Typography variant="h3" gutterBottom>{msg.senderStName + " " + msg.senderLstName}</Typography>
    <Typography variant="body2" gutterBottom color={"GrayText"}>{msg.sender}</Typography>
    <Typography variant="body2" gutterBottom color={"GrayText"}>{msg.createdAt}</Typography>
    <Typography variant="body1">{msg.message}</Typography>
  </div>);
}

export default MessageDetail;
