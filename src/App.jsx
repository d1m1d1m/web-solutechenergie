import { Fragment } from "react";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./sections/Hero";
import ServiceSection from "./sections/Services";

const App = () => {
	return (
		<Fragment>
			<Navbar />

			<main>
				<HeroSection />
				<ServiceSection />
			</main>
		</Fragment>
	);
};

export default App;
