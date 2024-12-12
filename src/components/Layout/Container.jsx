const Container = ({ children, className }) => {
    return (
        <div
            className={`container mx-auto h-full ${className ? className : ""}`}
        >
            {children}
        </div>
    );
};

export default Container;
