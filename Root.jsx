import { Outlet } from "react-router-dom";
import Footer from "./src/components/footer/Footer";
import Navbar from "./src/components/navbar/Navbar";
import Navbar2 from "./src/components/navbar2/Navbar2";
import MobileFooter from "./src/components/mobileFooter/MobileFooter";


const Root = () => {
    return (
        <div>
            <Navbar/>
            <Navbar2/>
            <Outlet/>
            <Footer/>
            <MobileFooter/>
            
        </div>
    );
};

export default Root;