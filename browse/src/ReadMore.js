import NavBar from './NavBar';
import React, { useState } from 'react';
import { FaMapMarker } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import './App.css';
import logo from './logo.svg';
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
      <div>
        <div className='flex'>
            <img src={logo} className="App-logo" alt="logo" />
            <div>
                <p className='text-slate-100 text-5xl pl-10 sm:pl-4 md:text-4xl lg:text-5xl'>
                React <span className='text-cyan-400'>JS</span>
                </p>
            </div>
            </div>
            <NavBar />
        </div>
        <div className='bg-white text-indigo-500 hover:text-indigo-800 h-16 w-screen mt-10'>
            <Link to="/">
            <div className='flex items-center pt-4'>
                <FaArrowLeft className='mr-2 ml-5 pt-1' />
                <p className='ml-5'>Back To Job Listing</p>
            </div>
            </Link>
        </div>
      <div className='flex flex-wrap sm:flex-nowrap pt-10 px-10 gap-6'>
            <div className='flex-1 bg-white rounded-xl shadow-3xl p-6 w-60'>
                <div className='mb-6'>
                    <div className='text-gray-600 my-2'>{product.type}</div>
                    <h3 className='text-3xl font-bold text-black'>{product.title}</h3>
                </div>
                <div className='text-orange-700 mb-1'>
                    <FaMapMarker className='inline text-lg mb-1 mr-1' />
                    {product.location}
                </div>
            <div className='border border-gray-100 mb-5'></div>
            <p className='my-2 text-indigo-600 text-md'>Job Description</p>
            <div className='my-2 text-black text-md'>{product.description}</div>
            <p className='my-2 text-indigo-600 text-md'>Salary</p>
            <div className='text-orange-700 text-md pb-7'>{product.salary}</div>
            </div>
            <aside className='flex-1 bg-white p-6 rounded-lg shadow-md w-30'>
            <div>
                <h3 className='text-xl font-bold mb-6'>Company Info</h3>
                <h2 className='text-2xl'>{product.company.name}</h2>
                <p className='my-2'>{product.company.description}</p>
                <hr className='my-4' />
                <h3 className='text-xl'>Contact Email:</h3>
                <p className='my-2 bg-indigo-100 p-2 font-bold'>
                {product.company.contactEmail}
                </p>
                <h3 className='text-xl'>Contact Phone:</h3>
                <p className='my-2 bg-indigo-100 p-2 font-bold'>
                {product.company.contactPhone}
                </p>
            </div>
            <div className='mt-6'>
                <h3 className='text-xl font-bold mb-6'>Manage Job</h3>
                <Link
                to={`/edit-job/${product.id}`}
                className='bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block'
                >
                Edit Job
                </Link>
                <button
                className='bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block'
                >
                Delete Job
                </button>
            </div>
            </aside>
      </div>
    </>
  );
}
