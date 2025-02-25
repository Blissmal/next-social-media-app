import Image from 'next/image'
import React from 'react'

const Ad = ({size}: {size: "sm" | "md" | "lg"}) => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md text-sm'>
      <div className="flex items-center justify-between text-gray-500 font-medium">
        <span>Sponsored Ads</span>
        <Image src="/more.png" alt='' width={16} height={16}/>
      </div>
      <div className={`flex flex-col mt-4 ${size === "sm" ? "gap-2" : "gap-4"}`}>
        <div className={`relative w-full ${size === "sm" ? "h-24": size === "md" ? "h-36": "h-48"}`}>
            <Image src="https://images.pexels.com/photos/18070342/pexels-photo-18070342/free-photo-of-woman-in-a-dress-posing-by-a-cement-wall.png?auto=compress&cs=tinysrgb&w=600&lazy=load" alt='' fill className='rounded-lg object-cover'/>
        </div>
        <div className='flex items-center gap-4'>
            <Image src="https://images.pexels.com/photos/18070342/pexels-photo-18070342/free-photo-of-woman-in-a-dress-posing-by-a-cement-wall.png?auto=compress&cs=tinysrgb&w=600&lazy=load" alt='' width={24} height={24} className='rounded-full w-6 h-6 '/>
            <span className='text-blue-500 font-medium'>BigChief Lounge</span>
        </div>
        <p className={`${size === "sm" ? "text-xs" : "text-sm"}`}>
            {size === "sm" ? 
            "Lorem ipsum dolot sit amet consectetur adipisicing elit." 
            : size === "md" ? 
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere id cum sed, corrupti praesentium autem magnam adipisci sint quisquam beatae vel porro. At explicabo a incidunt recusandae nemo iste quo?" 
            : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sapiente obcaecati excepturi voluptate praesentium libero ducimus eligendi, nostrum expedita nobis quas! Id, sapiente? is wef heir guy vr sefe verfe "}
        </p>
        <button className='bg-gray-200 text-gray-500 p-2 text-xs rounded-lg'>Learn more</button>
      </div>
    </div>
  )
}

export default Ad
