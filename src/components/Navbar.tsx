import Link from "next/link";
import MobileMenu from "@/components/MobileMenu";

const Navbar = () => {
    return (
        <div className="">
            <div>
                <Link href="/">BLISSOCIAL</Link>
            </div>
            <div className="hidden"></div>
            <div>
                <MobileMenu />
            </div>
        </div>
    );
}
export default Navbar;