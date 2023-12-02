import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { BiSolidShow } from 'react-icons/Bi';
import { AiFillEyeInvisible } from 'react-icons/ai';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Login = () => {

    const {signIn, SignInwithGoogle, signInWithGithub}= useContext(AuthContext);
    const [show, setshow]=useState(false);
    const [disabled, setDisabled]= useState(true);
    const navigate= useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/"; 

    useEffect(()=>{
        loadCaptchaEnginge(7); 
    },[])


    const handleLogin=(e)=>{
        e.preventDefault();

        const form =e.target;

        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        // const recaptcha = form.recasptcha.value;
        const data= {name, email, password};
        console.log(data);

        // Sign in with email and password
        signIn( email, password)
        .then(result=>{
            console.log(result.user);
            updateProfile(result.user, {
                displayName:name
            })
            .then(()=>{
                Swal.fire({
                    title: "Logged in successfully",
                    icon: "success",
                    // text: "Modal with a custom image.",
                    imageUrl: "https://i.ibb.co/wskPXPh/499590ee23e372355cc076635b103c0e.jpg",
                    imageWidth: 400,
                    imageHeight: 400,
                    imageAlt: "Custom image"
                });
                form.reset();
                // navigate(from, { replace: true });
                navigate(location?.state  ? location?.state?.from?.pathname : '/');
                
        })

        })
        .catch(error=>{
            console.error(error.message);
            Swal.fire('', 'Something went wrong', 'error');
        })



    }


    // scrutinizing the captcha
    const handleValidateCaptcha=(e)=>{
        e.preventDefault();
        const user_captcha_value =e.target.value;
        if(validateCaptcha(user_captcha_value)){
            setDisabled(false);
        }
        else{
            setDisabled(true);
        }
        console.log(user_captcha_value);
    }


    //Login with Google
    const handleSignInByGoogle=()=>{
        SignInwithGoogle()
        .then(result=>{
            console.log(result.user);
            Swal.fire({
                title: "Logged in successfully",
                icon: "success",
                imageUrl: "https://i.ibb.co/wskPXPh/499590ee23e372355cc076635b103c0e.jpg",
                imageWidth: 400,
                imageHeight: 400,
                imageAlt: "Custom image"
              });
              navigate(from, { replace: true });

        })
        .catch(error=>{
            console.error(error.message);
        })
    }

    // login with github
    const handleGithubSignIn=()=>{
        signInWithGithub()
        .then(result=>{
            console.log(result.user);
            Swal.fire({
                title: "Logged in successfully",
                icon: "success",
                imageUrl: "https://i.ibb.co/wskPXPh/499590ee23e372355cc076635b103c0e.jpg",
                imageWidth: 400,
                imageHeight: 400,
                imageAlt: "Custom image"
              });
              navigate(from, { replace: true });

        })
        .catch(error=>{
            console.error(error.message);
        })
    }

    return (
        <div className='w-11/12 mx-auto ' >
            <Helmet>
                <title> Sign up</title>
            </Helmet>
            <div className='py-3'>
                <button onClick={()=>{navigate(-1)}} className='mx-2 p-2 border-2  rounded-md  font-bold'>⬅ </button>
                <Link to={'/'} className='hover:bg-gray-50 hover:text-black p-2 border-2 my-5 rounded-md font-bold'>Home</Link>
            </div>
        <div className='w-full flex flex-col lg:flex-row items-center justify-center gap-0 bg-transparent'>
            <div className='w-full  hidden lg:block'>
                <img src="https://i.ibb.co/LJ8VVKf/58a7f1fb13d340917c81c0bb63f6c7db.jpg" alt="" className='w-full mx-auto h-screen' />
            </div>
            <div className="card  w-full max-w-lg shadow-2xl drop-shadow-xl bg-base-100 mx-auto relative my-14 z-0 border">
                    
            <form onSubmit={handleLogin} className="card-body mt-6 ">
                    <h1 className='text-3xl font-bold text-center text-sky-400 first-letter:text-fuchsia-600'>Login Now</h1>
                    <div className="form-control">

                        <div>
                            <label htmlFor="name" className='font-bold text-lg'>Name</label><br />
                            <input type="text" name="name" id="name" className='w-full bg-slate-200 p-3 text-black rounded-lg focus:rounded-3xl focus:outline-none' placeholder='Enter your name' />
                        </div>
                        <div className='my-3'>
                            <label htmlFor="email" className='font-bold text-lg'>Email</label><br />
                            <input type="email" name="email" id="email" className='w-full bg-slate-200 p-3 text-black rounded-lg focus:rounded-3xl focus:outline-none' placeholder='Enter a valid email' />
                        </div>
                        <div className='my-3 relative'>
                            <label htmlFor="password" className='font-bold text-lg'>Password</label><br />
                            <input type={show ? "text" : "password"} name="password" id="password" className='w-full  bg-slate-200 text-black p-3 rounded-lg focus:rounded-3xl  focus:outline-none' placeholder='Enter password' />
                            <p onClick={()=>setshow(!show)} className='absolute right-4 top-10'>
                                    {
                                        show? <BiSolidShow className=' text-2xl text-black'></BiSolidShow>:<AiFillEyeInvisible className='text-2xl text-black'></AiFillEyeInvisible>
                                    }
                                </p>
                        </div>
                        <div className='my-3'>
                            <label htmlFor="recaptcha" className='font-bold text-lg text-[#5D5FEF]'>Reload Recaptcha</label><br />
                            <div>
                                <LoadCanvasTemplate />
                            </div>
                            <input type="text" name="captcha" onBlur={handleValidateCaptcha}  id="captcha" className='w-full bg-slate-200 p-3 text-black rounded-lg focus:rounded-3xl focus:outline-none' placeholder='Type here the captcha' />
                            {/* <button onClick={handleValidateCaptcha} className='btn btn-outline btn-xs w-full my-2'>Validate</button> */}
                        </div>
                        <div>
                            <button type="submit" disabled={disabled} className='btn w-full rounded-md hover:bg-yellow-600 text-white bg-[#D1A054] font-bold mt-2'>Sign In</button>
                        </div>
                    </div>
                    </form>
                    <div className='mb-10 text-left mx-10'>
                        <p>New here? Create an Accout <Link to={'/register'} className='link font-semibold'>Sign Up</Link></p>
                    </div>
                    <div className='px-8'>
                        <h1 className='font-bold text-center mb-3 text-2xl text-fuchsia-700'>More Options to Log in</h1>
                        <div className='text-center flex flex-col lg:flex-row w-full mx-auto gap-2 my-2 -mt-6 lg:gap-1 items-center justify-center  p-5'>
                            <button onClick={handleSignInByGoogle}  className='btn btn-outline hover:bg-slate-300 hover:text-violet-700 my-2 font-bold text-purple-800 drop-shadow-xl'>
                                <img src="https://i.ibb.co/FKydQJc/604199df880fb029291ddd7c382e828b-removebg-preview.png" alt="" className='w-8' />
                                Log in with Google
                            </button>
                            <button onClick={handleGithubSignIn} className='btn btn-outline hover:bg-slate-300 hover:text-violet-700 my-2 font-bold text-purple-800 drop-shadow-xl'>
                                <img src="https://i.ibb.co/cytKcJw/e5638f79-3ce6-4277-9d18-1cdf50c5ee6f.png" alt="" className='w-8' />
                                Log in with GitHub
                            </button>

                        </div>
                    </div>
            </div>
        </div>
    </div>
    );
};

export default Login;