import React from 'react';
import './App.css';
import logo from './logo.svg';
import NavBar from './NavBar';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
export default function Addjob(props) {
  return (
    <div>
      <NavBar />
      <div className='flex'>
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <p className='text-white text-5xl pl-10 sm:pl-4 md:text-4xl lg:text-5xl'>React <span className='text-cyan-400'>JS</span></p>
        </div>
      </div>
      <div className='bg-white py-8 mb-4 shadow-xl lg:ml-64 lg:mr-64 md:ml-32 md:mr-32 m-10 rounded-md border'>
        <form className='mt-6 '>
          <h1 className='text-black text-center bg-white text-5xl'>Add Job</h1>

          {/* Job Type */}
          <div className='mb-4'>
            <label
              htmlFor='type'
              className='block text-gray-700 font-bold mb-2 ml-4'
            >
              Job Type
            </label>
            <select
              id='type'
              name='type'
              className='border rounded w-full py-2 px-3 '
              required
              value={props.type}
              onChange={(e) => props.setType(e.target.value)}
            >
              <option value='Full-Time'>Full-Time</option>
              <option value='Part-Time'>Part-Time</option>
              <option value='Remote'>Remote</option>
              <option value='Internship'>Internship</option>
            </select>
          </div>

          {/* Job Listing */}
          <div className='mb-4'>
            <label
              htmlFor='title'
              className='block text-gray-700 font-bold mb-2 ml-4'
            >
              Job Listing Name
            </label>
            <input
              id='title'
              name='title'
              className='border rounded w-full py-2 px-3 '
              placeholder='Enter Job Listing Name'
              required
              value={props.title}
              onChange={(e) => props.setTitle(e.target.value)}
            />
          </div>

          {/* Job Description */}
          <div className='mb-4'>
            <label
              htmlFor='description'
              className='block text-gray-700 font-bold mb-2 ml-4'
            >
              Description
            </label>
            <textarea
              id='description'
              name='description'
              placeholder='Add any expectations,requirements etc'
              className='border rounded w-full py-2 px-3 h-24'
              required
              value={props.description}
              onChange={(e) => props.setDescription(e.target.value)}
            />
          </div>

          {/* Salary */}
          <div className='mb-4'>
            <label
              htmlFor='salary'
              className='block text-gray-700 font-bold mb-2 ml-4'
            >
              Salary
            </label>
            <select
              id='salary'
              name='salary'
              className='border rounded w-full py-2 px-3'
              required
              value={props.salary}
              onChange={(e) => props.setSalary(e.target.value)}
            >
              <option value='Under $50K'>Under $50K</option>
              <option value='$50K - 60K'>$50K - $60K</option>
              <option value='$60K - 70K'>$60K - $70K</option>
              <option value='$70K - 80K'>$70K - $80K</option>
              <option value='$80K - 90K'>$80K - $90K</option>
              <option value='$90K - 100K'>$90K - $100K</option>
              <option value='$100K - 125K'>$100K - $125K</option>
              <option value='$125K - 150K'>$125K - $150K</option>
              <option value='$150K - 175K'>$150K - $175K</option>
              <option value='$175K - 200K'>$175K - $200K</option>
              <option value='Over $200K'>Over $200K</option>
            </select>
          </div>

          {/* Location */}
          <div className='mb-4'>
            <label
              htmlFor='location'
              className='block text-gray-700 font-bold mb-2 ml-4'
            >
              Location
            </label>
            <input
              id='location'
              name='location'
              placeholder='Company Location'
              className='border rounded w-full py-2 px-3 '
              required
              value={props.location}
              onChange={(e) => props.setLocation(e.target.value)}
            />
          </div>

          <label
            htmlFor='company-info'
            className='block text-gray-700 text-2xl font-bold mb-2 ml-4'
          >
            Company Info
          </label>

          {/* Company Name */}
          <div className='mb-4'>
            <label
              htmlFor='companyName'
              className='block text-gray-700 font-bold mb-2 ml-4'
            >
              Company Name
            </label>
            <input
              id='companyName'
              name='companyName'
              placeholder='Company Name'
              className='border rounded w-full py-2 px-3 '
              required
              value={props.companyName}
              onChange={(e) => props.setCompanyName(e.target.value)}
            />
          </div>

          {/* Company Description */}
          <div className='mb-4'>
            <label
              htmlFor='companyDescription'
              className='block text-gray-700 font-bold mb-2 ml-4'
            >
              Company Description
            </label>
            <input
              id='companyDescription'
              name='companyDescription'
              placeholder='Company Description'
              className='border rounded w-full py-2 px-3 '
              required
              value={props.companyDescription}
              onChange={(e) => props.setCompanyDescription(e.target.value)}
            />
          </div>

          {/* Company Email */}
          <div className='mb-4'>
            <label
              htmlFor='contactEmail'
              className='block text-gray-700 font-bold mb-2 ml-4'
            >
              Company Email
            </label>
            <input
              id='contactEmail'
              name='contactEmail'
              type='email'
              placeholder='abc@gmail.com'
              className='border rounded w-full py-2 px-3 '
              required
              value={props.contactEmail}
              onChange={(e) => props.setContactEmail(e.target.value)}
            />
          </div>

          {/* Company Telephone */}
          <div className='mb-4'>
            <label
              htmlFor='contactPhone'
              className='block text-gray-700 font-bold mb-2 ml-4'
            >
              Company Telephone No
            </label>
            <input
              id='contactPhone'
              name='contactPhone'
              type='tel'
              placeholder='Telephone no'
              className='border rounded w-full py-2 px-3 '
              required
              value={props.contactPhone}
              onChange={(e) => props.setContactPhone(e.target.value)}
            />
          </div>

          <div className='ml-32 md:ml-52 lg:ml-96 w-24 h-10 bg-cyan-600 mb-10 mt-5 text-white text-center rounded-lg hover:text-white hover:bg-slate-800 transition-all delay-150 duration-300 ease-in-out cursor-pointer' onClick={props.handleSubmit}>
            Add Job
          </div>
        </form>
      </div>
    </div>
  )
}
