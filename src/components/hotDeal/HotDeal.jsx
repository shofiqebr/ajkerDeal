import hotDealImg from '../../assets/hot-deal-logo.gif';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import {  useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
// import tShirt from '../../assets/t-shirt.webp';
import { FaBangladeshiTakaSign } from 'react-icons/fa6';
// import Gadgets from '../gadgets/Gadgets';
// import Shirts from '../shirts/Shirts';
// import FramPart from '../framPart/FramPart';
// import Motorbike from '../motorBike/Motorbike';
import { Link } from 'react-router-dom';


const HotDeal = (props) => {
	const {grpData, webItmData, itemData} = props;
	const [tabIndex, setTabIndex] = useState(0);

	const rate = (id) => {
		let fil = itemData.find((item) => item.item_code === id);
		return fil?.standard_rate;
	};

	return (
		
		<div className=' mt-10 md:bg-[#F5F5F5] bg-white border-blue-300 border-[1px] rounded-md md:border-none md:pb-5 z-10 px-2'>
			
			<div className=' mx-auto'>
				<div className='flex justify-between items-center px-2 pb-1 md:pb-0'>
					<div className=''>
						<img className='md:w-44 w-32 md:mt-0 -mt-7 bg-white md:bg-transparent' src={hotDealImg} alt='' />
					</div>
					<div className='border-b-[#F05A2D] md:border-b-2 p-1 md:mt-0 -mt-4 '>
						<Link to="/allCategory">
						<button className='bg-blue-400 flex justify-center items-center gap-1 md:text-black md:bg-transparent text white rounded-2xl md:rounded-none text-white w-10 '>
							All
							<FaChevronRight className='text-[#F05A2D] hidden md:block' />
						</button>
						</Link>
					</div>
				</div>

				{/* tab part start */}
				<Tabs
					selectedIndex={tabIndex}
					onSelect={(index) => setTabIndex(index)}
					className='flex justify-center  flex-col items-center  '
				>
					<TabList
						role='tablist'
						className='text-center bg-transparent flex  gap-2 py-2 '
					>
						
		{grpData.map((grp, index) => (
			
						<Tab
						key={index}
							role='tab'
							className='tab md:w-20 w-16 md:h-10 text-xs border bg-[#FF8C00] rounded-md text-white   focus:outline-none focus:ring focus:ring-violet-300 '
						>
						{grp.name}
						</Tab>
						))}
						
						
					</TabList>
					

			{grpData.map((grp, index) => (
					<TabPanel key={index} className='bg-transparent md:my-5 my-2 '>

						<div className='flex justify-center items-center'>

						
						
						
						
						{webItmData
                    .filter((item) => item.item_group === grp.name)
                    .map((itm, index) => (


						<Link key={index} to={`/item/${itm?.item_code}`}>
						<div className='md:border-2  md:h-56 bg-white'>
							<img className='md:w-44 md:h-40 w-20 h-22' src={`https://erp.icfix.com.bd${itm?.thumbnail}`} alt='' />
							<div className='flex justify-center items-center md:flex-col md:text-sm text-[8px]'>
							<p>{itm.web_item_name.substring(0, 20)}{itm.web_item_name.length > 20 ? '...' : ''}</p>
							<p className='flex justify-start items-center gap-1 md:pl-2'>
								
								<FaBangladeshiTakaSign className='hidden md:block' />
								<p className='font-bold'>{rate(itm.item_code)}</p>
							</p>
							<del className='flex items-center md:opacity-30 opacity-80 md:-mt-2 pl-1'>
								<FaBangladeshiTakaSign className='opacity-70 hidden md:block' />
								<p className=''>{rate(itm.item_code)-2}</p>
							</del>
							</div>
						</div>
						</Link>

           ))}

						
						
					
						</div>
						{/*  */}
					
						
					</TabPanel>

            ))}
					
				</Tabs>

				{/* tab part end */}
			</div>
			<div className='md:flex md:justify-end   hidden lg:mr-24'>
			<button className='flex justify-center items-center gap-2 font-medium p-2 bg-[#F26734] text-white '>More <FaChevronDown className='opacity-80'/></button>
			</div>


		
	
		</div>
	);
};

export default HotDeal;