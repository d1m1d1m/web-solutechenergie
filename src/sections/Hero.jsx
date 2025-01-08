import Field from "../components/Form/Field";
import FieldBox from "../components/Form/FieldBox";
import FieldStack from "../components/Form/FieldStack";
import "./Hero.css";

const HeroSection = () => {
	const handlerQuoteForm = (e) => {
		e.preventDefault();

		const formData = new FormData(e.target);
	};

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

			<div className="right">
				<form onSubmit={handlerQuoteForm} action="#">
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

					<input type="submit" value="Envoyer ma demande" />
				</form>
			</div>
		</section>
	);
};

export default HeroSection;
