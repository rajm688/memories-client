import Post from "./post/Post";
import { useSelector } from "react-redux";

export function Posts() {
  const posts = useSelector((state) => state.posts);
  console.log(posts); // cannot view this consolelog in the console sir.
  return (
    <>
      <h1>Posts</h1>
      <Post />
      <Post />
    </>
  );
}
