

import { Helmet } from "react-helmet";
import Banner from "../../components/banner/Banner";

import HotDeal from "../../components/hotDeal/HotDeal";
import MobileBike from "../../components/mobileBike/MobileBike";

import MobileFram from "../../components/mobileFrame/MobileFram";

import PopularItem from "../../components/popularItem/PopularItem";
import SwiperMobile from "../../components/swiperMobile/SwiperMobile";



const HomeMain = () => {
    return (
        <>

          <Helmet>
                <meta charSet="utf-8" />
                <title>Ajker Deal | Home</title>
                <link rel="canonical" href="http://static.ajkerdeal.com/images/dealdetails/ad-logo.svg" />
            </Helmet>
        
       
              <Banner />
              <SwiperMobile/>
              <HotDeal/>
              <MobileFram/>
              <PopularItem/>
              <MobileBike/>
            
              
       
          </>
    );
};

export default HomeMain;