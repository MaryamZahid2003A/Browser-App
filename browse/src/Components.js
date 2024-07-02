import React from 'react'

export default function Components() {
  return (
    <div className='flex sm:flex-wrap'>
        <div className='bg-slate-300 h-56 w-96 rounded-lg mt-20 ml-40 mr-40'>
                <h1 className=' font-bold text-2xl pt-10 pl-8'>For Developers</h1>
                <p className='pl-8 mt-2 text-black'>Browse our React JS and start your career today</p>
        </div>
        <div className='bg-slate-300 h-56 w-96 rounded-lg  mt-20 ml-40 mr-40'>
                <h1 className=' font-bold text-2xl pt-10 pl-8'>For Employers</h1>
                <p className='pl-8 mt-2 text-black'>Let your job to find the predict developer for the role.</p>
        </div>
      
    </div>
  )
}
