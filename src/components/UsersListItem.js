import { GoTrash } from "react-icons/go";
import { deleteUser } from "../store";
import useThunk from "../hooks/useThunk";
import Button from "./Button";
import Expandable from "./Expandable";
import AlbumsList from "./AlbumsList";

function UsersListItem({ user }) {
  const [removeUser, isDeleting, errorDeleting] = useThunk(deleteUser);

  function onClickDelete() {
    removeUser(user);
  }
  const header = (
    <>
      {errorDeleting && `Error deleting user...${errorDeleting}`}
      <Button onClick={onClickDelete} loading={isDeleting} className="mr-3">
        <GoTrash />
      </Button>{" "}
      {user.name}
    </>
  );
  return (
    <Expandable header={header}>
      {" "}
      <AlbumsList user={user} />
    </Expandable>
  );
}

export default UsersListItem;
