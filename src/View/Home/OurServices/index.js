import React from "react";

const OurServices = () => {
	return (
		<div className=" mt-8 md:flex md:relative md:mt-20 justify-between md:px-8 lg:px-12 xl:px-24">
			<div className="md:w-1/2">
				<svg
					className="hidden md:block absolute z-0 top-[-30%] left-[-20%] xl:left-[-10%]"
					viewBox="0 0 500 500"
					xmlns="http://www.w3.org/2000/svg"
					width="700"
					height="700"
					id="blobSvg"
				>
					<path
						id="blob"
						d="M406.11918,320.49383Q331.86483,390.98765,253.00981,386.33903Q174.1548,381.69041,105.37718,315.8452Q36.59956,250,83.0516,146.26163Q129.50364,42.52327,228.44223,79.30342Q327.38082,116.08357,403.87718,183.04179Q480.37354,250,406.11918,320.49383Z"
						fill="#E7D7F6"
					></path>
				</svg>

				<div className="px-6 py-4 bg-purple-200 md:mt-14 md:bg-transparent md:relative">
					<p className="text-primary-main text-5xl m-0 tracking-wide font-semibold z-10 lg:text-6xl">
						WHAT
					</p>
					<p className="text-primary-main text-5xl m-0 tracking-wider font-semibold z-10 lg:text-6xl">
						WE DO.
					</p>
					<p className="text-primary-main text-xl font-medium tracking-wide  mt-4 z-10 lg:text-2xl lg:mt-8 lg:w-2/3">
						We do lots of stuffs , basically adding value to your product .
					</p>
				</div>
			</div>
			<div className="mt-8 z-10 px-6 md:px-0 ">
				<p className="text-4xl text-primary-main font-medium m-0 mt-4 py-2 md:text-5xl lg:text-6xl">
					Digital Marketing
				</p>
				<p className="text-4xl text-primary-main font-medium m-0 mt-4 py-2 md:text-5xl lg:text-6xl">
					Digital Marketing
				</p>
				<p className="text-4xl text-primary-main font-medium m-0 mt-4 py-2 md:text-5xl lg:text-6xl">
					Digital Marketing
				</p>
				<p className="text-4xl text-primary-main font-medium m-0 mt-4 py-2 md:text-5xl lg:text-6xl">
					Digital Marketing
				</p>
				<button className="px-6 py-4 mt-4 text-lg rounded-lg bg-primary-main text-white uppercase">
					View All
				</button>
			</div>
		</div>
	);
};

export default OurServices;
