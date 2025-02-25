import Link from 'next/link'
import React from 'react'

const FriendRequests = () => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md text-sm'>
      <div className="flex justify-between items-center font-medium">
        <span className='text-gray-500'>Friend Requests</span>
        <Link href="/" className='text-blue-500 text-xs'>See all</Link>
      </div>
      <div className=""></div>
    </div>
  )
}

export default FriendRequests
