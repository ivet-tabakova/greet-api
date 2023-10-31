const OrderFilter = ({ selectedOrder, setSelectedOrder }) => {
    return (
      <select
        onChange={(e) => setSelectedOrder(e.target.value)}
        value={selectedOrder}
        className="sort-filter"
      >
        <option value="None">None</option>
        <option value="Name">Name</option>
        <option value="Price">Price</option>
      </select>
    );
  };
  
  export default OrderFilter;