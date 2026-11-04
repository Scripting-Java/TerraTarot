export type Rarity = "common" | "uncommon" | "rare" |"epic"| "legendary"

export interface card {
    name: string,
    rarity: Rarity,
    income: number,
    cooldown: number,
    image: string
}

const skeleton: card = {
    name: "Skeleton",
    rarity: "common",
    income: 1,
    cooldown: 1,
    image: "",
}

const ghost: card = {
    name: "Ghost",
    rarity: "common",
    income: 1,
    cooldown: 1,
    image: "",
}

const zombie: card = {
    name: "Zombie",
    rarity: "common",
    income: 1,
    cooldown: 1,
    image: "",
}

const vampire: card = {
    name: "Vampire",
    rarity: "common",
    income: 1,
    cooldown: 1,
    image: "",
}

const witch: card = {
    name: "Witch",
    rarity: "common",
    income: 1.1,
    cooldown: 1,
    image: "",
}

const blackCat: card = {
    name: "Black Cat",
    rarity: "common",
    income: 1.1,
    cooldown: 1,
    image: "",
}

const bat: card = {
    name: "Bat",
    rarity: "common",
    income: 1.2,
    cooldown: 1,
    image: "",
}

const commons: card[] = [skeleton,ghost,zombie,vampire,witch,blackCat,bat]

const werewolf: card = {
    name: "Werewolf",
    rarity: "uncommon",
    income: 5,
    cooldown: 1,
    image: ""
}

const jackolantern: card = {
    name: "Jack-O-Lantern",
    rarity: "uncommon",
    income: 6,
    cooldown: 1,
    image: ""
}

const puppet: card = {
    name: "Puppet",
    rarity: "uncommon",
    income:6 ,
    cooldown: 1,
    image: ""
}

const viper: card = {
    name: "Viper",
    rarity: "uncommon",
    income: 6,
    cooldown: 1,
    image: ""
}

const vines: card = {
    name: "Vines",
    rarity: "uncommon",
    income: 7,
    cooldown: 1,
    image: ""
}

const drinkMe: card = {
    name: "Drink Me",
    rarity: "uncommon",
    income: 7,
    cooldown: 1,
    image: ""
}

const eatMe: card = {
    name: "Eat Me",
    rarity: "uncommon",
    income: 7,
    cooldown: 1,
    image: ""
}

const uncommon: card[] = [werewolf,jackolantern,puppet,viper,vines, drinkMe, eatMe]

const frankenstein: card = {
    name: "Frankenstein",
    rarity: "rare",
    income: 12,
    cooldown: 1,
    image: ""
}

const mummy: card = {
    name: "Mummy",
    rarity: "rare",
    income: 15,
    cooldown: 1,
    image: ""
}

const hauntedHouse: card = {
    name: "Haunted House",
    rarity: "rare",
    income: 18,
    cooldown: 1,
    image: ""
}

const dinosaur: card = {
    name: "Dinosaur",
    rarity: "rare",
    income: 18,
    cooldown: 1,
    image: ""
}

const shark: card = {
    name: "Shark",
    rarity: "rare",
    income: 19,
    cooldown: 1,
    image: ""
}

const rare: card[] = [frankenstein,mummy,hauntedHouse, dinosaur, shark]

const candy: card = {
    name: "Candy",
    rarity: "epic",
    income: 25,
    cooldown: 1,
    image: ""
}

const inflatable: card = {
    name: "Inflatable",
    rarity: "epic",
    income: 27,
    cooldown: 1,
    image: ""
}

const epic: card[] = [candy,inflatable]

const darkEye: card = {
    name: "Dark Eye",
    rarity: "legendary",
    income: 50,
    cooldown: 1,
    image: ""
}

const dracula: card = {
    name: "Dracula",
    rarity: "legendary",
    income: 55,
    cooldown: 1,
    image: ""
}

const legendary: card[] = [darkEye, dracula]

export const cards: card[] = [...commons,...uncommon,...rare,...epic,...legendary]

export const cardRarities = {common:commons,uncommon:uncommon,rare:rare,epic:epic, legendary:legendary}