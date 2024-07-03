import React, { useState } from 'react';
import { FaMapMarker } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ReadMore from './ReadMore';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function Browse(props) {
  const [bool, setBoolean] = useState(false);

  const toggleDescription = () => {
    setBoolean(!bool);
  };

  const renderDescription = () => {
    const { description } = props.product;
    return bool ? <p>{description}</p> : <p>{description.substring(0, 90)} ...</p>;
  };

  return (
    <div className='flex flex-shrink'>
      <div className='bg-white rounded-xl shadow-2xl relative mt-9 lg:w-96 h-62 ml-10 mr-10'>
        <div className='p-4 m-10' key={props.product.id}>
          <div className='mb-6'>
            <div className='text-gray-600 my-2'>{props.product.type}</div>
            <h3 className='text-xl font-bold'>{props.product.title}</h3>
          </div>
          <div className='mb-0.5'>{renderDescription()}</div>
          <div className='flex justify-between mt-2'>
            <div>
              <p className='ml-1 mb-2 cursor-pointer text-indigo-500' onClick={toggleDescription}>
                {bool ? 'Less' : 'More'}
              </p>
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
          <div className='w-24 h-10 bg-cyan-600 mb-10 mt-6 text-white text-center rounded-lg hover:text-white hover:bg-slate-800 transition-all delay-150 duration-300 ease-in-out cursor-pointer'>
          <Link to={`/ReadMore/${props.product.id}`}>Read More</Link>
         
              
            
          </div>
        </div>
      </div>
    </div>
  )
}
