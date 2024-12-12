import List from "../../../components/List";
import { ArrowRightIcon } from "lucide-react";
import clsx from "clsx";

const CommercialSlide = () => {
	return (
		<div className="container mx-auto h-full flex justify-center items-center">
			{/* LEFT */}
			<div className="text-white text-lg">
				<h1 className="mb-8 font-raleway text-7xl font-extrabold leading-snug">
					Besoin d'un plombier compétent pour vos projets commerciaux
					?
				</h1>
				<p className="mb-20 font-inter leading-loose">
					En plus d'offrir des services de plomberie résidentielle.
					Que ce soit pour l'installation, la réparation ou
					l'entretien de vos systèmes, il garantit un travail
					professionnel et rapide. Contactez-le dès aujourd'hui pour
					un devis personnalisé !
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
		</div>
	);
};

export default CommercialSlide;
