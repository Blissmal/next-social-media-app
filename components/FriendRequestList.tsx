"use client";
import { acceptFollowRequest, declineFollowRequest } from "@/actions/user.acion";
import { FollowRequest, User } from "@prisma/client";
import Image from "next/image";
import React, { useOptimistic, useState } from "react";
import { toast } from "react-toastify";

type RequestWithUser = FollowRequest & {
  sender: User;
};

const FriendRequestList = ({ requests }: { requests: RequestWithUser[] }) => {
    const [requestState, setRequestState] = useState(requests)
    const accept = async (requestId: number, userId: string) => {
        removeOPtimisticRequests(requestId)
        try {
            await acceptFollowRequest(userId)
            setRequestState(prev => prev.filter(req => req.id !== requestId))
        } catch (error) {
            toast.error("something went wrong ! try again")
        }
    }
    const decline = async (requestId: number, userId: string) => {
        removeOPtimisticRequests(requestId)
        try {
            await declineFollowRequest(userId)
            setRequestState(prev => prev.filter(req => req.id !== requestId))
        } catch (error) {
          toast.error("something went wrong ! try again")
        }
    }
    const [optimisticRequests, removeOPtimisticRequests] = useOptimistic(requestState, (state, value: number) => state.filter(req => req.id !== value))
  return (
    <div>
      {optimisticRequests.map((request) => (
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
            <form action={() => accept(request.id, request.senderId)}>
                <button>
                <Image
                    src="/accept.png"
                    alt=""
                    width={20}
                    height={20}
                    className="cursor-pointer"
                />
                </button>
            </form>
            
            <form action={() => decline(request.id, request.senderId)}>
                <button>
                    <Image
                      src="/reject.png"
                      alt=""
                      width={20}
                      height={20}
                      className="cursor-pointer"
                    />
                </button>
            </form>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FriendRequestList;
