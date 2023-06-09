import { links } from "../data/data";
export const SectionLinks = ({ parentClass, itemClass }) => {
    return (
        <ul className={parentClass} id="nav-links">
            {links.map((link) => {
                return (
                    <li key={link.id}>
                        <a href={`#${link.to}`} className={itemClass}>
                            {link.link}
                        </a>
                    </li>
                );
            })}
        </ul>
    );
};

export default SectionLinks;
