import type { card } from "./card";
import { cardRarities } from "./card";
const commonChance = 0.65
const uncommonChance = 0.25
const rareChance = 0.08
const epicChance = 0.015
const legendaryChance = 0.005
function roll(): card {
    const roll1 = Math.random()
    let card: card
    if (roll1 <= commonChance) {
        const roll2 = Math.floor(Math.random() * cardRarities.common.length)
        card = cardRarities.common[roll2]
    }
    else if (roll1 <= commonChance + uncommonChance) {
        const roll2 = Math.floor(Math.random() * cardRarities.uncommon.length)
        card = cardRarities.uncommon[roll2]
    }
    else if (roll1 <= commonChance + rareChance + uncommonChance) {
        const roll2 = Math.floor(Math.random() * cardRarities.rare.length)
        card = cardRarities.rare[roll2]
    }
    else if (roll1 <= commonChance + rareChance + uncommonChance + epicChance) {
        const roll2 = Math.floor(Math.random() * cardRarities.epic.length)
        card = cardRarities.epic[roll2]
    }
    else {
        const roll2 = Math.floor(Math.random() * cardRarities.legendary.length)
        card = cardRarities.legendary[roll2]
    }
    return card
}

function rollPity(): card {
    const roll1 = Math.random() * (rareChance + epicChance + legendaryChance)
    let card: card
    if (roll1 <= rareChance) {
        const roll2 = Math.floor(Math.random() * cardRarities.rare.length)
        card = cardRarities.rare[roll2]
    }
    else if (roll1 <= rareChance + epicChance) {
        const roll2 = Math.floor(Math.random() * cardRarities.epic.length)
        card = cardRarities.epic[roll2]
    }
    else {
        const roll2 = Math.floor(Math.random() * cardRarities.legendary.length)
        card = cardRarities.legendary[roll2]
    }
    return card
}

export { roll, rollPity }