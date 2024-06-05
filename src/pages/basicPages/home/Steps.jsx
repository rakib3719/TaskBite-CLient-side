import { FaCashRegister } from "react-icons/fa";
import { FaTasks } from "react-icons/fa";
import { FaCoins } from "react-icons/fa6";
import { PiHandWithdrawFill } from "react-icons/pi";




const Steps = () => {
    return (
        <div>
            <section className="dark:bg-gray-100 dark:text-gray-800">
	<div className="container mx-auto flex flex-col p-6">
		<h2 className="py-4 text-3xl font-bold text-center"> How It Works</h2>
		<div className="divide-y dark:divide-gray-300">
			<div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
				<div className="flex items-center justify-center lg:col-span-1 col-span-full">
                <FaCashRegister className="text-7xl"/>
				</div>
				<div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
					<span className="text-xs tracking-wider uppercase dark:text-violet-600">Step 1 -</span>
					<span className="text-xl font-bold md:text-2xl">Register</span>
					<span className="mt-4 dark:text-gray-700">Begin your journey by creating an account. Provide your details securely, ensuring a seamless signup process. Experience hassle-free registration whether using email and password or the swift Google authentication.</span>
				</div>
			</div>
			<div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
				<div className="flex items-center justify-center lg:col-span-1 col-span-full">
				<FaTasks className="text-7xl"/>
				</div>
				<div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
					<span className="text-xs tracking-wider uppercase dark:text-violet-600">Step 2 -</span>
					<span className="text-xl font-bold md:text-2xl">Complete Tasks</span>
					<span className="mt-4 dark:text-gray-700">Engage with a diverse range of tasks offered by Task Creators. Immerse yourself in various activities, ensuring meticulous completion according to the provided instructions and guidelines.</span>
				</div>
			</div>
			
			<div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
				<div className="flex items-center justify-center lg:col-span-1 col-span-full">
                <FaCoins className="text-7xl"/>

				</div>
				<div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
					<span className="text-xs tracking-wider uppercase dark:text-violet-600">Step 4 -</span>
					<span className="text-xl font-bold md:text-2xl">Earn Rewards</span>
					<span className="mt-4 dark:text-gray-700">Reap the benefits of your efforts. Upon successful task completion, await approval from Task Creators. Once approved, indulge in rewards, redeemable in platform coins for subsequent transactions or withdrawals.</span>
				</div>
			</div>
            <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
				<div className="flex items-center justify-center lg:col-span-1 col-span-full">
                <PiHandWithdrawFill className="text-7xl"/>
				</div>
				<div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
					<span className="text-xs tracking-wider uppercase dark:text-violet-600">Step 3 - </span>
					<span className="text-xl font-bold md:text-2xl">Withdraw</span>
					<span className="mt-4 dark:bg-gray-100 dark:text-gray-700">Convert your earned platform coins into real-world currency effortlessly. Withdraw your earnings conveniently using popular payment methods such as Bikash, Nagad, or Rocket.</span>
				</div>
			</div>
		</div>
	</div>
</section>
        </div>
    );
};

export default Steps;