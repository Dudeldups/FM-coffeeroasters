import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ScrollToTop from "../components/ScrollToTop";

const MainLayout = () => {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <ScrollToTop />

      <Header />

      <main className="flex-1 px-6 md:px-10">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};
export default MainLayout;
