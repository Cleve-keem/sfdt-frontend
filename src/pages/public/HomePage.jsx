import ContactUs from "../../components/ContactUs";
import CourseCards from "../../components/CourseCards";
import CourseText from "../../components/CourseText";
import HeroSlider from "../../components/HeroSlider";
import LearningPaths from "../../components/LearningPaths";
import WelcomeText from "../../components/WelcomeText";

const HomePage = () => {
  return (
    <>
      <HeroSlider />
      <ContactUs />
      <WelcomeText />
      <CourseText />
      <CourseCards />
      <LearningPaths />
    </>
  );
};

export default HomePage;
