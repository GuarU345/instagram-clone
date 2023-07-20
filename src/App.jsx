import Main from "./components/Main/Main"
import Navbar from "./components/Navbar/Navbar"

function App() {

  return (
    <div className="grid grid-cols-3">
     <Navbar/>
     <div className="w-[530px]">
      <Main/>
     </div>
     <div>
      User
     </div>
    </div>
  )
}

export default App
