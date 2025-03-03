"use client";

import { addComment } from "@/actions/user.acion";
import { useUser } from "@clerk/nextjs";
import { Comment, User } from "@prisma/client";
import Image from "next/image";
import React, { useOptimistic, useState } from "react";

type CommentWithUser = Comment & { user: User };

const CommentList = ({
  comments,
  postId,
}: {
  comments: CommentWithUser[];
  postId: number;
}) => {
  const { user } = useUser();
  const [commentState, setCommentState] = useState(comments);
  const [description, setDescription] = useState("");

  const add = async () => {
    if (!user || !description) return;

    addOptimisticComment({
      id: Math.random(),
      description,
      createdAt: new Date(Date.now()),
      UpdatedAt: new Date(Date.now()),
      userId: user.id,
      postId: postId,
      user: {
        id: user.id,
        username: "Sending please wait ...",
        avatar: user.imageUrl || "/noAvatar.png",
        cover: "",
        description: "",
        name: "",
        surname: "",
        city: "",
        work: "",
        school: "",
        website: "",
        createdAt: new Date(Date.now()),
      }
    })
    try {
      const createdComment = await addComment(postId, description)
      setCommentState(prev => [createdComment, ...prev])
    } catch (error) {
      
    }
  }

  const [optimisticComments, addOptimisticComment] = useOptimistic(commentState, (state, value: CommentWithUser) => [value, ...state])
  return (
    <>
      {user && <div className="flex items-center gap-4">
        <Image
          src={user.imageUrl || "/noAvatar.png"}
          alt=""
          width={32}
          height={32}
          className="w-8 h-8 rounded-full"
        />
        <form action={add} className="flex-1 flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full">
          <input
            type="text"
            placeholder="Write a comment..."
            className="bg-transparent outline-none flex-1"
            onChange={e => setDescription(e.target.value)}
          />
          <Image
            src="/emoji.png"
            alt=""
            width={16}
            height={16}
            className="w-4 h-4 cursor-pointer"
          />
        </form>
      </div>}
      <div className="">
        {optimisticComments.map(comment => (
            <div key={comment.id} className="flex gap-4 justify-between mt-6">
            <Image
              src={comment.user.avatar || "/noAvatar.png"}
              alt=""
              width={40}
              height={40}
              className="w-10 h-10 rounded-full"
            />
            <div className="flex flex-col gap-2 flex-1">
              <span className="font-medium">{(comment.user.name && comment.user.surname) ? comment.user.name + " " + comment.user.surname : comment.user.username}</span>
              <p>
                {comment.description}
              </p>
              <div className="flex items-center gap-8 text-xs text-gray-500 mt-2">
                <div className="flex items-center gap-4">
                  <Image
                    src="/like.png"
                    alt=""
                    width={16}
                    height={16}
                    className="cursor-pointer size-4"
                  />
                  <span className="text-gray-300">|</span>
                  <span className="text-gray-500">0 Likes</span>
                </div>
                <div>Reply</div>
              </div>
            </div>
            <Image
              src="/more.png"
              alt=""
              width={16}
              height={16}
              className="cursor-pointer size-4"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default CommentList;
