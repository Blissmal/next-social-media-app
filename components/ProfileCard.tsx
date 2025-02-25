import Image from 'next/image'
import React from 'react'

const ProfileCard = () => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-6'>
        <div className="h-20 relative">
            <Image src="https://images.pexels.com/photos/29530548/pexels-photo-29530548/free-photo-of-scenic-florida-beach-with-palm-trees-and-lifeguard-hut.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt='' fill className='rounded-md object-cover'/>
            <Image src="https://images.pexels.com/photos/30739946/pexels-photo-30739946/free-photo-of-young-basketball-player-holding-ball-outdoors.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt='' width={48} height={48} className='rounded-full w-12 h-12 absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-white z-10'/>
        </div>
    </div>
  )
}

export default ProfileCard
