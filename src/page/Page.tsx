import "./Page.css";
import Nav from "../nav/Nav";
import { Outlet } from "react-router-dom";

const Page = () => {
    return (
        <>
        <Nav />
        <div id="buffer"></div>
        <Outlet />
        </>
    );
}

export default Page;
