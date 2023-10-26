import React from "react";

import AddToCart from "./AddToCart";

    const Card = ({
        cards,
        selectedCategoryFilter
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
                                    <div className="card_credentials">
                                        <img src={cardImage.src} alt={cardImage.name} />
                                        <div className="card_person-info">
                                            <p>{card.name}</p>
                                            <p>{card.short_description}</p>
                                        </div>
                                    </div>
                                    <div className="card_actions">
                                        {!!card.categories.length && (
                                            <ul>
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
                                        <AddToCart />
                                    </div>
                                </div>
                            )
                        })
                ) : (<p>Loading cards ...</p>)}
            </div>
        )
    }

    
export default Card