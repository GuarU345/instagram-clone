import { useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs";

const DateCom = ({ input }) => {
  const [passTime, setPassTime] = useState();

  const getDateOfPost = (date) => {
    const today = new Date().getTime();
    const current = new Date(date).getTime();

    const timeInMs = today - current;

    const minutes = (timeInMs / 1000 / 60).toFixed(0);

    if (minutes < 60) {
      setPassTime(minutes + "min");
      return;
    }

    const hours = (minutes / 60).toFixed(0);

    if (hours < 24) {
      setPassTime(hours + "h");
      return;
    }
  };

  useEffect(() => {
    getDateOfPost(input)
  },[]);

  return <span className="text-gray-500">{passTime}</span>;
};

const HeaderPost = ({ post }) => {
  return (
    <div className="flex flex-row p-2 items-center gap-4">
      {post.photo === null ?
      <img
        className="rounded-full w-10 h-10"
        src="https://w7.pngwing.com/pngs/998/203/png-transparent-black-and-white-no-to-camera-logo-video-on-demand-retail-website-simple-no-miscellaneous-television-text.png"
        alt={`image of user ${post.username}`}
      />
       : 
      <img
        className="rounded-full w-10 h-10"
        src={post.photo}
        alt={`image of user ${post.username}`}
      />
      }
      <div className="flex gap-2">
        <span className="font-bold">{post.username}</span>
        <DateCom input={post.date} />
        <button className="bg-none text-sky-600 font-bold">Seguir</button>
      </div>
      <span className="ml-auto">
        <BsThreeDots />
      </span>
    </div>
  );
};
export default HeaderPost;
