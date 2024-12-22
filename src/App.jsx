import { Fragment } from "react";
import Navbar from "./components/Navbar";
import HomeSection from "./pages/Hero/HomeSection";
import AboutSection from "./pages/About/AboutSection";
import List from "./components/List";

const App = () => {
	return (
		<Fragment>
			<Navbar />

			<main className="h-full">
				{/* L'accueil */}
				<HomeSection />

				{/* Pourquoi nous ? */}
				<section id="services" className="bg-white h-screen py-16">
					<div className="container mx-auto">
						<header className="flex justify-center items-center mb-16 text-center">
							<h1 className="font-raleway text-6xl font-bold text-primary-950 mt-4 leading-tight">
								Pourquoi nous choisir ?
							</h1>
						</header>

						<List
							className="mx-auto flex gap-4 border-2 rounded-full w-fit p-1 overflow-hidden"
							items={[
								"Notre approche",
								"Nos certifications",
								"Notre mission",
							]}
							renderItem={(item) => (
								<li className="flex">
									<a
										className="bg-primary-700 text-white rounded-full py-4 px-8"
										href={`#${item.toLowerCase().split(" ").join("-")}`}
									>
										{item}
									</a>
								</li>
							)}
						/>
					</div>
				</section>

				{/* A propos de nous */}
				<AboutSection />
			</main>

			<footer></footer>
		</Fragment>
	);
};

export default App;
