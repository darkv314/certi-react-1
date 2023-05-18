import lmao from "../images/about.jpeg";
import Title from "./Title";

const About = () => {
    return (
        <section className="section" id="about">
            <Title title="about" subTitle="us"></Title>

            <div className="section-center about-center">
                <div className="about-img">
                    <img
                        src={lmao}
                        className="about-photo"
                        alt="awesome beach"
                    />
                </div>
                <article className="about-info">
                    <h3>La experiencia</h3>
                    <p>
                        En este programa de estudios, adquirirás conocimientos
                        sólidos en áreas fundamentales como programación, redes
                        de computadoras, sistemas operativos, bases de datos y
                        seguridad informática. Aprenderás a diseñar, desarrollar
                        e implementar soluciones innovadoras y escalables,
                        utilizando tecnologías de vanguardia.
                    </p>
                    <p>
                        Nuestro enfoque interdisciplinario te permitirá
                        comprender la relación entre los sistemas informáticos y
                        las necesidades empresariales, y te brindará las
                        habilidades para crear soluciones integrales que
                        impulsen el crecimiento y la eficiencia de las
                        organizaciones.
                    </p>
                    <a href="#" className="btn">
                        Descubrir mas
                    </a>
                </article>
            </div>
        </section>
    );
};
export default About;
