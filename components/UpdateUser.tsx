"use client"
import { User } from '@prisma/client'
import React, { useState } from 'react'

const UpdateUser = ({user}: {user: User}) => {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <span className='text-blue-500 text-xs cursor-pointer' onClick={() => setOpen(true)}>Update</span>
    </div>
  )
}

export default UpdateUser
