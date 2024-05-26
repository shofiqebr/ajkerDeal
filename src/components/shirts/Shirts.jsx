import { FaChevronRight } from "react-icons/fa";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import shirt from '../../assets/shirt.webp' 



const Shirts = () => {
    return (
        <div className="">

		<div className="hidden md:block">

            {/* nav start */}
			<div className='navbar bg-[#EBEBEB] flex md:flex-row flex-col h-1 my-4'>
				<div className='flex-1  md:inline-block text-base text-[#0071AC] hover:text-black pl-2'>
					<a href="">Shirts</a>
				</div>

				{/* search start */}
				<div className='flex justify-center items-center '>
					<div className='navbar-end flex justify-center'>
						<div className='form-control'>
							<input
								type='text'
								placeholder='Search'
								className='input input-bordered  md:w-42 w-36 h-8 rounded-none rounded-l-sm bg-[#FFFFFF]'
							/>
						</div>
						<div>
							<button className=' bg-[#4D4D4D] h-8 w-10 flex justify-center items-center text-white rounded-none rounded-r-sm md:mr-10'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='h-7 w-5'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
									/>
								</svg>
							</button>
						</div>

						{/* search end */}
                        <div className="flex justify-center items-center text-[#F26734] gap-5 pl-3">
                            All <FaChevronRight/>
                        </div>

					</div>
				</div>
			</div>

             {/* nav end */}

             {/* card start */}
             <div className="flex justify-center items-center max-w-[1200px] mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-1">
                <div className='border-2 w-36 h-56 bg-white'>
							<img className='w-56 h-40' src={shirt} alt='' />
							<p className='flex justify-start items-center gap-1 pl-2'>
								<FaBangladeshiTakaSign />
								<p className='font-bold'>110</p>
							</p>
							
						</div>
               
                <div className='border-2 w-36 h-56 bg-white'>
							<img className='w-56 h-40' src={shirt} alt='' />
							<p className='flex justify-start items-center gap-1 pl-2'>
								<FaBangladeshiTakaSign />
								<p className='font-bold'>110</p>
							</p>
							
						</div>
                <div className='border-2 w-36 h-56 bg-white'>
							<img className='w-56 h-40' src={shirt} alt='' />
							<p className='flex justify-start items-center gap-1 pl-2'>
								<FaBangladeshiTakaSign />
								<p className='font-bold'>110</p>
							</p>
							
						</div>
                <div className='border-2 w-36 h-56 bg-white'>
							<img className='w-56 h-40' src={shirt} alt='' />
							<p className='flex justify-start items-center gap-1 pl-2'>
								<FaBangladeshiTakaSign />
								<p className='font-bold'>110</p>
							</p>
							
						</div>
                <div className='border-2 w-36 h-56 bg-white'>
							<img className='w-56 h-40' src={shirt} alt='' />
							<p className='flex justify-start items-center gap-1 pl-2'>
								<FaBangladeshiTakaSign />
								<p className='font-bold'>110</p>
							</p>
							
						</div>
                <div className='border-2 w-36 h-56 bg-white'>
							<img className='w-56 h-40' src={shirt} alt='' />
							<p className='flex justify-start items-center gap-1 pl-2'>
								<FaBangladeshiTakaSign />
								<p className='font-bold'>110</p>
							</p>
							
						</div>
                <div className='border-2 w-36 h-56 bg-white'>
							<img className='w-56 h-40' src={shirt} alt='' />
							<p className='flex justify-start items-center gap-1 pl-2'>
								<FaBangladeshiTakaSign />
								<p className='font-bold'>110</p>
							</p>
							
						</div>
                <div className='border-2 w-36 h-56 bg-white'>
							<img className='w-56 h-40' src={shirt} alt='' />
							<p className='flex justify-start items-center gap-1 pl-2'>
								<FaBangladeshiTakaSign />
								<p className='font-bold'>110</p>
							</p>
							
						</div>
                </div>

                </div>


             {/* card end */}


		</div>
	

        </div>
    );
};

export default Shirts;