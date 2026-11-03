import type { card } from "../../data/card"

interface CardSlot {
    card: card | null
}

function CardSlot({ card }: CardSlot) {
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

export default CardSlot