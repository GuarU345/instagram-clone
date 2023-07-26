import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";
import OpenPostModalProvider from "./components/contexts/OpenPostModal";

function App() {
  return (
    <OpenPostModalProvider>
      <div className="grid grid-cols-3">
        <Navbar />
        <div className="w-[530px]">
          <Main />
        </div>
        <div>User</div>
      </div>
    </OpenPostModalProvider>
  );
}

export default App;
