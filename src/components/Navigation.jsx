import useWindowScroll from "../hooks/useWindowScroll";
import { MAIN_MENU_ITEMS } from "../constants/Menus";
import clsx from "clsx";
import List from "./List";
import { PhoneIcon, Droplets } from "lucide-react";
import { DropletsIcon } from "lucide-react";
import { DropletIcon } from "lucide-react";

const Navigation = () => {
	const { currentY } = useWindowScroll();

	return (
		<header
			className={clsx(
				"h-24 fixed top-0 z-50 w-full flex border-b border-white/30 font-inter text-white transition-colors backdrop-blur",
				{
					"bg-primary-700/75": currentY > 10,
				},
			)}
		>
			{/* Barre de navigation principale */}
			<nav className="container mx-auto flex items-center justify-between py-2">
				<a
					className="flex flex-col items-center justify-center gap-2 font-raleway text-lg font-bold uppercase text-white"
					href="/"
				>
					<DropletIcon className="size-8" />
					<span>SOLUTECHENERGIE</span>
				</a>

				<List
					className="flex items-center"
					items={MAIN_MENU_ITEMS}
					renderItem={({ href, label }, index) => (
						<li key={index}>
							<a
								className={clsx(
									"flex items-center justify-center p-4 text-white border border-transparent",
									"hover:border-b hover:border-b-white",
								)}
								href={href}
								children={label}
							/>
						</li>
					)}
				/>

				<a
					className={clsx(
						"flex items-center gap-3 border border-white px-4 py-3",
						"transition-all hover:border-primary-700 hover:bg-white hover:text-primary-700",
					)}
					href="tel:0768660436"
				>
					<PhoneIcon className="fill-current stroke-none animate-phone-spin" />
					<span>07 76 86 60 42 36</span>
				</a>
			</nav>
		</header>
	);
};

export default Navigation;
