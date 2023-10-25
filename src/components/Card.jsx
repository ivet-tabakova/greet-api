import React from "react";

import AddToCart from "./AddToCart";

    const Card = ({
        cards
    })=>{
        return(
            <div className="cards">
                {cards.length > 0 ? (
                    cards
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