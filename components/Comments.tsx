import prisma from '@/lib/client'
import Image from 'next/image'
import React from 'react'

const Comments = async ({postId}: {postId: number}) => {
  const comment = await prisma.comment.findMany({
    where: {
      postId
    },
    include: {
      user: true
    }
  })
  return (
    <div>
      <div className="flex items-center gap-4">
        <Image src="https://images.pexels.com/photos/30465648/pexels-photo-30465648/free-photo-of-breathtaking-black-and-white-urban-window-cleaning.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load" alt='' width={32} height={32} className='w-8 h-8 rounded-full'/>
        <div className='flex-1 flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full'>
            <input type="text" placeholder='Write a comment...' className='bg-transparent outline-none flex-1' />
            <Image src="/emoji.png" alt='' width={16} height={16} className='w-4 h-4 cursor-pointer'/>
        </div>
      </div>
      <div className="">
        <div className="flex gap-4 justify-between mt-6">
            <Image src="https://images.pexels.com/photos/30465648/pexels-photo-30465648/free-photo-of-breathtaking-black-and-white-urban-window-cleaning.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load" alt='' width={40} height={40} className='w-10 h-10 rounded-full'/>
            <div className="flex flex-col gap-2 flex-1">
                <span className='font-medium'>Beth mal</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, dignissimos. Ratione accusamus dolorem harum quibusdam quia maiores dolores voluptatibus impedit culpa reprehenderit molestias neque nisi, molestiae sit autem ea nesciunt.</p>
                <div className='flex items-center gap-8 text-xs text-gray-500 mt-2'>
                    <div className='flex items-center gap-4'>
                        <Image src="/like.png"  alt="" width={16} height={16} className="cursor-pointer size-4" />
                        <span className='text-gray-300'>|</span>
                        <span className='text-gray-500'>123 Likes</span>
                    </div>
                    <div>
                        Reply
                    </div>
                </div>
            </div>
            <Image src="/more.png"  alt="" width={16} height={16} className="cursor-pointer size-4" />
        </div>
      </div>
    </div>
  )
}

export default Comments
