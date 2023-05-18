import dance from "../images/dance.gif";
const Hero = () => {
    return (
        <section className="hero" id="home">
            <div
                className="hero-banner"
                style={{
                    backgroundImage: `url(${dance})`,
                }}
            >
                <h1>Ingenieria de Sistemas Computacionales</h1>
                <p>
                    Descubre el fascinante mundo de la Ingeniería de Sistemas
                    Computacionales. Aprende a diseñar soluciones innovadoras,
                    desarrollar software y gestionar redes informáticas.
                    Conviértete en el arquitecto digital del futuro. ¡Únete a
                    nosotros y crea el cambio en el mundo tecnológico!
                </p>
                <a href="#tours" className="btn hero-btn">
                    Explorar materias
                </a>
            </div>
        </section>
    );
};
export default Hero;
