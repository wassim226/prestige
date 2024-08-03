import { Paper, Typography } from "@mui/material";

function UserPresentation(props) {
  const { user } = props;
  return (
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
    </Paper>
  );
}

export default UserPresentation;
