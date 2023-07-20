import {BsThreeDots} from 'react-icons/bs'
const HeaderPost = ({post}) => {
  return (
    <div className="flex flex-row p-2 items-center gap-4">
    <img className="rounded-full w-10 h-10" src={post.icon} alt={`image of user ${post.user}`} />
    <div className="flex flex-col">
        <span>{post.user}</span>
        <span>{post.location}</span>
    </div>
    <span className="ml-auto"><BsThreeDots/></span>
    </div>
  )
  }
export default HeaderPost