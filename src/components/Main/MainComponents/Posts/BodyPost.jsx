import { BsHeart, BsChat, BsSend, BsSave } from "react-icons/bs";

const BodyPost = ({ post }) => {
    return (
        <div>
          <img
            src={post.image}
            alt="image of post"
          />
          <ul className="flex text-2xl gap-4 p-2 items-center">
            <li className="cursor-pointer hover:text-gray-400">
              <BsHeart />
            </li>
            <li className="cursor-pointer hover:text-gray-400">
              <BsChat className="transform -scale-x-100" />
            </li>
            <li className="cursor-pointer hover:text-gray-400">
              <BsSend />
            </li>
            <li className="ml-auto cursor-pointer hover:text-gray-400">
              <span>
                <BsSave />
              </span>
            </li>
          </ul>
          <section className="flex flex-col p-2">
            <span className="">2 Me gusta</span>
            <span>Este es el contenido en texto de la publicacion</span>
            <a className="text-gray-400" href="">
              Ver los 2 comentarios
            </a>
            <form>
              <input
                className="appearance-none outline-none"
                placeholder="Añade un comentario..."
              />
            </form>
          </section>
          <hr />
        </div>
      )
}

export default BodyPost;
