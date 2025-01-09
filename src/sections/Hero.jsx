import Field from "../components/Form/Field";
import FieldBox from "../components/Form/FieldBox";
import FieldStack from "../components/Form/FieldStack";
import Submit from "../components/Form/Submit";
import "./Hero.css";

const HeroSection = () => {
	return (
		<section id="hero" className="hero container">
			<div className="hero__left">
				<h1 className="hero__title">
					Votre expert en
					<div className="word-slider">
						<ul role="list" class="word-slider__words">
							<li class="word-slider__word">Plomberie</li>
							<li class="word-slider__word">Chauffagiste</li>
							<li class="word-slider__word">Climatisation</li>
							<li class="word-slider__word">Plomberie</li>
						</ul>
					</div>
				</h1>

				<p className="hero__slogan">
					Expert en plomberie, chauffage et climatisation, nous vous
					accompagnons dans tous vos projets, de l'installation à
					l'entretien, avec fiabilité et professionnalisme. Parce que
					votre confort est notre priorité, nous offrons des solutions
					sur mesure, rapides, efficaces et durables
				</p>

				<div className="btn__group">
					<a className="btn btn--primary" href="#">
						<span className="btn__label">
							Prendre rendez-vous !
						</span>
					</a>
					<a className="btn btn--secondary" href="#">
						<span className="btn__label">
							Voir nos réalisations
						</span>
					</a>
				</div>
			</div>

			<div className="right">
				<form action="#">
					<h2>Demandez votre devis rapidement et gratuitement !</h2>

					<FieldStack>
						<Field label="Nom" name="name" required />
						<Field label="Prénom" name="forename" required />
					</FieldStack>

					<Field
						label="Adresse mail"
						type="email"
						name="email"
						required
					/>

					<Field
						label="Téléphone"
						type="phone"
						name="phone"
						required
					/>

					<FieldBox
						label="Décrivez votre demande"
						name="message"
						required
					/>

					<Submit label="Envoyer ma demande" />
				</form>
			</div>
		</section>
	);
};

export default HeroSection;
