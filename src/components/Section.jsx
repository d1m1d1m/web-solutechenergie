const Section = ({ children, id, className, title }) => {
    return (
        <section id={id} className={`${className}`}>
            {children}
        </section>
    );
};

export default Section;
