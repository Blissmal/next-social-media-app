import Image from 'next/image'
import React from 'react'

const AddPost = () => {
  return (
    <div className='p-4 bg-white rounded-lg flex gap-4 justify-between text-sm'>
      <Image src="" alt='' width={48} height={48} className="w-12 h-12 object-cover rounded-full ring-1" />
      <div className='flex-1'>
        <div className="flex gap-4">
          <textarea placeholder='whats on your mind?' className='bg-slate-100 flex-1 p-2 rounded-lg'></textarea>
          <Image src="/emoji.png" alt='' width={20} height={20} className="size-5 cursor-pointer self-end" />
        </div>
        <div className="">

        </div>
      </div>
    </div>
  )
}

export default AddPost
