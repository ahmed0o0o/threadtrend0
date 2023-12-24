import { NavLink } from 'react-router-dom';
import './ProductDisplay.css';
import { useContext } from 'react';
import { CategogryContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const {addToCart ,cartItems} = useContext(CategogryContext);
    const {SelectedProduct} = props ;
  return (
    <div className='productDisplay'>
      <div className="container">
        <div className="row row-cols-lg-2">
            <div className="col left">
                <div className="row leftRow">
                    <div className="col-3">
                        <img src={SelectedProduct.image} alt="img" />     
                        <img src={SelectedProduct.image} alt="img" />     
                        <img src={SelectedProduct.image} alt="img" />     
                        <img src={SelectedProduct.image} alt="img" />      
                    </div>
                    <div className="col-9">
                        <img src={SelectedProduct.image} alt="img" />  
                    </div>
                </div>
            </div>
            <div className="col right">
                <h3 className='productName'>{SelectedProduct.name}</h3>
                <div className="stars">
                    <img src="/assets/star_icon.png" alt="*" />
                    <img src="/assets/star_icon.png" alt="*" />
                    <img src="/assets/star_icon.png" alt="*" />
                    <img src="/assets/star_icon.png" alt="*" />
                    <img src="/assets/star_dull_icon.png" alt="*" />
                    <span className='number'>{`(122)`}</span>
                </div>
                <div className="prices">
                    <span className='oldPrice'>${SelectedProduct.old_price}</span>
                    <span className='newPrice'>${SelectedProduct.new_price}</span>
                </div>
                <div className="productDescribtion">
                    <p>A lightweight, usually  knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, warn as an undershirt or outer garment.</p>
                </div>
                <div className="selectSize">
                    <p>Select Size</p>
                </div>
                <div className="sizes">
                    <NavLink className='size'>S</NavLink>
                    <NavLink className='size l'>M</NavLink>
                    <NavLink className='size l'>L</NavLink>
                    <NavLink className='size l'>XL</NavLink>
                    <NavLink className='size l'>XXL</NavLink>
                </div>
                <button className='cartBtn' onClick={()=> addToCart(SelectedProduct.id)}>ADD TO CART {cartItems[SelectedProduct.id]>0?`( ${cartItems[SelectedProduct.id]} )`:<></>}</button>
                <div className="additional">
                    <p><span className='c c1'>Category:</span> {props.SelectedProduct.category}, T-shirt, Crop Top</p>
                    <p><span className='c'>Tags:</span> {props.SelectedProduct.category}, Modern, Latest</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDisplay
