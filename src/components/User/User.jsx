import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const {userid} = useParams();
  return (
    <div className='text-3xl p-4 bg-zinc-700 text-white'>User : {userid}</div>
  )
}

export default User