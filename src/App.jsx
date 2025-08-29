import Navbar from "./components/Navbars/Navbar";
import HeroSlider from "./components/HeroSlider";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <HeroSlider />
    </div>
  );
}

export default App;
