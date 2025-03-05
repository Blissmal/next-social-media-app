"use client";

import { deletePost } from "@/actions/user.acion";
import Image from "next/image";
import React, { useState } from "react";

const PostInfo = ({ postId }: { postId: number }) => {
  const [open, setOpen] = useState(false);
  const deletePostWithId = deletePost.bind(null, postId)
  return (
    <div className="relative">
      <Image
        src="/more.png"
        alt=""
        width={16}
        height={16}
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div
          className="absolute top-4 right-0 bg-white p-4 rounded-lg flex flex-col selection:gap-2 text-xs shadow-lg z-30"
        >
            <span className="cursor-pointer">View</span>
            <span className="cursor-pointer">Repost</span>
            <form action={deletePostWithId}>
                <button>Delete</button>
            </form>
        </div>
      )}
    </div>
  );
};

export default PostInfo;
