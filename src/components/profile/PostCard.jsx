import React from "react";
import { useModal } from "../hooks/useModal";
import CommentMain from "../main/maincomponents/comments/CommentMain";

function PostCard({ post }) {
  const { isOpen, closeModal, openModal } = useModal();

  const openCommentsModal = () => {
    openModal();
    document.body.style.overflow = "hidden";
  };

  return (
    <>
      <div key={post.id} className="w-[200px] overflow-hidden">
        <img
          className="w-full h-[200px] cursor-pointer object-center hover:brightness-75"
          src={post.media}
          alt=""
          onClick={openCommentsModal}
        />
      </div>

      {isOpen ? (
        <CommentMain handleClose={closeModal} isOpen={isOpen} id={post.id} />
      ) : null}
    </>
  );
}

export default PostCard;
