// import Banner from './components/banner/Banner';
// import Footer from './components/footer/Footer';

import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";
import HotDeal from "../../components/hotDeal/HotDeal";
import MobileBike from "../../components/mobileBike/MobileBike";
import MobileFooter from "../../components/mobileFooter/MobileFooter";
import MobileFram from "../../components/mobileFrame/MobileFram";
import Navbar from "../../components/navbar/Navbar";
import Navbar2 from "../../components/navbar2/Navbar2";
import PopularItem from "../../components/popularItem/PopularItem";
import SwiperMobile from "../../components/swiperMobile/SwiperMobile";

// import HotDeal from './components/hotDeal/HotDeal';
// import MobileBike from './components/mobileBike/MobileBike';
// import MobileFooter from './components/mobileFooter/MobileFooter';
// import MobileFram from './components/mobileFrame/MobileFram';
// import Navbar from './components/navbar/Navbar';
// import Navbar2 from './components/navbar2/Navbar2';
// import PopularItem from './components/popularItem/PopularItem';
// import SwiperMobile from './components/swiperMobile/SwiperMobile';

const Home = () => {
    return (
        <>
        <Navbar />
        <Navbar2 />
              <Banner />
              <SwiperMobile/>
              <HotDeal/>
              <Footer/>
              <MobileFram/>
              <PopularItem/>
              <MobileBike/>
              <MobileFooter/>
              
       
          </>
    );
};

export default Home;