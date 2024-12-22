import List from "../../../components/List";
import { ArrowRightIcon } from "lucide-react";
import clsx from "clsx";
import { motion } from "motion/react";

const ParticularSlide = () => {
	return (
		<div className="container mx-auto flex items-center h-full">
			<div className="text-white basis-1/2">
				<h1 className="mb-4 font-raleway text-6xl font-extrabold leading-snug uppercase">
					Confort et Sérénité à Domicile
				</h1>

				<motion.p className="mb-16 font-inter leading-relaxed">
					Que ce soit pour l'installation, la réparation ou
					l'entretien de vos équipements de plomberie et de chauffage,
					notre équipe est là pour garantir un service rapide,
					efficace et durable. De la rénovation de salle de bain à
					l'installation de chaudières, nous assurons des prestations
					sur mesure adaptées à vos besoins, pour une maison
					fonctionnelle et agréable.
				</motion.p>

				<List
					className="flex gap-8"
					items={[
						{
							text: "Découvrir nos prestations",
							href: "#",
							type: "primary",
							Icon: ArrowRightIcon,
						},
						{
							text: "Voir nos réalisations",
							href: "#",
							type: "secondary",
							Icon: ArrowRightIcon,
						},
					]}
					renderItem={({ text, Icon, href, type }) => (
						<li className="basis-1/2">
							<a
								className={clsx(
									"flex justify-between items-center px-8 hover:pr-8 py-4",
									{
										"bg-primary-700": type === "primary",
										"bg-white text-primary-700":
											type === "secondary",
									},
								)}
								href={href}
							>
								<span>{text}</span>
								<Icon />
							</a>
						</li>
					)}
				/>
			</div>

			<form className="basis-1/2" action="#"></form>
		</div>
	);
};

export default ParticularSlide;
