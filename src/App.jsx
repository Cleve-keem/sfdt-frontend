// import Footer from "./components/Footer";
import Navbar from "./components/Navbars/Navbar";
import HeroSlider from "./components/HeroSlider";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <HeroSlider />
      <Footer/>
    </div>
  );
}

export default App;
