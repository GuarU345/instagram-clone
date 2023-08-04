import Modal from "../../../shared/Modal";
import { useFetch } from "../../../hooks/useFetch";
import { useCreateComment } from "../../../hooks/useCreateComment";
import { useContext, useEffect, useRef, useState } from "react";
import { BsHeart, BsChat, BsSend, BsSave } from "react-icons/bs";
import { fetchSpecificCommentsByPost } from "../../../../services/comments";
import { AuthContext, useAuth } from "../../../contexts/AuthContext";
import "../../../../App.css";
import Like from "../../Like";

import axios from "axios";

const INSTAGRAM_URL = "http://192.168.1.7:4000";

const token = localStorage.getItem("token");

const api = axios.create({
  baseURL: INSTAGRAM_URL + "/api/v1",
});

const useComment = (id) => {
  const [comments, setComments] = useState([]);
  const { getToken } = useAuth();
  const commentRef = useRef(null);
  const { createComment } = useCreateComment(id);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await createComment(commentRef.current.value);
    await getComments();
    commentRef.current.value = "";
  };

  const getComments = async () => {
    const token = getToken();
    const resp = await fetchSpecificCommentsByPost(id, token);
    setComments(resp);
  };

  useEffect(() => {
    getComments().then();
  }, [id]);

  return { comments, handleSubmit, commentRef };
};

const fetchById = async (id) => {
  const { data } = await api.get(`/post/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};

const fetchByUser = async (id, user) => {
  let url = `/user/${user}/post/${id}`;

  if (user === undefined) {
    url = `/user/post/${id}`;
  }

  const { data } = await api.get(url, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return data;
};

const CommentMain = ({ ...attributes }) => {
  const [id, setId] = useState(attributes.id);
  const { comments, handleSubmit, commentRef } = useComment(id);
  const { post } = useFetch(
    id,
    attributes.user === undefined
      ? fetchById(id)
      : fetchByUser(id, attributes.user)
  );
  return (
    <Modal handleClose={attributes.handleClose} isOpen={attributes.isOpen}>
      {post === null ? (
        <h1>Cargando...</h1>
      ) : (
        <>
          {attributes.user === undefined ? null : (
            <>
              {post.previousPost === null ? null : (
                <button
                  className="absolute top-1/2 left-0"
                  onClick={() => setId(post.previousPost)}
                >
                  prev
                </button>
              )}
              {post.nextPost === null ? null : (
                <button
                  className="absolute top-1/2 right-0"
                  onClick={() => setId(post.nextPost)}
                >
                  next
                </button>
              )}
            </>
          )}
          <div className="flex w-4/6 h-[90%] bg-slate-100 absolute top-1/2 left-1/2 z-10 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-4/6 bg-white">
              <img
                className="block m-auto h-full w-full object-contain"
                src={post.media[0]}
                alt=""
              />
            </div>
            <section className="border-2 flex-1 flex flex-col bg-white">
              <div className="flex gap-2 p-2 mb-2 border-b-[0.2px]">
                <img className="rounded-full w-8 h-8" src={post.photo} alt="" />
                <span className="font-bold">{post.username}</span>
                <span>{post.description}</span>
              </div>
              <div className="flex gap-2 p-2 mt-[-8px] border-b-[0.2px] overflow-y-scroll custom-scrollbar">
                <div className="flex flex-col gap-2">
                  {comments.map((comment) => (
                    <div className="flex gap-2" key={comment.id}>
                      <img
                        className="rounded-full w-8 h-8"
                        src={comment.photo}
                        alt=""
                      />
                      <div className="flex gap-2">
                        <span className="font-bold">{comment.username}</span>
                        <p className="text-gray-500">{comment.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-auto">
                <section className="flex flex-col p-2 border-b-[0.2px] rounded-b-md">
                  <ul className="flex text-2xl font-bold gap-4 p-2 items-center">
                    <Like post={post} />
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
                  <span className="flex items-center gap-2">
                    <img
                      src={post.photo}
                      className="rounded-full w-8 h-8"
                      alt=""
                    />
                    <p>Les gusta a</p>
                  </span>
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
                      ref={commentRef}
                    />
                  </form>
                </section>
              </div>
            </section>
          </div>
        </>
      )}
    </Modal>
  );
};

export default CommentMain;
