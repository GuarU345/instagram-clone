import InstagramStories from "./mainComponents/InstagramStories";
import Post from "./mainComponents/Posts/Post";
import { POSTS as posts } from "../../mocks/posts";
import { useContext } from "react";
import PostModal from "../modals/PostModal";
import { openPostModalContext } from "../contexts/OpenPostModal";

const Main = () => {
  const { openPostModal, setOpenPostModal } = useContext(openPostModalContext);
  return (
    <div>
      <InstagramStories />
      {openPostModal ? <PostModal /> : null}
      <Post posts={posts} />
    </div>
  );
};

export default Main;
