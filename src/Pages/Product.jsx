import { useParams } from 'react-router-dom';
import'./Css/Product.css';
import { useContext } from 'react';
import { CategogryContext } from '../Context/ShopContext';
import Path from '../Components/Path/Path';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import Description from '../Components/Describtion/Description';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

const Product = () => {
  const all_Products = useContext(CategogryContext);
  const {productId} = useParams();
  const SelectedProduct = all_Products.all_products.find((e)=> e.id === Number(productId));

  return (
    <div className='product'>
      <Path SelectedProduct={SelectedProduct}/>
      <ProductDisplay SelectedProduct={SelectedProduct}/>
      <Description />
      <RelatedProducts />
    </div>
  )
}

export default Product
