import React, { useState } from 'react'
import { FiEye, FiEyeOff } from 'react-icons/fi';
import signup from "../assets/adminSignup.png";
import { useLoginMutation } from '../services/bluebreedAdmin';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setToken } from '../services/auth';


const Login = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [login, {isLoading, error}] = useLoginMutation();

    const navigate = useNavigate();
    const dispatch = useDispatch();

     const handleLogin = async (e) => {
        //console.log("loggings", isLoading)
        e.preventDefault();
        try {
          const result = await login({email: email, password: password}).unwrap();
          console.log("result", result);
          
          if (result.successful === true && result?.data?.token) {
            dispatch(setToken(result.data?.token));
            localStorage.setItem("token", result.data.token)
            navigate("/");
          }
          
        } catch (err) {
          //console.log("login err", err?.data?.message);
          console.log("login err", err);
          console.log("logins", error);
        } finally {
          console.log("logs", isLoading)
        }
      }
  return (
    <div className='w-full max-h-screen p-3 grid grid-cols-2' >
        <div className='w-[100%] flex flex-col items-center justify-center h-full px-14'>
            <h1 className='text-[36px] font-semibold text-[#01011A]'>Welcome Back!</h1>
            <span className='text-[#606060] text-[18px]'>Welcome back, enter your credentials to access your account</span>
        <form className='space-y-5 text-[#606060] w-full pt-8' onSubmit={handleLogin}>
         <div>
            <label htmlFor="email" className='text-[#4A4A4A] pb-2'>Email Address</label>
            <input type="email" className='w-full border p-2 rounded outline-none mt-2'  placeholder='eg.email.gmail.com'
                required
                id='email'
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                
            />
          </div>
            <div className='relative'>
                <label htmlFor="password" className='text-[#4A4A4A]'>Password</label>
                <input type={showPassword ? "text" : "password"}  className='w-full border p-2 rounded outline-none mt-2' placeholder='Enter Password'
                    id='password'
                    name='passwword'
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type='button'  onClick={() => setShowPassword(!showPassword)} className='absolute right-4 bottom-2'>{showPassword ? <FiEye size={23}  /> :  <FiEyeOff size={23} />}</button>
                
            </div>
            <button type="submit" className={`w-full bg-[#E6B566] py-2 rounded text-white cursor-pointer`}  disabled={isLoading} >
             {isLoading ? "Loading" : "Next"}
          </button>
           {error?.data && <p className='text-red-500'>{error?.data?.message}!</p>} 
           {error?.error && <p className='text-red-500'>Network Error!</p>}
      </form>
      <div className='space-y-4 w-full pt-4'>
        <div className='flex items-center gap-4  w-full'>
            <hr className='flex-grow '/>
            <span className='pb-[6px]'>or</span>
            <hr className='flex-grow'/>
            
        </div>
        <div className='border w-full text-center p-2 rounded text-black font-medium'>Continue with Google</div>
      </div>
      
        </div>
         <img src={signup} alt="" className='max-h-screen w-full object-center pb-3'/>
       {/*  <div className='w-full h-full bg-red-500'>
           
        </div> */}

    </div>
  )
}

export default Login