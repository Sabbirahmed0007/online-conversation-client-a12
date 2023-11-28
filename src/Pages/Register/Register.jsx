import { Helmet } from 'react-helmet-async';
import { BiSolidShow } from 'react-icons/Bi';
import { AiFillEyeInvisible } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';




const Register = () => {
    const navigate= useNavigate();



    const { register, handleSubmit, formState: { errors }, reset } = useForm();


    const onSubmit= (data) => {
        console.log(data);
        createUser(data.email, data.password)
        .then(result=>{
            console.log(result.user);
            // updateProfile(result.user, {
            //     displayName:data.name, 
            //     photoURL: data.photoUrl
            // })
            const name = data.name;
            const photo= data.photoUrl;
            
            updateUserProfile(name, photo)
            .then(()=>{
                console.log( 'Updated successfully')

                const userInfo = {
                    name: data.name,
                    email: data.email
                }
                .post('http://localhost:5000/users', userInfo)
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
        
    }

    // login with github
    const handleLoginWithGithub=()=>{

    }




    return (
        <div className='common-bg py-5'>
            <Helmet>
                <title> Sign up</title>
            </Helmet>
            <div>
                <button onClick={()=>{navigate(-1)}} className='mx-2 p-2 border-2  rounded-md text-black font-bold'>⬅ </button>
                <Link to={'/'} className=' p-2 border-2 my-5 rounded-md text-black font-bold'>Home</Link>
            </div>
            <div className=' max-w-lg lg:max-w-4xl mx-3 lg:mx-auto  flex flex-col lg:flex-row-reverse items-center justify-center lg:gap-4  shadow-xl  border-r-8 border-gray-400 border-b-gray-400 border-b-8'>
                <div className='flex-1 w-9/12 max-w-lg mx-auto '>
                    <img src="" alt="" className='' />
                </div>
                <div className='w-9/12 max-w-lg mx-auto  p-5  flex-1  rounded-md  my-7'>
                    <div className='text-center my-4'>
                        {/* <h2 className='text-3xl font-bold capitalize'>Create an Account </h2> */}
                        <h2 className='text-3xl font-bold capitalize'>Sign Up </h2>
                    </div>
                    {/* <form  onSubmit={handleCreateUser}> */}
                    <form  onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label htmlFor="name" className='font-bold text-lg'>Name</label><br />
                            <input type="text" name="name" {...register("name", { required: true })} id="name" className='w-full bg-slate-200 p-3 text-black rounded-lg focus:rounded-3xl focus:outline-none' placeholder='Enter your name' />
                            {errors.name && <span className='text-red-600 font-bold'>Name  is required</span>}

                        </div>
                        <div>
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
                            <input type="checkbox" name="terms" id="terms" />&nbsp;
                                I accept all the &nbsp;
                            <Link className='link font-bold'> terms and conditions</Link>
                        </div>
                        <div>
                            <button type="submit" className='btn w-full rounded-md hover:bg-yellow-600 text-white bg-[#D1A054] font-bold'>Sign Up</button>
                        </div>
                    </form>
                    <div className='my-3 text-center '>
                        <h1 className='font-medium text-[#D1A054]'>Already registered? <Link className=' font-bold hover:text-red-300' to={'/login'}>Go to log in</Link></h1>
                    </div>
                    <div className='text-center font-bold'>
                        <h1 className='my-3'>or sign up with</h1>
                        <div className='flex items-center justify-center gap-4 my-2'>
                            <button onClick={handleLoginWithGoogle}><img src="https://i.ibb.co/FKydQJc/604199df880fb029291ddd7c382e828b-removebg-preview.png" alt=""  className='w-10 border-2 p-2 rounded-full '/></button>
                            <button onClick={handleLoginWithGithub}><img src="https://i.ibb.co/cytKcJw/e5638f79-3ce6-4277-9d18-1cdf50c5ee6f.png" alt=""  className='w-10 border-2 p-2 rounded-full '/></button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;