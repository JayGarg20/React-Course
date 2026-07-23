/* eslint-disable no-unused-vars */
import React, { useEffect,useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    const data = useLoaderData()

    if (!data) {
        return <div className="text-center p-4">Loading...</div>
    }

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github followers: {data.followers}
      <div className="mt-4">
        <img src={data.avatar_url} alt="avatar" className="mx-auto rounded-full w-24 h-24" />
      </div>
    </div>
  )
}

export default Github
// eslint-disable-next-line react-refresh/only-export-components
export const githubInfoLoader = async() => {
  const response = await fetch('https://api.github.com/users/JayGarg20/')
  return response.json()
}