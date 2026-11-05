import type { card } from "../data/card";

function canFuse(card1:card|null, card2:card|null){
    if(card1===null||card2===null)
        return false
    const same = card1.name===card2.name
    return same
}

function fuseCards(card1:card, card2: card): card{
    let temp: card
    const cool1 = card1.cooldown
    const cool2 = card2.cooldown
    if(cool1>=cool2){
    temp = {...card1}
    temp.cooldown = card1.cooldown*0.95
    temp.income = card1.income*1.05
    }
    else{
    temp = {...card2}
    temp.cooldown = card2.cooldown*0.95
    temp.income = card2.income*1.05
    }
    if(!temp.fusion)
        temp.fusion=1
    else
        temp.fusion+=1
    return temp
}

export {canFuse,fuseCards}