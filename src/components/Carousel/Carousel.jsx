import { Swiper } from "swiper/react";
import CarouselNavigation from "./CarouselNavigation";

const Carousel = ({ children, className = "" }) => {
	return (
		<Swiper onSwiper={(s) => s} className={`relative ${className}`}>
			<CarouselNavigation />
			{children}
		</Swiper>
	);
};

export default Carousel;
