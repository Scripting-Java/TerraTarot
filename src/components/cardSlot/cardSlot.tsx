import Card from "../Card/Card";
import type { card } from "../../data/card";
import "./cardSlot.css"
interface cardSlot {
    slots: (card | null)[],
    slot: number,
    setSlot: (index: number) => void
}

function CardSlot({ slots, slot, setSlot }: cardSlot) {
    return (
        <div className="slots">
            <div onClick={() => setSlot(0)} className={slot === 0 ? "selected" : "slot"}>
                <Card card={slots[0]}></Card>
            </div>
            <div onClick={() => setSlot(1)} className={slot === 1 ? "selected" : "slot"}>
                <Card card={slots[1]}></Card>
            </div>
            <div onClick={() => setSlot(2)} className={slot === 2 ? "selected" : "slot"}>
                <Card card={slots[2]}></Card>
            </div>
            <div onClick={() => setSlot(3)} className={slot === 3 ? "selected" : "slot"}>
                <Card card={slots[3]}></Card>
            </div>
        </div>
    )
}

export default CardSlot