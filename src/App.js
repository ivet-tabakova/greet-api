import { useEffect, useState, useRef } from 'react'
import './App.css';

import Cards from './components/Cards'
import CategoryFilter from './components/CategoryFilter';
import OrderFilter from './components/OrderFilter';


function App() {
  const [cards, setCards] = useState([])
  const [page, setPage] = useState(1)
  const [isLoading, setIsisLoading] = useState(false)

  const [selectedOrder, setSelectedOrder] = useState("None");
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState("All")
  const [categoriesFilterOptions, setCategoriesFilterOptions] = useState([])

  const bottomOfPageRef = useRef(null)

  useEffect(() => {
    const fetchData = async () => {
      setIsisLoading(true);
      const response = await fetch(
        `https://greet.bg/wp-json/wc/store/products?page=${page}`
      );
      const data = await response.json();
      setCards((prevCards) => [...prevCards, ...data]);
      setIsisLoading(false);
    };

    fetchData();
  }, [page]);

   // Going to the next page when the user scrolls to the very bottom of the page
   useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          bottomOfPageRef.current.offsetTop &&
        !isLoading
      ) {
        setPage((prevPage) => prevPage + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isLoading]);

  // Updating category filter options when cards are changing(new cards with maybe new categories are added)
  useEffect(() => {
    if (cards.length) {
      const uniqueCategoriesSet = new Set(categoriesFilterOptions);

      cards.forEach((card) => {
        if (card.categories.length) {
          card.categories.forEach((category) => {
            uniqueCategoriesSet.add(category.name);
          });
        }
      });

      const uniqueCategoriesArray = [...uniqueCategoriesSet];
      setCategoriesFilterOptions(uniqueCategoriesArray);
    }
  }, [cards]);




  return (
    <div className="wrapper">
      <CategoryFilter 
        selectedCategoryFilter={selectedCategoryFilter}
        setSelectedCategoryFilter={setSelectedCategoryFilter}
        categoriesFilterOptions={categoriesFilterOptions}
      />

      <OrderFilter
        selectedOrder={selectedOrder}
        setSelectedOrder={setSelectedOrder}
      />


      <Cards
        cards={cards}
        selectedCategoryFilter={selectedCategoryFilter}
        selectedOrder={selectedOrder}
        bottomOfPageRef={bottomOfPageRef}
      />
      {!!cards.length && isLoading && <p>Loading more cards...</p>}
    </div>
  );
}

export default App;
