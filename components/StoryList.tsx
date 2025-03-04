"use client";

import { useUser } from "@clerk/nextjs";
import { Story, User } from "@prisma/client";
import Image from "next/image";
import React, { useOptimistic, useState } from "react";

type StoryWithUser = Story & {
  user: User;
};

const StoryList = ({
  stories,
}: {
  stories: StoryWithUser[];
}) => {
    const [storyList, setStoryList] = useState(stories)
    const [img, setImg] = useState<any>()

    const {user} = useUser()

    const [optimisticStories, addOPtimisticStories] = useOptimistic(storyList, (state, value: StoryWithUser) => [value, ...stories])

  return (
    <div>
      <div className="flex flex-col items-center gap-2 cursor-pointer">
        <Image
          src="https://images.pexels.com/photos/30550408/pexels-photo-30550408/free-photo-of-sunlit-forest-with-rays-through-trees.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
          alt=""
          width={80}
          height={80}
          className="w-20 h-20 rounded-full"
        />
        <span className="font-medium">Ricky</span>
      </div>
    </div>
  );
};

export default StoryList;
