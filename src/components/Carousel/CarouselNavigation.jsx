import clsx from "clsx";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useState } from "react";
import { useSwiper } from "swiper/react";

const CarouselNavigation = () => {
	const swiper = useSwiper();

	swiper.on("slideChange", (s) => {
		setIsBeginning(s.isBeginning);
		setIsEnd(s.isEnd);
	});

	const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);
	const [isEnd, setIsEnd] = useState(swiper.isEnd);

	const prevBtn = clsx("absolute left-6 p-2 text-white", {
		"disabled:opacity-30": isBeginning,
		"hover:bg-white/50": !isBeginning,
	});

	const nextBtn = clsx("absolute right-6 z-50 p-2 text-white", {
		"disabled:opacity-30": isEnd,
		"hover:bg-white/50": !isEnd,
	});

	return (
		<div className="absolute top-1/2 z-50 w-full">
			<button
				className={prevBtn}
				children={<ChevronLeft className="size-12" />}
				onClick={() => swiper.slidePrev()}
				disabled={isBeginning}
			/>

			<button
				className={nextBtn}
				children={<ChevronRight className="size-12" />}
				onClick={() => swiper.slideNext()}
				disabled={isEnd}
			/>
		</div>
	);
};

export default CarouselNavigation;
