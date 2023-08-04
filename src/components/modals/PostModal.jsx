import { useContext, useEffect, useState } from "react";
import CombinedIcons from "../navbar/navbarcomponents/CombinedIcons";
import { IoArrowBackOutline } from "react-icons/io5";
import CreatePostModal from "./CreatePostModal";
import { fetchCreateNewPost } from "../../services/posts";
import { getPostsContext } from "../../contexts/GetPostsContext";
import { AuthContext } from "../../contexts/AuthContext";
import Modal from "../shared/Modal";

const PostModal = ({ ...attributes }) => {
  const { getToken } = useContext(AuthContext);
  const [text, setText] = useState(null);
  const [image, setImage] = useState(null);
  const { getPosts } = useContext(getPostsContext);
  const [openCreatePostModal, setOpenCreatePostModal] = useState(false);

  const handleClose = () => {
    attributes.handleClose();
    resetInputs();
  };

  const handleImageChange = (event) => {
    const imageToSend = event.target.files[0];
    setImage(imageToSend);
  };

  const getTextFromForm = (post) => {
    setText(post);
  };

  const changeOtherPhoto = (event) => {
    event.preventDefault();
    setImage(null);
  };

  const imageToModal = (photo) => {
    if (photo instanceof File) {
      const modalImage = URL.createObjectURL(photo);
      return modalImage;
    }
  };

  const postModal = (event) => {
    event.preventDefault();
    setOpenCreatePostModal(!openCreatePostModal);
  };

  const createNewPost = async () => {
    const newText = text;
    const newImage = image;
    const formData = new FormData();
    formData.append("description", newText);
    formData.append("media", newImage);
    const token = getToken();
    const resp = await fetchCreateNewPost(formData, token);
    await getPosts();
    handleClose();
    document.body.style.overflow = "scroll";
    return resp;
  };

  const resetInputs = () => {
    setImage(null);
    setText(null);
    setOpenCreatePostModal(false);
  };

  return (
    <Modal {...attributes} handleClose={handleClose}>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-2xl z-10 w-2/6 h-[90%] rounded-lg">
        {image === null ? (
          <>
            <header className="h-10 flex items-center justify-center">
              <h3 className="font-bold">Crear nueva publicacion</h3>
            </header>
            <hr />
            <section className="flex flex-col items-center gap-8 justify-center h-[659px]">
              <CombinedIcons />
              <h2 className="text-lg">Arrastra las fotos y los vídeos aquí</h2>
              <label
                htmlFor="fileInput"
                className="cursor-pointer bg-sky-500 text-white font-semibold py-2 px-4 rounded-md shadow"
              >
                Seleccionar del ordenador
              </label>
              <input
                id="fileInput"
                type="file"
                onChange={handleImageChange}
                className="inset-0 opacity-0 z-10"
              />
            </section>
          </>
        ) : (
          <div>
            <header className="h-10 flex z-10 justify-between p-2 items-center">
              <IoArrowBackOutline
                className="text-2xl cursor-pointer"
                onClick={changeOtherPhoto}
              />
              <h3>
                {openCreatePostModal
                  ? "Crea una nueva publicación"
                  : "Recortar"}
              </h3>
              <button
                className="text-sky-600 cursor-pointer"
                onClick={openCreatePostModal ? createNewPost : postModal}
              >
                {openCreatePostModal ? "Compartir" : "Siguiente"}
              </button>
            </header>
            <hr />
            <section className="flex flex-col items-center gap-8 p-4 justify-center">
              <img
                className="mt-1 inset-0 w-full object-cover transition-opacity duration-slow cursor-grab"
                src={imageToModal(image)}
              ></img>
            </section>
          </div>
        )}
        {openCreatePostModal ? (
          <CreatePostModal post={getTextFromForm} />
        ) : null}
      </div>
    </Modal>
  );
};

export default PostModal;
