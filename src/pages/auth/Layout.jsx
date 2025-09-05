import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <main className="min-h-screen flex flex-col">
      AuthLayout
      <div className="flex-grow">
        <Outlet />
      </div>
    </main>
  );
};

export default AuthLayout;
