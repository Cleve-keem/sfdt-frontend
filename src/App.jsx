import Navbar from "./components/Navbars/Navbar";
import HeroSlider from "./components/HeroSlider";
import ProfileBar from "./components/ProfileBar";
import WelcomeText from "./components/WelcomeText";
import CourseCards from "./components/CourseCards";
import LearningPaths from "./components/LearningPaths";
import Footer from "./components/Footer";
import CourseText from "./components/CourseText";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <ProfileBar />
      <Navbar />
      <HeroSlider />
      <WelcomeText />
      <CourseText />
      <CourseCards />
      <LearningPaths/>
      <Footer />
    </div>
  );
}

export default App;
