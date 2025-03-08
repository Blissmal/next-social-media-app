import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher(["/settings(.*)", "/"]);

export default clerkMiddleware(async (auth, req) => {
    console.log("Middleware triggered for:", req.nextUrl.pathname);

    if (isProtectedRoute(req)) {
        try {
            const { userId } = await auth();

            if (!userId) {
                console.log("Redirecting to sign-in...");
                return NextResponse.redirect("https://bliss-social.vercel.app/sign-in"); // Customize the web url to match the deployed domain name
            }
        } catch (error) {
            console.error("Auth protection error:", error);
        }
    }
});

export const config = {
    matcher: [
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        '/(api|trpc)(.*)',
    ],
};
