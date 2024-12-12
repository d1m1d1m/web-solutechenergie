import List from "../../../components/List";
import Input from "../../../components/Form/Input";
import TextArea from "../../../components/Form/TextArea";
import { ArrowRightIcon } from "lucide-react";
import clsx from "clsx";
import Pencil3DIcon from "../../../assets/3d/pencil.png";

const ParticularSlide = () => {
	return (
		<div className="container mx-auto h-full flex items-center gap-32">
			{/* LEFT */}
			<div className="text-white text-lg basis-2/2">
				<h1 className="mb-8 font-raleway text-6xl font-extrabold leading-snug">
					Votre partenaire de confiance pour vos travaux
				</h1>
				<p className="mb-20 font-inter leading-loose">
					Vous êtes un particulier à la recherche d'un expert pour vos
					besoins en plomberie, chauffage ou petits travaux ? Nous
					sommes là pour vous accompagner : dépannage, installation,
					entretien ou aménagements divers. Avec un service fiable et
					personnalisé, nous veillons à rendre votre maison
					confortable et fonctionnelle. Contactez-nous dès aujourd'hui
					pour un devis gratuit !
				</p>

				<List
					className="flex gap-6"
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
									"flex justify-between items-center gap-8  px-12 hover:pr-8 py-4",
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

			{/* RIGHT */}
			<div className="flex justify-center items-center basis-1/3">
				<form className="relative flex flex-col bg-slate-100 p-12 space-y-4">
					<h2 className="text-2xl text-primary-700">
						Besoin d'un devis sur mesure ?
					</h2>
					<p className="text-lg">
						Remplissez notre formulaire en ligne, c'est rapide,
						gratuit, et sans engagement.
					</p>

					<div className="flex gap-4">
						<Input
							label="Nom"
							name="name"
							placeholder="Dupont"
							required
							onFocus={() => console.log("dans le formulaire")}
						/>
						<Input
							label="Prénom"
							name="forename"
							placeholder="Jacques"
							required
							onFocus={() => console.log("dans le formulaire")}
						/>
					</div>
					<Input
						label="Adresse email"
						name="email"
						placeholder="jacques.dupont@domain.fr"
						required
						onFocus={() => console.log("dans le formulaire")}
					/>
					<Input
						label="Prestation désirée"
						name="object"
						placeholder="Plomberie"
						required
						onFocus={() => console.log("dans le formulaire")}
					/>
					<TextArea
						label="Décrivez votre besoins"
						name="description"
						placeholder="Refaire une salle de bain ..."
						required
						onFocus={() => console.log("dans le formulaire")}
					/>
					<button className="bg-primary-700 px-12 py-4 text-white">
						Envoyer votre demande
					</button>
				</form>
			</div>
		</div>
	);
};

export default ParticularSlide;
