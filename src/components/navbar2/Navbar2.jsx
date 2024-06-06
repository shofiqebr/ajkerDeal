import { BsThreeDotsVertical } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa";
import { GrUserManager } from "react-icons/gr";
import { IoIosHeartEmpty } from "react-icons/io";
import category1 from '../../assets/category1.png'
import { Link } from "react-router-dom";

// import logo from '../../assets/logo.svg';
const Navbar2 = () => {

	return (
		<div>
			<div className='bg-base-100 md:w-full flex justify-center items-center md:pt-10 px-4'>
				<div className='flex-1'>
					<Link to='/'>
						<img
							className='md:w-28 w-20 lg:ml-36'
							src='http://static.ajkerdeal.com/images/dealdetails/ad-logo.svg'
							alt=''
						/>
					</Link>
				</div>

				{/* search start */}
				<div className='flex justify-center items-center'>
					<div className='navbar-end flex justify-center pt-2'>
						<div className='form-control'>
							<input
								type='text'
								placeholder='Search'
								className='input input-bordered lg:w-[350px] md:w-[200px] w-24 rounded-none rounded-l-lg bg-[#F5F5F5] md:block hidden'
							/>
						</div>
						<div className="flex justify-center items-center">
							<button className=' md:bg-black bg-transparent md:border-2 md:btn border-none md:text-white md:rounded-r-md md:rounded-none rounded-none rounded-r-lg md:mr-32'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='h-5 w-5'
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

						<div className='flex-none'>
							<div className='dropdown dropdown-end'>
								<div
									tabIndex={0}
									role='button'
									className='btn btn-ghost btn-circle md:mr-20'
								>
									<div className='indicator '>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											className='h-5 w-5'
											fill='none'
											viewBox='0 0 24 24'
											stroke='currentColor'
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth='2'
												d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
											/>
										</svg>
										<span className='badge badge-sm indicator-item md:block hidden'>
											8
										</span>
									</div>
								</div>

								<div
									tabIndex={0}
									className='mt-3 z-[1] card card-compact dropdown-content md:w-52 w-40 bg-base-100 shadow'
								>
									<div className='card-body'>
										<span className='font-bold text-lg'>
											8 Items
										</span>
										<span className='text-info'>
											Subtotal: $999
										</span>
										<div className='card-actions '>
											<button className='btn btn-primary btn-block '>
												View cart
											</button>
										</div>
									</div>
								</div>

							</div>

						</div>
						<div className="flex justify-center items-center gap-1">
							<div className="md:hidden"><IoIosHeartEmpty /></div>
							<div className="md:hidden"><GrUserManager /></div>






							{/*mobile  drawer */}





							<div className="drawer md:hidden">
								<input id="my-drawer" type="checkbox" className="drawer-toggle" />
								<div className="drawer-content">
									{/* Page content here */}
									<label htmlFor="my-drawer" className=" drawer-button"><div className="md:hidden"><BsThreeDotsVertical /></div></label>
								</div>
								<div className="drawer-side z-10">
									<label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
									<ul className="menu  w-64  min-h-full bg-white text-base-content">
										{/* Sidebar content here */}
										<div className="fixed">
											<ul className="text-lg">

												<li><a>Home</a></li>
												<li><a>Merchant Corner</a></li>
												<li><a>Track Order</a></li>
												<li><a>Refund Policy</a></li>
												<li><a>Replacement Policy</a></li>
											</ul>

										</div>
										<div className="fixed left-0 w-full bg-[#F05A2D] text-white mt-60 text-center text-xl p-2 ">
											Category
										</div>
										<div className="pt-72">
											<ul className="flex flex-col gap-4">
												<div className="group relative cursor-pointer">


													<div className="flex justify-between items-center">
														<div className="flex justify-center items-center gap-3">

															<a href="#"><img className="w-7" src={category1} alt="" /></a>
															<a href="#" className="text-sm hover:text-[#F15B2D]">ছেলেদের ফ্যাশন</a>
														</div>
														<a href="#"><FaChevronDown className="text-blue-500 text-sm " /></a>
													</div>
													<hr />




													{/* sub category start */}




													<ul className="absolute w-52 left-8 top-6 group-hover:block hidden p-3 bg-white z-10">
														<Link to='/category'  onClick={() => document.getElementById('my-drawer').checked = false}>
															<li className="mb-2 hover:text-[#F15B2D]">
																sub1
																<hr />
															</li>
														</Link>
														<Link to='/category'  onClick={() => document.getElementById('my-drawer').checked = false}>
															<li className="mb-2 hover:text-[#F15B2D]">
																sub1
																<hr />
															</li>
														</Link>
														<Link to='/category'  onClick={() => document.getElementById('my-drawer').checked = false}>
															<li className="mb-2 hover:text-[#F15B2D]">
																sub1
																<hr />
															</li>
														</Link>

													</ul>
													{/* sub category end */}

												</div>
												<div className="group relative cursor-pointer">


													<div className="flex justify-between items-center">
														<div className="flex justify-center items-center gap-3">

															<a href="#"><img className="w-7" src={category1} alt="" /></a>
															<a href="#" className="text-sm hover:text-[#F15B2D]">ছেলেদের ফ্যাশন</a>
														</div>
														<a href="#"><FaChevronDown className="text-blue-500 text-sm " /></a>
													</div>
													<hr />




													{/* sub category start */}




													<ul className="absolute w-52 left-8 top-6 group-hover:block hidden p-3 bg-white z-10">
														<Link to='/category'  onClick={() => document.getElementById('my-drawer').checked = false}>
															<li className="mb-2 hover:text-[#F15B2D]">
																sub1
																<hr />
															</li>
														</Link>
														<Link to='/category'  onClick={() => document.getElementById('my-drawer').checked = false}>
															<li className="mb-2 hover:text-[#F15B2D]">
																sub1
																<hr />
															</li>
														</Link>
														<Link to='/category'  onClick={() => document.getElementById('my-drawer').checked = false}>
															<li className="mb-2 hover:text-[#F15B2D]">
																sub1
																<hr />
															</li>
														</Link>

													</ul>
													{/* sub category end */}

												</div>
												<div className="group relative cursor-pointer">


													<div className="flex justify-between items-center">
														<div className="flex justify-center items-center gap-3">

															<a href="#"><img className="w-7" src={category1} alt="" /></a>
															<a href="#" className="text-sm hover:text-[#F15B2D]">ছেলেদের ফ্যাশন</a>
														</div>
														<a href="#"><FaChevronDown className="text-blue-500 text-sm " /></a>
													</div>
													<hr />




													{/* sub category start */}




													<ul className="absolute w-52 left-8 top-6 group-hover:block hidden p-3 bg-white z-10">
														<Link to='/category'  onClick={() => document.getElementById('my-drawer').checked = false}>
															<li className="mb-2 hover:text-[#F15B2D]">
																sub1
																<hr />
															</li>
														</Link>
														<Link to='/category'  onClick={() => document.getElementById('my-drawer').checked = false}>
															<li className="mb-2 hover:text-[#F15B2D]">
																sub1
																<hr />
															</li>
														</Link>
														<Link to='/category'  onClick={() => document.getElementById('my-drawer').checked = false}>
															<li className="mb-2 hover:text-[#F15B2D]">
																sub1
																<hr />
															</li>
														</Link>

													</ul>
													{/* sub category end */}

												</div>
												<div className="group relative cursor-pointer">


													<div className="flex justify-between items-center">
														<div className="flex justify-center items-center gap-3">

															<a href="#"><img className="w-7" src={category1} alt="" /></a>
															<a href="#" className="text-sm hover:text-[#F15B2D]">ছেলেদের ফ্যাশন</a>
														</div>
														<a href="#"><FaChevronDown className="text-blue-500 text-sm " /></a>
													</div>
													<hr />




													{/* sub category start */}




													<ul className="absolute w-52 left-8 top-6 group-hover:block hidden p-3 bg-white z-10">
														<Link to='/category'  onClick={() => document.getElementById('my-drawer').checked = false}>
															<li className="mb-2 hover:text-[#F15B2D]">
																sub1
																<hr />
															</li>
														</Link>
														<Link to='/category'  onClick={() => document.getElementById('my-drawer').checked = false}>
															<li className="mb-2 hover:text-[#F15B2D]">
																sub1
																<hr />
															</li>
														</Link>
														<Link to='/category'  onClick={() => document.getElementById('my-drawer').checked = false}>
															<li className="mb-2 hover:text-[#F15B2D]">
																sub1
																<hr />
															</li>
														</Link>

													</ul>
													{/* sub category end */}

												</div>
												<div className="group relative cursor-pointer">


													<div className="flex justify-between items-center">
														<div className="flex justify-center items-center gap-3">

															<a href="#"><img className="w-7" src={category1} alt="" /></a>
															<a href="#" className="text-sm hover:text-[#F15B2D]">ছেলেদের ফ্যাশন</a>
														</div>
														<a href="#"><FaChevronDown className="text-blue-500 text-sm " /></a>
													</div>
													<hr />




													{/* sub category start */}




													<ul className="absolute w-52 left-8 top-6 group-hover:block hidden p-3 bg-white z-10">
														<Link to='/category'  onClick={() => document.getElementById('my-drawer').checked = false}>
															<li className="mb-2 hover:text-[#F15B2D]">
																sub1
																<hr />
															</li>
														</Link>
														<Link to='/category'  onClick={() => document.getElementById('my-drawer').checked = false}>
															<li className="mb-2 hover:text-[#F15B2D]">
																sub1
																<hr />
															</li>
														</Link>
														<Link to='/category'  onClick={() => document.getElementById('my-drawer').checked = false}>
															<li className="mb-2 hover:text-[#F15B2D]">
																sub1
																<hr />
															</li>
														</Link>

													</ul>
													{/* sub category end */}

												</div>
												<div className="group relative cursor-pointer">


													<div className="flex justify-between items-center">
														<div className="flex justify-center items-center gap-3">

															<a href="#"><img className="w-7" src={category1} alt="" /></a>
															<a href="#" className="text-sm hover:text-[#F15B2D]">ছেলেদের ফ্যাশন</a>
														</div>
														<a href="#"><FaChevronDown className="text-blue-500 text-sm " /></a>
													</div>
													<hr />




													{/* sub category start */}




													<ul className="absolute w-52 left-8 top-6 group-hover:block hidden p-3 bg-white z-10">
														<Link to='/category'  onClick={() => document.getElementById('my-drawer').checked = false}>
															<li className="mb-2 hover:text-[#F15B2D]">
																sub1
																<hr />
															</li>
														</Link>
														<Link to='/category'  onClick={() => document.getElementById('my-drawer').checked = false}>
															<li className="mb-2 hover:text-[#F15B2D]">
																sub1
																<hr />
															</li>
														</Link>
														<Link to='/category'  onClick={() => document.getElementById('my-drawer').checked = false}>
															<li className="mb-2 hover:text-[#F15B2D]">
																sub1
																<hr />
															</li>
														</Link>

													</ul>
													{/* sub category end */}

												</div>
												
											</ul>
										</div>

									</ul>
								</div>
							</div>


						</div>


					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar2;
