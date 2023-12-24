import { useContext } from 'react';
import './Css/ShopCategory.css';
import { CategogryContext } from '../Context/ShopContext';
import Item from '../Components/Item/Item';

const ShopCategory = (props) => {
  const {all_products} = useContext(CategogryContext);

  return (
  <div className="shopCategory">
      <div className="container">
          <div className="banner">
            <img src={props.banner} alt="banner"/>
          </div>
          <div className="filtering">
            <div className="row">
              <p className='p'>Showing 1-12 <span className='span'> out of 36 products</span></p>
              <div className="sort">
                Sort by <img src="/assets/dropdown_icon.png" alt="^" />
              </div>
            </div>
          </div>
          <div className="cProducts">
            <div className="row">
              {all_products.map((item,index)=>{
                if(props.category===item.category){
                return <div className="col">
                          <Item key={index} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price}/>
                      </div >
                }else{
                  return null;
              }
            })}
            </div>
          </div>
          <div className="explore">
            <button className='exploreBtn'>Explore More</button>
          </div>
      </div>
  </div>
  )
}

export default ShopCategory;
