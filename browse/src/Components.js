import React from 'react'

export default function Components(props) {
  return (
    <div className='flex sm:flex-wrap'>
        <div className='bg-slate-300 h-56 w-96 rounded-lg mt-20 ml-40 mr-40'>
                <h1 className=' font-bold text-2xl pt-10 pl-8'>For Developers</h1>
                <p className='pl-8 mt-2 text-black'>Browse our React JS and start your career today</p>
                <button type="button"  className='ml-8 mt-4 transition-all delay-150 duration-300 ease-in-out cursor-pointer text-white w-28 h-12 rounded-xl bg-black hover:text-black hover:bg-white'>Browse Jobs</button>
        </div>
        <div className='bg-slate-300 h-56 w-96 rounded-lg  mt-20 ml-40 mr-40'>
                <h1 className=' font-bold text-2xl pt-10 pl-8'>For Employers</h1>
                <p className='pl-8 mt-2 text-black'>Let your job to find the developer for the role.</p>
                <button type="button"  className='ml-8 mt-4 transition-all delay-150 duration-300 ease-in-out cursor-pointer text-white w-28 h-12 rounded-xl bg-slate-500 hover:text-slate-800 hover:bg-white'>Add Job</button>
        </div>
      
    </div>
  )
}
