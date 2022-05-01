import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    const [user] = useAuthState(auth)
    const location = useLocation()
    // console.log(location)

    return (
        <nav className={`
        sticky-top
        w-full
        flex flex-wrap
        items-center
        justify-between
        py-4
        navbar navbar-expand-lg navbar-light
        bg-slate-800
        `}>
            {/* ${location.key === 'default' && 'hidden'} */}
            <div className="container-fluid w-full flex flex-wrap items-center justify-between px-20">
                <button className="
            navbar-toggler
            text-gray-500
            border-0
            hover:shadow-none hover:no-underline
            py-2
            px-2.5
            bg-transparent
            focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline
          " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars"
                        className="w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path fill="currentColor"
                            d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
                        </path>
                    </svg>
                </button>
                <div className="collapse navbar-collapse flex-grow justify-between items-center" id="navbarSupportedContent">
                    <Link to='/'>AutoMent</Link>
                    <div className='block md:flex gap-3'>
                        <ActiveLink className='pb-2' to='/'>Home</ActiveLink>
                        <ActiveLink className='pb-2' to='/blogs'>Blogs</ActiveLink>
                        {
                            user &&
                            <div className='block md:flex gap-3'>
                                <ActiveLink className='pb-2' to='/inventories/manage'>Manage Items</ActiveLink>
                                <ActiveLink className='pb-2' to='/inventories/add'>Add Items</ActiveLink>
                                <ActiveLink className='pb-2' to='/inventories/my'>My Items</ActiveLink>
                            </div>
                        }
                    </div>
                    <div>
                        {
                            user ?
                                <button onClick={() => signOut(auth)} className='hover:bg-red-500 hover:text-white border border-red-500 py-1 px-5 rounded-md duration-200 ease-in-out text-red-500'>Logout</button>
                                :
                                <Link to='login'><button className='hover:bg-cyan-500 border border-cyan-500 py-1 px-5 rounded-md duration-200 ease-in-out'>Login</button></Link>
                        }
                    </div>
                </div>
            </div>
        </nav>


    );
};

export default Header;