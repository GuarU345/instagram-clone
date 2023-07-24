import InstagramStories from "./MainComponents/InstagramStories"
import Post from "./MainComponents/Posts/Post"
import {POSTS as posts} from "../../mocks/posts"
import { useState } from "react"
import PostModal from "../Navbar/NavbarComponents/PostModal"

const Main = () => {
  const [openPostModal,setOpenPostModal] = useState(false)
  return (
    <div>
        <InstagramStories/>
        {openPostModal ? <PostModal/> : null} 
        <Post posts={posts}/>
    </div>
  )
}

export default Main