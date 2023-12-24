import './NewColllections.css';
import NewCollection from '../assets/new_collections';
import Item from '../Item/Item';

const NewCollections = () => {
  return (
    <div className='newColllections' id='new'>
      <h1 className='newCollectionsH1'>NEW COLLECTIONS <hr /></h1>
      <div className="container">
        <div className="row">
            {NewCollection.map((item,index)=>
            <div className="col col-lg-3">
                <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            </div>
            )}
        </div>
      </div>
    </div>
  )
}

export default NewCollections
