import React from "react";
import { CgProfile } from "react-icons/cg";

const Testimonials = () => {
	return (
		<div className="px-6 mt-12 mb-4 md:px-8 md:mt-24 lg:px-12 xl:px-24">
			<p className="text-5xl text-primary-main font-semibold md:text-6xl">
				Testimonials
			</p>
			<div className="testimony md:mt-12 md:flex-row md:justify-between md:items-start md:px-6 md:pb-16 lg:px-12 xs:px-24 lg:items-centers space-x-6">
				<CgProfile className="w-36 h-36 md:w-24 md:h-24 lg:w-36 lg:h-36 " />
				<div className="md:flex flex-col items-end ">
					<p className="text-xl text-primary-main font-medium mt-4 md:m-0 md:text-4xl md:tracking-wide lg:tracking-wider lg:text-5xl">
						“Working with Extensive is great”
					</p>
					<div>
						<p className="text-lg text-primary-main font-normal mt-2 md:mt-20 md:text-3xl text-left lg:text-4xl">
							-Hershel
						</p>
						<p className="text-md text-secondary-main font-normal md:text-2xl md:w-44 ">
							Head of director GGPL PVT LTD.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Testimonials;
