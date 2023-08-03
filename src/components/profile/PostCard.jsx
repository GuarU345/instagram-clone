import React, { useState } from "react";
import { useModal } from "../hooks/useModal";
import CommentMain from "../main/maincomponents/comments/CommentMain";
import { BsFillChatFill, BsHeart, BsHeartFill } from "react-icons/bs";

function PostCard({ post, user }) {
  const { isOpen, closeModal, openModal } = useModal();

  const openCommentsModal = () => {
    openModal();
    document.body.style.overflow = "hidden";
  };
  return (
    <>
      <div
        key={post.id}
        onClick={openCommentsModal}
        className="image-container w-[200px] relative"
      >
        <img
          className="w-full h-[200px] cursor-pointer object-center"
          src={post.media}
          alt=""
        />
        <div className="data-icons">
          <BsHeartFill />
          <BsFillChatFill />
        </div>
      </div>

      {isOpen ? (
        <>
          <CommentMain
            handleClose={closeModal}
            isOpen={isOpen}
            id={post.id}
            user={user}
          />
        </>
      ) : null}
    </>
  );
}

export default PostCard;
