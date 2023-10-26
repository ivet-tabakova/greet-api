const CategoryFilter = ({
    selectedCategoryFilter,
    setSelectedCategoryFilter,
    categoriesFilterOptions
}) => {
    return(
        <select
            onChange={(e) => setSelectedCategoryFilter(e.target.value)}
            value={selectedCategoryFilter}
            className="filter-category"
        >
            <option value="All">All</option>
            {!!categoriesFilterOptions.length &
            categoriesFilterOptions.map((category, index) => (
                <option key={index} value={category}>
                    {category}
                </option>
            ))}

        </select>
    )
}

export default CategoryFilter