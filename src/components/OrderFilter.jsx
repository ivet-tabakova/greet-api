const OrderFilter = ({ selectedOrder, setSelectedOrder }) => {
    return (
      <select
        onChange={(e) => setSelectedOrder(e.target.value)}
        value={selectedOrder}
        className="sort-filter"
      >
        <option value="None">Без филтър</option>
        <option value="Name">По азбучен ред</option>
        <option value="Price">По най-ниска цена</option>
      </select>
    );
  };
  
export default OrderFilter;