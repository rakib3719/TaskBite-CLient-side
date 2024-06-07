import { IoIosNotifications } from "react-icons/io";
import Notification from "../../notification/Notification";
import { useState } from "react";




const NotifyPopUp = () => {
    const [isNotificationOpen, setNotificationOpen] = useState(false);
    const toggleNotification = () => {
        setNotificationOpen(!isNotificationOpen);
    };
    
    return (
        <>
<p onClick={toggleNotification} className="flex cursor-pointer items-center gap-2 text-xl">
                        <IoIosNotifications className="text-yellow-400 text-2xl" /> Notification
                    </p>
                    {isNotificationOpen && (
               <Notification></Notification>
            )}


        </>
    );
};

export default NotifyPopUp;