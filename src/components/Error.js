import { useRouteError } from 'react-router-dom'


import React from 'react'

const Error = () => {
    const err=useRouteError();
    console.log(err);
  return (
    <div className='error m-3 p-3'>
      <h1>{err.status} : {err.statusText}</h1>
      <h2>{err.data}</h2>
    </div>
  )
}

export default Error