
import frame2 from '../../assets/frame2.png'
import frame3 from '../../assets/frame3.png'
import frame4 from '../../assets/frame4.png'
import frame5 from '../../assets/frame5.png'
import frame6 from '../../assets/frame6.png'

const FramPart = () => {
    return (
        <div>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 pt-20 place-items-center'>
            <img src='https://static.ajkerdeal.com/images/muslim-fashion/logo.png' alt="" />
            <img src={frame2} alt="" />
            <img src={frame3} alt="" />
            <img src={frame4} alt="" />
            <img src={frame5} alt="" />
            <img src={frame6} alt="" />
            
        </div>
        <div className='bg-white shadow-md p-5  lg:w-[1000px] mx-auto my-4 '>
            <h2 className='text-xl font-bold text-[#5e5d5d]'>Online Shopping in BD: Buy Fashion, Electronics & Gadgets at Best Price | Ajkerdeal</h2>
            <p className='text-sm text-[#757575]'>Online Shopping BD: AjkerDeal.com is the largest online shopping marketplace in Bangladesh; this B2C online marketplace has been launched in September, 2011 in BD. All through the most recent eight years, AjkerDeal has been experimenting with and out to win the trust of Bangladeshi customers who shop online and now it is the most famous online shopping portal in Bangladesh for both online sellers and buyers. [show more...]</p>
        </div>
        </div>
    );
};

export default FramPart;