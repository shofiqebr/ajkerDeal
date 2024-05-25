import { FaChevronRight } from 'react-icons/fa';
import banner from '../../assets/banner.jpg';

const Banner = () => {
	return (
		<div className='flex'>
			<div className='bg-[#576BB2] h-80 lg:w-32 lg:block hidden mt-3'></div>
			<div className='flex flex-col-reverse md:flex-row mt-3'>
				<div className='bg-white mx-auto h-80 w-60 pt-2 border-b-2'>
					
					<ul className=''>
						<li className='py-[1px] flex justify-between items-center px-2'>
							<a href='#'>Mens Shopping</a>
							<FaChevronRight className='opacity-60 text-xs' />
						</li>
						<li className='py-[1px] flex justify-between items-center px-2'>
							<a href='#'>Womens Fashion</a>
							<FaChevronRight className='opacity-60 text-xs' />
						</li>
						<li className='py-[1px] flex justify-between items-center px-2'>
							<a href='#'>Household</a>
							<FaChevronRight className='opacity-60 text-xs' />
						</li>
						<li className='py-[1px] flex justify-between items-center px-2'>
							<a href='#'>Kitchen And Dining</a>
							<FaChevronRight className='opacity-60 text-xs' />
						</li>
						<li className='py-[1px] flex justify-between items-center px-2'>
							<a href='#'>Computer Accessories</a>
							<FaChevronRight className='opacity-60 text-xs' />
						</li>
						<li className='py-[1px] flex justify-between items-center px-2'>
							<a href='#'>Gadgets</a>
							<FaChevronRight className='opacity-60 text-xs' />
						</li>
						<li className='py-[1px] flex justify-between items-center px-2'>
							<a href='#'>Jewellery</a>
							<FaChevronRight className='opacity-60 text-xs' />
						</li>
						<li className='py-[1px] flex justify-between items-center px-2'>
							<a href='#'>Home Decor</a>
							<FaChevronRight className='opacity-60 text-xs' />
						</li>
						<li className='py-[1px] flex justify-between items-center px-2'>
							<a href='#'>Cosmetics</a>
							<FaChevronRight className='opacity-60 text-xs' />
						</li>
						<li className='py-[1px] flex justify-between items-center px-2'>
							<a href='#'>All Categories &gt;&gt;</a>
						</li>
						
					</ul>
				</div>
				<img className='md:h-80 lg:w-[900px]' src={banner} alt='' />
			</div>
			<div className='bg-[#576BB2] h-80 w-16 lg:block hidden mt-3'></div>
		</div>
	);
};

export default Banner;
