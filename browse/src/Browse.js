import React, { useState } from 'react';
import {FaMapMarker} from 'react-icons/fa'
export default function Browse(props) {
    let descriptions=props.product.description;
    const[bool,setBoolean]=useState(false);
    

    let half=(id)=>{ 
        (bool?  setBoolean(false): setBoolean(true))
         
    }
    let check=()=>{
        return <p>{bool? <p>{props.product.description} </p>  :  <p>{descriptions.substring(0,90)} ...</p>}</p>
    }
  return (
       <div className='flex flex-shrink'>
            <div className=' bg-white rounded-xl shadow-xl relative mt-9  lg:w-96  h-62  ml-10 mr-10' >
            <div className='p-4 m-10' key={props.product.id}>
            <div className='mb-6'>
                <div className='text-gray-600 my-2'>{props.product.type}</div>
                <h3 className='text-xl font-bold'>{props.product.title}</h3>
            </div>
            <div className='mb-2'>{check()}</div>
            <div className='flex justify-between'>
                <div>
                    <p className='text-slate-700 ml-2 mb-2 cursor-pointer'>{bool ? <button onClick={()=>half(props.product.id)}>Less</button> : <p onClick={()=>half(props.product.id)}>More</p>}</p>
                    <h3 className='text-indigo-500 mb-2'>{props.product.salary}</h3>
                </div>
                <div>
                <div className='text-orange-700 mb-3'>
            <FaMapMarker className='inline text-lg mb-1 mr-1' />
            {props.product.location}
          </div>

                </div>
            </div> 
            <div className='border border-gray-100 mb-5'></div>

            <div className='flex flex-col lg:flex-row justify-between mb-4'>
                <a href='#' className='text-blue-500'>
                Read More
                </a>
            </div>
            </div>
            </div>
        </div>
  );
}
