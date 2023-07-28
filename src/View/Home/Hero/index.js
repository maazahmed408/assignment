import React from "react";

const Hero = () => {
	return (
		<div className="relative w-full ">
			<img
				src="/hero.jpg"
				alt="hero"
				className="object-cover w-full h-screen"
			/>
			<div className="absolute top-4 w-full md:w-2/3 md:mt-20">
				<div className="text-center bg-gray p-4 md:text-left md:py-14 md:px-8 lg:px-12 xl:px-24">
					<p className="font-semibold text-5xl text-primary-main tracking-wider md:text-6xl lg:text-7xl">
						We are
						<span className="text-secondary-main md:block"> Extensive</span>
					</p>
					<p className="text-primary-main text-lg mt-2 md:text-4xl md:mt-8 lg:text-5xl">
						Helping you stand out in a crowded market
					</p>
				</div>
			</div>
		</div>
	);
};

export default Hero;
