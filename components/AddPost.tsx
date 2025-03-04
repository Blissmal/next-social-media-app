"use client";

import { useUser } from "@clerk/nextjs";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import React, { useState } from "react";
import AddPostButton from "./AddPostButton";
import { addPost } from "@/actions/user.acion";

const AddPost = () => {
  const { user, isLoaded } = useUser();
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState<any>();

  if (!isLoaded) {
    return "Loading ...";
  }

  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm">
      <Image
        src={user?.imageUrl || "/noAvatar.png"}
        alt=""
        width={48}
        height={48}
        className="w-12 h-12 object-cover rounded-full"
      />
      <div className="flex-1">
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            if (img || desc) {
              const formData = new FormData(e.currentTarget);
              await addPost(formData, img?.secure_url || "");
            } else {
              window.alert("No data added !")
            }
          }}
          className="flex gap-4"
        >
          <textarea
            name="description"
            placeholder="whats on your mind?"
            className="bg-slate-100 flex-1 p-2 rounded-lg"
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
          <div className="">
            <Image
              src="/emoji.png"
              alt=""
              width={20}
              height={20}
              className="size-5 cursor-pointer self-end"
            />
            <AddPostButton />
          </div>
        </form>
        <div className="flex items-center gap-4 mt-4 flex-wrap text-gray-400">
          <CldUploadWidget
            uploadPreset="social"
            onSuccess={(result, { widget }) => {
              setImg(result.info);
              widget.close;
            }}
          >
            {({ open }) => {
              return (
                <div
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={() => open()}
                >
                  <Image src="/addimage.png" alt="" width={20} height={20} />
                  Photo
                </div>
              );
            }}
          </CldUploadWidget>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addVideo.png" alt="" width={20} height={20} />
            Video
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/poll.png" alt="" width={20} height={20} />
            Poll
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addevent.png" alt="" width={20} height={20} />
            Event
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
