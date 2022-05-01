import React, { useEffect } from 'react';
import GoogleLogin from '../../../images/social-icon/google.png'
import FacebookLogin from '../../../images/social-icon/facebook.png'
import GitLogin from '../../../images/social-icon/github.png'
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import PageLoading from '../../PageLoading/PageLoading';
import { toast } from 'react-toastify';
import useToken from '../../../Hooks/useToken';

const SocialLogin = () => {
    const navigate = useNavigate();
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithFacebook, facebookUser, facebookLoading, facebookError] = useSignInWithFacebook(auth);
    const [signInWithGithub, gitUser, gitLoading, gitError] = useSignInWithGithub(auth);
    const [token] = useToken(googleUser || facebookUser || gitUser)

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate])
    if (googleLoading || facebookLoading || gitLoading) {
        return <PageLoading />
    }
    if (googleError || facebookError || gitError) {
        toast.error("Something went wrong!")
    }

    return (
        <div>
            <section>
                <div className='flex items-center gap-2 opacity-50'>
                    <div className='w-full h-[1px] bg-white'></div>
                    <p>or</p>
                    <div className='w-full h-[1px] bg-white'></div>
                </div>
                <div className='mt-5'>
                    <button onClick={() => signInWithGoogle()} className='w-10 border border-white rounded-full p-2 mx-2 hover:bg-white hover:bg-opacity-10 duration-300 ease-in-out'><img src={GoogleLogin} alt="" /></button>
                    <button onClick={() => signInWithFacebook()} className='w-10 border border-white rounded-full p-2 mx-2 hover:bg-white hover:bg-opacity-10 duration-300 ease-in-out'><img src={FacebookLogin} alt="" /></button>
                    <button onClick={() => signInWithGithub()} className='w-10 border border-white rounded-full p-2 mx-2 hover:bg-white hover:bg-opacity-10 duration-300 ease-in-out'><img src={GitLogin} alt="" /></button>
                </div>
            </section>
        </div>
    );
};

export default SocialLogin;