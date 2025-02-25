import Image from 'next/image'
import React from 'react'

const Post = () => {
  return (
    <div className='flex flex-col gap-4'>
      <div className="flex items-center justify-between">
        <div className='flex items-center gap-4'>
            <Image src="https://images.pexels.com/photos/19324535/pexels-photo-19324535/free-photo-of-boat-sailing-along-a-treelined-city-canal.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load" alt='' width={40} height={40} className='size-10 rounded-full'/>
            <span className='font-medium'>Blissmal dev</span>
        </div>
        <Image src="/more.png" alt='' width={16} height={16} />
      </div>
      <div className="flex flex-col gap-4">
        <div className="w-full min-h-96 relative">
            <Image src="https://images.pexels.com/photos/30754133/pexels-photo-30754133/free-photo-of-stunning-aerial-view-of-london-skyline-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load" alt='' fill className='object-cover rounded-md' />
        </div>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem quidem possimus neque perferendis non. Excepturi aperiam consequatur delectus, blanditiis repellat culpa deserunt illum saepe quaerat est voluptates earum modi dolorum!</p>
      </div>
      <div className="flex items-center justify-between text-sm my-4">
        <div className="flex gap-8">
            <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                <Image src="/like.png" alt='' width={16} height={16} className='cursor-pointer'/>
                <span className='text-gray-300'>|</span>
                <span className='text-gray-500'>
                    123 <span className='hidden md:inline'>Likes</span>
                </span>
            </div>
            <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                <Image src="/comment.png" alt='' width={16} height={16} className='cursor-pointer'/>
                <span className='text-gray-300'>|</span>
                <span className='text-gray-500'>
                    123 <span className='hidden md:inline'>Comments</span>
                </span>
            </div>
        </div>
        <div className="">
        <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                <Image src="/share.png" alt='' width={16} height={16} className='cursor-pointer'/>
                <span className='text-gray-300'>|</span>
                <span className='text-gray-500'>
                    123 <span className='hidden md:inline'>Shares</span>
                </span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Post
