import { SwiperSlide } from "swiper/react";
import Carousel from "../../components/Carousel/Carousel";
import ParticularSlide from "./ParticularSlide";
import CommercialSlide from "./CommercialSlide";
import EmergencySlide from "./EmergencySlide";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Hero = () => {
	return (
		<section id="hero">
			<Carousel className="h-screen">
				<SwiperSlide className="bg-hero-particular bg-contain">
					<ParticularSlide />
				</SwiperSlide>

				<SwiperSlide className="bg-hero-commercial bg-cover">
					<CommercialSlide />
				</SwiperSlide>

				<SwiperSlide className="bg-hero-emergency bg-cover">
					<EmergencySlide />
				</SwiperSlide>
			</Carousel>
		</section>
	);
};

export default Hero;
