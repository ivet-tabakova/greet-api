const OrderFilter = ({
    selectedOrderFilter,
    setSelectedOrderFilter
}) => {
    return(
        <select
            onChange={(e) => setSelectedOrderFilter(e.target.value)}
            value={selectedOrderFilter}
            className="sort-filter"
        >
            <option value="None">None</option>
            <option value="Name">Name</option>
            <option value="Price">Price</option>
        </select>
    )
}

export default OrderFilter