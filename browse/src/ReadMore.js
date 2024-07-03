import NavBar from './NavBar';
import React, { useState } from 'react';
import { FaMapMarker } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Main from './Main';
import './App.css';
import logo from './logo.svg';
import { useParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
export default function ReadMore({ list }) {
  const { id } = useParams();
  const product = list.find((item) => item.id.toString() === id);

  const [bool, setBoolean] = useState(false);

  const toggleDescription = () => {
    setBoolean(!bool);
  };

  const renderDescription = () => {
    const { description } = product;
    return bool ? <p>{description}</p> : <p>{description.substring(0, 90)} ...</p>;
  };
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
    <div className='flex'>
            <div className='flex'>
                <img src={logo} className="App-logo" alt="logo" />
                <div>
                <p className='text-slate-400 text-5xl pl-10 sm:pl-4 md:text-4xl lg:text-5xl'>React <span className='text-cyan-400'>JS</span></p>
                </div>
            </div>
            <NavBar />
            </div>
    
            <div className='bg-white text-indigo-500 hover:text-indigo-800 h-16 w-screen mt-10'>
                <Link to="/"> <FaArrowLeft className='mr-2 ml-5' /><p className='ml-5 '>Back To Job Listing</p>
                </Link>
            </div>
            <div>
                    <div className='bg-white rounded-xl shadow-3xl relative  mt-9   marker:h-62 ml-10 mr-10'>
                            <div className='p-4 m-10' key={product.id}>
                                <div className='mb-6'>
                                    <div className='text-gray-600 my-2'>{product.type}</div>
                                    <h3 className='text-3xl font-bold text-black'>{product.title}</h3>
                                </div>
                            <div className='text-orange-700 mb-1'>
                                    <FaMapMarker className='inline text-lg mb-1 mr-1' />
                                    {product.location}
                            </div>
                    </div>
                    
                    <div className='bg-white rounded-xl shadow-3xl relative   marker:h-62 ml-10 mr-10'>
                        <p className='mb-3 text-indigo-600 text-md'>Job Description</p>
                        <div  className='mb-3 text-black text-md'>{product.description}</div>
                        <p className='mb-3 text-indigo-600 text-md'>Salary</p>
                        <div className=' text-orange-700 text-md pb-7'>{product.salary}</div>
                    </div>
        
            </div>
                
     </div>
    </>
  );
}
