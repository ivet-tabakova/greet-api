import React from "react";

import AddToCart from "./AddToCart";

    const Card = ({
        cards,
        selectedCategoryFilter,
        bottomOfPageRef
    })=>{
        return(
            <div className="cards">
                {cards.length > 0 ? (
                    cards
                        .filter((card) => 
                            selectedCategoryFilter === "All" 
                            ? true 
                            : card.categories.some(
                                (category) => category.name === selectedCategoryFilter
                            )

                        )


                        .map((card, index) => {
                            const cardImage = card.images[0];

                            return(
                                <div className="card" key={`${card.id}-${index}`}>
                                    <img src={cardImage.src} alt={cardImage.name} />
                                    <div className="card_credentials">
                                        <div className="card_person-info">
                                            <p className="person-name">{card.name}</p>
                                            <p className="person-desc">{card.short_description}</p>
                                        </div>
                                        <p>Категории:</p>
                                        {!!card.categories.length && (
                                            <ul className="person-category">
                                            {card.categories.map((category, index) => (
                                                <li key={`${category.id}-${index}`}>
                                                <a
                                                    href={category.link}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    {category.name}
                                                </a>
                                                </li>
                                            ))}
                                            </ul>
                                        )}
                                    </div>
                                    <div className="card_actions">
                                        
                                        <AddToCart />
                                    </div>
                                </div>
                            )
                        })
                ) : (<p>Loading cards ...</p>)}
                <div ref={bottomOfPageRef}></div>
            </div>
        )
    }

    
export default Card