import { SwiperSlide } from "swiper/react";
import Carousel from "../../components/Carousel/Carousel";
import ParticularSlide from "./Sliders/Particular";
import CommercialSlide from "./Sliders/Commercial";
import OtherSlide from "./Sliders/Other";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";

const HeroSection = () => {
	return (
		<section id="hero">
			<Carousel className="h-screen">
				<SwiperSlide className="bg-hero-particular bg-cover">
					<ParticularSlide />
				</SwiperSlide>

				<SwiperSlide className="bg-hero-commercial bg-cover">
					<CommercialSlide />
				</SwiperSlide>

				<SwiperSlide className="bg-hero-emergency bg-cover">
					<OtherSlide />
				</SwiperSlide>
			</Carousel>
		</section>
	);
};

export default HeroSection;
