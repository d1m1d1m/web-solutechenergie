import {
	SiFacebook,
	SiInstagram,
	SiLinkedin,
} from "@icons-pack/react-simple-icons";
import { MapPinIcon, PhoneIcon, MailIcon } from "lucide-react";

const MAIN_MENU_ITEMS = [
	{
		label: "Qui sommes-nous ?",
		href: "#about",
	},
	{
		label: "Nos prestations",
		href: "#services",
	},
	{
		label: "Nos réalisations",
		href: "#projects",
	},
	{
		label: "Contact",
		href: "#contact",
	},
];

const SOCIAL_MENU_ITEMS = [
	{
		icon: SiFacebook,
		href: "https://facebook.com",
	},
	{
		icon: SiInstagram,
		href: "https://instagram.com",
	},
	{
		icon: SiLinkedin,
		href: "https://linkedin.com",
	},
];

const ADDRESS_MENU_ITEMS = [
	{
		icon: MapPinIcon,
		href: encodeURI(`https://www.google.fr/maps/place/${""}/`),
		value: "41140, Saint Romain sur Cher",
	},
	{
		icon: PhoneIcon,
		href: "tel:+33 7 68 66 04 36",
		value: "+33 7 68 66 04 36",
	},
	{
		icon: MailIcon,
		href: "mailto:d1m1tr1.d3l3tang@gmail.com",
		value: "d1m1tr1.d3l3tang@gmail.com",
	},
];

export { MAIN_MENU_ITEMS, ADDRESS_MENU_ITEMS, SOCIAL_MENU_ITEMS };
