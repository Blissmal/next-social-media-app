"use client";

import Image from "next/image";
import React, { useState } from "react";

const PostInfo = ({ postId }: { postId: number }) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Image src="/more.png" alt="" width={16} height={16} onClick={() => setOpen(prev => !prev)}/>
    </div>
  );
};

export default PostInfo;
