import type { card } from "../../data/card"

interface Card {
    card: card | null
}

function Card({ card }: Card) {
    return (
        <div>
            {card ? (
                <div>
                    <h1>{card.name}</h1>
                    <p>{card.rarity}</p>
                    <p>${card.income}</p>
                </div>
            ) : (
                <div>
                    No card available
                </div>
            )}
        </div>
    )
}

export default Card