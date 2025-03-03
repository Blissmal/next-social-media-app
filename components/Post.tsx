import Image from 'next/image'
import React from 'react'
import Comments from './Comments'
import { Post as PostType, User } from '@prisma/client'
import PostInteraction from './PostInteraction'

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
      <PostInteraction postId={post.id} likes={post.likes.map(like => like.userId)} comments={post._count.comments} />
      <Comments />
    </div>
  )
}

export default Post
