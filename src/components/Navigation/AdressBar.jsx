import clsx from "clsx";
import List from "../List";
import { ADDRESS_MENU_ITEMS, SOCIAL_MENU_ITEMS } from "../../constants/Menus";

const AdressBar = () => {
    return (
        <address
            className={clsx(
                "hidden overflow-hidden bg-dark-blue text-white transition-all",
                {
                    "h-0": scrollDirection === "down",
                    "h-10": scrollDirection === "up",
                },
            )}
        >
            <div className="container mx-auto flex h-full items-center justify-between">
                <List
                    className="flex items-center divide-x-2 divide-dotted divide-white text-sm"
                    items={ADDRESS_MENU_ITEMS}
                    renderItem={({ href, icon: Icon, value }) => (
                        <li className="px-4">
                            <a className="flex items-center" href={href}>
                                <Icon className="mr-2 size-4" />
                                {value}
                            </a>
                        </li>
                    )}
                />

                <List
                    className="flex items-center"
                    items={SOCIAL_MENU_ITEMS}
                    renderItem={({ href, icon: Icon }, index) => (
                        <li key={index}>
                            <a className="flex items-center p-2" href={href}>
                                <Icon className="mr-2 size-4" />
                            </a>
                        </li>
                    )}
                />
            </div>
        </address>
    );
};

export default AdressBar;
