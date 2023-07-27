import { useContext, useEffect, useState } from "react";
import CombinedIcons from "../navbar/navbarcomponents/CombinedIcons";
import { Modal } from "./Modal";
import { IoArrowBackOutline } from "react-icons/io5";
import { openPostModalContext } from "../contexts/OpenPostModal";
import CreatePostModal from "./CreatePostModal";
import { fetchCreateNewPost } from "../../services/posts";
import { getPostsContext } from "../contexts/GetPostsContext";

const PostModal = () => {
  const [image, setImage] = useState(null);
  const [text, setText] = useState("");
  const [openCreatePostModal, setOpenCreatePostModal] = useState(false);
  const { openPostModal, setOpenPostModal } = useContext(openPostModalContext);
  const { getPosts } = useContext(getPostsContext);

  const handleImageChange = (event) => {
    const imageToSend = event.target.files[0];
    setImage(imageToSend);
  };

  const handleExcapeKeyPress = (event) => {
    if (event.key === "Escape") {
      setOpenPostModal(!openPostModal);
      document.body.style.overflow = "scroll";
    }
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

  const PostModal = (event) => {
    event.preventDefault();
    setOpenCreatePostModal(!openCreatePostModal);
  };

  const createNewPost = async () => {
    const newText = text;
    const newImage = image;
    const formData = new FormData();
    formData.append("description", newText);
    formData.append("media", newImage);
    const resp = await fetchCreateNewPost(formData);
    setOpenPostModal(!openPostModal);
    document.body.style.overflow = "scroll";
    await getPosts();
    return resp;
  };

  useEffect(() => {
    document.addEventListener("keydown", handleExcapeKeyPress);

    return () => {
      document.removeEventListener("keydown", handleExcapeKeyPress);
    };
  }, []);

  return (
    <Modal>
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
            {openCreatePostModal ? (
              <h3 className="font-bold">Crea una nueva publicación</h3>
            ) : (
              <h3 className="font-bold">Recortar</h3>
            )}

            {openCreatePostModal ? (
              <button
                className="text-sky-600 cursor-pointer"
                onClick={createNewPost}
              >
                Compartir
              </button>
            ) : (
              <button
                className="text-sky-600 cursor-pointer"
                onClick={PostModal}
              >
                Siguiente
              </button>
            )}
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
      {openCreatePostModal ? <CreatePostModal post={getTextFromForm} /> : null}
    </Modal>
  );
};

export default PostModal;
