import InstagramStories from "./maincomponents/InstagramStories";
import Post from "./maincomponents/posts/Post";
import { useContext } from "react";
import PostModal from "../modals/PostModal";
import { openPostModalContext } from "../contexts/OpenPostModal";

const Main = () => {
  const { openPostModal, setOpenPostModal } = useContext(openPostModalContext);
  return (
    <div>
      <InstagramStories />
      {openPostModal ? <PostModal /> : null}
      <Post />
    </div>
  );
};

export default Main;
