# TerraTarot
Inspired by tarot cards(so like fortune telling) and by the halloween theme of this week. You collect halloween themed cards to earn more pumpkins, upgrade your pumpkin production, fuse your cards, and aim to get a full set of fusion level 10 legendaries(Dark eye).

The web version(hosted on github pages) can be accessed here:
https://scripting-java.github.io/TerraTarot/

It's a browser based idle game except you're not in control of your production as you have to keep rolling for good cards.

## Disclaimers:
This game in no way is to endorse or represent gambling. I made this as a gacha type game, but I do not intend for it to be used for gambling purposes. There's also a disclaimer section saying exactly this.

## Features/What can you do
- There's 5 different tiers of halloween themed characters. You can read card.ts under the data folder for more info as they're not themed with any specific hierarchy in mind(as per which costume/character/halloween associated thing gets which tier). There's common, uncommon, rare, epic, and legendary.
- Cards make you pumpkins
- You have 4 card slots
- You can roll the cards you have using the roll menu(more on that later)
- There's a pity system so after 50 rolls, you're guranteed a rare+
- You can fuse duplicate cards to improve their income and consolidate 2 good cards into one slot.
- There's 2 permanent upgrades in the shop which boost your pumpkins/second, and there's one to reset roll cost(you can buy this infinitely many times)
- There's also a data table so you know your chances.

## Statistics
|Rarity|Chance|
|:--:|:--:|
|Common|65%|
|Uncommon|25%|
|Rare|8%|
|Epic|1.5%|
|Legendary|0.5%|

## Card Slots
- You have 4 card slots, and ideally you want level 10 fused legendary cards.

## Fusion:
- Fusion increases card income by 5%.
- Fusion reduces card cooldown by 5%.
- Each fusion increases the card's fusion level.
- Fusion can be performed up to level 10.
- Any two copies of the same card can be fused, regardless of their previous fusion levels.

## Roll Menu
- Tap on the roll menu to expand it. 
- Roll rolls the selected slot( the slot wrapped in orange )
- Roll all rolls all slots. Don't do this if you have good cards you want to keep.
- Click on condition to expand on the condition, and read what it says. Press roll condition to actually roll the condition. You can click on the actual condition e.g. "roll for this many times" to change it.

### Breakdown:
- Roll: Roll once for a selected slot.
- Roll All: Roll once for each of the four slots.
- Roll Max: Continue rolling on a selected slot until you can no longer afford another roll.
- Roll Count: Perform a specified number of rolls.
- Roll All Max / Count: Distribute rolls across all four slots.

## Pity:
Roll 50 times for a guranteed rare+ card.

## Shop
- Pumpkin Pie costs 1,500 pumpkins and gives you +10% pumpkin income.
- The Trick or Treat Basket costs 2,000 pumpkins and gives you +15% pumpkin income.
- The Roll Reset costs 2,500 pumpkins and resets lifetime rolls, setting roll costs back to 0 before increasing again

## What I used
- React w/ Typescript
- Vectorpea
- I drew all the art by hand, however I did use images for tracing of course.

## To run locally:
1. npm install
2. npm run dev
3. open localhost:5173, or whatever other port it gives you. 