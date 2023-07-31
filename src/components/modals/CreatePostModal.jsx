import { useState } from "react"


const CreatePostModal = ({post}) => {
  const [comment,setComment] = useState("")

  const handleTextAreaChange = (event) => {
    const text = event.target.value
    setComment(text)
    post(text)
  }

  return (
    <div className="flex absolute bottom-0 w-full items-center border-2 z-10 bg-white">
        <form className="flex flex-col w-full">
          <textarea 
          className="w-full outline-none"
          placeholder="Escribe un pie de foto o video..."
          value={comment}
          onChange={handleTextAreaChange}>
          </textarea>
        </form>
    </div>
  )
}

export default CreatePostModal