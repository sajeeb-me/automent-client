import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';
import PageLoading from '../../PageLoading/PageLoading';
import SocialLogin from '../SocialLogin/SocialLogin';
import useToken from '../../../Hooks/useToken';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [token] = useToken(user);

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [from, navigate, token])
    if (loading) {
        return <PageLoading />
    }
    if (error) {
        switch (error?.code) {
            case "auth/user-not-found":
                toast.error("Email is not valid")
                break;
            case "auth/wrong-password":
                toast.error("Wrong password")
                break;
            default:
                toast.error("Something went wrong")
        }
    }

    const onSubmit = async (data) => {
        await signInWithEmailAndPassword(data.email, data.password)
    };

    return (
        <div className='min-h-[90vh] py-10 px-4 md:px-20'>
            <section className='w-full md:w-3/6 mx-auto border p-5 md:p-20 rounded-lg'>
                <h3 className='text-2xl font-bold'>Login yourself now</h3>
                <p className='text-xs font-thin mt-2 mb-8'>Don't have account? <Link className='text-cyan-500' to='/register'>Register now</Link> </p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className='block mb-4 bg-transparent border p-2 outline-none rounded-md w-full' placeholder='Email' type="email" {...register("email", { required: true })} />
                    <input className='block mb-4 bg-transparent border p-2 outline-none rounded-md w-full' placeholder='Password' type="password" {...register("password", { required: true })} />
                    <input className='hover:bg-cyan-500 bg-cyan-600 py-3 px-10 rounded-md w-full duration-200 ease-in-out' type="submit" value="Login" />
                </form>
                <button onClick={() => navigate('/forgetPass')} className='my-2 opacity-60 hover:opacity-100 duration-300 ease-in-out'>Forget password ?</button>
                <SocialLogin />
            </section>
        </div>
    );
};

export default Login;