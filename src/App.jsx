import { Fragment } from "react";
import { ArrowRightIcon } from "lucide-react";
import Input from "./components/Form/Input";
import TextArea from "./components/Form/TextArea";
import XFieldGroup from "./components/Form/XFieldGroup";
import useWindowScroll from "./hooks/useWindowScroll";
import Navigation from "./components/Navigation";
import Container from "./components/Layout/Container";
import Section from "./components/Section";
import List from "./components/List";
import chauffagerie from "./assets/services/chauffagerie.png";
import plomberie from "./assets/services/plomberie.png";
import ventilation from "./assets/services/ventilation.png";
import petitTravaux from "./assets/services/petit-travaux.png";

import { Swiper, SwiperSlide } from "swiper/react";

const SERVICES = [
    {
        name: "Climatisation",
        img: ventilation,
        content:
            "Mise en place et entretien de systèmes de ventilation performants pour un air sain et une meilleure qualité de vie (VMC simple et double flux).",
    },

    {
        name: "Plomberie",
        img: plomberie,
        content:
            "Installation, réparation et entretien de vos équipements sanitaires (robinetterie, tuyauterie, chauffe-eau).",
    },

    {
        name: "Chauffage",
        img: chauffagerie,
        content:
            "Pose, maintenance et optimisation de vos systèmes de chauffage (chaudières, radiateurs, planchers chauffants).",
    },

    {
        name: "Urgence et petit travaux",
        img: petitTravaux,
        content:
            "Réparation de fuites, débouchage, remplacement de robinetterie, et autres interventions du quotidien pour votre confort.",
    },
];

