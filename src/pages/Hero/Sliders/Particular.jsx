import List from "../../../components/List";
import { ArrowRightIcon } from "lucide-react";
import clsx from "clsx";
import { motion } from "motion/react";
import Input from "../../../components/Form/Input";
import TextArea from "../../../components/Form/TextArea";
import SubmitButton from "../../../components/Form/SubmitButton";

const ParticularSlide = () => {
	return (
		<div className="container mx-auto flex items-center h-full gap-32 px-12">
			<div className="text-white basis-3/4">
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

			<form
				className="basis-1/4 bg-primary-50 text-primary-950 p-12 space-y-6 rounded-md"
				action="#"
			>
				<header>
					<h2 className="text-2xl mb-4">
						Devis gratuit et sans engagement !
					</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Ea, ducimus.
					</p>
				</header>

				<div className="flex gap-8">
					<Input label="Nom" name="name" required />
					<Input label="Téléphone" name="phone" type="tel" required />
				</div>
				<Input label="Adresse e-mail" name="email" required />
				<Input
					label="Type de prestation"
					name="service"
					type="text"
					required
				/>

				<TextArea label="Votre message" name="object" required />

				<SubmitButton>Valider ma demande</SubmitButton>
			</form>
		</div>
	);
};

export default ParticularSlide;
