import clsx from "clsx";

const GetAQuote = () => {
	return (
		<a
			className={clsx(
				"flex items-center gap-2 px-8 bg-primary-700 text-wrap max-w-64 text-left font-bold",
				"transition-all hover:border-primary-700 hover:bg-white hover:text-primary-700 max-xl:hidden",
			)}
			href="tel:0768660436"
		>
			Obtenir un devis gratuitement
		</a>
	);
};

export default GetAQuote;
