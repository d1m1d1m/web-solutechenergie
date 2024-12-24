import { PhoneIcon } from "lucide-react";
import clsx from "clsx";

const CallUsLink = () => {
	return (
		<a
			className={clsx(
				"group flex items-center gap-3 px-6 flex-nowrap text-nowrap backdrop-blur-lg",
				"hover:bg-white hover:text-primary-700",
			)}
			href="tel:0768660436"
		>
			<div className="flex p-2 bg-white group-hover:bg-primary-700 rounded-full">
				<PhoneIcon className="group-hover:fill-white fill-primary-700 stroke-none animate-phone-spin" />
			</div>
			<div className="flex flex-col">
				<span className="text-sm">Un souci ? Appelez !</span>
				<span className="font-bold">(+33)7 76 86 60 42</span>
			</div>
		</a>
	);
};

export default CallUsLink;