const App = () => {
    const { current, setScrollPosition } = useWindowScroll();

    return (
        <Fragment>
            <Navigation />

            <main className="h-screen">
                {/* L'accueil */}
                <Section
                    id="hero"
                    className="h-full bg-dark-blue bg-hero bg-fixed"
                >
                    <Container className="grid grid-cols-12 gap-16 pt-20">
                        {/* Left part */}
                        <div className="col-span-7 flex flex-col justify-center text-xl text-white">
                            <h1 className="mb-8 font-mulish text-5xl font-extrabold leading-tight">
                                Votre spécialiste en plomberie, chauffagerie,
                                ventilation, sanitaire !
                            </h1>
                            <p className="mb-16 font-inter leading-loose">
                                Chaleur, fraîcheur, et sérénité : nous prenons
                                soin de votre habitat. Faites confiance à notre
                                expertise pour des travaux impeccables, un
                                service réactif et des conseils personnalisés.
                                Ensemble, donnons vie à vos projets.
                            </p>

                            <div className="flex gap-8 text-nowrap">
                                <a
                                    className="flex items-center justify-between bg-dark-blue px-8 py-6"
                                    href="#"
                                >
                                    Découvrir nos prestations
                                    <ArrowRightIcon className="ml-2" />
                                </a>
                                <a
                                    className="flex items-center justify-between bg-white px-12 py-6 text-dark-blue"
                                    href="#"
                                >
                                    Voir nos réalisations
                                    <ArrowRightIcon className="ml-2" />
                                </a>
                            </div>
                        </div>

                        <div className="col-span-5 flex flex-grow items-center justify-center">
                            <form className="flex flex-grow flex-col gap-4 rounded-lg bg-white px-10 py-8 text-base shadow-md">
                                <header className="flex flex-col pb-4 text-xl">
                                    <h2 className="mb-4 font-mulish font-bold uppercase text-dark-blue">
                                        Demandez votre devis gratuitement
                                    </h2>
                                    <p className="text-inter">
                                        Obtenez votre devis personnalisé en
                                        quelques clics, rapidement et sans
                                        engagement !
                                    </p>
                                </header>
                                <XFieldGroup>
                                    <Input
                                        label="Nom"
                                        placeholder="John Doe"
                                        required
                                    />
                                    <Input
                                        label="Code postal"
                                        placeholder="41140"
                                        required
                                    />
                                </XFieldGroup>
                                <Input
                                    label="Téléphone"
                                    placeholder="0607080910"
                                    required
                                />
                                <Input
                                    label="Adresse mail"
                                    placeholder="exemple@domaine.fr"
                                    required
                                />
                                <TextArea
                                    required
                                    label="Dîtes nous en plus sur votre projet"
                                    placeholder="Je souhaite rénover ma salle de bain de 47 m2, ..."
                                    rows={5}
                                />
                                <button
                                    className="mt-4 rounded-md bg-dark-blue px-6 py-4 text-white"
                                    type="submit"
                                >
                                    Envoyer
                                </button>
                            </form>
                        </div>
                    </Container>
                </Section>

                {/* Qui sommes-nous ? */}
                <Section
                    id="about"
                    className="flex items-center bg-pipes bg-cover"
                >
                    <Container className="flex gap-16 py-16">
                        <div className="flex flex-col items-center justify-center space-y-8 text-xl">
                            <h2 className="font-mulish text-5xl font-bold leading-normal text-dark-blue">
                                <span className="mb-4 flex items-center text-xl uppercase text-red before:mr-4 before:block before:h-px before:w-12 before:bg-red">
                                    Pourquoi nous ?
                                </span>
                                <span>
                                    Un service de qualité pour des travaux
                                    impeccables !
                                </span>
                            </h2>

                            <p className="leading-relaxed">
                                Nous mettons notre expertise au service de votre
                                confort et de votre sérénité. Spécialistes en
                                plomberie, chauffage, et systèmes de
                                ventilation, nous intervenons pour répondre à
                                tous vos besoins, que ce soit pour une
                                installation, une rénovation, ou un dépannage.
                            </p>

                            <div className="flex divide-x-2 divide-dashed divide-blue-300">
                                <div className="flex flex-col items-start px-4">
                                    <span className="mb-2 text-4xl font-bold text-dark-blue">
                                        + 150
                                    </span>
                                    <span>Chaudières installées</span>
                                </div>
                                <div className="flex flex-col items-start px-4">
                                    <span className="mb-2 text-4xl font-bold text-dark-blue">
                                        + 1500
                                    </span>
                                    <span>Fuites décelées et réparées</span>
                                </div>
                                <div className="flex flex-col items-start px-4">
                                    <span className="mb-2 text-4xl font-bold text-dark-blue">
                                        + 3000
                                    </span>
                                    <span>Dépannages et urgences résolus</span>
                                </div>
                            </div>

                            <ul className="flex max-h-32 items-center gap-16">
                                <li className="flex h-full">
                                    <img
                                        className="h-full"
                                        src="https://www.menuiseriechapuis.fr/wp-content/uploads/2015/04/LOGO-RGE-PNG-e1490852001948.png"
                                        alt=""
                                    />
                                </li>

                                <li className="flex h-full">
                                    <img
                                        className="h-full"
                                        src="http://www.renoveco-habitat.fr/wp-content/uploads/2014/11/logo_rge-960x604.png"
                                        alt=""
                                    />
                                </li>
                            </ul>
                        </div>

                        <List
                            className="grid columns-2 grid-cols-2 grid-rows-2 flex-wrap gap-8"
                            items={SERVICES}
                            renderItem={({ name, img, content }) => (
                                <li className="col-span-1 row-span-1 flex flex-col rounded-lg bg-white shadow-lg">
                                    <div className="flex h-40 items-center justify-center bg-light-blue">
                                        <img
                                            className="w-40 object-cover drop-shadow-md"
                                            src={img}
                                            alt=""
                                        />
                                    </div>
                                    <div className="space-y-4 p-8">
                                        <h3 className="text-xl font-bold">
                                            {name}
                                        </h3>
                                        <p>{content}</p>
                                    </div>
                                </li>
                            )}
                        />
                    </Container>
                </Section>

                {/* Nos réalisations */}
                <section className="min-h-full bg-light-blue">
                    <div className="container mx-auto flex h-full flex-col">
                        <h2 className="font-mulish text-5xl font-bold leading-normal text-dark-blue">
                            <span className="mb-4 flex items-center text-xl uppercase text-red before:mr-4 before:block before:h-px before:w-12 before:bg-red">
                                Nos réalisations
                            </span>
                            <span>Nos réalisations</span>
                        </h2>

                        <div class="grid grid-cols-2 gap-4 md:grid-cols-3">
                            <div>
                                <img
                                    class="h-auto max-w-full rounded-lg"
                                    src="https://lh3.googleusercontent.com/fife/ALs6j_HWkAEYisuz-ydj2Ony6E4lWk6h6Hmxfy3thkz-zlK5uV4ffq6sdVmTzYlmW0wkGVFpMfg4dVk-zYCeLyNlncbHutK879Ee_7Hq44-ofc1ELkoZh4mq-LMV_qGQesA7V2BmEoD6PG-6qO_WujnS1iws8N42rEQ_s9oRw_ZMHCpeuwXGICsBN6p7ks8pfhsPbOmkgKC8tuNMzt49U-I8bV4x1Zgq2N8lHmHvZK3aCUGyH7lnET76kXIod2Tu48cBuXgAgpRTAG9ejeKD3J7IPvYUSN8-7ZD2GbYEu4KHnDREsJR2q3RFIAn9iBOWLmcPvYagRkKFt6kaOjqKA4vSyTE6jLpExyzEVaebTcnW8nAuiK7VgqBL8MSAgvjtC1gp3URvyCNk3ADWKTpJnUQf8R3OBqkR-YXtf3vR89mKWCuVx1T96IYIznR5yZx4CHUFGxtBAgwuZ8f7W7ipxzhwXa4LDbbOHv5pvROCIw7LJGdutn-IL21qthosXJ13assbog-ewgk4mnPVn7rxDuVZ26-TJiNx5DaEeG5qGv_DFrLChbf_8YWBcTREVTTEiDETWlgZrPFIhDPWedXEPXLllw2zFdjRBRefBDf7hy7IB_aNUN1KgWyDSb-I-ViEjSLdBX5JTj0LLz50QrfLilo9jV5HetSig_Fn6jSwaBf1CghjBSh7EqLAZtRCV9BBVTKZA5Gal-56AaLyT_F64NLqcyVM611DYR7G5CJorYYG-A3tbvryt2E9vZzjAxHLVW0jg8P5IrtP-tfZYpfeShT582MIitebUGiyuphfBhnRJQ1A6zhrqnl922o-vca69Z7Y5qAp7Vjt7eTEvQrwafNTb2vX9jwtzgtfDCvoG7zcO9oYRvdFqq9Ym8xYxsv1pdrqlCR9b_qFeKb6OaHyPThUIpfIvZubhht6w1ennkWZvQS8wWy7uNWEZDrHaqWhVy7TWLxsa3xb9C4sRzaRpqf9ZhAqskdkhwxVL0_6Dm-fKWOiGj5xM-xJrKJaI6s63PqbPNS_S9pWQ2d-Ym2zFX0tlnC7hA1yXRu3_WGtMyN3ObknpwNlBzeDXhsXKMbkZmNdPSmxQskOY6_ZhjVaZZG_EmobrCpNkfeknOtMfRsmFp049lQonzixZEV1SwlSGOHXFUNvKV8xgWYhXTtAVGKZo-jna-CfsChSRET7wpD3QaiAwXEFlGbn6Qmlex8QCWdjC9dGR967NCEbFGiYxUIxNEDFvxPjU2R0WMKFKa681aZr3guZ8yJQyKtylXStGh24CToev-akqAOLddWP9TaTg8GnWDM6mPx-oKzXUEJ4hzs3dLzVnv2at4PO3OzEvo5P0ZcD6xEEnVpSdGo0yVR5-TV3gzeY5j6yqprlf2mVGeAZbMeiE08ENMEFIWGRBecWlPIik3QROA2QPwSsygJCbbYVWut7fm-88JiZ8lAE0LxidbRgIni0EevkEIAYfup7LctEgCFbV_YeBYFJDjQxv_KrCtf16ma47DqrxrCKyeMfo3hmtMGBfaNjIU2drbuGSJwMPzufv-OA_R_qRt4nLKhT2VyoAZLChALht4namxIHKlSSXYDZ3R9-ThfYyRqTvUxh_Aw8dAwpU5Hk=w1920-h963"
                                    alt=""
                                />
                            </div>
                            <div>
                                <img
                                    class="h-auto max-w-full rounded-lg"
                                    src="https://lh3.googleusercontent.com/fife/ALs6j_HMuoIYHIV2qhCIqCpu0nTOkFjBbFH6TNIB8WV_VA6SVwRC8OCjENIgghXoXaVM0o6SXb0LbNT_mbnkS2Zmo1h3dEZa4j8_15G-b_DJ7hz2kRGkTxo5bP82k28KLZ4EP5xbpWT_TnK18bMM1ONLgXdkKCAUH8OFT1HYyKaAAw3mUJNo_8u0yNc62mqmqiL9Wpkz2-OdgS-r_9JKqzt9Jbe7Qk0XbaWrI4f5r9T8lwLeKrYi0cXy3o8tqTMiYOHWIS91KXti4BGBVunjnstWNZA-hr7NMiWbpMCQMiBpPMe4RJJM9ydZcyH6JJxRHS2bCK-nBxu6Hz_ijkkSxrxET-A_r9FOVWSZjPzrCGV3dKHDjGI0Qz81TkBlOxfu7S2k4D7H3w4YbxA6g5mkKVvzWobzH3FiqtEOb-MXAZK9-h6wJpZtePivCJusFAxz9WwNWkJ62Yn6_OGZ9d89sNP0h2r8LHU6lYZ3TN46xRnt7bTLiNx4AFxEn6-wk8IQnrOlMUAYvilRxXMY_vWbn_wPAE3HCz6EagJsLuxtZiDgZNGOu3FbqhCFe5i8cox5-XRJTUh2XOgmK4k5-u6PGm_Dducf1I8PmpZ24MET8wsmeiz3hbv55oS70VzcrXYykvP4mXzfAkJJxFTDqWxaC99lN_2YT026x5JXMz3SClAIyqSgrTWmDwHW7H1xZMNZ3l13MQSy06qB08FrnBT8ONYqvnMei6Yb5ImX_wjTCf2-dS-yoQE4Rq-KOVoy7dhPmSsNp46_3a4M_rsu3sr1IoClWyKlxhpxRP-9Z2umJBpaDTt4V2VqHBmo7XZoEYFYI075e_fdGPMNyHZEf520y3qh1yM0RTg9Ar8jf39aUGEdGtqyKv7iwjLndlmzPdsC8PHZGwubVeb6eAXRt2_iRJx4hBTEG6aSnQH0mUghiZWYQSsPIdx6NOBYD1rAn_wqwIoyCBFCOQkIghe1SktXhMkP_2cqCEIv0SNgZy1TUh-67k-tRj5gqUqz7-UBTU90vcbcQoqFS_lU9tAp_OGfvIJGW6l2iquMekjV0k8ykaKkL26o7mtPpG1ODGspRp1VYPO2US1QzbeaERbrmrcEmbPLxWvIZtM5yHterhgRVZeIdlDBIiiPMqyj8wfCrpCkb0-Zc4R8LMzUFD70S8zvaLUCBAInZ09ANuMuFOdKA9_1RF7qZBQHZMHlmsVra3icQONU6Ba_IKjnwhBgtX0xJqYW-4AkhEN7a2ut94fg9fObb9busdAAwQTk0nam7IN1sIq--cxaXGbeDaGIRNFtxLFEUKPL65E-CcZoEmwQPmdM4p0Ql7jjk3VthhqIxUOqpq8E0ne-m3Y5Eucbm9cUlSI6LB1l0-M4FZIH62PEnhqh8dr-Uo0tcceUJPT8ye2VuugPLVwKclA95fba0smKFn4F6XV-bri7C6cnM8xLWVO5S6GQBChDwPFalkNUfhQwtwcBbOedPMrSWFdyVmplKsCuNyCTC575dTix5N3YAq-HkBNr8t323ksNSKOiC0hD8H3EVi0C8ff4QHgi9JwZ3f6LOA71phGrZLdO_X4JB_SANvo9mA6rpFIe4GouPAVvqe_T1rY3j_D621w9pYWp3w=w1920-h963"
                                    alt=""
                                />
                            </div>
                            <div>
                                <img
                                    class="h-auto max-w-full rounded-lg"
                                    src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
                                    alt=""
                                />
                            </div>

                            <div>
                                <img
                                    class="h-auto max-w-full rounded-lg"
                                    src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
                                    alt=""
                                />
                            </div>
                            <div>
                                <img
                                    class="h-auto max-w-full rounded-lg"
                                    src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
                                    alt=""
                                />
                            </div>
                            <div>
                                <img
                                    class="h-auto max-w-full rounded-lg"
                                    src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
                                    alt=""
                                />
                            </div>
                        </div>

                        <a
                            className="border border-dark-blue bg-white px-4 py-6 text-dark-blue"
                            href="#"
                        >
                            En voir plus +
                        </a>
                    </div>
                </section>
            </main>
            <footer></footer>
        </Fragment>
    );
};

export default App;
