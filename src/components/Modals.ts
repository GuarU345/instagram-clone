import React from "react";
import CreatePost from "./CreatePost";

export enum ModalNames {
  CREATE_POST = "create_post",
}

export const ModalList: { [key: string]: React.ElementType } = {
  [ModalNames.CREATE_POST]: CreatePost,
};
