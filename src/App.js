import { useEffect, useState } from 'react'
import './App.css';
import Card from './components/Card'

function App() {
  const [cards, setCards] = useState([])

  useEffect(() => {
    fetch(`https://greet.bg/wp-json/wc/store/products?page=1`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setCards((prevCards) => [...prevCards, ...data])
      })
  },[cards])

  return (
    <div className="wrapper">
      <Card 
        cards={cards}
      />
    </div>
  );
}

export default App;
