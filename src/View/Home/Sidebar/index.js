import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const Sidebar = ({ setSidebar, sidebar }) => {
	const handleClick = () => {
		setSidebar(false);
	};

	return (
		<div className="flex justify-end">
			<div className=" fixed z-20 bg-purple-900 h-screen w-full p-8 transition-all animation-spring md:w-1/2 lg:1/3">
				<div
					className="p-2 rounded-full bg-purple-100 w-12 h-12 flex justify-center items-center float-right cursor:Pointer"
					onClick={handleClick}
				>
					<AiOutlineClose className="h-8 w-8" />
				</div>
				<p className="text-5xl font-semibold text-purple-100 mt-24">Services</p>
				<p className="text-5xl font-semibold text-purple-100 mt-12">About us</p>
				<p className="text-5xl font-semibold text-purple-100 mt-12">Blogs</p>
				<p className="text-5xl font-semibold text-purple-100 mt-12">
					Contact us
				</p>
				<button className="px-6 py-4 mt-12 text-lg rounded-lg bg-secondary-main text-white uppercase outline-0 ">
					Book a free marketing Audit
				</button>
			</div>
		</div>
	);
};

export default Sidebar;
