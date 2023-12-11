import "./Page.css";
import Nav from "../nav/Nav";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Page = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-grow">
        <Nav />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Page;
