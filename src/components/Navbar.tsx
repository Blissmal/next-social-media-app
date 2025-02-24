import Link from "next/link";
import MobileMenu from "@/components/MobileMenu";

const Navbar = () => {
    return (
        <div className="h-24 flex items-center justify-between">
            <div>
                <Link href="/" className="font-bold text-xl text-blue-500" >BLISSOCIAL</Link>
            </div>
            <div className="hidden"></div>
            <div>
                <MobileMenu />
            </div>
        </div>
    );
}
export default Navbar;