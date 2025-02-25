import Image from 'next/image'
import React from 'react'

const AddPost = () => {
  return (
    <div className='p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm'>
      <Image src="" alt='' width={48} height={48} className="w-12 h-12 object-cover rounded-full ring-1" />
      <div className='flex-1'>
        <div className="flex gap-4">
          <textarea placeholder='whats on your mind?' className='bg-slate-100 flex-1 p-2 rounded-lg'></textarea>
          <Image src="/emoji.png" alt='' width={20} height={20} className="size-5 cursor-pointer self-end" />
        </div>
        <div className="flex items-center gap-4 mt-4 flex-wrap text-gray-400">
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addimage.png" alt='' width={20} height={20} />
            Photo
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addVideo.png" alt='' width={20} height={20} />
            Video
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/poll.png" alt='' width={20} height={20} />
            Poll
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addevent.png" alt='' width={20} height={20} />
            Event
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddPost
