import type { card } from "../data/card";
import { roll, rollPity } from "../data/roll";

function handleRoll(slots: (card | null)[], slot: number, pity: boolean): (card | null)[] {
    let newSlots = [...slots]
    if (pity)
        newSlots[slot] = rollPity()
    else
        newSlots[slot] = roll()
    return newSlots
}


export default handleRoll