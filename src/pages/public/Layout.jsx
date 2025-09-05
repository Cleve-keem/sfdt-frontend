import { Outlet } from "react-router";
import Footer from "../../components/Footer";
import ProfileBar from "../../components/ProfileBar";
import Navbar from "../../components/Navbars/Navbar";
import ContactUs from "../../components/ContactUs";

const PublicLayout = () => {
  return (
    <main className="flex flex-col min-h-screen">
      <ProfileBar />
      <Navbar />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};

export default PublicLayout;
