import hotDealImg from '../../assets/hot-deal-logo.gif';
import { FaChevronRight } from 'react-icons/fa';

const HotDeal = () => {
	return (
		<div className=' max-w-[1200px] mx-auto'>
			<div className='flex justify-between items-center '>
				<div>
					<img className='w-44' src={hotDealImg} alt='' />
				</div>
				<div className='border-b-[#F05A2D] border-b-2 p-1'>
					<button className='flex justify-center items-center gap-1 '>
						All
						<FaChevronRight className='text-[#F05A2D]' />
					</button>
				</div>
            </div>
            {/* tab part start */}
            


            {/* tab part end */}
		</div>
	);
};

export default HotDeal;
