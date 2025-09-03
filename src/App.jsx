import { Route, Routes } from "react-router";
import HomePage from "./pages/public/HomePage";
import PublicLayout from "./pages/public/Layout";
import AuthLayout from "./pages/auth/Layout";
import LoginPage from "./pages/auth/LoginPage";
import SigninPage from "./pages/auth/SigninPage";
import AboutPage from "./pages/public/AboutPage";
import CodingApplication from "./pages/public/CodingApplication";
import WaecApplication from "./pages/public/WaecApplication";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/application/coding" element={<CodingApplication />} />
          <Route path="/application/waec" element={<WaecApplication />} />
        </Route>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/auth/Signin" element={<SigninPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
