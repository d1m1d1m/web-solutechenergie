import clsx from "clsx";
import List from "../../components/List";
import { useState } from "react";

const About = () => {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<section id="services" className="bg-white h-screen py-16">
			<div className="container mx-auto">
				<header className="flex justify-center items-center mb-16 text-center">
					<h1 className="font-raleway text-6xl font-bold text-primary-950 mt-4 leading-tight">
						Pourquoi nous choisir ?
					</h1>
				</header>

				<div>
					<div className="mx-auto flex gap-4 p-1 mb-16 border w-1/2">
						<button
							className={clsx(
								"before:absolute before:top-0 before:left-0 before:content-['+'] before:size-6",
								"relative text-primary-950 p-4 basis-1/3",
								{
									"bg-primary-700 text-white font-bold":
										activeTab === 0,
									"bg-none text-primary-950": activeTab !== 0,
								},
							)}
							value="approch"
							onClick={(e) => setActiveTab(0)}
						>
							Notre approche
						</button>
						<button
							className={clsx(
								"before:absolute before:top-0 before:left-0 before:content-['+'] before:size-6",
								"relative text-primary-950 p-4 basis-1/3",
								{
									"bg-primary-700 text-white font-bold":
										activeTab === 1,
									"bg-none text-primary-950": activeTab !== 1,
								},
							)}
							value="approch"
							onClick={(e) => setActiveTab(1)}
						>
							Un expert de A à Z
						</button>
						<button
							className={clsx(
								"before:absolute before:top-0 before:left-0 before:content-['+'] before:size-6",
								"relative text-primary-950 p-4 basis-1/3",
								{
									"bg-primary-700 text-white font-bold":
										activeTab === 2,
									"bg-none text-primary-950": activeTab !== 2,
								},
							)}
							value="approch"
							onClick={(e) => setActiveTab(2)}
						>
							Notre mission
						</button>
					</div>

					<div
						className={clsx("flex gap-4", {
							visible: activeTab === 0,
							hidden: activeTab !== 0,
						})}
					>
						<div className="flex flex-col">
							<h3>Titre super cool ici</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Voluptatum, eveniet
								consequuntur iste velit rerum reiciendis magni
								corrupti provident accusamus explicabo, ipsum
								illum architecto ducimus. Quae magni provident
								sequi asperiores quasi.
							</p>
						</div>
					</div>

					<div
						className={clsx("bg-blue-700", {
							visible: activeTab === 1,
							hidden: activeTab !== 1,
						})}
					>
						Two content
					</div>

					<div
						className={clsx("bg-green-700", {
							visible: activeTab === 2,
							hidden: activeTab !== 2,
						})}
					>
						One content
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
