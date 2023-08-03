import React, { useContext, useEffect, useState } from "react";
import { fetchProfileData } from "../../services/user";
import { AuthContext } from "../contexts/AuthContext";
import "../../App.css";
import PostCard from "./PostCard";

const Profile = () => {
  const { getToken } = useContext(AuthContext);
  const [userData, setUserData] = useState([]);

  const getProfileData = async () => {
    const token = getToken();
    const resp = await fetchProfileData(token);
    setUserData(resp);
  };

  useEffect(() => {
    getProfileData();
  }, []);

  return (
    <div className="flex flex-col gap-8 items-center">
      <div className="flex p-2 pt-10 gap-20">
        <section className="">
          <img
            src="https://avatars.githubusercontent.com/u/95324317?v=4"
            alt=""
            className="rounded-full w-[110px]"
          />
        </section>
        <section className="flex flex-col gap-4">
          <span className="text-lg">{userData.username}</span>
          <div className="flex gap-8">
            <span>
              <strong>{userData.countPosts}</strong> publicaciones
            </span>
            <span>
              <strong>{userData.countFollower}</strong> seguidores
            </span>
            <span>
              <strong>{userData.countFollowing}</strong> seguidos
            </span>
          </div>
          <strong className="text-sm">{userData.name}</strong>
        </section>
      </div>
      <hr className="w-full" />
      <section className="flex flex-wrap gap-2 w-full">
        {userData?.posts?.map((post) => (
          <PostCard key={post.id} post={post} user={userData.id} />
        ))}
      </section>
    </div>
  );
};

export default Profile;
