"use client";
import { FollowRequest, User } from "@prisma/client";
import Image from "next/image";
import React from "react";

type RequestWithUser = FollowRequest & {
  sender: User;
};

const FriendRequestList = ({ requests }: { requests: RequestWithUser[] }) => {
  return (
    <div>
      {requests.map((request) => (
        <div className="flex items-center justify-between" key={request.id}>
          <div className="flex items-center gap-4">
            <Image
              src={request.sender.avatar || "/noAvatar.png"}
              alt=""
              width={40}
              height={40}
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="font-semibold">{request.sender.name && request.sender.surname ? request.sender.name + " " + request.sender.surname : request.sender.username}</span>
          </div>
          <div className="flex gap-3 justify-end">
            <Image
              src="/accept.png"
              alt=""
              width={20}
              height={20}
              className="cursor-pointer"
            />
            <Image
              src="/reject.png"
              alt=""
              width={20}
              height={20}
              className="cursor-pointer"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default FriendRequestList;
