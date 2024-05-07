import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store";
import Skeleton from "./Skeleton";
import Button from "./Button";
import AlbumsListItem from "./AlbumsListItem";

function AlbumsList({ user }) {
  const { data, error, isFetching } = useFetchAlbumsQuery(user);
  const [addAlbum, results] = useAddAlbumMutation();

  let content;
  const onAddAlbum = () => {
    addAlbum(user);
    console.log(results);
  };

  if (isFetching) {
    content = <Skeleton times={3} className="h-8 w-full" />;
  } else if (error) {
    content = <div>Error loading albums</div>;
  } else {
    content = data.map((dataItem) => {
      return <AlbumsListItem album={dataItem} key={dataItem.id} />;
    });
  }
  return (
    <div>
      <div className="flex flex-row items-center justify-between">
        <h3 className="text-lg font-bold">{` Albums for ${user.name}`}</h3>
        <Button onClick={onAddAlbum} loading={results.isLoading}>
          + Add ALbum
        </Button>
      </div>

      <div>{content}</div>
    </div>
  );
}

export default AlbumsList;
