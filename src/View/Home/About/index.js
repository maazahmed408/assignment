import React from "react";

const About = () => {
	return (
		<div className="mt-4 p-6 md:mt-14 md:p-8 lg:px-12 xl:px-24">
			<p className="text-xl text-primary-main md:text-3xl lg:text-4xl">
				WHO WE ARE
			</p>
			<p className="text-5xl text-primary-main font-semibold mt-5 md:text-6xl md:mt-10 lg:text-7xl">
				We are Extensive.
			</p>
			<p className="w-full text-justify text-lg text-primary-main leading-tight mt-4 font-medium md:mt-8 md:text-2xl lg:text-3xl">
				Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
				sint. Velit officia consequat duis enim velit mollit. Exercitation
				veniam consequat sunt nostrud bjb
			</p>
			<button className="px-6 py-4 mt-4 text-xl rounded-lg bg-primary-main text-white uppercase md:mt-8">
				Book a free marketing audit
			</button>
		</div>
	);
};

export default About;
