import { ChangeEvent, useRef, useState } from "react";
import Modal from "./Modal";
import { BsArrowLeft } from "react-icons/bs";
import { createPostService } from "../services/post";
import { NewPostObject } from "../types";
import useAuthStore from "../hooks/useAuth";
import useModal from "../hooks/useModal";
import { USER_IMAGE_DEFAULT } from "../utils/const";
import useFeed from "../hooks/useFeed";

interface MediaIconProps {
  styles: string;
}

export function MediaIcon({ styles }: MediaIconProps) {
  return (
    <svg
      className={styles}
      aria-label="Icon to represent media such as images or videos"
      color="rgb(0, 0, 0)"
      fill="rgb(0, 0, 0)"
      height="77"
      role="img"
      viewBox="0 0 97.6 77.3"
      width="96"
    >
      <title>Icon to represent media such as images or videos</title>
      <path
        d="M16.3 24h.3c2.8-.2 4.9-2.6 4.8-5.4-.2-2.8-2.6-4.9-5.4-4.8s-4.9 2.6-4.8 5.4c.1 2.7 2.4 4.8 5.1 4.8zm-2.4-7.2c.5-.6 1.3-1 2.1-1h.2c1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1 0-.8.3-1.5.8-2.1z"
        fill="currentColor"
      ></path>
      <path
        d="M84.7 18.4 58 16.9l-.2-3c-.3-5.7-5.2-10.1-11-9.8L12.9 6c-5.7.3-10.1 5.3-9.8 11L5 51v.8c.7 5.2 5.1 9.1 10.3 9.1h.6l21.7-1.2v.6c-.3 5.7 4 10.7 9.8 11l34 2h.6c5.5 0 10.1-4.3 10.4-9.8l2-34c.4-5.8-4-10.7-9.7-11.1zM7.2 10.8C8.7 9.1 10.8 8.1 13 8l34-1.9c4.6-.3 8.6 3.3 8.9 7.9l.2 2.8-5.3-.3c-5.7-.3-10.7 4-11 9.8l-.6 9.5-9.5 10.7c-.2.3-.6.4-1 .5-.4 0-.7-.1-1-.4l-7.8-7c-1.4-1.3-3.5-1.1-4.8.3L7 49 5.2 17c-.2-2.3.6-4.5 2-6.2zm8.7 48c-4.3.2-8.1-2.8-8.8-7.1l9.4-10.5c.2-.3.6-.4 1-.5.4 0 .7.1 1 .4l7.8 7c.7.6 1.6.9 2.5.9.9 0 1.7-.5 2.3-1.1l7.8-8.8-1.1 18.6-21.9 1.1zm76.5-29.5-2 34c-.3 4.6-4.3 8.2-8.9 7.9l-34-2c-4.6-.3-8.2-4.3-7.9-8.9l2-34c.3-4.4 3.9-7.9 8.4-7.9h.5l34 2c4.7.3 8.2 4.3 7.9 8.9z"
        fill="currentColor"
      ></path>
      <path
        d="M78.2 41.6 61.3 30.5c-2.1-1.4-4.9-.8-6.2 1.3-.4.7-.7 1.4-.7 2.2l-1.2 20.1c-.1 2.5 1.7 4.6 4.2 4.8h.3c.7 0 1.4-.2 2-.5l18-9c2.2-1.1 3.1-3.8 2-6-.4-.7-.9-1.3-1.5-1.8zm-1.4 6-18 9c-.4.2-.8.3-1.3.3-.4 0-.9-.2-1.2-.4-.7-.5-1.2-1.3-1.1-2.2l1.2-20.1c.1-.9.6-1.7 1.4-2.1.8-.4 1.7-.3 2.5.1L77 43.3c1.2.8 1.5 2.3.7 3.4-.2.4-.5.7-.9.9z"
        fill="currentColor"
      ></path>
    </svg>
  );
}

function useCaption() {
  const [isCaption, setIsCaption] = useState(false);
  const captionRef = useRef<HTMLTextAreaElement>(null);

  const handleIsCaption = () => {
    setIsCaption(true);
  };

  const handleNotCaption = () => {
    setIsCaption(false);
  };

  return { isCaption, captionRef, handleIsCaption, handleNotCaption };
}

function useFileUpload() {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files instanceof FileList) {
      setFile(e.target.files.item(0) || null);
    }
  };

  const handleRemoveFile = () => {
    setFile(null);
  };

  const renderImage = () => {
    if (file === null) return;
    return URL.createObjectURL(file);
  };

  return { file, handleFileChange, handleRemoveFile, renderImage };
}

