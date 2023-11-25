import "./Page.css";
import Nav from "../nav/Nav";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Page = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
};

export default Page;
