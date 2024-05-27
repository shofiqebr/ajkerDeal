import { FaBangladeshiTakaSign, FaChevronRight } from "react-icons/fa6";
import bikeImg from '../../assets/bike.webp'

const MobileBike = () => {
    return (
        <div className="md:hidden block">
            <div className="flex justify-between items-center bg-[#F96331] px-4 py-1">
                <p className="text-white font-bold">Motor Bike</p>
                <p className="flex justify-center items-center text-white font-bold"> More <FaChevronRight/></p>
                
              
            </div>
              {/* card start here */}
                
              <div className="bg-[#fdecb5]">
                <div className="bg-white w-20 border-[#E0CF97] border-2  rounded my-3">
                <div className="flex justify-end ">

                {/* <section className="bg-[#E0CF97] w-12 h-4 flex
                justify-center items-center  text-sm rounded-bl-lg text-center font-bold z-10 ">Used</section> */}
                </div>
                <img className="p-1 w-20 mb-1" src={bikeImg} alt="" />
                <p className="pl-1 text-[10px] text-center text-blue-700 font-bold">ATV Quad</p>
                <p className="pl-3 text-[10px] flex justify-start items-center text-red-500 font-bold pb-2"><FaBangladeshiTakaSign /> 1,80,000 /-</p>
            </div>
                </div>
                {/* card end here */}
        </div>
    );
};

export default MobileBike;