import Image from 'next/image'
import React from 'react'
import Comments from './Comments'
import { Post as PostType, User } from '@prisma/client'

type FeedPostType = PostType & {user: User} & {likes: [{userId: string}]} & {_count: {comments: number}}

const Post = ({post}: {post: FeedPostType}) => {
  return (
    <div className='flex flex-col gap-4'>
      <div className="flex items-center justify-between">
        <div className='flex items-center gap-4'>
            <Image src={post.user.avatar || "/noAvatar.png"} alt='' width={40} height={40} className='size-10 rounded-full'/>
            <span className='font-medium'>{(post.user.name && post.user.surname) ? post.user.name + " " + post.user.surname : post.user.username}</span>
        </div>
        <Image src="/more.png" alt='' width={16} height={16} />
      </div>
      <div className="flex flex-col gap-4">
        {post.img && <div className="w-full min-h-96 relative">
            <Image src={post.img} alt='' fill className='object-cover rounded-md' />
        </div>}
        <p>{post.description}</p>
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
                    <span className='hidden md:inline'>Share</span>
                </span>
            </div>
        </div>
      </div>
      <Comments />
    </div>
  )
}

export default Post
