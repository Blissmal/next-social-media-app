"use client"
import { User } from '@prisma/client'
import React, { useState } from 'react'

const UpdateUser = ({user}: {user: User}) => {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <span className='text-blue-500 text-xs cursor-pointer' onClick={() => setOpen(true)}>Update</span>
      <div className='absolute w-screen h-screen top-0 left-0 bg-black bg-opacity-65 flex items-center justify-center z-50'>
        <form action="" className='p-12 bg-white rounded-lg shadow-md flex flex-col gap-2 w-full md:w-1/2 xl:w-1/3'>

        </form>
      </div>
    </div>
  )
}

export default UpdateUser
