import { FaCoins, FaTasks, FaLock, FaUserFriends, FaMoneyCheckAlt, FaHistory, FaUserCog } from 'react-icons/fa';
import FeatureCard from './FeatureCard';

const Feture = () => {
    const features = [
        {
            icon: FaCoins,
            title: "Earn Coins by Completing Tasks",
            description: "Complete various tasks and earn coins for each successful submission."
        },
        {
            icon: FaTasks,
            title: "Create and Manage Tasks",
            description: "Easily create tasks, set rewards, and manage submissions from your dashboard."
        },
        {
            icon: FaLock,
            title: "Secure Payments",
            description: "Your payments are securely handled with industry-standard encryption."
        },
       
        {
            icon: FaMoneyCheckAlt,
            title: "Withdraw Payments Easily",
            description: "Withdraw payments conveniently using Bkash, Nagad, or Rocket for workers."
        },
        {
            icon: FaHistory,
            title: "Track Payment History",
            description: "Task creators can easily see their payment history and manage finances."
        },
        {
            icon: FaUserCog,
            title: "Admin User Management",
            description: "Admins can manage users, promoting them to task creator."
        }
    ];

    return (
        <div className="features-section py-12 ">
            <h2 className="text-4xl font-bold text-center mb-12">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, idx) => (
                    <FeatureCard
                        key={idx}
                        icon={feature.icon}
                        title={feature.title}
                        description={feature.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default Feture;
