import type { card } from "../data/card";
import { roll } from "../data/roll";

function handleRoll(slots:(card|null)[], slot:number):(card|null)[]{
    const newSlots = [...slots]
    newSlots[slot] = roll()
    return newSlots
}
export default handleRoll