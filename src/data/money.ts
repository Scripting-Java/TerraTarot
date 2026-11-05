import type { card } from "./card"
export const start = 5

function getRollCost(rolls:number): number{
    if(rolls<100)
        return rolls*1.05/10
    else if(rolls<1000)
        return ((rolls-100)*1.025+100*1.05)/10
    else
        return ((rolls-1000)*1+900*1.025+100*1.05)/10
}

function getIncome(card:card){
    return card.income*1/card.cooldown
}

function getIncomeCards(cards:(card|null)[]): number{
    let money = 0
    for(const card of cards){
        if(card)
        money+=getIncome(card)
    }
    return money
}



export {getRollCost,getIncome,getIncomeCards}