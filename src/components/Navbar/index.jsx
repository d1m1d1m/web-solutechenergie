import { motion, useMotionValueEvent, useScroll } from "motion/react";
import Logo from "./Logo";
import Menu from "./Menu";
import CallUsLink from "./PhoneLink";
import GetAQuote from "./QuoteLink";
import clsx from "clsx";
import { useState } from "react";

const Navbar = () => {
	const { scrollY } = useScroll();
	const [enableBackground, setEnableBackground] = useState(false);

	useMotionValueEvent(scrollY, "change", (latest) => {
		const previous = scrollY.getPrevious();

		if (latest > previous && latest > 40) {
			setEnableBackground(true);
		}
		if (latest <= 40) {
			setEnableBackground(false);
		}
	});

	return (
		<motion.nav
			className={clsx("fixed z-50 w-full text-white", {
				"bg-primary-900": enableBackground,
			})}
		>
			<div className="container mx-auto flex justify-between">
				<Logo />

				<Menu />

				<CallUsLink />
				<GetAQuote />
			</div>
		</motion.nav>
	);
};

export default Navbar;
