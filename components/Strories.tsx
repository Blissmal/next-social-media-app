import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";

const Strories = async () => {
    const {userId: currentUserId} = await auth()
    if (!currentUserId) return null
    const stories = await prisma.story.findMany({
        where: {
            expiresAt: {
                gt: new Date(),
            },
            OR: [
                {
                    user: {
                        followers: {
                            some: {
                                followerId: currentUserId
                            }
                        }
                    }
                },
                {
                    userId: currentUserId
                }
            ]
        },
        include: {
            user: true
        }
    })
    return (
        <div className="p-4 bg-white rounded-lg shadow-md overflow-scroll text-xs scrollbar-hidden">
            <div className="flex gap-8 w-max">
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                    <Image src="https://images.pexels.com/photos/30550408/pexels-photo-30550408/free-photo-of-sunlit-forest-with-rays-through-trees.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load" alt="" width={80} height={80} className="w-20 h-20 rounded-full"/>
                    <span className="font-medium">Ricky</span>
                </div>
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                    <Image src="https://images.pexels.com/photos/30550408/pexels-photo-30550408/free-photo-of-sunlit-forest-with-rays-through-trees.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load" alt="" width={80} height={80} className="w-20 h-20 rounded-full"/>
                    <span className="font-medium">Ricky</span>
                </div>
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                    <Image src="https://images.pexels.com/photos/30550408/pexels-photo-30550408/free-photo-of-sunlit-forest-with-rays-through-trees.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load" alt="" width={80} height={80} className="w-20 h-20 rounded-full"/>
                    <span className="font-medium">Ricky</span>
                </div>
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                    <Image src="https://images.pexels.com/photos/30550408/pexels-photo-30550408/free-photo-of-sunlit-forest-with-rays-through-trees.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load" alt="" width={80} height={80} className="w-20 h-20 rounded-full"/>
                    <span className="font-medium">Ricky</span>
                </div>
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                    <Image src="https://images.pexels.com/photos/30550408/pexels-photo-30550408/free-photo-of-sunlit-forest-with-rays-through-trees.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load" alt="" width={80} height={80} className="w-20 h-20 rounded-full"/>
                    <span className="font-medium">Ricky</span>
                </div>
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                    <Image src="https://images.pexels.com/photos/30550408/pexels-photo-30550408/free-photo-of-sunlit-forest-with-rays-through-trees.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load" alt="" width={80} height={80} className="w-20 h-20 rounded-full"/>
                    <span className="font-medium">Ricky</span>
                </div>
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                    <Image src="https://images.pexels.com/photos/30550408/pexels-photo-30550408/free-photo-of-sunlit-forest-with-rays-through-trees.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load" alt="" width={80} height={80} className="w-20 h-20 rounded-full"/>
                    <span className="font-medium">Ricky</span>
                </div>
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                    <Image src="https://images.pexels.com/photos/30550408/pexels-photo-30550408/free-photo-of-sunlit-forest-with-rays-through-trees.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load" alt="" width={80} height={80} className="w-20 h-20 rounded-full"/>
                    <span className="font-medium">Ricky</span>
                </div>
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                    <Image src="https://images.pexels.com/photos/30550408/pexels-photo-30550408/free-photo-of-sunlit-forest-with-rays-through-trees.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load" alt="" width={80} height={80} className="w-20 h-20 rounded-full"/>
                    <span className="font-medium">Ricky</span>
                </div>
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                    <Image src="https://images.pexels.com/photos/30550408/pexels-photo-30550408/free-photo-of-sunlit-forest-with-rays-through-trees.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load" alt="" width={80} height={80} className="w-20 h-20 rounded-full"/>
                    <span className="font-medium">Ricky</span>
                </div>
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                    <Image src="https://images.pexels.com/photos/30550408/pexels-photo-30550408/free-photo-of-sunlit-forest-with-rays-through-trees.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load" alt="" width={80} height={80} className="w-20 h-20 rounded-full"/>
                    <span className="font-medium">Ricky</span>
                </div>
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                    <Image src="https://images.pexels.com/photos/30550408/pexels-photo-30550408/free-photo-of-sunlit-forest-with-rays-through-trees.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load" alt="" width={80} height={80} className="w-20 h-20 rounded-full"/>
                    <span className="font-medium">Ricky</span>
                </div>
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                    <Image src="https://images.pexels.com/photos/30550408/pexels-photo-30550408/free-photo-of-sunlit-forest-with-rays-through-trees.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load" alt="" width={80} height={80} className="w-20 h-20 rounded-full"/>
                    <span className="font-medium">Ricky</span>
                </div>
            </div>
        </div>
    );
};

export default Strories;