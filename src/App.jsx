// import { Route, Routes } from 'react-router-dom';
import { Route,Routes } from 'react-router-dom';
import { useState,useEffect } from 'react';
import Nav from './Components/Navbar/Nav';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Cart from './Pages/Cart';
import Product from './Pages/Product';
import SignUp from './Pages/SignUp';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/assets/banner_mens.png';
import kids_banner from './Components/assets/banner_kids.png';
import women_banner from './Components/assets/banner_women.png';
import NoMatch from './Components/NoMatch/NoMatch';
import Offers from './Pages/Offers';
import Login from './Pages/Login';

function App() {
  
  const [scrollBtn,setScrollBtn] = useState(false); 

  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      if(window.scrollY >= 500){
        setScrollBtn(true);
      }else{
        setScrollBtn(false);
      }
    })
  },[]);  
  const scrolPageUp = function(){
      window.scrollTo(0,0);
  };


  return (
    <>
    <Nav />
    <Routes>
      <Route path='/' element={<Shop />} index/>
      <Route path='/men' element={<ShopCategory banner={men_banner} category='men'/>}/>
      <Route path='/women' element={<ShopCategory banner={women_banner} category='women'/>}/>
      <Route path='/kid' element={<ShopCategory banner={kids_banner} category='kid'/>}/>
      <Route path='/product'>
        <Route path=':productId' element={<Product />} />
      </Route>
      <Route path='/cart' element={<Cart />}/>
      <Route path='/signUp' element={<SignUp />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/offers' element={<Offers />}/>
      <Route path='*' element={<NoMatch />}/>
    </Routes> 
    {scrollBtn?<span id='scrolUp'><button onClick={scrolPageUp} id="sbtn"><img style={{width:"30px"}} src="/assets/arrow-bar-up.svg" alt="up" /></button></span>:<></>}
    <Footer />
    </>
  )
}

export default App
