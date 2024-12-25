import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import ServiceCard from "../../components/Services/ServiceCard";

const Services = () => {
	return (
		<section id="services" className="bg-primary-50">
			<div className="container mx-auto relative before:block before:top-16 before:content-['services'] before:uppercase before:absolute before:inset-0 before:-z-10 before:text-9xl before:font-mulish before:font-extrabold before:text-slate-300 py-16">
				<header className="flex items-center mb-16">
					<div className="basis-1/2">
						<span className="flex text-primary-500 gap-4 items-center text-2xl before:block before:h-[2px] before:w-10 before:bg-current">
							Nos prestations
						</span>
						<h1 className="font-raleway text-6xl font-bold text-primary-950 mt-4 leading-tight">
							Du tuyau qui siffle au chauffe-eau qui grésille
						</h1>
					</div>
					<p className="text-base basis-1/2">
						Lorem ipsum dolor, sit amet consectetur adipisicing
						elit. Incidunt, reprehenderit nobis eaque nihil ratione
						dolorum officiis culpa autem odit necessitatibus impedit
						ipsum consequuntur, enim labore, minima architecto
						molestias et. Delectus.
					</p>
				</header>

				<Swiper
					autoplay={{
						reverseDirection: true,
					}}
					modules={[Autoplay]}
					spaceBetween={32}
					slidesPerView={4}
				>
					<SwiperSlide>
						<ServiceCard
							img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.renovationettravaux.fr%2Fwp-content%2Fuploads%2F2020%2F10%2Finstallation-chauffe-eau.jpeg&f=1&nofb=1&ipt=2d93be635db6aae1d0a52f5f989bedbbdf8c7a05befa882be50cef76f9c9f023&ipo=images"
							title="Chauffage"
							services={[
								"Lorem ipsum dolor sit amet.",
								"Lorem ipsum dolor sit amet.",
								"Lorem ipsum dolor sit amet.",
								"Lorem ipsum dolor sit amet.",
								"Lorem ipsum dolor sit amet.",
								"Lorem ipsum dolor sit amet.",
							]}
						/>
					</SwiperSlide>
					<SwiperSlide>
						<ServiceCard
							img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Faws.wideinfo.org%2Fwideinfo.org%2Fwp-content%2Fuploads%2F2019%2F02%2F27214657%2Fcropped-slide-3.jpg&f=1&nofb=1&ipt=d27b1ae99733e574838926b3bd5c2b59e510ee1daf89c536cf9eed8dffbf7ff3&ipo=images"
							title="plomberie"
							services={[
								"Lorem ipsum dolor sit amet.",
								"Lorem ipsum dolor sit amet.",
								"Lorem ipsum dolor sit amet.",
								"Lorem ipsum dolor sit amet.",
								"Lorem ipsum dolor sit amet.",
								"Lorem ipsum dolor sit amet.",
							]}
						/>
					</SwiperSlide>
					<SwiperSlide>
						<ServiceCard
							img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fazaneo.com%2Fwp-content%2Fuploads%2F2023%2F07%2Fprix-pompe-chaleur-air-air-120m2.png&f=1&nofb=1&ipt=02ebea3976754bd3ffa7d281ab437bec9f41152959b2a5acca2e618a676764fd&ipo=images"
							title="climatisation"
							services={[
								"Lorem ipsum dolor sit amet.",
								"Lorem ipsum dolor sit amet.",
								"Lorem ipsum dolor sit amet.",
								"Lorem ipsum dolor sit amet.",
								"Lorem ipsum dolor sit amet.",
								"Lorem ipsum dolor sit amet.",
							]}
						/>
					</SwiperSlide>

					<SwiperSlide>
						<ServiceCard
							img="https://hellodepann.fr/wp-content/uploads/2023/11/AdobeStock_238354696-1536x1024-1.jpeg"
							title="Dépannages"
							services={[
								"Lorem ipsum dolor sit amet.",
								"Lorem ipsum dolor sit amet.",
								"Lorem ipsum dolor sit amet.",
								"Lorem ipsum dolor sit amet.",
								"Lorem ipsum dolor sit amet.",
								"Lorem ipsum dolor sit amet.",
							]}
						/>
					</SwiperSlide>
				</Swiper>
			</div>
		</section>
	);
};

export default Services;
