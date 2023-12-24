import { useState } from 'react';
import './Nav.css';
import { Link,NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { CategogryContext } from '../../Context/ShopContext';

const Nav = () => {
  const [search,setSearch]=useState(false);
  const {calcCartItems} = useContext(CategogryContext);

  const handleSearchRender = ()=>{
    setSearch(true);
  }
  const handleScroll = ()=>{
    window.scrollTo(0,0);
  }

  return (
<nav className="navbar navbar-expand-lg" style={{position:'sticky',top:'0px',backgroundColor:'white'}}>
<div className="container navbar navbar-expand-lg">
  <div className="container-fluid">  
  <img className='navbar-logo' src='/assets/Logo.png'alt='logo' style={{width:"35px"}}/>
  <Link className="navbar-brand" to='/'>THREADTREND</Link>
  <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="offcanvas offcanvas-end" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
    <div className="offcanvas-header">
      <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Sections</h5>
      <button type="button" className="btn-close btn-close-black" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div className="offcanvas-body">
      <ul className="navbar-nav flex-grow-1 pe-3">
        <li className="nav-item">
          <NavLink to='/' className="nav-link" aria-current="page" onClick={handleScroll}>Shop</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/men' className="nav-link" onClick={handleScroll}>Men</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/women' className="nav-link" onClick={handleScroll}>Women</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/kid' className="nav-link" onClick={handleScroll}>Kids</NavLink>
        </li>
      </ul>
      <form className="d-flex" role="search">
        {search?<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{height:'40px',alignSelf:"center"}}/>:<></>}
        <span className="btn" type="submit"><img src="/assets/search.svg" alt="search" style={{width:'30px'}} onClick={handleSearchRender}/></span>
      </form>
      <Link to='/signUp' className='logIn'>Login</Link>
      <Link to='/cart' className='cart'>
          <img src="/assets/cart_icon.png"    alt="cart" />
      <span className='cartCounter'>
      {calcCartItems()}
      </span>
     </Link>
    </div>
  </div>
  </div>
</div>
</nav>
)
}

export default Nav

  