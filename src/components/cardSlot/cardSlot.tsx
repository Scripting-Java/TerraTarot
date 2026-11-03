import Card from "../card/card";
import type { card } from "../../data/card";
import "./cardSlot.css"
interface cardSlot {
    slots: (card|null)[]
}

function CardSlot({ slots }: cardSlot) {
    return (
        <div className="slots">
            <Card card={slots[0]} />
            <Card card={slots[1]} />
            <Card card={slots[2]} />
            <Card card={slots[3]} />
        </div>
    )
}

export default CardSlot