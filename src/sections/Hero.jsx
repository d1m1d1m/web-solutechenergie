import "./Hero.css";

const HeroSection = () => {
	return (
		<section id="hero" className="container">
			<div className="left">
				<h1>Plomberie . Chauffagiste . Climatisation</h1>

				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Asperiores accusantium sint omnis, sapiente, eligendi
					officiis obcaecati at laboriosam, repellat eum molestiae
					commodi iure minima fuga quasi nemo quae voluptate! Maiores.
				</p>

				<div className="btn__group">
					<a className="btn btn--primary" href="#">
						Prendre rendez-vous !
					</a>
					<a className="btn btn--secondary" href="#">
						Voir nos réalisations
					</a>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
