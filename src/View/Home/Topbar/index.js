import React from "react";
import { Bars4Icon } from "@heroicons/react/24/outline";

const Topbar = ({ setSidebar }) => {
	const handleClick = () => {
		setSidebar(true);
	};
	return (
		<div className="flex justify-between items-center p-4 pt-6 md:px-6 lg:px-12 xl:px-24">
			<div className="w-12 h-12 rounded-xl bg-purple-900"></div>
			<div className="flex space-x-12 items-center">
				<p className="hidden md:block text-primary-main text-2xl">Contact</p>
				<p className="hidden md:block text-primary-main text-2xl">Work</p>
				<div
					className="hover:bg-purple-100 rounded-full p-1 transition-all animation-pulse"
					onClick={handleClick}
				>
					<Bars4Icon className="w-12 h-12 hover:text-purple-800 transition-colors animation-spin cursor-pointer" />
				</div>
			</div>
		</div>
	);
};

export default Topbar;
