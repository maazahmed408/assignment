import React, { useState } from "react";
import Topbar from "./View/Home/Topbar";
import Hero from "./View/Home/Hero";
import About from "./View/Home/About";
import Sidebar from "./View/Home/Sidebar";
import OurServices from "./View/Home/OurServices";
import OurWork from "./View/Home/OurWork";
import OurPartner from "./View/Home/OurPartner";
import Testimonials from "./View/Home/Testimonial";
import Banner from "./View/Home/Banner";
import Footer from "./View/Home/Footer";

const App = () => {
	const [sidebar, setSidebar] = useState(false);

	return (
		<main className="relative h-screen ">
			{sidebar && <Sidebar sidebar={sidebar} setSidebar={setSidebar} />}
			<Topbar setSidebar={setSidebar} />
			<Hero />
			<About />
			<OurServices />
			<OurWork />
			<OurPartner />
			<Testimonials />
			<Banner />
			<Footer />
		</main>
	);
};

export default App;
