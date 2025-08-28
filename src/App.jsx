import HeroSlider from "./components/HeroSlider";
import Navbar from "./components/Navbar";
import Navber from "./components/Navbar";
import NavDropDown from "./components/NavDropDown";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
    <Navber/>
    <h1 className="font-semibold text-center text-4xl mt-24">
      Welcome to Sound Foundation Tech School
    </h1>
   <HeroSlider/>
    </div>
  );
}

export default App;
