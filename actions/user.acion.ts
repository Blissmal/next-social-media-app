"use server";
import prisma from "@/lib/client";
import { auth, currentUser } from "@clerk/nextjs/server";
import { z } from "zod";

export async function syncUser() {
    try {
        const { userId } = await auth();
        const user = await currentUser();

        if (!userId || !user) throw new Error("User not authenticated");

        const existingUser = await prisma.user.findUnique({ where: { id: userId } });
        if (existingUser) return existingUser;

        const dbUser = await prisma.user.create({
            data: {
                id: userId,
                username: user.username ?? "defaultUsername",
                avatar: user.imageUrl ?? "/noAvatar.png",
                cover: "/noCover.png",
            },
        });

        return dbUser;
    } catch (error) {
        console.error("syncUser error:", error);
        return new Response("Failed to create a user!", { status: 500 });
    }
}

export const syncUsername = async () => {
    const { userId } = await auth();
    const user = await currentUser();

    if (!userId || !user) throw new Error("User not authenticated");

    return prisma.user.update({
        where: { id: userId },
        data: { username: user.username ?? "defaultUsername" },
    });
};

export async function updateUser() {
    try {
        const { userId } = await auth();
        const user = await currentUser();

        if (!userId || !user) throw new Error("User not authenticated");

        return prisma.user.update({
            where: { id: userId },
            data: {
                username: user.username ?? "defaultUsername",
                avatar: user.imageUrl ?? "/noAvatar.png",
            },
        });
    } catch (error) {
        console.error("updateUser error:", error);
        return new Response("Failed to update the user!", { status: 500 });
    }
}

export const swithFollow = async (userId: string) => {
    const { userId: currentUserId } = await auth();
    if (!currentUserId) throw new Error("User not authenticated");

    try {
        const existingFollow = await prisma.follower.findFirst({
            where: { followerId: currentUserId, followingId: userId },
        });

        if (existingFollow) {
            await prisma.follower.delete({ where: { id: existingFollow.id } });
        } else {
            const existingFollowRequest = await prisma.followRequest.findFirst({
                where: { senderId: currentUserId, receiverId: userId },
            });

            if (existingFollowRequest) {
                await prisma.followRequest.delete({ where: { id: existingFollowRequest.id } });
            } else {
                await prisma.followRequest.create({
                    data: { senderId: currentUserId, receiverId: userId },
                });
            }
        }
    } catch (error) {
        console.error("swithFollow error:", error);
        throw new Error("Something went wrong");
    }
};

export const switchBlock = async (userId: string) => {
    const { userId: currentUserId } = await auth();
    if (!currentUserId) throw new Error("User not authenticated");

    try {
        const existingBlock = await prisma.block.findFirst({
            where: { blockerId: currentUserId, blockedId: userId },
        });

        if (existingBlock) {
            await prisma.block.delete({ where: { id: existingBlock.id } });
        } else {
            await prisma.block.create({
                data: { blockerId: currentUserId, blockedId: userId },
            });
        }
    } catch (error) {
        console.error("switchBlock error:", error);
        throw new Error("Something went wrong");
    }
};

export const acceptFollowRequest = async (userId: string) => {
    const {userId: currentUserId} = await auth()
    if (!currentUserId) throw new Error("User is not authenticated")

    try {
        const existingFollowRequest = await prisma.followRequest.findFirst({
            where: {
                senderId: userId,
                receiverId: currentUserId
            }
        })
    
        if (existingFollowRequest){
            await prisma.followRequest.delete({
                where: {
                    id: existingFollowRequest.id
                }
            })
        }
    
        await prisma.follower.create({
            data: {
                followerId: userId,
                followingId: currentUserId
            }
        })
    } catch (error) {
        console.log(error)
        throw new Error("Something went wrong")
    }
}

export const declineFollowRequest = async (userId: string) => {
    const {userId: currentUserId} = await auth()
    if (!currentUserId) throw new Error("User is not authenticated")

    try {
        const existingFollowRequest = await prisma.followRequest.findFirst({
            where: {
                senderId: userId,
                receiverId: currentUserId
            }
        })
    
        if (existingFollowRequest){
            await prisma.followRequest.delete({
                where: {
                    id: existingFollowRequest.id
                }
            })
        }
    
    } catch (error) {
        console.log(error)
        throw new Error("Something went wrong")
    }
}

export const updateProfile = async (formData: FormData) => {
    const fields = Object.fromEntries(formData)
    console.log(fields)

    const Profile = z.object({
        cover: z.string().optional(),
        name: z.string().max(60).optional(),
        surname: z.string().max(60).optional(),
        description: z.string().max(255).optional(),
        city: z.string().max(60).optional(),
        school: z.string().max(60).optional(),
        work: z.string().max(60).optional(),
        website: z.string().max(60).optional(),
    })

    const validatedFields = Profile.safeParse(fields)

    if (!validatedFields.success) {
        console.log(validatedFields.error.flatten().fieldErrors)
        return "err"
    }
    const {userId} = await auth()

    if (!userId) return "error"

    try {
        await prisma.user.update({
            where: {
                id: userId
            },
            data: validatedFields.data
        })
    } catch (error) {
        console.log(error)
    }
}
