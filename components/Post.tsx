import Image from "next/image";
import React, { Suspense } from "react";
import Comments from "./Comments";
import { Post as PostType, User } from "@prisma/client";
import PostInteraction from "./PostInteraction";
import PostInfo from "./PostInfo";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";

type FeedPostType = PostType & { user: User } & {
  likes: [{ userId: string }];
} & { _count: { comments: number } };

const Post = async ({ post }: { post: FeedPostType }) => {
  const {userId} = await auth()
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src={post.user.avatar || "/noAvatar.png"}
            alt=""
            width={40}
            height={40}
            className="size-10 rounded-full"
          />
          <Link href={`/profile/${post.user.username}`} className="font-medium">
            {post.user.name && post.user.surname
              ? post.user.name + " " + post.user.surname
              : post.user.username}
          </Link>
        </div>
        {userId === post.user.id && <PostInfo postId={post.id}/>}
      </div>
      <div className="flex flex-col gap-4">
        {post.img && (
          <div className="w-full min-h-96 relative">
            <Image
              src={post.img}
              alt=""
              fill
              className="object-cover rounded-md"
            />
          </div>
        )}
        <p>{post.description}</p>
      </div>
      <Suspense fallback="Loading ...">
        <PostInteraction
          postId={post.id}
          likes={post.likes.map((like) => like.userId)}
          comments={post._count.comments}
        />
      </Suspense>
      <Suspense fallback="Loading ...">
        <Comments postId={post.id} />
      </Suspense>
    </div>
  );
};

export default Post;
