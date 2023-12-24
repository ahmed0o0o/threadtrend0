import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row footerTop">
          <div className="box">
            <img className='footerLogoImg' src="/assets/Logo.png" alt="logo" style={{width:'100px'}}/>
            <span className='footerBrand'>THREADTREND</span>
          </div>
        </div>
        <div className="row footerLinks">
          <ul className='footerList'>
            <li className='footerListItem'>
              <Link to='/'>Company</Link>
            </li>
            <li className='footerListItem'>
              <Link to='/'>Products</Link>
            </li>
            <li className='footerListItem'>
              <Link to='/'>Offices</Link>
            </li>
            <li className='footerListItem'>
              <Link to='/'>About</Link>
            </li>
            <li className='footerListItem'>
              <Link to='/'>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="row socioalMedia">
          <Link to='/'><img src="/assets/instagram_icon.png" alt="insatgram" /></Link>
          <Link to='/'><img src="/assets/pintester_icon.png" alt="Pin" /></Link>
          <Link to='/'><img src="/assets/whatsapp_icon.png" alt="Whatsapp"/></Link>
        </div>
      </div>
      <hr className='footerHr'/>
      <p className='copyright'>Copyright &copy; 2023 - All Rights Reserved.</p>
    </footer>
  )
}

export default Footer
