import type { card } from "../../data/card"
import "./card.css"
interface Card {
    card: card | null
}

function Card({ card }: Card) {
    return (
        <div className="card">
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