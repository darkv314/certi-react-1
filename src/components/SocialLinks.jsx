export const SocialLinks = (props) => {
    const { social, parentClass } = props;
    return (
        <li>
            <a
                href={`https://www.${social}.com`}
                target="_blank"
                className={parentClass}
            >
                <i className={`fab fa-${social}`}></i>
            </a>
        </li>
    );
};
export default SocialLinks;
