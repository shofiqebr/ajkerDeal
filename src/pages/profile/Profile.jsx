import { IoLocationOutline } from "react-icons/io5";

const Profile = () => {
    return (
        <div className="py-5 flex bg-[#EFF0F4] justify-center lg:gap-10 md:gap-3 flex-col md:flex-row ">
            

  
            {/* left section */}

            <section className="lg:w-[20%] pl-20">
             <div>
                <p className="text-sm pb-2">Hello, NameOfCustomer</p>
                <ul className="font-bold flex flex-col gap-3">
                    <li >
                        Manage My Account
                            <ul className="pl-5 font-medium flex flex-col gap-2" >
                                
                                <li>My Profile</li>
                                <li>Address Book</li>
                                <li>My Payment Options</li>
                                <li>Daraz Wallet</li>
                                <li>Vouchers</li>
                            </ul>
                    </li>
                    <li>
                        My Order
                        <ul className="pl-5 font-medium flex flex-col gap-2">
                            <li>My Returns</li>
                            <li>My Cancellations</li>
                        </ul>
                    </li>
                    <li>My Reviews</li>
                    <li>My Wishlist</li>
                    <li>Followed Stores</li>
                    <li>Sell on Daraz</li>
                </ul>
             </div>
            </section>

        

            {/* right section */}
            <section className="lg:w-[80%] "> 
                <h1 className="font-bold text-2xl pb-3 pl-3 md:pl-0 pt-5 md:pt-0">Manage My Account</h1>

                <div className="flex gap-3 flex-col lg:flex-row">
                <div className="bg-white xl:w-[25%]  p-3 pb-10 ">
                    <p className="text-lg font-medium">Personal Profile | EDIT</p>
                    <br />
                    <p>CustomerName</p>
                    <p>Customeremail@gmail.com</p>
                    <br />
                    <p>Subscribe to our Newsletter</p>
                </div>
                <div className="xl:w-[50%] bg-white flex p-3 md:justify-evenly">
                    <div className="md:border-r xl:pr-20 lg:pr-10 flex flex-col gap-3">
                        <h3 className="text-lg font-medium">
                            Address Book | ADD
                        </h3>
                        <br />
                        <p>Save Your shipping address here</p>
                        
                        <IoLocationOutline className="text-3xl" />
                        
                    </div>
                    <div className="pt-16 px-6 hidden md:block"> Save your billing address here</div>
                </div>
            </div>
            </section>
            </div>
            
        
    );
};

export default Profile;