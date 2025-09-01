import Navbar from "./components/Navbars/Navbar";
import HeroSlider from "./components/HeroSlider";
import Footer from "./components/Footer";
import CourseCards from "./components/CourseCards";
import ProfileBar from "./components/ProfileBar";
import WelcomeText from "./components/WelcomeText";
import LearningPaths from "./components/LearningPaths";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <ProfileBar />
      <Navbar />
      <HeroSlider />
      <WelcomeText />
      <CourseCards />
      <LearningPaths/>
      <Footer />
    </div>
  );
}

export default App;
