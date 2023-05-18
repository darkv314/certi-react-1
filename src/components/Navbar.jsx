import horseLogo from "../images/horseLogo.svg";
import SectionLinks from "./SectionLinks";
import { socialLinks } from "../data/data";
import { SocialLinks } from "./SocialLinks";

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <img src={horseLogo} className="nav-logo" alt="ISC" />
                    <button
                        type="button"
                        className="nav-toggle"
                        id="nav-toggle"
                    >
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
                <SectionLinks
                    parentClass={"nav-links"}
                    itemClass={"nav-link"}
                ></SectionLinks>

                <ul className="nav-icons">
                    {socialLinks.map((social) => {
                        return (
                            <SocialLinks
                                key={social.id}
                                social={social.link}
                                parentClass={"nav-icon"}
                            ></SocialLinks>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
};
export default NavBar;
