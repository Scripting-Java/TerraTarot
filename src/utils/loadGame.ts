import roll from "../data/roll";
import type { card } from "../data/card";
function loadGame(): (card|null)[]{
    const cards: (card|null)[] = []
    cards.push(roll())
    cards.push(roll())
    cards.push(null)
    cards.push(null)
    return cards
}
export default loadGame