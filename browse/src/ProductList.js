import React, { useState } from 'react';
import Browse from './Browse';


export default function ProductList(props) {
  const [boolean, setBoolean] = useState(false);
  const MiniList = props.list.slice(0, 3);

  const toggleView = () => {
    setBoolean(!boolean);
  };

  return (
    <div>
      {boolean ? (
        <div className='flex flex-wrap justify-center'>
          {props.list.map((product) => (
            <div key={product.id}>
              {<Browse product={product} /> }
            </div>
          ))}
        </div>
      ) : (
        <div className='flex flex-wrap justify-center'>
          {MiniList.map((product) => (
            <div key={product.id}>
              <Browse product={product} />
            </div>
          ))}
        </div>
      )}

      <div className='w-full flex justify-center mt-4'>
       
          <button
          onClick={toggleView}
            className='w-32 h-16 bg-cyan-600 mb-10 mt-6 text-white text-center rounded-lg hover:text-white hover:bg-slate-800 transition-all delay-150 duration-300 ease-in-out cursor-pointer'
          >
            
            {boolean ? 'Show Less' : 'View More Jobs'}
          </button>
      </div>
    </div>
  );
}
