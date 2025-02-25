import Image from 'next/image'
import React from 'react'

const Comments = () => {
  return (
    <div>
      <div className="flex items-center gap-4">
        <Image src="https://images.pexels.com/photos/30465648/pexels-photo-30465648/free-photo-of-breathtaking-black-and-white-urban-window-cleaning.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load" alt='' width={32} height={32} className='w-8 h-8 rounded-full'/>
        <div className='flex-1 flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full'>
            <input type="text" placeholder='Write a comment...' className='bg-transparent outline-none flex-1' />
            <Image src="/emoji.png" alt='' width={16} height={16} className='w-4 h-4 cursor-pointer'/>
        </div>
      </div>
      <div className=""></div>
    </div>
  )
}

export default Comments
