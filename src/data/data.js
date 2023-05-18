import tour1 from "../images/tour-1.jpeg";
import tour2 from "../images/tour-2.jpeg";
import tour3 from "../images/tour-3.jpeg";
import tour4 from "../images/tour-4.jpeg";
import tour5 from "../images/tour-5.jpeg";
import tour6 from "../images/tour-6.jpeg";
import paul from "../images/paul.jpg";
import eynar from "../images/Eynar.jpg";
import alexis from "../images/alexis.jpg";
import angular from "../images/angular.png";
import react from "../images/react.jpg";
import algorithm from "../images/algorithm.jpg";
import testing from "../images/testing.jpg";

export const links = [
    {
        id: 1,
        link: "home",
        to: "home",
    },
    {
        id: 2,
        link: "about",
        to: "about",
    },
    {
        id: 3,
        link: "docentes",
        to: "services",
    },
    {
        id: 4,
        link: "materias",
        to: "tours",
    },
];

export const socialLinks = [
    {
        id: 1,
        link: "facebook",
    },
    {
        id: 2,
        link: "twitter",
    },
    {
        id: 3,
        link: "squarespace",
    },
];

export const services = [
    {
        id: 1,
        img: paul,
        title: "Dr Paul Vazo",
        text: "Especialista en Desarrollo de Software",
    },
    {
        id: 2,
        img: eynar,
        title: "Eynar Pari",
        text: "Especialista en QA",
    },
    {
        id: 3,
        img: alexis,
        title: "Alexis Marechal",
        text: "Especialista en redes de petri",
    },
];

export const tours = [
    {
        id: 1,
        image: algorithm,
        date: "august 26th, 2020",
        title: "Algoritmica",
        info: `Explora el poder de los algoritmos en la carrera de Algorítmica. Aprende a resolver problemas complejos, optimizar procesos y tomar decisiones inteligentes utilizando el poder del pensamiento algorítmico. Desarrolla habilidades analíticas y lógicas que te permitirán enfrentar desafíos de manera eficiente. Únete a nosotros y desata tu potencial para transformar el mundo a través de la programación.`,
        location: "Virtual",
        duration: 4,
        cost: 2100,
    },
    {
        id: 2,
        image: testing,
        date: "october 1th, 2020",
        title: "Testing",
        info: `Descubre el mundo del Testing y conviértete en un experto en aseguramiento de la calidad del software. Aprende a detectar y corregir errores, garantizando la funcionalidad y confiabilidad de las aplicaciones. Desarrolla habilidades en pruebas automatizadas y manuales, y domina técnicas de análisis exhaustivo. Únete a nosotros y juega un papel vital en la entrega de software de alta calidad.`,
        location: "Campus UPB La Paz",
        duration: 4,
        cost: 1400,
    },
    {
        id: 3,
        image: react,
        date: "september 15th, 2020",
        title: "Certificacion en React",
        info: `Sumérgete en el poder de React, el framework de JavaScript líder para construir interfaces de usuario interactivas y dinámicas. Aprende a desarrollar aplicaciones web modernas y eficientes utilizando componentes reutilizables. Domina la programación declarativa y aprovecha la potencia de la biblioteca React para crear experiencias de usuario fluidas y atractivas. Únete a nosotros y desbloquea todo el potencial de React para impulsar tus proyectos al siguiente nivel.`,
        location: "Campus UPB La Paz",
        duration: 4,
        cost: 5000,
    },
    {
        id: 4,
        image: angular,
        date: "december 5th, 2019",
        title: "Certificacion en Angular",
        info: `Descubre Angular, el framework de desarrollo web que potencia la creación de aplicaciones robustas y escalables. Aprende a construir interfaces de usuario interactivas y dinámicas utilizando TypeScript y componentes reutilizables. Domina el enfoque modular y el poderoso sistema de inyección de dependencias de Angular. Únete a nosotros y desata todo el potencial de Angular para desarrollar aplicaciones web de alto rendimiento.`,
        location: "Virtual",
        duration: 4,
        cost: 3300,
    },
];
