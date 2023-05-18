function Service({ title, text, img }) {
    return (
        <article className="service">
            <span
                className="service-icon"
                style={{ backgroundImage: `url(${img})` }}
            >
                {/* <img src={img} /> */}
            </span>
            <div className="service-info">
                <h4 className="service-title">{title}</h4>
                <p className="service-text">{text}</p>
            </div>
        </article>
    );
}

export default Service;
