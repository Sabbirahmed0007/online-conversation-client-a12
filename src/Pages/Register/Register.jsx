import { Helmet } from 'react-helmet-async';
import { BiSolidShow } from 'react-icons/Bi';
import { AiFillEyeInvisible } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useContext, useState } from 'react';

import './register.css';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import UseAxiosPublic from '../../Hooks/UseAxiosPublic';
import { updateProfile } from 'firebase/auth';




const Register = () => {
    const navigate= useNavigate();
    const [show, setshow]= useState(false);

    const {SignInwithGoogle, signInWithGithub, createUser}= useContext(AuthContext);

    const axiosPublic = UseAxiosPublic();




    const { register, handleSubmit, formState: { errors }, reset } = useForm();


    const onSubmit= (data) => {
        console.log(data);
        createUser(data.email, data.password)
        .then(result=>{
            console.log(result.user);
            
            const name = data.name;
            const photo= data.photoUrl;
            
            updateProfile(result.user, {
                displayName : name,
                photoURL : photo
            })
            .then(()=>{
                console.log( 'Updated successfully')

                const userInfo = {
                    name: data.name,
                    email: data.email
                }
                // axios.post('http://localhost:3000/users', userInfo)
                axiosPublic.post('/users', userInfo)
                .then(res=> {
                    if(res.data.insertedId){
                        console.log('User added to the database', res.data);
                        Swal.fire({
                            title: "Logged in successfully",
                            icon: "success",
                            // text: "Modal with a custom image.",
                            imageUrl: "https://i.ibb.co/wskPXPh/499590ee23e372355cc076635b103c0e.jpg",
                            imageWidth: 400,
                            imageHeight: 400,
                            imageAlt: "Custom image"
                        });
                        reset();
                        navigate('/');
                    }
                })

            })
            .catch(error=>{
                console.error(error.message);
            })
        })
        .catch(error=>{
            console.error(error.message);
        })
    }



    //Login with Google
    const handleLoginWithGoogle=()=>{
        SignInwithGoogle()
        .then(result=>{
            console.log(result.user);
            const userInfo= {
                name: result.user?.displayName,
                email: result.user?.email,


            }
            // axios.post('http://localhost:3000/users', userInfo)
            axiosPublic.post('/users', userInfo)
            .then(res=> {
                console.log(res.data)
                if(res.data.insertedId !== null){

                    Swal.fire({
                        title: "Logged in successfully",
                        icon: "success",
                        imageUrl: "https://i.ibb.co/wskPXPh/499590ee23e372355cc076635b103c0e.jpg",
                        imageWidth: 400,
                        imageHeight: 400,
                        imageAlt: "Custom image"
                      });
                      navigate('/');
                }
                else{

                    Swal.fire('', res.data?.message, 'warning');
                }
            })
            

        })
        .catch(error=>{
            console.error(error.message);
        })
        
    }



    // login with github
    const handleLoginWithGithub=()=>{
        signInWithGithub()
        .then(result=>{
            console.log(result.user);
            const userInfo= {
                name: result.user?.displayName,
                email: result.user?.email,


            }
            axiosPublic.post('/users', userInfo)
            .then(res=> {
                console.log(res.data)
                if(res.data.insertedId !== null){

                    Swal.fire({
                        title: "Logged in successfully",
                        icon: "success",
                        imageUrl: "https://i.ibb.co/wskPXPh/499590ee23e372355cc076635b103c0e.jpg",
                        imageWidth: 400,
                        imageHeight: 400,
                        imageAlt: "Custom image"
                      });
                      navigate('/');
                }
                else{

                    Swal.fire('', res.data?.message, 'warning');
                }
            })
            

        })
        .catch(error=>{
            console.error(error.message);
        })
        
    }




    return (
        <div className='register-bg py-5 text-white'>
            <Helmet>
                <title> Sign up</title>
            </Helmet>
            <div className='py-3'>
                <button onClick={()=>{navigate(-1)}} className='mx-2 p-2 border-2  rounded-md  font-bold'>⬅ </button>
                <Link to={'/'} className='hover:bg-gray-50 hover:text-black p-2 border-2 my-5 rounded-md font-bold'>Home</Link>
            </div>
            <div className=' max-w-lg mx-auto lg:max-w-2xl  lg:mx-auto  flex flex-col lg:flex-row-reverse items-center justify-center lg:gap-4  shadow-2xl  border-r-8 border-gray-400  border-l-8'>
                
                <div className='w-9/12 max-w-lg mx-auto  p-5    rounded-md  my-7'>
                    <div className='text-center my-4'>
                        {/* <h2 className='text-3xl font-bold capitalize'>Create an Account </h2> */}
                        <h2 className='text-3xl font-bold capitalize'>Sign Up </h2>
                    </div>
                    {/* <form  onSubmit={handleCreateUser}> */}
                    <form  onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label htmlFor="name" className='font-bold text-lg'>Name</label><br />
                            <input type="text" name="name" {...register("name", { required: true })} id="name" className='w-full  focus:bg-sky-200 text-red-500 bg-slate-200 p-3  rounded-lg focus:rounded-full focus:outline-none' placeholder='Enter your name' />
                            {errors.name && <span className='text-red-600 font-bold'>Name  is required</span>}

                        </div>
                        <div className='my-3'>
                            <label htmlFor="photoUrl" className='font-bold text-lg'>Photo URL</label><br />
                            <input type="text" name="photoUrl" {...register("photoUrl", { required: true })} id="photoUrl" className='w-full bg-slate-200 p-3 text-black rounded-lg focus:rounded-3xl focus:outline-none' placeholder='Photo URL...' />
                            {errors.name && <span className='text-red-600 font-bold'>Photo URL  is required</span>}
                        </div>
                        <div className='my-3'>
                            <label htmlFor="email" className='font-bold text-lg'>Email</label><br />
                            <input type="email" name="email" {...register("email",  { required: true })} id="email" className='w-full bg-slate-200 p-3 text-black rounded-lg focus:rounded-3xl focus:outline-none' placeholder='Enter a valid email' />
                            {errors.email && <span className='text-red-600 font-bold'>email  is required</span>}
                        </div>
                        <div className='my-3 relative'>
                            <label htmlFor="password" className='font-bold text-lg'>Password</label><br />
                            <input type={show ? "text" : "password"} name="password" {...register("password", { required: true, minLength: 6, maxLength: 20 , pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{6,20}$/ }  )} id="password" className='w-full  bg-slate-200 text-black p-3 rounded-lg focus:rounded-3xl  focus:outline-none' placeholder='Enter password' />
                            {errors.password && <p className='text-red-600 font-bold'>Password  is required</p>}
                            {errors.password?.type === 'minLength' && <p className='text-red-600 font-bold'>Password must be 6 characters</p>}
                            {errors.password?.type === 'maxLength' && <p className='text-red-600 font-bold'>Password must be less then 20 characters</p>}
                            {errors.password?.type === 'pattern' && <p className='text-red-600 font-bold'>Password must have an upercase, a lowercase and a number and special character</p>}
                            <p onClick={()=>setshow(!show)} className='absolute right-4 top-10'>
                                    {
                                        show? <BiSolidShow className=' text-2xl text-black'></BiSolidShow>:<AiFillEyeInvisible className='text-2xl text-black'></AiFillEyeInvisible>
                                    }
                                </p>
                        </div>
                        <div className='flex items-center my-5'>
                            <input type="checkbox" name="terms" id="terms" />
                                I accept all the &nbsp;
                            <Link className='link font-bold'> terms and conditions</Link>
                        </div>
                        <div>
                            <button type="submit" className='btn w-full rounded-md hover:bg-sky-400 hover:text-white bg-sky-300 text-black hover:rounded-full hover:drop-shadow-xl font-bold'>Sign Up</button>
                        </div>
                    </form>
                    <div className='my-3 text-center '>
                        <h1 className='font-medium text-[#D1A054]'>Already registered? <Link className=' font-bold hover:text-red-300' to={'/login'}>Go to log in</Link></h1>
                    </div>
                    <div className='text-center font-bold'>
                        <h1 className='my-3'>or sign up with</h1>
                        <div className='flex items-center justify-center gap-4 my-2'>
                            <button onClick={handleLoginWithGoogle} className='bg-gray-50 rounded-full'><img src="https://i.ibb.co/FKydQJc/604199df880fb029291ddd7c382e828b-removebg-preview.png" alt=""  className='w-12 border-2 p-2 rounded-full '/></button>
                            <button onClick={handleLoginWithGithub} className='bg-gray-50 rounded-full'><img src="https://i.ibb.co/cytKcJw/e5638f79-3ce6-4277-9d18-1cdf50c5ee6f.png" alt=""  className='w-12 border-2 p-2 rounded-full '/></button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;