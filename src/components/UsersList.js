import { useEffect } from "react";
import { fetchUsers, addUser, deleteUser } from "../store";
import { useSelector } from "react-redux";
import Skeleton from "./Skeleton";
import Button from "./Button";
import useThunk from "../hooks/useThunk";
import UsersListItem from "./UsersListItem";

function UsersList() {
  const [dataFetch, isLoading, errorLoading] = useThunk(fetchUsers);
  const [createUser, isAdding, errorAdding] = useThunk(addUser);

  const { data } = useSelector((state) => {
    return state.users;
  });
  useEffect(() => {
    dataFetch();
  }, [dataFetch]);

  const onAddUserClick = () => {
    createUser();
  };

  let content;

  if (isLoading) {
    content = <Skeleton times={6} className="h-10 w-full" />;
  } else if (errorLoading) {
    content = <div>Error occured while fetching data </div>;
  } else {
    content = data.map((user) => {
      return <UsersListItem key={user.id} user={user} />;
    });
  }

  return (
    <div>
      <div className="flex flex-row justify-between m-3 items-center">
        <h1 className="m-2 text-xl">Users</h1>

        <Button onClick={onAddUserClick} loading={isAdding}>
          + Add User
        </Button>

        {errorAdding && "Error creating user..."}
      </div>
      {content}
    </div>
  );
}

export default UsersList;
