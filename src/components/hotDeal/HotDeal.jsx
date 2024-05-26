import hotDealImg from '../../assets/hot-deal-logo.gif';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import tShirt from '../../assets/t-shirt.webp';
import { FaBangladeshiTakaSign } from 'react-icons/fa6';
import Gadgets from '../gadgets/Gadgets';
import Shirts from '../shirts/Shirts';
import FramPart from '../framPart/FramPart';
import Motorbike from '../motorBike/Motorbike';


const HotDeal = () => {
	const [tabIndex, setTabIndex] = useState(0);
	return (
		<div className=' mt-10 bg-[#F5F5F5] pb-5'>
			<div className='max-w-[1200px] mx-auto'>
				<div className='flex justify-between items-center px-2 '>
					<div>
						<img className='md:w-44 w-36' src={hotDealImg} alt='' />
					</div>
					<div className='border-b-[#F05A2D] border-b-2 p-1'>
						<button className='flex justify-center items-center gap-1 '>
							All
							<FaChevronRight className='text-[#F05A2D]' />
						</button>
					</div>
				</div>

				{/* tab part start */}
				<Tabs
					selectedIndex={tabIndex}
					onSelect={(index) => setTabIndex(index)}
					className='flex justify-center flex-col items-center'
				>
					<TabList
						role='tablist'
						className='text-center  bg-transparent flex md:flex-row flex-col  gap-2 py-2'
					>
						<Tab
							role='tab'
							className='tab md:w-20 w-40 bg-[#FF8C00] rounded-md text-white focus:outline-none focus:ring focus:ring-violet-300'
						>
							T-Shirts
						</Tab>
						<Tab
							role='tab'
							className='tab md:w-20 w-40 bg-[#FF8C00] rounded-md text-white focus:outline-none focus:ring focus:ring-violet-300'
						>
							T-Shirts
						</Tab>
						<Tab
							role='tab'
							className='tab md:w-20 w-40 bg-[#FF8C00] rounded-md text-white focus:outline-none focus:ring focus:ring-violet-300'
						>
							T-Shirts
						</Tab>
						<Tab
							role='tab'
							className='tab md:w-20 w-40 bg-[#FF8C00] rounded-md text-white focus:outline-none focus:ring focus:ring-violet-300'
						>
							T-Shirts
						</Tab>
						<Tab
							role='tab'
							className='tab md:w-20 w-40 bg-[#FF8C00] rounded-md text-white focus:outline-none focus:ring focus:ring-violet-300'
						>
							T-Shirts
						</Tab>
						<Tab
							role='tab'
							className='tab md:w-20 w-40 bg-[#FF8C00] rounded-md text-white focus:outline-none focus:ring focus:ring-violet-300'
						>
							T-Shirts
						</Tab>
						<Tab
							role='tab'
							className='tab md:w-20 w-40 bg-[#FF8C00] rounded-md text-white focus:outline-none focus:ring focus:ring-violet-300'
						>
							T-Shirts
						</Tab>
					</TabList>
					<TabPanel className='bg-transparent my-5 grid lg:grid-cols-8 md:grid-cols-4 grid-cols-2 gap-2 '>
						<div className='border-2 w-36 h-56 bg-white'>
							<img className='w-56 h-40' src={tShirt} alt='' />
							<p className='flex justify-start items-center gap-1 pl-2'>
								<FaBangladeshiTakaSign />
								<p className='font-bold'>110</p>
							</p>
							<del className='flex items-center opacity-30 -mt-2 pl-1'>
								<FaBangladeshiTakaSign className='opacity-70' />
								<p className=''>110</p>
							</del>
						</div>
						<div className='border-2 w-36 h-56 bg-white'>
							<img className='w-56 h-40' src={tShirt} alt='' />
							<p className='flex justify-start items-center gap-1 pl-2'>
								<FaBangladeshiTakaSign />
								<p className='font-bold'>110</p>
							</p>
							<del className='flex items-center opacity-30 -mt-2 pl-1'>
								<FaBangladeshiTakaSign className='opacity-70' />
								<p className=''>110</p>
							</del>
						</div>
						<div className='border-2 w-36 h-56 bg-white'>
							<img className='w-56 h-40' src={tShirt} alt='' />
							<p className='flex justify-start items-center gap-1 pl-2'>
								<FaBangladeshiTakaSign />
								<p className='font-bold'>110</p>
							</p>
							<del className='flex items-center opacity-30 -mt-2 pl-1'>
								<FaBangladeshiTakaSign className='opacity-70' />
								<p className=''>110</p>
							</del>
						</div>
						<div className='border-2 w-36 h-56 bg-white'>
							<img className='w-56 h-40' src={tShirt} alt='' />
							<p className='flex justify-start items-center gap-1 pl-2'>
								<FaBangladeshiTakaSign />
								<p className='font-bold'>110</p>
							</p>
							<del className='flex items-center opacity-30 -mt-2 pl-1'>
								<FaBangladeshiTakaSign className='opacity-70' />
								<p className=''>110</p>
							</del>
						</div>
						<div className='border-2 w-36 h-56 bg-white'>
							<img className='w-56 h-40' src={tShirt} alt='' />
							<p className='flex justify-start items-center gap-1 pl-2'>
								<FaBangladeshiTakaSign />
								<p className='font-bold'>110</p>
							</p>
							<del className='flex items-center opacity-30 -mt-2 pl-1'>
								<FaBangladeshiTakaSign className='opacity-70' />
								<p className=''>110</p>
							</del>
						</div>
						<div className='border-2 w-36 h-56 bg-white'>
							<img className='w-56 h-40' src={tShirt} alt='' />
							<p className='flex justify-start items-center gap-1 pl-2'>
								<FaBangladeshiTakaSign />
								<p className='font-bold'>110</p>
							</p>
							<del className='flex items-center opacity-30 -mt-2 pl-1'>
								<FaBangladeshiTakaSign className='opacity-70' />
								<p className=''>110</p>
							</del>
						</div>
						<div className='border-2 w-36 h-56 bg-white'>
							<img className='w-56 h-40' src={tShirt} alt='' />
							<p className='flex justify-start items-center gap-1 pl-2'>
								<FaBangladeshiTakaSign />
								<p className='font-bold'>110</p>
							</p>
							<del className='flex items-center opacity-30 -mt-2 pl-1'>
								<FaBangladeshiTakaSign className='opacity-70' />
								<p className=''>110</p>
							</del>
						</div>
						<div className='border-2 w-36 h-56 bg-white'>
							<img className='w-56 h-40' src={tShirt} alt='' />
							<p className='flex justify-start items-center gap-1 pl-2'>
								<FaBangladeshiTakaSign />
								<p className='font-bold'>110</p>
							</p>
							<del className='flex items-center opacity-30 -mt-2 pl-1'>
								<FaBangladeshiTakaSign className='opacity-70' />
								<p className=''>110</p>
							</del>
						</div>
					</TabPanel>
					<TabPanel className='bg-transparent'></TabPanel>
					<TabPanel className='bg-transparent'></TabPanel>
					<TabPanel className='bg-transparent'></TabPanel>
				</Tabs>

				{/* tab part end */}
			</div>
			<div className='flex justify-end mr-10'>
			<button className='flex justify-center items-center gap-2 font-medium p-2 bg-[#F26734] text-white '>More <FaChevronDown className='opacity-80'/></button>
			</div>


			<Gadgets/>
			<Shirts/>
			<Motorbike/>
			<FramPart/>
		</div>
	);
};

export default HotDeal;
