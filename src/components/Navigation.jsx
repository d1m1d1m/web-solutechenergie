import useWindowScroll from "../hooks/useWindowScroll";
import { MAIN_MENU_ITEMS } from "../constants/Menus";
import clsx from "clsx";
import List from "./List";
import { PhoneCallIcon, Droplets } from "lucide-react";

const Navigation = () => {
    const { scrollDirection, currentY } = useWindowScroll();

    return (
        <header
            className={clsx(
                "h-18 fixed top-0 z-50 flex w-full flex-col border-b border-white/30 font-inter text-white transition-colors",
                {
                    "bg-transparent": currentY <= 100,
                    "bg-dark-blue": currentY >= 100,
                },
            )}
        >
            {/* Barre de navigation principale */}
            <nav className="container mx-auto flex items-center justify-between">
                <div className="flex items-center gap-8">
                    <a
                        className="flex items-center justify-center gap-4 font-raleway text-xl font-bold uppercase text-white"
                        href="/"
                    >
                        <Droplets />
                        solutechenergie
                    </a>

                    <List
                        className="flex items-center gap-2"
                        items={MAIN_MENU_ITEMS}
                        renderItem={({ href, label }, index) => (
                            <li className="flex" key={index}>
                                <a
                                    className={clsx(
                                        "flex items-center justify-center px-4 uppercase text-white hover:bg-menuLinkHover hover:text-white/75",
                                        {
                                            "bg-menuLinkHover font-bold text-dark-blue":
                                                index === 0,
                                            "py-6 transition-all":
                                                scrollDirection === "down",
                                            "py-8 transition-all":
                                                scrollDirection === "up",
                                        },
                                    )}
                                    href={href}
                                >
                                    {label}
                                </a>
                            </li>
                        )}
                    />
                </div>
                <a
                    className={clsx(
                        "flex items-center gap-4 border border-white bg-transparent px-6 py-4 font-bold uppercase text-white",
                        "transition-all hover:border-dark-blue hover:bg-white hover:text-dark-blue",
                    )}
                    href="tel:0768660436"
                >
                    <PhoneCallIcon />
                    +33 76 86 60 42 36
                </a>
            </nav>
        </header>
    );
};

export default Navigation;
