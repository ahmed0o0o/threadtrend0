import './Path.css';
import arrow_icon from'/assets/breadcrum_arrow.png';

const Path = (props) => {
  return (
    <div className='path'>
        <div className="container">
            <p className='pathP'>Home <img src={arrow_icon} alt=">"/> Shop <img src={arrow_icon} alt=">"/> {props.SelectedProduct.category} <img src={arrow_icon} alt=">"/> {props.SelectedProduct.name}</p>
        </div>
    </div>
  )
}

export default Path
