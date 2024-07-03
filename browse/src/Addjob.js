import React from 'react'
import './App.css';
import logo from './logo.svg';
import NavBar from './NavBar';
export default function Addjob(props) {
  return (
    <div>
         <div className='flex'>
            <img src={logo} className="App-logo" alt="logo" />
            <div>
                <p className='text-slate-100 text-5xl pl-10 sm:pl-4 md:text-4xl lg:text-5xl'>
                React <span className='text-cyan-400'>JS</span>
                </p>
            </div>
            <NavBar />
        </div>
        <div className='bg-white py-8 mb-4 shadow-xl   rounded-md border m-4  px-96'>
            <form className='mt-6'>
                <h1 className='text-cyan-900 text-center text-5xl'>Add Job</h1>
                <div className='mb-4'>
                        <label
                            htmlFor='type'
                            className='block text-gray-700 font-bold mb-2'
                        >
                            Job Type
                        </label>
                        <select
                            id='type'
                            name='type'
                            className='border  bg-slate-500 rounded w-full '
                            required
                        >
                            <option value='Full-Time'>Full-Time</option>
                            <option value='Part-Time'>Part-Time</option>
                            <option value='Remote'>Remote</option>
                            <option value='Internship'>Internship</option>
                        </select>
                    </div>

                    {/* job namw */}
                    <div className='mb-4'>
                        <label
                            htmlFor='type'
                            className='block text-gray-700 font-bold mb-2'
                        >
                            Job Type
                        </label>
                        <select
                            id='type'
                            name='type'
                            className='border rounded w-full py-2 px-3'
                            required
                        >
                            <option value='Full-Time'>Full-Time</option>
                            <option value='Part-Time'>Part-Time</option>
                            <option value='Remote'>Remote</option>
                            <option value='Internship'>Internship</option>
                        </select>
                    </div>
            </form>
        </div>
     </div>
  )
}
