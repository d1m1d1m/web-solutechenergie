import { Fragment } from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Services from "./sections/Services/Services";

const App = () => {
	return (
		<Fragment>
			<Navbar />

			<main className="h-full">
				{/* L'accueil */}
				<Hero />

				{/* A propos de nous */}
				<About />

				{/* Prestations */}
				<Services />
			</main>
		</Fragment>
	);
};

export default App;
