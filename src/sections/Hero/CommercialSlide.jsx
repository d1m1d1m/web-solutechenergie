import List from "../../components/List";
import { ArrowRightIcon } from "lucide-react";
import clsx from "clsx";

const CommercialSlide = () => {
	return (
		<div className="flex items-center justify-center h-full">
			<div className="text-white text-center basis-1/2">
				<h1 className="mb-5 font-raleway text-7xl font-extrabold leading-snug">
					Solutions Complètes pour Professionnels
				</h1>

				<p className="mb-16 font-inter leading-relaxed">
					Nous comprenons les exigences des entreprises en matière de
					plomberie et de chauffage. Nos services sont conçus pour
					répondre aux besoins spécifiques des locaux commerciaux, des
					bureaux et des bâtiments industriels. Que vous ayez besoin
					d'une nouvelle installation, d'une mise aux normes ou d'un
					entretien préventif, nous garantissons un travail de
					qualité, réalisé dans les délais et selon les standards les
					plus stricts.
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
		</div>
	);
};

export default CommercialSlide;
