import { useContext, useEffect, useState } from 'react';
import './CartItems';
import './CartItems.css'
import { CategogryContext } from '../../Context/ShopContext';
import { Link } from 'react-router-dom';

const CartItems = () => {
    const {all_products , cartItems,clearAllCart ,addToCart ,RemoveFromCart,clearCartSection,clculateTotalPrice} = useContext(CategogryContext);

    const [empty,setEmpty] = useState(false);

    const handleEmpty = ()=>{
      for(const id in cartItems){
        if(cartItems[id]>0){
          setEmpty(true);
        }
      }
      return empty;
    }
    useEffect(()=>{
      handleEmpty();
    },[])
    
  return (
    <div className='cartItems'>
      {empty?<>
        <div className="container">
          <table className="tble">
            <thead>
             <tr>
              <th>Products</th>
              <th>Title</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Remove</th>
             </tr>
            </thead>
            <tbody>
              {all_products.map((e)=>{
                if(cartItems[e.id] > 0)
                {
          return<tr key={e.id}>
                  <td>
                    <img className='image' src={e.image} alt="product" style={{width:"50px"}}/>
                  </td>
                  <td className='nameD'>
                    <span className='name'>{e.name} </span>
                  </td>
                  <td className='priceBox'>
                    <span className='price'>${e.new_price}</span>
                  </td>
                  <td className='qdD'>
                    <div className="qd">
                      <input type="text" className='quantity' value={cartItems[e.id]}/>
                      <span className='plus' onClick={()=>{addToCart(e.id)}}>+</span>
                      <span className='minus' onClick={()=>{RemoveFromCart(e.id)}}>-</span>
                    </div>
                  </td>
                  <td>
                    <span className='total'>${cartItems[e.id]*e.new_price}</span>
                  </td>
                  <td>
                    <img className='x' src="/assets/cart_cross_icon.png" alt="x" onClick={()=> clearCartSection(e.id)}/>
                  </td>
                </tr>
                }
                return null;
              })}
            </tbody>
          </table>
        </div>
        <div className="container totalsCard">
          <div className="row row-cols-1 row-cols-lg-2">
            <div className="col col-lg-6 infoCol">
              <div className="row">
                <h4>Cart Totals</h4>
              </div>
              <div className="row">
                <div className="col colLeft">
                  <span>Subtotal</span>
                </div>
                <div className="col colRight">
                  <span>${clculateTotalPrice()}</span>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col colLeft">
                  <span>Shipping</span>   
                </div>
                <div className="col colRight">
                  <span>Free</span>   
                </div>
              </div>
              <hr/>
              <div className="row">
                <div className="col colLeft">
                  <span className='bold'>Total</span>    
                </div>
                <div className="col colRight">
                  <span className='bold'>${clculateTotalPrice()}</span>    
                </div>
              </div>         
              <hr/>
              <button className='clearCart btn btn-danger' onClick={()=>clearAllCart()}>Clear Cart</button>     
            </div>
            <div className="col col-lg-6">
              <div className="promoCodeCol">
                <input type="text" name="promoCode" id="promoCode" placeholder='Promo Code'/>
                <button className='promoBtn'>Submit</button>
              </div>
              <div className="check">
                <Link to='/'>
                  <button className='checkOutbtn btn btn-success'>PROCEED TO CHECK OUT</button> 
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>:<div className='emptyCart'>Your Cart Is Empty</div>}
    </div>
  )
}

export default CartItems
