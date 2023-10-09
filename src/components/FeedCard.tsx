import { BsChat, BsHeart, BsSend } from "react-icons/bs";
import { Post } from "../types";
import { USER_IMAGE_DEFAULT } from "../utils/const";
import useAuthStore from "../hooks/useAuth";
import { addCommentService, voteService } from "../services/post";
import useFeed from "../hooks/useFeed";
import { FormEvent, useRef } from "react";

interface FeedCardProps {
  post: Post;
}

interface FeedCardHeaderProps {
  photo: string | null;
  username: string;
}

function FeedCardHeader({ photo, username }: FeedCardHeaderProps) {
  return (
    <header className="flex items-center my-2">
      <img
        src={photo || USER_IMAGE_DEFAULT}
        alt={username}
        className="rounded-full w-[48px] h-[48px] mx-4"
      />
      <h1 className="font-semibold">{username}</h1>
    </header>
  );
}

function useVote(id: number) {
  const token = useAuthStore((store) => store.token);
  const { update } = useFeed();

  const vote = () => {
    voteService(id, token).then(() => update(id));
  };

  return { vote };
}

interface FeedCardBodyProps {
  id: number;
  media: string[];
  description: string;
  comments: number;
  votes: number;
  isVoted: boolean;
  username: string;
}

function FeedCardBody({
  comments,
  description,
  id,
  isVoted,
  media,
  username,
  votes,
}: FeedCardBodyProps) {
  const { handleSubmit, inputRef } = useComment(id);

  return (
    <section>
      <img src={media[0]} className="w-full object-cover max-h-[585px]" />
      <FeedCardMenuBar id={id} isVoted={isVoted} />
      <p className="font-semibold">{votes} likes</p>
      <p>
        <span className="font-semibold mr-2">{username}</span>
        {description}
      </p>
      <button className="border-none bg-none text-gray-400">
        View all {comments} comments
      </button>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name=""
          ref={inputRef}
          placeholder="Add a comment..."
          className="mt-1 mb-4 block w-full py-1"
        />
        <button hidden></button>
      </form>
    </section>
  );
}

function useComment(id: number) {
  const { token } = useAuthStore();
  const { update } = useFeed();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = inputRef.current;

    if (input === null) return;

    try {
      await addCommentService(id, input.value, token);
      update(id);
      input.value = ""
    } catch (error) {}
  };

  return { inputRef, handleSubmit };
}

interface FeedCardMenuBarProps {
  isVoted: boolean;
  id: number;
}

function FeedCardMenuBar({ id, isVoted }: FeedCardMenuBarProps) {
  const { vote } = useVote(id);

  return (
    <menu className="flex gap-4 items-center my-2 [&>li>button>svg]:text-2xl [&>li>button>svg:hover]:text-gray-400">
      <li>
        <button className={`${isVoted ? "text-red-500" : ""}`} onClick={vote}>
          <BsHeart />
        </button>
      </li>
      <li>
        <button>
          <BsChat />
        </button>
      </li>
      <li>
        <button>
          <BsSend />
        </button>
      </li>
    </menu>
  );
}

export default function FeedCard({ post }: FeedCardProps) {
  return (
    <div className="mb-4 border-b">
      <FeedCardHeader photo={post.photo} username={post.username} />
      <FeedCardBody
        comments={post.comments}
        description={post.description}
        id={post.id}
        isVoted={post.isVoted}
        media={post.media}
        username={post.username}
        votes={post.votes}
      />
    </div>
  );
}
