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
		
		<div className=' mt-10 md:bg-[#F5F5F5] bg-white border-blue-300 border-[1px] rounded-md md:border-none mx-2 md:pb-5 z-10'>
			
			<div className='max-w-[1200px] mx-auto'>
				<div className='flex justify-between items-center px-2 pb-1 md:pb-0'>
					<div className=''>
						<img className='md:w-44 w-32 md:mt-0 -mt-7 bg-white md:bg-transparent' src={hotDealImg} alt='' />
					</div>
					<div className='border-b-[#F05A2D] md:border-b-2 p-1 md:mt-0 -mt-4'>
						<button className='bg-blue-400 flex justify-center items-center gap-1 md:text-black md:bg-transparent text white rounded-2xl md:rounded-none text-white w-10'>
							All
							<FaChevronRight className='text-[#F05A2D] hidden md:block' />
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
						className='text-center  bg-transparent flex  gap-2 py-2'
					>
						<Tab
							role='tab'
							className='tab  w-16 text-sm bg-[#FF8C00] rounded-md text-white focus:outline-none focus:ring focus:ring-violet-300'
						>
							Shirts
						</Tab>
						<Tab
							role='tab'
							className='tab w-16 text-sm bg-[#FF8C00] rounded-md text-white focus:outline-none focus:ring focus:ring-violet-300'
						>
							Shirts
						</Tab>
						<Tab
							role='tab'
							className='tab w-16 text-sm bg-[#FF8C00] rounded-md text-white focus:outline-none focus:ring focus:ring-violet-300'
						>
							Shirts
						</Tab>
						<Tab
							role='tab'
							className='tab w-16 text-sm  bg-[#FF8C00] rounded-md text-white focus:outline-none focus:ring focus:ring-violet-300'
						>
							Shirts
						</Tab>
						
					</TabList>
					<TabPanel className='bg-transparent md:my-5 my-2 grid lg:grid-cols-8 md:grid-cols-4 grid-cols-4 gap-2'>

						<div className='md:border-2 md:w-32 md:h-56 bg-white'>
							<img className='md:w-52 md:h-40 w-20 h-22' src={tShirt} alt='' />
							<div className='flex justify-center items-center md:flex-col text-[8px]'>
							<p className='flex justify-start items-center gap-1 md:pl-2'>
								<FaBangladeshiTakaSign className='hidden md:block' />
								<p className='font-bold'>110</p>
							</p>
							<del className='flex items-center opacity-30 md:-mt-2 pl-1'>
								<FaBangladeshiTakaSign className='opacity-70 hidden md:block' />
								<p className=''>110</p>
							</del>
							</div>
						</div>
						<div className='md:border-2 md:w-32 md:h-56 bg-white'>
							<img className='md:w-52 md:h-40 w-20 h-22' src={tShirt} alt='' />
							<div className='flex justify-center items-center md:flex-col text-[8px]'>
							<p className='flex justify-start items-center gap-1 md:pl-2'>
								<FaBangladeshiTakaSign className='hidden md:block' />
								<p className='font-bold'>110</p>
							</p>
							<del className='flex items-center opacity-30 md:-mt-2 pl-1'>
								<FaBangladeshiTakaSign className='opacity-70 hidden md:block' />
								<p className=''>110</p>
							</del>
							</div>
						</div>
						<div className='md:border-2 md:w-32 md:h-56 bg-white'>
							<img className='md:w-52 md:h-40 w-20 h-22' src={tShirt} alt='' />
							<div className='flex justify-center items-center md:flex-col text-[8px]'>
							<p className='flex justify-start items-center gap-1 md:pl-2'>
								<FaBangladeshiTakaSign className='hidden md:block' />
								<p className='font-bold'>110</p>
							</p>
							<del className='flex items-center opacity-30 md:-mt-2 pl-1'>
								<FaBangladeshiTakaSign className='opacity-70 hidden md:block' />
								<p className=''>110</p>
							</del>
							</div>
						</div>
						<div className='md:border-2 md:w-32 md:h-56 bg-white'>
							<img className='md:w-52 md:h-40 w-20 h-22' src={tShirt} alt='' />
							<div className='flex justify-center items-center md:flex-col text-[8px]'>
							<p className='flex justify-start items-center gap-1 md:pl-2'>
								<FaBangladeshiTakaSign className='hidden md:block' />
								<p className='font-bold'>110</p>
							</p>
							<del className='flex items-center opacity-30 md:-mt-2 pl-1'>
								<FaBangladeshiTakaSign className='opacity-70 hidden md:block' />
								<p className=''>110</p>
							</del>
							</div>
						</div>
					
						
					</TabPanel>
					<TabPanel className='bg-transparent'></TabPanel>
					<TabPanel className='bg-transparent'></TabPanel>
					<TabPanel className='bg-transparent'></TabPanel>
				</Tabs>

				{/* tab part end */}
			</div>
			<div className='md:flex md:justify-end mr-10 hidden'>
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