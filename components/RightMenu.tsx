import { User } from "@prisma/client";
import Ad from "./Ad";
import Birthdays from "./Birthdays";
import FriendRequests from "./FriendRequests";
import UserInfoCard from "./UserInfoCard";
import UserMediaCard from "./UserMediaCard";

const RightMenu = ({user}: {user?: User}) => {
    return (
        <div className="flex flex-col gap-6">
            {
                user ? (
                    <>
                        <UserInfoCard user={user}/>
                        <UserMediaCard user={user}/>
                    </>
                ) : null
            }
            <FriendRequests />
            <Birthdays />
            <Ad size="md"/>
        </div>
    );
};

export default RightMenu;