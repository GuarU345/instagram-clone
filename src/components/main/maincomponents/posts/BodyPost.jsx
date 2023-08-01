import { BsChat, BsSend, BsSave, BsFillPlayFill } from "react-icons/bs";
import { useContext, useRef, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getPostsContext } from "../../../contexts/GetPostsContext";
import { CreateNewComment } from "../../../../services/comments";
import { AuthContext } from "../../../contexts/AuthContext";
import CommentMain from "../comments/CommentMain";
import { useModal } from "../../../hooks/useModal";
import useIsInViewPort from "../../../hooks/useIsInViewport";
import Like from "../../Like";

const regex = /(=?(.mp4))/;

const BodyPost = ({ post }) => {
  const { closeModal, isOpen, openModal } = useModal();
  const { getPosts } = useContext(getPostsContext);
  const { getToken } = useContext(AuthContext);
  const [isPaused, setIsPaused] = useState(false);
  const commentRef = useRef(null);
  const video = useRef(null);
  const isInViewport1 = useIsInViewPort(video);

  const comments =
    post.comments === 1
      ? `ver ${post.comments} comentario`
      : `ver los ${post.comments} comentarios`;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = getToken();
    const comment = commentRef.current.value;
    try {
      await CreateNewComment(post.id, comment, token);
      await getPosts();
      commentRef.current.value = "";
    } catch (error) {
      toast.error("Algo salio mal");
    }
  };

  const toggleVideoPlayback = () => {
    if (video.current.paused) {
      video.current.play();
      setIsPaused(false);
    } else {
      video.current.pause();
      setIsPaused(true);
    }
  };

  const openCommentsModal = () => {
    openModal();
    document.body.style.overflow = "hidden";
  };

  useEffect(() => {
    if (video.current instanceof HTMLVideoElement) {
      if (!isInViewport1) {
        video.current.pause();
        video.current.currentTime = 0;
        return;
      }
      video.current.play();
    }
  }, [isInViewport1]);

  return (
    <div>
      {regex.test(post.media[0]) ? (
        <div className="relative">
          <video
            className="cursor-pointer"
            onClick={toggleVideoPlayback}
            autoPlay
            muted
            ref={video}
          >
            <source src={post.media[0]} />
          </video>
          {isPaused && (
            <div className="play-icon">
              <BsFillPlayFill
                className="text-8xl"
                onClick={toggleVideoPlayback}
              />
            </div>
          )}
        </div>
      ) : (
        <img src={post.media[0]} alt="image of post" ref={video} />
      )}
      <ul className="flex text-2xl gap-4 p-2 items-center">
        <Like post={post} />
        <li
          onClick={openCommentsModal}
          className="cursor-pointer hover:text-gray-400"
        >
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
        {post.comments ? (
          <a
            className="text-gray-400 cursor-pointer"
            onClick={openCommentsModal}
          >
            {comments}
          </a>
        ) : null}
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
      {isOpen ? (
        <CommentMain handleClose={closeModal} isOpen={isOpen} id={post.id} />
      ) : null}
    </div>
  );
};

export default BodyPost;
