import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { faker } from "@faker-js/faker";
const baseURL = "http://localhost:3005";
// const baseURL =
//   "https://my-json-server.typicode.com/Maryam1982/JSON-Server-Photo-Album";

const photosApi = createApi({
  reducerPath: "photos",
  baseQuery: fetchBaseQuery({
    baseUrl: baseURL,
  }),
  endpoints(builder) {
    return {
      fetchPhotos: builder.query({
        providesTags: (results, error, album) => {
          const tags = results.map((photo) => {
            return { type: "Photo", id: photo.id };
          });
          tags.push({ type: "PhotoAlbum", id: album.id });
          return tags;
        },
        query: (album) => {
          return {
            url: "/photos",
            method: "GET",
            params: { albumId: album.id },
          };
        },
      }),
      addPhotos: builder.mutation({
        invalidatesTags: (results, error, album) => {
          return [{ type: "PhotoAlbum", id: album.id }];
        },
        query: (album) => {
          return {
            url: "/photos",
            method: "POST",
            body: {
              albumId: album.id,
              url: faker.image.url({ width: 150, height: 150 }),
            },
          };
        },
      }),
      deletePhoto: builder.mutation({
        invalidatesTags: (results, error, photo) => {
          return [{ type: "Photo", id: photo.id }];
        },
        query: (photo) => {
          return {
            url: `/photos/${photo.id}`,
            method: "DELETE",
          };
        },
      }),
    };
  },
});

export const {
  useFetchPhotosQuery,
  useAddPhotosMutation,
  useDeletePhotoMutation,
} = photosApi;
export { photosApi };
