import InstagramStories from "./MainComponents/InstagramStories"
import Post from "./MainComponents/Posts/Post"
import {POSTS as posts} from "../../mocks/posts"

const Main = () => {
  return (
    <div>
        <InstagramStories/>
        <Post posts={posts}/>
    </div>
  )
}

export default Main