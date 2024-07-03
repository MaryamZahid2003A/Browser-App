import React from 'react';
import ViewAllJobs from './ReadMore';

export default function ViewJobs(props) {
  return (
    <div>
      {props.list.map((product) => (
        <div key={product.id}>
          <ViewAllJobs product={product} />
        </div>
      ))}
    </div>
  );
}
