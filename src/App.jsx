import Navbar from "./components/Navbar/Navbar"

function App() {

  return (
    <div className="grid grid-cols-3">
     <Navbar/>
     <div>
      Content
     </div>
     <div>
      User
     </div>
    </div>
  )
}

export default App
