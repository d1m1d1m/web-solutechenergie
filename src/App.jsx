import { Fragment } from "react";
import Navigation from "./components/Navigation";
import HomeSection from "./pages/Home/HomeSection";
import List from "./components/List";
import { CheckCircleIcon } from "lucide-react";

const App = () => {
	return (
		<Fragment>
			<Navigation />

			<main className="h-full">
				{/* L'accueil */}
				<HomeSection />

				{/* A propos de nous */}
				<section id="services" className="">
					<div className="container mx-auto relative before:block before:top-16 before:content-['services'] before:uppercase before:absolute before:inset-0 before:-z-10 before:text-9xl before:font-mulish before:font-extrabold before:text-slate-100 py-16">
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

						<List
							className="flex gap-16"
							items={[
								{
									title: "Particulier",
									img: "",
									detailed: [
										"Réparations et installations en plomberie",
										"Chauffe-eau, installation et maintenance",
										"Installation de conduites d'eau",
										"Et d'autres choses ...",
									],
								},
								{
									title: "Commerciales",
									img: "",
									detailed: [
										"Réparations et installations en plomberie",
										"Chauffe-eau, installation et maintenance",
										"Installation de conduites d'eau",
										"Et d'autres choses ...",
									],
								},
								{
									title: "Dépannages et urgences",
									img: "",
									detailed: [
										"Réparations et installations en plomberie",
										"Chauffe-eau, installation et maintenance",
										"Installation de conduites d'eau",
										"Et d'autres choses ...",
									],
								},
							]}
							renderItem={({ title, img, detailed }) => (
								<li className="basis-1/3 border">
									<a href="">
										<h3>{title}</h3>

										<List
											items={detailed}
											renderItem={(detail) => (
												<li className="flex items-center">
													<CheckCircleIcon className="fill-primary-700 stroke-white size-4" />
													{detail}
												</li>
											)}
										/>
									</a>
								</li>
							)}
						/>
					</div>
				</section>
			</main>

			<footer></footer>
		</Fragment>
	);
};

export default App;
