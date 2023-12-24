import './Hero.css';
import '/css/bootstrap.css';

const Hero = () => {
  return (
    <div className='hero'>
        <div className="row">
            <div className="col-12 col-lg-6 left">
                <div className="content">
                    <p className='heroP'>NEW ARRIVALS ONLY</p>
                    <h1 className='heroH1'>new <img src="/assets/hand_icon.png" alt="hi" style={{width:"40px"}}/><br />collections<br />for everyone</h1>
                    <a href="#new">
                        <button className='heroBtn'>Latest Collections <img src="/assets/arrow.png" alt="=>" style={{width:'15px'}}/></button>
                    </a>
                </div>
            </div>
            <div className="col-12 col-lg-6 right">
                <img src="/assets/hero_image.png" alt="img"/>
            </div>
        </div>
    </div>
  )
}

export default Hero
