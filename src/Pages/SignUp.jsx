import './Css/LoginSignUp.css';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
    
    const formValidation = (e)=>{
        var form = document.getElementById("Sign-up");
        console.log(form);
        if(form.checkValidity()){
            e.preventDefault();
        }
        form.classList.add("was-validated");
    }
    const navigateTo = useNavigate()

  return (
    <div className='loginSignUp'>
      <div className="container">
        <div className="content">
            <h2 className='formH2'>SignUp</h2>
        <form  action='' className="logInForm " id='Sign-up' onClick={()=>formValidation()} onSubmit={()=>navigateTo('/')}>
          <input type="text" name="userName" className='userName form-control' placeholder='Your First name' required/>
          <div className="invalid-feedback">First Name cannot be empty</div>
          <input type="text" name="userName"  className='userName form-control' placeholder='Your Last name' required/>
          <div className="invalid-feedback">Last Name cannot be empty</div>
          <input type='email' name="email" className='email form-control' placeholder='Email Address' required/>
          <div className="invalid-feedback">Email Must Be In The Correct Format</div>
          <input type='password' name="password" className='password form-control' placeholder='Password' required/>
          <div className="invalid-feedback">Password Name cannot be empty</div>
          <input type='submit' value="Continue" className='Btn' readOnly/>
          <p className='p'> Already have an account? <span className='s'><Link to='/login'>Login here</Link></span>.</p>
          <div className="down">
            <input type='checkbox' className='checkBox'/>
            <span className='terms'>By continuing, I agree to the terms of use & privacy plicies</span>
          </div>
        </form>
      </div>
      </div>
    </div>
  )
}

export default SignUp
