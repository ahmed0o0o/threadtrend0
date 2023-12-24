import './RelatedProducts.css';
import Item from '../Item/Item';
import data_product from '../assets/data';

const RelatedProducts = () => {
  return (
    <div className='relatedProducts'>
      <div className="container">
        <h2 className='relatedP'>RELATED PRODUCTS <hr /></h2>
        <div className="row">
            {data_product.map((item,index)=>
                <div className="col col-lg-3">
                    {<Item key={index} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price}/>}
                </div>
            )}
        </div>
      </div>
    </div>
  )
}

export default RelatedProducts
