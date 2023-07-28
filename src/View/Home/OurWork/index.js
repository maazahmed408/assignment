import React from "react";

const OurWork = () => {
	return (
		<div className="px-6 py-8 mt-12 bg-primary-main md:px-8 md:mt-20 lg:px-12 xl:px-24">
			<p className="text-5xl text-purple-200 font-semibold m-0  tracking-wider md:text-6xl">
				Our
			</p>
			<p className="text-5xl text-purple-200 font-semibold m-0 mt-4 tracking-wider md:text-6xl">
				Work.
			</p>
			<button className="hidden md:block px-6 py-4 mt-4 text-lg rounded-lg bg-secondary-main text-white uppercase outline-0 border-0">
				View All
			</button>
			<div className="md:grid grid-cols-2 gap-x-6">
				<div className="w-full  mt-12">
					<img
						src="/hero.jpg"
						alt=""
						className="object-cover w-full md:h-[500px]"
					/>
					<p className="text-sm uppercase text-secondary-main mt-2">
						DIGITAL MARKETING
					</p>
					<p className="text-5xl uppercase text-purple-200 mt-2">Starbucks</p>
					<p className="text-lg text-white mt-2">
						Our ad campaign brought 80% footfall to the company{" "}
					</p>
				</div>
				<div className="w-full mt-12">
					<img
						src="/hero.jpg"
						alt=""
						className="object-cover w-full md:h-[400px]"
					/>
					<p className="text-sm uppercase text-secondary-main mt-2">
						DIGITAL MARKETING
					</p>
					<p className="text-5xl uppercase text-purple-200 mt-2">Starbucks</p>
					<p className="text-lg text-white mt-2">
						Our ad campaign brought 80% footfall to the company{" "}
					</p>
				</div>
				<div className="w-full mt-12">
					<img
						src="/hero.jpg"
						alt=""
						className="object-cover w-full md:h-[400px]"
					/>
					<p className="text-sm uppercase text-secondary-main mt-2">
						DIGITAL MARKETING
					</p>
					<p className="text-5xl uppercase text-purple-200 mt-2">Starbucks</p>
					<p className="text-lg text-white mt-2">
						Our ad campaign brought 80% footfall to the company{" "}
					</p>
				</div>
				<div className="w-full  mt-12">
					<img
						src="/hero.jpg"
						alt=""
						className="object-cover w-full md:h-[500px]"
					/>
					<p className="text-sm uppercase text-secondary-main mt-2">
						DIGITAL MARKETING
					</p>
					<p className="text-5xl uppercase text-purple-200 mt-2">Starbucks</p>
					<p className="text-lg text-white mt-2">
						Our ad campaign brought 80% footfall to the company{" "}
					</p>
				</div>
			</div>
			<button className="md:hidden w-full px-6 py-4 mt-8 text-md rounded-lg bg-secondary-main text-white uppercase outline-0 border-0">
				View All
			</button>
		</div>
	);
};

export default OurWork;
