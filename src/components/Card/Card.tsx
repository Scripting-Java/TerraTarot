import type { card } from "../../data/card"
import "./card.css"
import formatMoney from "../../utils/moneyFormatter"
import { getIncome } from "../../data/money"
import pumpkin from "../../assets/pumpkin.png"
import noCard from "../../assets/noCard.png"
interface Card {
    card: card | null
}

function Card({ card }: Card) {
    return (
        <div className="card">
            {card ? (
                <div>
                    <h1>{card.name}</h1>
                    {card.image?(
                        <img src={card.image} className="cardIcon"/>
                    ):(null)}
                    <p className={`${card.rarity}`}>{card.rarity.toUpperCase()}</p>
                    {card.fusion!=null?(<p>Fusion Level: {card.fusion}</p>):(null)}
                    <div className="money">
                    <img src = {pumpkin} className="pumpkin"></img>
                    <p>{formatMoney(getIncome(card))}/s</p>
                    </div>
                </div>
            ) : (
                <div>
                    <p className="noCard">Roll For A Card!</p>
                    <img className='cardIcon' src = {noCard}/>
                    <p className="common">???</p>
                </div>
            )}
        </div>
    )
}

export default Card