import './NewsLetter.css';

const NewsLetter = () => {
  return (
    <div className='newsLetter'>
      <div className="container">
        <h1 className='newsLetterH1'>
            Get Exclusive Offers On Your Email
        </h1>
        <p className='newsLetterP'>
            Subscribe to our newsletter and stay updated
        </p>
        <form action="" className='form'>
            <input className='newsLetterInput' type='email' placeholder='Your Email'/>
            <button className='newsLetterBtn'>Subscribe</button>
        </form>
      </div>
    </div>
  )
}

export default NewsLetter
