import List from "../List";
import { MAIN_MENU_ITEMS } from "../../constants/Menus";
import clsx from "clsx";

const Menu = () => {
	return (
		<List
			className="flex items-center"
			items={MAIN_MENU_ITEMS}
			renderItem={({ href, label }, index) => (
				<li key={index}>
					<a
						className={clsx(
							"flex items-center justify-center py-6 px-4 text-white border border-transparent",
							"hover:border-b hover:border-b-white",
						)}
						href={href}
						children={label}
					/>
				</li>
			)}
		/>
	);
};

export default Menu;
