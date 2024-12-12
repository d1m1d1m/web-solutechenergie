const List = ({ items, renderItem, ...props }) => {
    return <ul {...props}>{items.map(renderItem)}</ul>;
};

export default List;
