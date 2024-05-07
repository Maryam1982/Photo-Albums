import { GoTrash, GoSync } from "react-icons/go";
import { useDeletePhotoMutation } from "../store";

function PhotosListItem({ photo }) {
  const [deletePhoto, results] = useDeletePhotoMutation();
  const onClickDelete = () => {
    deletePhoto(photo);
  };
  const content = results.isLoading ? (
    <GoSync className="animate-spin" />
  ) : (
    <GoTrash className="text-3xl" />
  );
  return (
    <div className="m-2 relative cursor-pointer">
      <img src={photo.url} alt="random pic" className="h-20 w-20" />
      <div
        onClick={onClickDelete}
        className="inset-0 absolute flex flex-row justify-center items-center hover:bg-gray-200 opacity-0 hover:opacity-80"
      >
        {content}
      </div>
    </div>
  );
}

export default PhotosListItem;
