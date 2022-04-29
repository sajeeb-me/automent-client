import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Register = () => {
    const { register, handleSubmit } = useForm();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [sendEmailVerification] = useSendEmailVerification(auth);

    const onSubmit = data => {
        console.log(data)
        createUserWithEmailAndPassword(data.email, data.password)
        sendEmailVerification()
    };
    return (
        <div className='min-h-[90vh] py-10 px-4 md:px-20'>
            <section className='w-full md:w-3/6 mx-auto border p-5 md:p-20 rounded-lg'>
                <h3 className='text-2xl font-bold'>Register yourself now</h3>
                <p className='text-xs font-thin mt-2 mb-8'>Already have account? <Link className='text-amber-500' to='/login'>Login</Link> </p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className='block mb-4 bg-transparent border p-2 outline-none rounded-md w-full' placeholder='Full name' {...register("fullName", { required: true })} />
                    <input className='block mb-4 bg-transparent border p-2 outline-none rounded-md w-full' placeholder='Email' type="email" {...register("email", { required: true })} />
                    <input className='block mb-4 bg-transparent border p-2 outline-none rounded-md w-full' placeholder='Password' type="password" {...register("password", { required: true })} />
                    <input className='block mb-4 bg-transparent border p-2 outline-none rounded-md w-full' placeholder='Confirm Password' type="password" {...register("confirmPassword", { required: true })} />
                    <input className='hover:bg-amber-500 bg-amber-600 py-3 px-10 rounded-md w-full duration-200 ease-in-out' type="submit" value="Login" />
                </form>
            </section>
        </div>
    );
};

export default Register;