import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import PageLoading from '../../PageLoading/PageLoading';
import { toast } from 'react-toastify';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const navigate = useNavigate();
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [sendEmailVerification] = useSendEmailVerification(auth);
    const [updateProfile] = useUpdateProfile(auth);

    useEffect(() => {
        if (user) {
            // console.log(user)
            toast.success('User created')
            navigate('/')
        }
    }, [navigate, user])
    if (loading) {
        return <PageLoading />
    }
    if (error) {
        console.log(error.message)
        toast.error("Something went wrong!")
    }

    const onSubmit = async (data) => {
        // console.log(data)
        await createUserWithEmailAndPassword(data.email, data.password);
        await sendEmailVerification();
        await updateProfile({ displayName: data.fullName })
    };
    return (
        <div className='min-h-[90vh] py-10 px-4 md:px-20'>
            <section className='w-full md:w-3/6 mx-auto border p-5 md:p-20 rounded-lg'>
                <h3 className='text-2xl font-bold'>Register yourself now</h3>
                <p className='text-xs font-thin mt-2 mb-8'>Already have account? <Link className='text-amber-500' to='/login'>Login</Link> </p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className='block mb-4 bg-transparent border p-2 outline-none rounded-md w-full' placeholder='Full name' {...register("fullName", { required: true, minLength: 3 })} />
                    {errors.fullName && <p className='text-xs text-left text-red-500 font-thin -mt-3 mb-4'>Please provide your full name</p>}

                    <input className='block mb-4 bg-transparent border p-2 outline-none rounded-md w-full' placeholder='Email' type="email" {...register("email", { required: true, pattern: /\S+@\S+\.\S+/ })} />
                    {errors.email && <p className='text-xs text-left text-red-500 font-thin -mt-3 mb-4'>Email not valid</p>}

                    <input className='block mb-4 bg-transparent border p-2 outline-none rounded-md w-full' placeholder='Password' type="password" {...register("password", { required: true, pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/ })} />
                    {errors.password && <p className='text-xs text-left text-red-500 font-thin -mt-3 mb-4'>Password must contain minimum eight characters, at least one letter and one number</p>}

                    <input className='hover:bg-amber-500 bg-amber-600 py-3 px-10 rounded-md w-full duration-200 ease-in-out' type="submit" value="Login" />
                </form>
                <SocialLogin />
            </section>
        </div>
    );
};

export default Register;