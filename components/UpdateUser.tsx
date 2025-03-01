"use client"
import { User } from '@prisma/client'
import React from 'react'

const UpdateUser = ({user}: {user: User}) => {
  return (
    <div>
      <span className='text-blue-500 text-xs cursor-pointer'>Update</span>
    </div>
  )
}

export default UpdateUser
