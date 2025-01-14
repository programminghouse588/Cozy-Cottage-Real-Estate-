import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import img from '../../assets/images/login_img-removebg-preview.png';
import { useContext, useState } from "react";
import { AuthContext } from "../../Routes/Context";
import { useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { toast } from 'react-toastify';
import 'animate.css';


const Login = () => {

    // Using context with AuthContext
    const {loginUser, googleLogin, githubLogin} = useContext(AuthContext);

    const [loginError, setLoginError] = useState('');
    const [loginPasswordShow, setLoginPasswordShow] = useState(false);


    // Location
    const location = useLocation();
    console.log(location);

    // navigate after login
    const navigate = useNavigate();
 
    // Login event handler
    const handleLogin = e => {

    // Prevent default Behaviour loading
    e.preventDefault();

     // Pick the form data
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');
    console.log(email, password);
    
    setLoginError('')
    
    // Login exciting User
    loginUser(email, password)
    .then(result =>{
        console.log(result.user)
        toast.success('User logged in Successfully!')
         // Reset form field after login
        e.target.reset();

        // After login go to clicked state otherwish go to home page
        navigate(location?.state ? location.state : '/' );
    })
    .catch(error => {
        console.error(error);
        setLoginError('Please check Email or Password again!')
    })
        }

    // Google login event handler
  const handleGoogleLogin = () => {
    googleLogin()
    .then(result =>{
      console.log(result.user);
      toast.success('Google Login Successful!')
   // After Google login go to clicked state otherwish go to home page
   navigate(location?.state ? location.state : '/' );
  })
  .catch(error => {
      console.error(error);
  })
  }

  // After Github login go to clicked state otherwish go to home page
  const handleGithubLogin = () => {
    githubLogin()
    .then(result =>{
      console.log(result.user);
      toast.success('Github Login Successful!')
      //  Go to Home page after github Login
      navigate(location?.state ? location.state : '/' );
  })
  .catch(error => {
      console.error(error);
  })
}

    return (
     <section className="flex animate__animated animate__fadeIn animate__slow	2s flex-col md:flex-row justify-center pb-14 md:space-x-24 items-center my-2 mx-5 md:mx-0 md:my-0">
         <Helmet>
        <title>Login | Cozy Cottage</title>
    </Helmet>
     <div className="lg:w-1/3 md:w-80 w-72 max-w-sm text-center md:mt-9">
     <img src={img} alt=""/>
</div>
      <div className="md:w-1/3 max-w-sm text-center md:mt-9">
        <div>
            <i><h1 className="lg:text-3xl text-2xl text-red-800 font-bold md:mb-4 mb-2 lg:mb-6">Please Login Now!</h1></i>
          <label className="mr-1 text-xl lg:text-2xl font-bold lg:font-semibold">Sign in with</label>

<button className="lg:mx-4 mx-2 h-8 w-8 rounded-full">
<FcGoogle onClick={handleGoogleLogin} size={30} className="flex -mb-1 justify-center items-center w-full"/></button>

<button className="lg:mx-4 mx-2 h-8 w-8 rounded-full">
<FaGithub onClick={handleGithubLogin} size={30} className="flex -mb-1 justify-center items-center w-full"/></button>
        </div>

    <div className="my-8 flex text-center border-b-2 border-dashed border-y-2 border-slate-300">
    <p className="mx-auto text-2xl font-semibold text-black"><i>Or</i></p>
</div>
<form onSubmit={handleLogin}>
    <input className="text-lg font-semibold w-full px-4 py-2 border border-gray-400 rounded" type="email" name="email" placeholder="Email Address" required/>

   <div className="relative mt-4">
   <input className="text-lg font-semibold w-full px-4 py-2 border border-gray-400 rounded" type={loginPasswordShow ? "text" : "password"} name="password" placeholder="Password"/>

<span className="absolute top-3 right-8" onClick={ () => setLoginPasswordShow(!loginPasswordShow)}>
    {
        loginPasswordShow ? <IoEyeOff className="text-2xl"></IoEyeOff> : <IoEye className="text-2xl"></IoEye>
    }
</span>
   </div>

    <div className="md:mt-5 mt-6 flex gap-2 items-center justify-between font-semibold">
    <p className="flex text-slate-900">
    <input className="mr-2" type="checkbox" />
    <span className="text-base md:text-sm lg:text-lg">Remember Me</span>
    </p>
       <a className="text-blue-600 lg:text-lg text-base hover:text-blue-700 hover:underline hover:underline-offset-4" href="#">Lost Password?</a>
    </div>

    {
    loginError && <p className='lg:text-xl text-lg font-bold text-center lg:pt-6 pt-4 lg:pb-2 text-red-600'>{loginError}</p>
}
        <div className="text-center">
    <input className="mt-4 bg-blue-600 hover:bg-blue-700 px-2 py-1 lg:px-4 lg:py-2 text-white rounded text-lg font-semibold" type="submit" name="submit" value="Login to your account" />
</div>
</form>

    <div className="mt-4 font-semibold lg:text-xl text-base text-slate-800 text-center"><i>Don&apos;t have an account?</i>{" "}
    <a className="text-blue-600 hover:underline hover:underline-offset-4" href="/register">Register Here</a>
        </div>
      </div>
    </section>
    );
};

export default Login;