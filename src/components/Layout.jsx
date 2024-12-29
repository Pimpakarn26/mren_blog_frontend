import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r 
    from-blue-500 to-purple-600">
      <header>
        <Header />
      </header>
      <main className="flex-grow flex items-center justify-center container 
      min-h-screen mx-auto pt-5 mt-5 sm:p-6 lg:p-8">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
