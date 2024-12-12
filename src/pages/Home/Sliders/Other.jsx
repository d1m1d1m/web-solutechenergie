import { ArrowRightIcon } from "lucide-react";

const OtherSlide = () => {
	return (
		<div className="container h-full mx-auto grid grid-cols-12">
			<div className="col-span-7 self-center text-white">
				<h1 className="mb-8 font-mulish text-6xl font-extrabold leading-tight">
					Envie de donner vie à vos idées ?
				</h1>
				<p className="mb-16 font-inter leading-loose text-xl">
					Transformez vos envies en réalité : rénovation, aménagement,
					ou création d'espaces personnalisés. Chaque projet compte,
					petit ou grand. Faites le premier pas et donnez vie à vos
					idées !
				</p>

				<div className="flex gap-8">
					<a
						className="flex items-center gap-4 bg-primary-700 px-6 py-4"
						href="#"
					>
						Découvrir nos prestations
						<ArrowRightIcon />
					</a>
					<a
						className="flex items-center gap-4 bg-white px-6 py-4 text-dark-blue"
						href="#"
					>
						Voir nos réalisations
						<ArrowRightIcon />
					</a>
				</div>
			</div>
		</div>
	);
};

export default OtherSlide;
