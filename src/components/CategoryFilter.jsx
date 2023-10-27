const CategoryFilter = ({
    selectedCategoryFilter,
    setSelectedCategoryFilter,
    categoriesFilterOptions,
  }) => {
    return (
      <select
        onChange={(e) => setSelectedCategoryFilter(e.target.value)}
        value={selectedCategoryFilter}
        className="category-filter"
      >
        <option value="All">All</option>
        {!!categoriesFilterOptions.length &&
          categoriesFilterOptions.map((category, idx) => (
            <option key={idx} value={category}>
              {category}
            </option>
          ))}
      </select>
    );
  };
  
  export default CategoryFilter;