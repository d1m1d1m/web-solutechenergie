import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import ParticularSlide from "./Sliders/Particular";
import CommercialSlide from "./Sliders/Commercial";
import OtherSlide from "./Sliders/Other";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";

const HomeSection = () => {
	return (
		<section id="home" className="h-screen">
			<Swiper
				className="h-full"
				// autoplay={{ delay: 10000 }}
				pagination={{
					clickable: true,
					bulletClass:
						"inline-block w-12 h-1 rounded-full bg-white/50 mx-2 hover:h-4 transition-all cursor-pointer",
					bulletActiveClass: "bg-white",
				}}
				modules={[Navigation, Pagination, Autoplay]}
			>
				{/* ========= HERO 1 ========= */}
				<SwiperSlide className="bg-hero1 bg-cover bg-fixed pt-24">
					<ParticularSlide />
				</SwiperSlide>

				{/* ========= HERO 2 ========= */}
				<SwiperSlide className="bg-hero2 bg-cover pt-24">
					<CommercialSlide />
				</SwiperSlide>

				{/* ========= HERO 3 ========= */}
				<SwiperSlide className="bg-hero3 bg-cover pt-24">
					<OtherSlide />
				</SwiperSlide>
			</Swiper>
		</section>
	);
};

export default HomeSection;
