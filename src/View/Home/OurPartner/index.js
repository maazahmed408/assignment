import React from "react";
import { FaPinterest } from "react-icons/fa";

const OurPartner = () => {
	return (
		<div className="px-6 mt-12 md:px-8 md:mt-20 lg:px-20 xl:px-24">
			<p className="text-5xl text-primary-main font-semibold md:text-6xl lg:text-8xl">
				Our
			</p>
			<p className="text-5xl text-primary-main font-semibold md:text-6xl md:mt-3 lg:text-8xl">
				Partners
			</p>
			<p className="text-lg text-secondary-main font-medium mt-2 lg:text-4xl">
				We do lots of stuffs , basically adding value to your product .
			</p>
			<div className="grid grid-cols-4 gap-y-12 mt-10 lg:grid-cols-5 lg:mt-24">
				<div className="flex flex-col justify-center items-center">
					<FaPinterest className="w-20 h-20 lg:w-36 lg:h-36" />
					<p className="text-lg font-medium text-light mt-1">Pinterest</p>
				</div>
				<div className="flex flex-col justify-center items-center">
					<FaPinterest className="w-20 h-20 lg:w-36 lg:h-36" />
					<p className="text-lg font-medium text-light mt-1">Pinterest</p>
				</div>
				<div className="flex flex-col justify-center items-center">
					<FaPinterest className="w-20 h-20 lg:w-36 lg:h-36" />
					<p className="text-lg font-medium text-light mt-1">Pinterest</p>
				</div>
				<div className="flex flex-col justify-center items-center">
					<FaPinterest className="w-20 h-20 lg:w-36 lg:h-36" />
					<p className="text-lg font-medium text-light mt-1">Pinterest</p>
				</div>
				<div className="flex flex-col justify-center items-center">
					<FaPinterest className="w-20 h-20 lg:w-36 lg:h-36" />
					<p className="text-lg font-medium text-light mt-1">Pinterest</p>
				</div>
				<div className="flex flex-col justify-center items-center">
					<FaPinterest className="w-20 h-20 lg:w-36 lg:h-36" />
					<p className="text-lg font-medium text-light mt-1">Pinterest</p>
				</div>
			</div>
		</div>
	);
};

export default OurPartner;
