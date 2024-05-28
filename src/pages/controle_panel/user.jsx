import { useRef, useState, useEffect } from "react";
import { DataGridView } from "../../components";
import { UserController } from "../../controllers";
import { Skeleton } from "@mui/material";

function Users() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const abortController = useRef(null);

  useEffect(() => {
    const controller = new UserController(abortController, setError);

    const get_data = async () => {
      setIsLoading(() => true);
      let users = await controller.getUsers();
      setData(() => users);
      setIsLoading(() => false);
    };
    get_data();
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="flex flex-col  mt-20 mx-5">
          <Skeleton variant="rectangular" height={60} className="mb-5" />
          <Skeleton variant="rectangular" height={"60vh"} />
        </div>
      ) : (
        <DataGridView title={"Users"} type={"user"} data={data} />
      )}
    </div>
  );
}

export default Users;
