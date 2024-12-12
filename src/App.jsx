import { Fragment } from "react";
import Navigation from "./components/Navigation";
import HomeSection from "./pages/Home/HomeSection";

const App = () => {
	return (
		<Fragment>
			<Navigation />

			<main className="h-full">
				{/* L'accueil */}
				<HomeSection />

				{/* A propos de nous */}
				<section id="services" className="">
					<div className="container mx-auto relative before:block before:top-16 before:content-['services'] before:uppercase before:absolute before:inset-0 before:-z-10 text-9xl before:font-mulish before:font-extrabold before:text-slate-100 py-16">
						<header className="flex items-center">
							<div className="basis-1/2">
								<span className="flex text-primary-500 gap-4 items-center text-2xl before:block before:h-[2px] before:w-10 before:bg-current">
									Nos services
								</span>
								<h1 className="font-raleway text-6xl font-bold text-primary-950 mt-4 leading-tight">
									Du tuyau qui siffle au chauffe-eau qui
									grésille
								</h1>
							</div>
							<p className="text-base basis-1/2">
								Lorem ipsum dolor, sit amet consectetur
								adipisicing elit. Incidunt, reprehenderit nobis
								eaque nihil ratione dolorum officiis culpa autem
								odit necessitatibus impedit ipsum consequuntur,
								enim labore, minima architecto molestias et.
								Delectus.
							</p>
						</header>

						<ul>
							<li>
								<a href=""></a>
							</li>
						</ul>
					</div>
				</section>
			</main>

			<footer></footer>
		</Fragment>
	);
};

export default App;
