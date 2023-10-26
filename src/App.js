import { useEffect, useState } from 'react'
import './App.css';

import Card from './components/Card'
import CategoryFilter from './components/CategoryFilter';

function App() {
  const [cards, setCards] = useState([])

  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState("All")
  const [categoriesFilterOptions, setCategoriesFilterOptions] = useState([])

  useEffect(() => {
    fetch(`https://greet.bg/wp-json/wc/store/products?page=1`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setCards((prevCards) => [...prevCards, ...data])
      })
  },[cards])


  useEffect(() => {
    if(cards.length){
      const uniqueCategoriesSet = new Set(categoriesFilterOptions)

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
  },[cards])




  return (
    <div className="wrapper">
      <CategoryFilter 
        selectedCategoryFilter={selectedCategoryFilter}
        setSelectedCategoryFilter={selectedCategoryFilter}
        categoriesFilterOptions={categoriesFilterOptions}
      />

      <Card 
        cards={cards}
        selectedCategoryFilter={selectedCategoryFilter}
      />
    </div>
  );
}

export default App;
