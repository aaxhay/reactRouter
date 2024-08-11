import React from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    const data = useLoaderData();
  return (
    <div className='text-3xl bg-zinc-700 p-4 text-white'>Github Followers : {data.followers}
    <img src={data.avatar_url} width={300} alt="" />
    </div>
  )
}

export const getGithubInfo = async () =>{
  const response = await fetch('https://api.github.com/users/aaxhay')
  return response.json();
}


export default Github