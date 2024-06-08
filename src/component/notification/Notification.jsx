import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import useAxiosSecure from "../../hook/useAxiosSecure";

const Notification = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const { data: notifyData, isLoading } = useQuery({
    queryKey: ['notification', user?.email],
    queryFn: async () => {
      const res = await axiosSecure(`/notification/${user?.email}`);
      return res.data; // Access the data directly
    },
    enabled: !!user?.email, // Ensure the query only runs when user email is available
  });

  // Show loading state
  if (isLoading) {
    return (
      <div className="absolute top-16 right-4 w-64 bg-white text-gray-800 rounded shadow-lg p-4 z-20">
        <p className="text-lg text-left font-semibold">Loading...</p>
      </div>
    );
  }

  // Show "no notifications" state
  if (!notifyData || notifyData.length === 0) {
    return (
      <div className="absolute top-16 right-4 w-64 bg-white text-gray-800 rounded shadow-lg p-4 z-20">
        <p className="text-lg text-left font-semibold">Notifications</p>
        <ul>
          <li className="py-2 text-left">No notifications here.</li>
        </ul>
      </div>
    );
  }

  // Show notifications
  return (
    <div className="absolute top-16 right-4 w-64 bg-white text-gray-800 rounded shadow-lg p-4 z-20">
      <p className="text-lg text-left font-semibold">Notifications</p>
      <ul>
        {notifyData.map((notification, idx) => (
          <li
            key={idx}
            className="py-2 border-b text-left border-gray-300"
          >
            {notification?.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notification;
