import axios from "axios";

export interface Post {
  id: number;
  title: string;
  body: string;
}

export const getPosts = async () => {
  const { data } = await axios.get<{ posts: Post[] }>(
    "https://dummyjson.com/posts",
  );
  return data;
};
