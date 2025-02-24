import Link from "next/link";
import MobileMenu from "@/components/MobileMenu";
import Image from "next/image";

const Navbar = () => {
    return (
        <div className="h-24 flex items-center justify-between">
            <div className="md:hidden lg:block w-[20%]">
                <Link href="/" className="font-bold text-xl text-blue-600" >BLISSOCIAL</Link>
            </div>

            <div className="hidden md:flex w-[50%] text-sm">
                <div className="flex gap-6 text-gray-600">
                    <Link href="/" className="flex gap-2 items-center">
                        <Image src="/home.png" alt="Homepage" width={16} height={16} className="size-4"/>
                        <span>Homepage</span>
                    </Link>
                    <Link href="/" className="flex gap-2 items-center">
                        <Image src="/friends.png" alt="Friends" width={16} height={16} className="size-4"/>
                        <span>Friends</span>
                    </Link>
                    <Link href="/" className="flex gap-2 items-center">
                        <Image src="/stories.png" alt="Stories" width={16} height={16} className="size-4"/>
                        <span>Stories</span>
                    </Link>
                </div>
            </div>

            <div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end">
                <MobileMenu />
            </div>
        </div>
    );
}
export default Navbar;