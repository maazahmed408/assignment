import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
	return (
		<div className="px-6 pt-8 pb-4 bg-primary-main mt-2 md:px-8 md:py-12 lg:px-12 xl:px-24">
			<div className="md:flex md:w-full md:h-full justify-between items-start lg:items-center">
				<p className="text-5xl text-white md:text-6xl">Logo</p>
				<div className=" text-lg grid grid-cols-2 gap-y-2 md:gap-x-6 mt-8 md:mt-0 md:grid-cols-3 lg:grid-cols-6  lg:text-xl">
					<p className="text-white ">Home Page</p>
					<p className="text-white ">Contact Us</p>
					<p className="text-white ">About us</p>
					<p className="text-white ">Our services</p>
					<p className="text-white ">Book audit</p>
					<p className="text-white ">Blog</p>
				</div>
				<div className="flex space-x-8 justify-center mt-12 md:mt-0 md:space-x-4  lg:space-x-12  ">
					<FaFacebook className="w-8 h-8 text-white" />
					<FaInstagram className="w-8 h-8 text-white" />
					<FaTwitter className="w-8 h-8 text-white" />
				</div>
			</div>

			<p className="text-center mt-10 text-white text-md md:mt-20">
				Copyright@2023
			</p>
		</div>
	);
};

export default Footer;
