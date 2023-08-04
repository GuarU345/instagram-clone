import { BsHeart } from "react-icons/bs";
import { useLike } from "../../hooks/useLike";
import { getPostsContext } from "../../contexts/GetPostsContext";
import { useContext, useState } from "react";

const Like = ({ post }) => {
  const { getPosts } = useContext(getPostsContext);
  const { likePost } = useLike(post.id);
  const [isVoted, setIsVoted] = useState(post.isVoted);

  const handleLikePost = async (event) => {
    event.preventDefault();
    await likePost();
    setIsVoted(!post.isVoted);
    getPosts();
  };

  return (
    <li className="cursor-pointer hover:text-gray-400">
      <BsHeart
        onClick={handleLikePost}
        className={`${isVoted ? "text-red-700" : ""}`}
      />
    </li>
  );
};

export default Like;
