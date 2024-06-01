// import Banner from './components/banner/Banner';
// import Footer from './components/footer/Footer';

import Banner from "../../components/banner/Banner";

import HotDeal from "../../components/hotDeal/HotDeal";
import MobileBike from "../../components/mobileBike/MobileBike";

import MobileFram from "../../components/mobileFrame/MobileFram";

import PopularItem from "../../components/popularItem/PopularItem";
import SwiperMobile from "../../components/swiperMobile/SwiperMobile";



const Home = () => {
    return (
        <>
        
       
              <Banner />
              <SwiperMobile/>
              <HotDeal/>
              {/* <Footer/> */}
              <MobileFram/>
              <PopularItem/>
              <MobileBike/>
            
              
       
          </>
    );
};

export default Home;