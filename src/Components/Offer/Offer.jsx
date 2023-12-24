import { useNavigate } from 'react-router-dom';
import './Offer.css';

const Offer = () => {
  const navigate = useNavigate();
  return (
    <div className="offer">
        <div className="container">
            <div className="row">
                <div className="col left">
                  <div className="content">
                    <h1 className='offerH1'>Exclusive</h1>
                    <h1 className='offerH1.0'>Offers For You</h1>
                    <p className='offerP'>ONLY ON BEST SELLERS PRODUCTS</p>
                    <button onClick={()=>navigate('offers')} className='offerBtn'>Check Now</button>
                  </div>
                </div>
                <div className="col right">
                    <div className="img">
                        <img src="/assets/exclusive_image.png" alt="exclusive"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Offer
