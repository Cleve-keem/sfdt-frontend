import Navbar from "./components/Navbars/Navbar";
import HeroSlider from "./components/HeroSlider";
import CourseCards from "./components/CourseCards";
import ProfileBar from "./components/ProfileBar";
import WelcomeText from "./components/WelcomeText";
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
    </div>
  );
}

export default App;
