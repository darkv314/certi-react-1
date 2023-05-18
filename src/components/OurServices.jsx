import Title from "./Title";
import { services } from "../data/data";
import Service from "./Service";
const OurServices = () => {
    return (
        <section className="section services" id="services">
            <Title title="Nuestros" subTitle="Docentes"></Title>
            <div class="section-center services-center">
                {services.map((service) => {
                    return <Service key={service.id} {...service} />;
                })}
            </div>
        </section>
    );
};
export default OurServices;
