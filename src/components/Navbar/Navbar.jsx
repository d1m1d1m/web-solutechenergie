import List from "../List/List";
import { PhoneIcon, MailIcon, MapPinIcon } from "lucide-react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { DropletsIcon } from "lucide-react";

const MAIN_MENU_ITEMS = [
	{
		label: "Accueil",
		href: "#home",
	},
	{
		label: "Qui sommes-nous ?",
		href: "#about",
	},
	{
		label: "Prestations",
		href: "#services",
	},
	{
		label: "Réalisations",
		href: "#projects",
	},
	{
		label: "Contact",
		href: "#contact",
	},
];

const Navbar = () => {
	return (
		<header className="headbar">
			<nav className="navbar">
				<a className="brand" href="#">
					{/* <DropletsIcon className="brand__img" /> */}
					SOLUTECHENERGIE
				</a>

				<List
					className="menu"
					role="list"
					items={MAIN_MENU_ITEMS}
					renderItem={({ href, label }, index) => (
						<li className="menu__item" key={index}>
							<a
								className={`menu__link ${index === 0 ? "menu__link--active" : ""}`}
								href={href}
								children={label}
							/>
						</li>
					)}
				/>

				<div className="test">
					<a className="cta cta--phone" href="tel:0768660436">
						<span className="cta__icon">
							<PhoneIcon />
						</span>

						<div className="cta__content">
							<span>Une urgence ?</span>
							<span>(+33)7 04 05 02 01</span>
						</div>
					</a>

					<a className="cta cta--quote" href="tel:0768660436">
						<span>Demander un devis</span>
					</a>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
