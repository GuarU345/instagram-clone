import CommentImage from "./CommentImage";
import { useModal } from "../../../hooks/useModal";
import Modal from "../../../shared/Modal";
import { useFetch } from "../../../hooks/useFetch";
import { useCreateComment } from "../../../hooks/useCreateComment";
import { useContext, useRef } from "react";
import { getPostsContext } from "../../../contexts/GetPostsContext";

const CommentMain = ({ ...attributes }) => {
  const { post } = useFetch(attributes.id);
  const comment = useRef(null)
  const {createComment} = useCreateComment(attributes.id)
  
  
  const handleSubmit = async (event) => {
    event.preventDefault()
    await createComment(comment.current.value)
    comment.current.value = ''
  }
  
  return post === null ? (
    <h1>Cargando...</h1>
  ) : (
    <Modal handleClose={attributes.handleClose} isOpen={attributes.isOpen}>
      <div className="flex w-4/6 h-[90%] bg-slate-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-4/6 bg-white">
          <img
            className="block m-auto h-full w-full"
            src={post.media[0]}
            alt=""
          />
        </div>
        <section className="border-2 flex-1 flex flex-col bg-white">
          <div className="flex gap-2 p-2 items-center mb-2 border-b-2">
            <img className="rounded-full w-8 h-8" src={post.photo} alt="" />
            <span>{post.username}</span>
            <span>{post.description}</span>
          </div>
          <div className="flex gap-2 p-2 overflow-hidden mt-[-8px] border-b-2 overflow-y-scroll custom-scrollbar">
            <div className="flex flex-col gap-2">
              {post.comments.map((comment) => (
                <div className="flex gap-2" key={comment.id}>
                  <img
                    className="rounded-full w-8 h-8"
                    src={comment.photo}
                    alt=""
                  />
                  <div className="flex gap-2">
                    <span>{comment.username}</span>
                    <p>{comment.comment}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-auto">
            <section className="flex flex-col p-2 border-b-2 rounded-b-md">
            </section>
            <section>
              <form
                onSubmit={handleSubmit}
                className="h-[50px] flex items-center pl-2"
                id="form-comment"
              >
                <input
                  className="appearance-none outline-none"
                  placeholder="Añade un comentario..."
                  ref={comment}
                />
              </form>
            </section>
          </div>
        </section>
      </div>
    </Modal>
  );
};

export default CommentMain;
