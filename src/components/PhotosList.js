import { useFetchPhotosQuery, useAddPhotosMutation } from "../store";
import Button from "./Button";
import Skeleton from "./Skeleton";
import PhotosListItem from "./PhotosListItem";

function PhotosList({ album }) {
  const { data, error, isFetching } = useFetchPhotosQuery(album);
  const [addPhoto, addResults] = useAddPhotosMutation();
  let content;
  const onAddPhotoClick = () => {
    addPhoto(album);
  };

  if (isFetching) {
    content = <Skeleton times={3} className={"h-5 w-full"} />;
  } else if (error) {
    content = "Error fetching photos.";
  } else {
    content = data.map((photo) => {
      return <PhotosListItem photo={photo} key={photo.id} />;
    });
  }
  return (
    <div>
      <div className="flex flex-row items-center justify-between">
        <h3 className="text-md font-bold">Photos for {album.title}</h3>
        <Button onClick={onAddPhotoClick} loading={addResults.isLoading}>
          + Add Photo
        </Button>
      </div>
      <div className="mx-8 flex flex-row items-center justify-center flex-wrap">
        {content}
      </div>
    </div>
  );
}

export default PhotosList;
