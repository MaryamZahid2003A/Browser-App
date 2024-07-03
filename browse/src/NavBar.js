import React from 'react'
import logo from './logo.svg';
import { Link } from 'react-router-dom';
export default function NavBar() {
  return (
    <div className='flex justify-end pt-5'>
      <ul className='text-xl flex flex-col list-none text-cyan-400 space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0'>
      <Link to="/"> <li className='border-b ml-5 border-slate-800 hover:border-b-2 hover:border-white hover:text-white transition-all delay-150 duration-300 ease-in-out cursor-pointer'>Home
          </li></Link>
      
        <li className='border-b pl-5  border-slate-800 hover:border-b-2 hover:border-white hover:text-white transition-all delay-150 duration-300 ease-in-out cursor-pointer'>Jobs</li>
       <Link to="/Addjob">
        <li className='border-b pl-5  pr-10 border-slate-800 hover:border-b-2 hover:border-white hover:text-white transition-all delay-150 duration-300 ease-in-out cursor-pointer'>Add Job</li>
        </Link>
      </ul>
    </div>
  )
}
