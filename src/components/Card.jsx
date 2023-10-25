import React from "react";

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
                                    <div className="card__credentials">
                                    <img src={cardImage.src} alt={cardImage.name} />
                                    <div className="card__person-info">
                                        <p>{card.name}</p>
                                        <p>{card.short_description}</p>
                                    </div>
                                    </div>
                                </div>
                            )
                        })
                ) : (<p>Loading cards ...</p>)}
            </div>
        )
    }

    
export default Card