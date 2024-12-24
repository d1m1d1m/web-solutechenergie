import { ArrowRightIcon } from "lucide-react";
import List from "../../components/List";
import clsx from "clsx";

const EmergencySlide = () => {
	return (
		<div className="flex items-center justify-center h-full">
			<div className="text-white text-center basis-1/2">
				<h1 className="mb-5 font-raleway text-7xl font-extrabold leading-snug">
					Intervention Rapide, Tranquillité Garantie
				</h1>

				<p className="mb-16 font-inter leading-relaxed">
					Les pannes imprévues peuvent rapidement perturber votre
					quotidien. C'est pourquoi nous offrons un service d'urgence
					disponible 24h/24 et 7j/7. Qu'il s'agisse d'une fuite de
					gaz, d'un problème de chauffage ou d'un autre dépannage
					urgent, notre équipe intervient rapidement pour résoudre vos
					soucis avec efficacité et professionnalisme. Nous vous
					assurons une tranquillité d'esprit en vous apportant des
					solutions rapides et fiables.
				</p>

				<List
					className="flex justify-center gap-16"
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
						<li>
							<a
								className={clsx(
									"flex justify-between items-center px-8 hover:pr-8 py-4 gap-12",
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

export default EmergencySlide;
