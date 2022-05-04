import React from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import PageLoading from '../../PageLoading/PageLoading';

const ForgetPass = () => {
    const { register, handleSubmit } = useForm();

    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);

    if (sending) {
        return <PageLoading />
    }
    if (error) {
        switch (error?.code) {
            case "auth/user-not-found":
                toast.error("User not found")
                break;
            default:
                toast.error("Something went wrong")
        }
    }

    const onSubmit = async (data) => {
        await sendPasswordResetEmail(data.email)
        if (!error) {
            toast.info("Reset link sent to your email.")
        }
    };
    return (
        <div className='min-h-[90vh] py-10 px-4 md:px-20'>
            <section className='w-full md:w-3/6 mx-auto border p-5 md:p-20 rounded-lg'>
                <h3 className='text-2xl font-bold'>Enter your email address</h3>
                <p className='text-xs font-thin mt-2 mb-8 opacity-70'>Please enter your account email address to get password reset link </p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className='block mb-4 bg-transparent border p-2 outline-none rounded-md w-full' placeholder='Account email address' type="email" {...register("email", { required: true })} />

                    <input className='hover:bg-cyan-500 bg-cyan-600 py-3 px-10 rounded-md w-full duration-200 ease-in-out' type="submit" value="Send Password Reset Link" />
                </form>
            </section>
        </div>
    );
};

export default ForgetPass;