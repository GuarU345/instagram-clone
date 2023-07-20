import BodyPost from "./BodyPost"
import HeaderPost from "./HeaderPost"

const Post = ({posts}) => {
  return posts.map(post => <div key={post.id_post}>
          <HeaderPost post={post}/>
          <BodyPost post={post}/>
  </div>)
}

export default Post