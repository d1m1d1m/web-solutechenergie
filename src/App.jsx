import { Fragment } from "react";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./sections/Hero";

const App = () => {
	return (
		<Fragment>
			<Navbar />

			<main>
				<HeroSection />
			</main>
		</Fragment>
	);
};

export default App;
