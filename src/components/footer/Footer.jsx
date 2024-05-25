import qr from '../../assets/qr-code.png'
import ad from '../../assets/ad.png'
import payment1 from '../../assets/payment1.png'
import payment2 from '../../assets/payment2.png'
import payment3 from '../../assets/payment3.png'
import payment4 from '../../assets/payment4.png'
import payment5 from '../../assets/payment5.png'

const Footer = () => {
    return (
        <div className="" >
            <footer className="footer place-items-center p-10 bg-[#404040] text-white">
  <nav className="flex flex-col gap-10">
    <div className="flex flex-col">
    <h6 className="footer-title">Customer Care</h6> 
    <a className="link link-hover">Help Center</a>
    <a className="link link-hover">How to place order?</a>
    <a className="link link-hover">Track Order</a>
    <a className="link link-hover">Return and Refund Policy</a>
    <a className="link link-hover">Privacy Policy</a>
    <a className="link link-hover">Replacement Policy</a>
    <a className="link link-hover">Contact Us</a>
    </div>
    <div className="flex flex-col">
    <h6 className="footer-title">Our Partner</h6> 
    <a className="link link-hover">Delivery Tiger</a>
    <a className="link link-hover">Delivery Bondhu</a>
    <a className="link link-hover">Classified Site</a>
    </div>

  </nav> 
  <nav className='-mt-14'>
    <h6 className="footer-title">AjkerDeal</h6> 
    <a className="link link-hover">Our Address</a>
    <a className="link link-hover">AjkerDeal Blog</a>
    <a className="link link-hover">SiteMap</a>
    <a className="link link-hover">Suggestions And Complains</a>
    <a className="link link-hover">Instant Payment</a>
    <div className='flex gap-3'>
        <a href="#">
        <img className='w-16 h-16' src={qr} alt="" />
        </a>
       <a href="#">
       <img className='w-16 h-16' src={ad} alt="" />
       </a>
    </div>
   </nav> 
  <nav className='-mt-36'>
    <h6 className="footer-title">Payment Method</h6> 
    <div className='grid grid-cols-2'>
        <a href="#">
            <img className='w-16' src={payment1} alt="" />
        </a>
        <a href="#">
            <img className='w-16' src={payment2} alt="" />
        </a>
        <a href="#">
            <img className='w-16' src={payment3} alt="" />
        </a>
        <a href="#">
            <img className='w-16' src={payment4} alt="" />
        </a>
        <a href="#">
            <img className='w-16' src={payment5} alt="" />
        </a>
    </div>
  
  </nav> 
  <form className='-mt-36'>
    <h6 className="footer-title">Newsletter</h6> 
    <p>More than 1000 products are added daily. at today's deals.com. Subscribe now to get updates on our new products.</p>
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text text-white">Enter your email address</span>
      </label> 
      <div className="join">
        <input type="text" placeholder='E-mail address' className="input input-bordered join-item w-40 h-10 rounded-none" /> 
        <button className="w-20 rounded-none bg-black h-10 text-white join-item">Subscribe</button>
      </div>
    </fieldset>
  </form>
</footer>
        </div>
    );
};

export default Footer;