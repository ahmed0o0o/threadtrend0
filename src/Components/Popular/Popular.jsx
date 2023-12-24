import './Popular.css';
import data from '../assets/data';
import Item from '../Item/Item';

const Popular = () => {
  return (
    <div className='popular'>
      <h1 className='popularH1'>POPULAR IN WOMEN <hr /></h1>
      <div className="container">
        <div className="row">
            {data.map((item)=>
                <div className="col col-lg-3">
                    {<Item key={item.id} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price}/>}
                </div>
            )}
        </div>
      </div>
    </div>
  )
}

export default Popular
