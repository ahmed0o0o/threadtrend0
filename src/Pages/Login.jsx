import { Link, useNavigate } from 'react-router-dom';
import './Css/LoginSignUp.css';

const Login = () => {
  const navigateTo = useNavigate()
  return (
    <div className='loginSignUp'>
      <div className="container">
        <div className="content">
            <h2 className='formH2'>Login</h2>
        <form action='' className="logInForm" onSubmit={()=>navigateTo('/')}>
          <input type="text" name="userName" className='userName form-control' placeholder='Your name' required/>
          <input type='password' name="password" className='password form-control' placeholder='Password' required/>
          <input type='submit' value="Login" className='Btn'/>
          <p className='p'> Do not have an account? <span className='s'><Link to='/signUp'>Sign Up here</Link></span>.</p>
          <div className="down">
          </div>
        </form>
      </div>
      </div>
    </div>
  )
}

export default Login

