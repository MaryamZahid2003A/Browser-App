import React from 'react'
import { useState } from 'react';
export default function ViewJobs(props) {
    let descriptions=props.product.description;
    const[bool,setBoolean]=useState(false);
    

    let half=(id)=>{ 
        (bool?  setBoolean(false): setBoolean(true))
         
    }
    let check=()=>{
        return <p>{bool? <p>{props.product.description} </p>  :  <p>{descriptions.substring(0,90)} ...</p>}</p>
    }
  return (
     props.list.map((product)=>{
            <div className='flex flex-shrink'>
            <div className=' bg-white rounded-xl shadow-xl relative mt-9  lg:w-96  h-62  ml-10 mr-10' >
            <div className='p-4 m-10' key={product.id}>
            <div className='mb-6'>
                        <div className='text-gray-600 my-2'>{product.type}</div>
                        <h3 className='text-xl font-bold'>{product.title}</h3>
                    </div>
                    <div className='mb-5'>{check()}</div>
                        <p className='text-slate-700 ml-2 mb-2 cursor-pointer'>{bool ? <button onClick={()=>half(product.id)}>Less</button> : <p onClick={()=>half(product.id)}>More</p>}</p>
                        <h3 className='text-indigo-500 mb-2'>{product.salary}</h3>
                    <div className='border border-gray-100 mb-5'></div>

                    <div className='flex flex-col lg:flex-row justify-between mb-4'>
                        <a href='#' className='text-blue-500'>
                        Read More
                        </a>
                    </div>
                    </div>
            </div>
            </div>
     })
       
  );
}
