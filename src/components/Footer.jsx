import SectionLinks from "./SectionLinks";
import SocialLinks from "./SocialLinks";
import { socialLinks } from "../data/data";

const Footer = () => {
    return (
        <footer className="section footer">
            <SectionLinks
                parentClass={"footer-links"}
                itemClass={"footer-link"}
            ></SectionLinks>

            <ul className="footer-icons">
                {socialLinks.map((social) => {
                    return (
                        <SocialLinks
                            key={social.id}
                            social={social.link}
                            parentClass={"footer-icon"}
                        ></SocialLinks>
                    );
                })}
            </ul>
            <p className="copyright">
                copyright &copy; ISC education company
                <span id="date"></span> all rights reserved
            </p>
        </footer>
    );
};
export default Footer;
