import { motion, useMotionValueEvent, useScroll } from "motion/react";
import Logo from "./Logo";
import MainMenu from "./MainMenu";
import CallUsLink from "./PhoneLink";
import clsx from "clsx";
import { useState } from "react";

const Navbar = () => {
	const { scrollY } = useScroll();
	const [hidden, setHidden] = useState(false);

	useMotionValueEvent(scrollY, "change", (latest) => {
		console.log(scrollY);
		const previous = scrollY.getPrevious();

		if (latest > previous && latest > 150) {
			setHidden(true);
		} else {
			setHidden(false);
		}
	});

	return (
		<motion.header
			className={clsx("fixed z-50 w-full text-white", {})}
			variants={{
				visible: { y: 0 },
				hidden: { y: "-100%" },
			}}
			animate={hidden ? "hidden" : "visible"}
			transition={{ duration: 0.35, ease: "easeInOut" }}
		>
			<div className="container mx-auto flex justify-between">
				<Logo />

				<MainMenu />

				<CallUsLink />
			</div>
		</motion.header>
	);
};

export default Navbar;
