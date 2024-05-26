import { FaChevronRight } from "react-icons/fa";
import bikeImg from '../../assets/bike.webp'
import { FaBangladeshiTakaSign } from "react-icons/fa6";


const Motorbike = () => {
    return (
        <div className="bg-[#808080] max-w-[1200px] mx-auto px-5 mt-10 md:block hidden" >

            <div className="flex justify-between px-2 ">
                <h1 className="text-white text-2xl pt-2">Motor Bike</h1>
                <p className="flex gap-2 justify-center items-center text-white text-xs">More <FaChevronRight /></p>
            </div>



            {/* card start */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-5 place-items-center py-5 ">
            <div className="bg-white w-32">
                <div className="flex justify-end">

                <section className="bg-[#E0CF97] w-20 h- text-sm rounded-bl-lg text-center font-bold ">Used</section>
                </div>
                <img className="p-1 mb-5" src={bikeImg} alt="" />
                <p className="pl-1">ATV Quad Bike</p>
                <p className="pl-1 flex justify-start items-center text-red-400 pb-2"><FaBangladeshiTakaSign /> 1,80,000 /-</p>
            </div>
            <div className="bg-white w-32">
                <div className="flex justify-end">

                <section className="bg-[#E0CF97] w-20 h- text-sm rounded-bl-lg text-center font-bold ">Used</section>
                </div>
                <img className="p-1 mb-5" src={bikeImg} alt="" />
                <p className="pl-1">ATV Quad Bike</p>
                <p className="pl-1 flex justify-start items-center text-red-400 pb-2"><FaBangladeshiTakaSign /> 1,80,000 /-</p>
            </div>
            <div className="bg-white w-32">
                <div className="flex justify-end">

                <section className="bg-[#E0CF97] w-20 h- text-sm rounded-bl-lg text-center font-bold ">Used</section>
                </div>
                <img className="p-1 mb-5" src={bikeImg} alt="" />
                <p className="pl-1">ATV Quad Bike</p>
                <p className="pl-1 flex justify-start items-center text-red-400 pb-2"><FaBangladeshiTakaSign /> 1,80,000 /-</p>
            </div>
            <div className="bg-white w-32">
                <div className="flex justify-end">

                <section className="bg-[#E0CF97] w-20 h- text-sm rounded-bl-lg text-center font-bold ">Used</section>
                </div>
                <img className="p-1 mb-5" src={bikeImg} alt="" />
                <p className="pl-1">ATV Quad Bike</p>
                <p className="pl-1 flex justify-start items-center text-red-400 pb-2"><FaBangladeshiTakaSign /> 1,80,000 /-</p>
            </div>
            <div className="bg-white w-32">
                <div className="flex justify-end">

                <section className="bg-[#E0CF97] w-20 h- text-sm rounded-bl-lg text-center font-bold ">Used</section>
                </div>
                <img className="p-1 mb-5" src={bikeImg} alt="" />
                <p className="pl-1">ATV Quad Bike</p>
                <p className="pl-1 flex justify-start items-center text-red-400 pb-2"><FaBangladeshiTakaSign /> 1,80,000 /-</p>
            </div>
            <div className="bg-white w-32">
                <div className="flex justify-end">

                <section className="bg-[#E0CF97] w-20 h- text-sm rounded-bl-lg text-center font-bold ">Used</section>
                </div>
                <img className="p-1 mb-5" src={bikeImg} alt="" />
                <p className="pl-1">ATV Quad Bike</p>
                <p className="pl-1 flex justify-start items-center text-red-400 pb-2"><FaBangladeshiTakaSign /> 1,80,000 /-</p>
            </div>
            <div className="bg-white w-32">
                <div className="flex justify-end">

                <section className="bg-[#E0CF97] w-20 h- text-sm rounded-bl-lg text-center font-bold ">Used</section>
                </div>
                <img className="p-1 mb-5" src={bikeImg} alt="" />
                <p className="pl-1">ATV Quad Bike</p>
                <p className="pl-1 flex justify-start items-center text-red-400 pb-2"><FaBangladeshiTakaSign /> 1,80,000 /-</p>
            </div>
            <div className="bg-white w-32">
                <div className="flex justify-end">

                <section className="bg-[#E0CF97] w-20 h- text-sm rounded-bl-lg text-center font-bold ">Used</section>
                </div>
                <img className="p-1 mb-5" src={bikeImg} alt="" />
                <p className="pl-1">ATV Quad Bike</p>
                <p className="pl-1 flex justify-start items-center text-red-400 pb-2"><FaBangladeshiTakaSign /> 1,80,000 /-</p>
            </div>
            </div>
            
            {/* card end */}
        </div>
    );
};

export default Motorbike;