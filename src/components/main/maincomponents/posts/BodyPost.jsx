import { BsHeart, BsChat, BsSend, BsSave } from "react-icons/bs";
import { fetchLikePost } from "../../../../services/posts";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { getPostsContext } from "../../../contexts/GetPostsContext";

const BodyPost = ({ post }) => {
  const [isVoted, setIsVoted] = useState(post.isVoted);
  const {getPosts} = useContext(getPostsContext)

  const handleLikePost = async (event) => {
    event.preventDefault();
    try {
      await fetchLikePost(post.id);
      setIsVoted(!post.isVoted);
      await getPosts()
    } catch (error) {
      toast.error("Algo salio mal");
    }
  };
  return (
    <div>
      <img src={post.media[0]} alt="image of post" />
      <ul className="flex text-2xl gap-4 p-2 items-center">
        <li className="cursor-pointer hover:text-gray-400">
          <BsHeart
            onClick={handleLikePost}
            className={`${isVoted ? "text-red-700" : ""}`}
          />
        </li>
        <li className="cursor-pointer hover:text-gray-400">
          <BsChat className="transform -scale-x-100" />
        </li>
        <li className="cursor-pointer hover:text-gray-400">
          <BsSend />
        </li>
        <li className="ml-auto cursor-pointer hover:text-gray-400">
          <span>
            <BsSave />
          </span>
        </li>
      </ul>
      <section className="flex flex-col p-2">
        <span className="">{post.votes} Me gusta</span>
        <span>{post.description}</span>
        <a className="text-gray-400" href="">
          Ver los {post.comments} comentarios
        </a>
        <form>
          <input
            className="appearance-none outline-none"
            placeholder="Añade un comentario..."
          />
        </form>
      </section>
      <hr />
    </div>
  );
};

export default BodyPost;
