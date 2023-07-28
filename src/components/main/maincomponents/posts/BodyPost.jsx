import { BsHeart, BsChat, BsSend, BsSave } from "react-icons/bs";
import { fetchLikePost } from "../../../../services/posts";
import { useContext, useState, useRef } from "react";
import { toast } from "react-toastify";
import { getPostsContext } from "../../../contexts/GetPostsContext";
import { CreateNewComment } from "../../../../services/comments";
import { AuthContext } from "../../../contexts/AuthContext";
import CommentMain from "../comments/CommentMain";
import { useModal } from "../../../hooks/useModal";

const BodyPost = ({ post }) => {
  const { closeModal, isOpen, openModal } = useModal();
  const [isVoted, setIsVoted] = useState(post.isVoted);
  const { getPosts } = useContext(getPostsContext);
  const { getToken } = useContext(AuthContext);

  const commentRef = useRef(null);

  const handleLikePost = async (event) => {
    event.preventDefault();
    try {
      await fetchLikePost(post.id);
      setIsVoted(!post.isVoted);
      await getPosts();
    } catch (error) {
      toast.error("Algo salio mal");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = getToken();
    const comment = commentRef.current.value;
    try {
      await CreateNewComment(post.id, comment, token);
      document.getElementById("form-comment").reset();
      await getPosts();
    } catch (error) {
      toast.error("Algo salio mal");
    }
  };

  const openCommentsModal = () => {
    openModal();
    document.body.style.overflow = "hidden";
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
        <a className="text-gray-400" onClick={openCommentsModal}>
          Ver los {post.comments} comentarios
        </a>
        <form onSubmit={handleSubmit} id="form-comment">
          <input
            ref={commentRef}
            className="appearance-none outline-none"
            placeholder="Añade un comentario..."
            name="comment"
          />
        </form>
      </section>
      <hr />
      <CommentMain handleClose={closeModal} isOpen={isOpen} />
    </div>
  );
};

export default BodyPost;
