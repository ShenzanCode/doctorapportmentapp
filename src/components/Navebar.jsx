import React, { useState } from 'react'
import {assets} from "../assets/assets"
import { NavLink, useNavigate } from 'react-router-dom'

const Navebar = () => {

    const navigate= useNavigate();

    const [showmeno, setshowmeno]=useState(false)
    const [token,setToken] = useState(true)
  return (
    <div className=' flex items-center justify-between text-sm py-4 pb-5 border-b border-b-gray-400'>
        <img onClick={()=>navigate('/')} className=' w-44 cursor-pointer' src={assets.logo} alt="" />
        <ul className=' hidden md:flex items-start gap-5 font-medium'>
            <NavLink to="/">
                <li className=' py-1'>HOME</li>
                <hr className=' border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
            </NavLink>
            <NavLink to="/doctors">
                <li className=' py-1'>ALL DOCTERS</li>
                <hr className=' border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
            </NavLink>
            <NavLink to="/about">
                <li className=' py-1'>ABOUT</li>
                <hr className=' border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
            </NavLink>
            <NavLink to="/contact">
                <li className=' py-1'>CONTACT</li>
                <hr className=' border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
            </NavLink>
        </ul>
        <div className='flex items-center gap-4'>
            {
                token? <div className='flex items-center cursor-pointer gap-2 group relative'>
                    <img className=' w-8 rounded-full ' src={assets.profile_pic} alt="" />
                    <img className=' w-2.5 ' src={assets.dropdown_icon} alt="" />
                    <div className=' absolute top-0 right-0 pt-14 text-base font-mono text-gray-600 z-20 hidden group-hover:block :'>
                        <div className=' min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                            <p onClick={()=>navigate('/my-profile')} className=' hover:text-black cursor-pointer'>My Profile</p>
                            <p onClick={()=>navigate('/apportment')} className=' hover:text-black cursor-pointer'>Appointments</p>
                            <p onClick={()=>setToken(false)} className=' hover:text-black cursor-pointer'>Logout</p>
                        </div>
                    </div>
                </div>: <button onClick={()=>navigate('/login')} className=' bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block'>Create account</button>
            }
            <img onClick={()=>setshowmeno(true)} className=' w-6 md:hidden' src={assets.menu_icon} alt="" />
            {/* .........mobile meno .......... */}

            <div className={`${showmeno ? " fixed w-full":" h-0 w-0"} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all `}>
                <div className=' flex  flex-col items-center justify-between px-5 py-6'>
                <img className=' w-36' src={assets.logo} alt="" />
                <img className=' w-7' onClick={()=>setshowmeno(false)} src={assets.cross_icon} alt="" />
                <ul className=' flex flex-col items-center gap-3 mt-5 px-5 text-lg font-medium'>
                    <NavLink onClick={()=>setshowmeno(false)} className=' px-4 py-2 rounded inline-block ' to='/'>Home</NavLink>
                    <NavLink onClick={()=>setshowmeno(false)} className=' px-4 py-2 rounded inline-block ' to='/doctors'>All Doctors</NavLink>
                    <NavLink onClick={()=>setshowmeno(false)} className=' px-4 py-2 rounded inline-block ' to='/about'>About</NavLink>
                    <NavLink onClick={()=>setshowmeno(false)} className=' px-4 py-2 rounded inline-block ' to='/contact'>Contact</NavLink>
                </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navebar