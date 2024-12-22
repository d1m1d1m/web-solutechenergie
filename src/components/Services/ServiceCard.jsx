import Button from "./Button";
import List from "../List";
import { CheckCircleIcon } from "lucide-react";

const ServiceCard = ({ img, title, services }) => {
	return (
		<a href="#" className="relative group">
			<picture className="relative">
				<div className="bg-primary-700 absolute inset-0"></div>
				<img
					className="object-cover object-center grayscale group-hover:grayscale-0 h-64 w-full"
					src={img}
					alt=""
				/>
			</picture>
			<div className="bg-white mr-10 relative -top-10 group-hover:-top-16 p-6 transition-all text-primary-950 group-hover:mr-0">
				<header className="py-2 mb-2">
					<h3 className="font-bold text-xl uppercase text-center">
						{title}
					</h3>
				</header>

				<List
					className="flex flex-col gap-2 text-sm"
					items={services}
					renderItem={(text, index) => (
						<li key={index} className="flex items-center gap-2">
							<CheckCircleIcon className="fill-primary-700 stroke-white w-5" />
							{text}
						</li>
					)}
				/>

				<Button type="primary">En savoir +</Button>
			</div>
		</a>
	);
};

export default ServiceCard;
