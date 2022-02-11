import Post from "./post/Post";
import { useSelector } from "react-redux";

export function Posts() {
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  return (
    <>
      <h1>Posts</h1>
      <Post />
      <Post />
    </>
  );
}
