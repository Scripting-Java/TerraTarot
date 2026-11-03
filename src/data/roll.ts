import type { card } from "./card";
import { cardRarities } from "./card";

function roll():card{
    const roll = Math.random()
    let card:card 
    if (roll <= 0.65) {
        const roll2 = Math.floor(Math.random()*cardRarities.common.length)
        card = cardRarities.common[roll2]
    }
    else if (roll <= 0.9) {
        const roll2 = Math.floor(Math.random()*cardRarities.uncommon.length)
        card = cardRarities.uncommon[roll2]
    }
    else if (roll <= 0.99) {
        const roll2 = Math.floor(Math.random()*cardRarities.rare.length)
        card = cardRarities.rare[roll2]
    }
    else{
        const roll2 = Math.floor(Math.random()*cardRarities.legendary.length)
        card = cardRarities.legendary[roll2]
    }
    return card
}