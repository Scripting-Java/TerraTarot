import skeletonImg from "../assets/CardIcons/Skeleton.png"
import ghostImg from "../assets/CardIcons/Ghost.png"
import zombieImg from "../assets/CardIcons/Zombie.png"
import vampireImg from "../assets/CardIcons/Vampire.png"
import witchImg from "../assets/CardIcons/Witch.png"
import blackCatImg from "../assets/CardIcons/BlackCat.png"
import batImg from "../assets/CardIcons/Bat.png"
import werewolfImg from "../assets/CardIcons/Werewolf.png"
import jackImg from "../assets/CardIcons/JackOLantern.png"
import puppetImg from "../assets/CardIcons/Puppet.png"
import viperImg from "../assets/CardIcons/Viper.png"
import vinesImg from "../assets/CardIcons/Vines.png"
import drinkMeImg from "../assets/CardIcons/DrinkMe.png"
import eatMeImg from "../assets/CardIcons/EatMe.png"
import frankensteinImg from "../assets/CardIcons/Frankenstein.png"
import mummyImg from "../assets/CardIcons/Mummy.png"
import hauntedImg from "../assets/CardIcons/HauntedHouse.png"
import dinosaurimg from "../assets/CardIcons/Dinosaur.png"
import sharkImg from '../assets/CardIcons/Shark.png'


export type Rarity = "common" | "uncommon" | "rare" |"epic"| "legendary"

export interface card {
    name: string,
    rarity: Rarity,
    income: number,
    cooldown: number,
    image: string,
    fusion?: number,
}

const skeleton: card = {
    name: "Skeleton",
    rarity: "common",
    income: 1,
    cooldown: 1,
    image: skeletonImg,
}

const ghost: card = {
    name: "Ghost",
    rarity: "common",
    income: 1,
    cooldown: 1,
    image: ghostImg,
}

const zombie: card = {
    name: "Zombie",
    rarity: "common",
    income: 1,
    cooldown: 1,
    image: zombieImg,
}

const vampire: card = {
    name: "Vampire",
    rarity: "common",
    income: 1,
    cooldown: 1,
    image: vampireImg,
}

const witch: card = {
    name: "Witch",
    rarity: "common",
    income: 1.1,
    cooldown: 1,
    image: witchImg,
}

const blackCat: card = {
    name: "Black Cat",
    rarity: "common",
    income: 1.1,
    cooldown: 1,
    image: blackCatImg,
}

const bat: card = {
    name: "Bat",
    rarity: "common",
    income: 1.2,
    cooldown: 1,
    image: batImg,
}

const commons: card[] = [skeleton,ghost,zombie,vampire,witch,blackCat,bat]

const werewolf: card = {
    name: "Werewolf",
    rarity: "uncommon",
    income: 5,
    cooldown: 1,
    image: werewolfImg,
}

const jackolantern: card = {
    name: "Jack-O-Lantern",
    rarity: "uncommon",
    income: 6,
    cooldown: 1,
    image: jackImg,
}

const puppet: card = {
    name: "Puppet",
    rarity: "uncommon",
    income:6 ,
    cooldown: 1,
    image: puppetImg,
}

const viper: card = {
    name: "Viper",
    rarity: "uncommon",
    income: 6,
    cooldown: 1,
    image: viperImg,
}

const vines: card = {
    name: "Vines",
    rarity: "uncommon",
    income: 7,
    cooldown: 1,
    image: vinesImg
}

const drinkMe: card = {
    name: "Drink Me",
    rarity: "uncommon",
    income: 7,
    cooldown: 1,
    image: drinkMeImg,
}

const eatMe: card = {
    name: "Eat Me",
    rarity: "uncommon",
    income: 7,
    cooldown: 1,
    image: eatMeImg,
}

const uncommon: card[] = [werewolf,jackolantern,puppet,viper,vines, drinkMe, eatMe]

const frankenstein: card = {
    name: "Frankenstein",
    rarity: "rare",
    income: 12,
    cooldown: 1,
    image: frankensteinImg,
}

const mummy: card = {
    name: "Mummy",
    rarity: "rare",
    income: 15,
    cooldown: 1,
    image: mummyImg,
}

const hauntedHouse: card = {
    name: "Haunted House",
    rarity: "rare",
    income: 18,
    cooldown: 1,
    image: hauntedImg
}

const dinosaur: card = {
    name: "Dinosaur",
    rarity: "rare",
    income: 18,
    cooldown: 1,
    image: dinosaurimg
}

const shark: card = {
    name: "Shark",
    rarity: "rare",
    income: 19,
    cooldown: 1,
    image: sharkImg
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


const legendary: card[] = [darkEye]

export const cards: card[] = [...commons,...uncommon,...rare,...epic,...legendary]

export const cardRarities = {common:commons,uncommon:uncommon,rare:rare,epic:epic, legendary:legendary}