import { Outlet } from "react-router-dom";
import Navbar from "../../components/Shared/Navbar/Navbar";
import Footer from "../../components/Shared/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div style={{ minHeight: "calc(100vh - 135px)" }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