function useCreate() {
  const token = useAuthStore((state) => state.token);
  const { hide } = useModal();
  const { refetch } = useFeed();

  const { captionRef, handleIsCaption, handleNotCaption, isCaption } =
    useCaption();

  const { file, handleFileChange, handleRemoveFile, renderImage } =
    useFileUpload();

  const handleSubmit = async () => {
    const form = new window.FormData();
    const caption = captionRef.current;

    if (file === null || caption === null) return;

    form.append("media", file);
    form.append("description", caption.value);

    let values = {};

    for (const [key, value] of form.entries()) {
      values = { ...values, [key]: value };
    }

    try {
      await createPostService(values as unknown as NewPostObject, token);
      await refetch();
      hide();
    } catch (error) {
      console.log(error);
    }
  };

  return {
    file,
    isCaption,
    captionRef,
    handleFileChange,
    handleIsCaption,
    handleNotCaption,
    handleRemoveFile,
    handleSubmit,
    renderImage,
  };
}

interface HeaderModalProps {
  file: File | null;
  captionEnabled: boolean;
  RemoveFile: () => void;
  DisableCaption: () => void;
  EnableCaption: () => void;
  SubmitPost: () => Promise<void>;
}

function HeaderModalCreatePost({
  EnableCaption,
  DisableCaption,
  RemoveFile,
  SubmitPost,
  captionEnabled,
  file,
}: HeaderModalProps) {
  return (
    <header className="h-[5%] border-b-2 border-black flex justify-center items-center">
      {file !== null ? (
        <button
          onClick={!captionEnabled ? RemoveFile : DisableCaption}
          className="mr-auto ml-4 [&>svg]:text-2xl"
        >
          <BsArrowLeft />
        </button>
      ) : null}
      <h1 className="text-center font-bold text-lg">Create new post</h1>
      {file !== null ? (
        <button
          className="ml-auto mr-4 text-lg font-semibold text-sky-500"
          onClick={!captionEnabled ? EnableCaption : SubmitPost}
        >
          Next
        </button>
      ) : null}
    </header>
  );
}

interface BodyModalProps {
  captionEnabled: boolean;
  file: File | null;
  SelectFile: (e: ChangeEvent<HTMLInputElement>) => void;
  captionInputElement: React.RefObject<HTMLTextAreaElement>;
  ShowImgPrev: () => string | undefined;
}

function BodyModalCreatePost({
  SelectFile,
  captionEnabled,
  captionInputElement,
  file,
  ShowImgPrev,
}: BodyModalProps) {
  const { fullname, img } = useAuthStore((state) => state.user);

  return (
    <section
      className={`h-[95%] flex ${
        !captionEnabled ? "justify-center" : "justify-between"
      } items-center overflow-hidden rounded-b-lg`}
    >
      {file === null ? (
        <div>
          <MediaIcon styles="mx-auto" />
          <h1 className="text-lg font-semibold my-6">
            Select your photos and videos here
          </h1>
          <form>
            <label
              htmlFor="upload"
              className="bg-sky-400 text-center block mx-12 p-2 rounded-md text-white font-semibold"
            >
              Select from computer
            </label>
            <input
              type="file"
              id="upload"
              name="media"
              hidden
              onChange={SelectFile}
            />
          </form>
        </div>
      ) : (
        <>
          <img
            src={ShowImgPrev() || ""}
            className={`block h-full ${
              !captionEnabled ? "w-full" : "w-4/6"
            } object-cover z-10 rounded-b-lg`}
          />
          {captionEnabled ? (
            <div className="w-2/6 self-start">
              <header className="flex items-center m-4 gap-2">
                <img
                  src={img || USER_IMAGE_DEFAULT}
                  className="w-[32px] h-[32px] rounded-full"
                />
                <h1 className="font-semibold">{fullname}</h1>
              </header>
              <textarea
                ref={captionInputElement}
                defaultValue=""
                className="w-full px-4"
                rows={10}
                placeholder="Write a caption"
              ></textarea>
            </div>
          ) : null}
        </>
      )}
    </section>
  );
}

export default function CreatePost() {
  const {
    captionRef,
    file,
    handleFileChange,
    handleIsCaption,
    handleNotCaption,
    handleRemoveFile,
    handleSubmit,
    isCaption,
    renderImage,
  } = useCreate();

  return (
    <Modal>
      <div
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white  z-20 ${
          !isCaption ? "w-5/12" : "w-7/12"
        } h-5/6 rounded-lg`}
      >
        <HeaderModalCreatePost
          DisableCaption={handleNotCaption}
          EnableCaption={handleIsCaption}
          RemoveFile={handleRemoveFile}
          SubmitPost={handleSubmit}
          captionEnabled={isCaption}
          file={file}
        />
        <BodyModalCreatePost
          SelectFile={handleFileChange}
          ShowImgPrev={renderImage}
          captionEnabled={isCaption}
          captionInputElement={captionRef}
          file={file}
        />
      </div>
    </Modal>
  );
}
