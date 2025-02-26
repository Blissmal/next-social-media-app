import prisma from "@/lib/client";
import { auth, currentUser } from "@clerk/nextjs/server"

export async function syncUser() {
    try {
        const {userId} = await auth()
        const user = await currentUser()

        if (!userId) return;
        const existingUser = await prisma.user.findUnique({
            where: {
                id: userId,
            }
        })

        if (existingUser) return existingUser;

        const dbUser = await prisma.user.create({
            data: {
                id: userId,
                username: `${user?.username}`,
                avatar: user?.imageUrl || "/noAvatar.png",
                cover: "/noCover.png"
            }
        })

        return dbUser
    } catch (error) {
        console.log(error)
        return new Response("Failed to create a user!", {status: 500})
    }
}

export const syncUsername = async () => {
    const { userId } = await auth();
    const user = await currentUser();
  
    if (!userId || !user) {
      throw new Error("User not authenticated");
    }
  
    const dbUser = await prisma.user.findUnique({
      where: { id: userId },
    });
  
     
     const dbUserUPdate =  await prisma.user.update({
        where: { id: userId },
        data: { username: user.username || "" },
      });
  
    return dbUserUPdate;
  };

export async function updateUser() {
    try {
        const {userId} = await auth()
        const user = await currentUser()

        if (!userId) return;

        const dbUser = await prisma.user.update({
            where: {
                id: userId
            },
            data: {
                username: `${user?.username}`,
                avatar: user?.imageUrl || "/noAvatar.png",
            }
        })

        return dbUser
    } catch (error) {
        console.log(error)
        return new Response("Failed to create a user!", {status: 500})
    }
}