import { useContext } from "react";
import BodyPost from "./BodyPost";
import HeaderPost from "./HeaderPost";
import { getPostsContext } from "../../../contexts/GetPostsContext";

const Post = () => {
  const { posts, setPosts } = useContext(getPostsContext);
  return posts.map((post) => (
    <div key={post.id}>
      <HeaderPost post={post} />
      <BodyPost post={post} />
    </div>
  ));
};

export default Post;
