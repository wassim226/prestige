import { useState } from "react";
import { Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function UserPresentation(props) {
  const { user } = props;
  return (
    // <Link to={`detail/${page}`}>
    <Paper className="flex flex-col justify-center items-start h-[40vh] line-clamp-4 text-ellipsis px-5">
      <div className="flex flex-row justify-center items-center w-full">
        <Typography variant="h5" gutterBottom>
          {user.firstName} {user.lastName}
        </Typography>
      </div>
      <Typography variant="body" gutterBottom>
        {user.email}
      </Typography>
      <Typography variant="body" gutterBottom>
        {user.role}
      </Typography>
      {/* <Typography variant='body' gutterBottom sx={{marginBottom: "4px"}} >{desc}</Typography> */}
    </Paper>
    // </Link>
  );
}

export default UserPresentation;
