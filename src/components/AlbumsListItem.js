import { GoTrash } from "react-icons/go";
import Button from "./Button";
import Expandable from "./Expandable";
import { useDeleteAlbumMutation } from "../store";
import PhotosList from "./PhotosList";

function AlbumsListItem({ album }) {
  const [deleteAlbum, results] = useDeleteAlbumMutation();

  const onDeleteAlbumClick = () => {
    deleteAlbum(album);
  };
  const header = (
    <>
      <Button
        onClick={onDeleteAlbumClick}
        loading={results.isLoading}
        className="mr-2"
      >
        <GoTrash />
      </Button>
      {album.title}
    </>
  );
  return (
    <Expandable header={header} key={album.id}>
      <PhotosList album={album} />
    </Expandable>
  );
}

export default AlbumsListItem;
