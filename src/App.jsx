import CourseCards from "./components/CourseCards";
import Navbar from "./components/Navbar";
import Navber from "./components/Navbar";
import NavDropDown from "./components/NavDropDown";
import ProfileBar from "./components/ProfileBar";
import WelcomeText from "./components/WelcomeText";

function App() {
  return (
    <>
      <ProfileBar />
      <Navbar />
      <h1 className="font-semibold text-center text-4xl mt-24">
        Welcome to Sound Foundation Tech School
      </h1>
      <WelcomeText />
      <CourseCards />
    </>
  );
}

export default App;
