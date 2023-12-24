import { Link } from 'react-router-dom';
import './Item.css';
import { useContext } from 'react';
import { CategogryContext } from '../../Context/ShopContext';

const Item = (props) => {
  const {addToCart ,cartItems} = useContext(CategogryContext);

  const handleScrll =()=>{
    window.scrollTo(0,0);
  }

  return (
    <div className="item">
      <div className="itemImg">
        <Link to={`/product/${props.id}`}>
            <img src={props.image} alt="img" onClick={handleScrll}/>
        </Link>
      </div>
      <div className="itemP">
        <p className='pName' onClick={handleScrll}>{props.name}.</p>
        <p className='pc'>Peplum Hem Blous.e</p>
      </div>
      <div className="itemPrices">
        <span className="newPrice">${props.new_price}</span>
        <span className="oldPrice">${props.old_price}</span>
        <button className='cartBtn' onClick={()=> {addToCart(props.id)}}>ADD TO CART {cartItems[props.id]>0?`( ${cartItems[props.id]} )`:<></>}</button>
      </div>
    </div>
  )
}

export default Item
