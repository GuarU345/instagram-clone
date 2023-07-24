import CombinedIcons from "./CombinedIcons"

const PostModal = () => {
  return (
    <div className="container h-screen grid place-content-center absolute z-[1px]">
        <div className="absolute top-[-135px] bg-white shadow-2xl z-10 w-[750px] h-[800px] transform  rounded-lg">
            <header className="h-10 flex items-center justify-center">
                <h3 className="">Crear nueva publicacion</h3>
            </header>
            <hr />
            <body className="flex flex-col items-center gap-8 justify-center h-[659px]">
                <CombinedIcons/>
                <h2 className="text-lg">Arrastra las fotos y los vídeos aquí</h2>
                <button className="bg-sky-500 p-2 h-8 text-white text-sm rounded-md">Seleccionar del ordenador</button>
            </body>
        </div>
    </div>
  )
}

export default PostModal