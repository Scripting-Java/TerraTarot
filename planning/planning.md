This is a planning doc:

# TerraTarot
TerraTarot is going to be a halloween themed idle game which is going to be focused on cards(tarot cards) to gather money and then upgrade/fuse your cards. 

## To play:
1. Your cards automatically give you money
2. If you have enough money, you can spin a slot for other/better cards.
3. You only get 4 card slots, so your goal is to maximize the amount of money your cards make. See table below for tentative tier list.
4. You can upgrade your cards -> So money & speed. Upgrades are in upgrade section. 
5. You can fuse 2 of the same cards. Scales to 10 fusions. Since you need 2 cards to fuse, you can get a max of 3 fused cards(you're 4th slot won't have an adjacent slot for it to fuse with a neighbor)

## Cards
~16 cards or so for demo
Each card is halloween themed and has:
- name(E.g. frankenstein or skeleton)
- rarity(see tier list below somewhere)
- Income generated & speed at which it generates

## Card Slot Logic
- You have 4 card slots(you start with 2 cards)
- Each slot will contain one card, and you can roll the card in that slot for a better one.
- Rolling replaces the previous card(you won't get that back unless you reroll it later)
- For fusions, you can get a max of 3 fused cards(you're 4th slot won't have an adjacent slot for it to fuse with a neighbor).
- For fusions, you tap a fuse button?

## Rarities
- 7 common  - 65% chance
- 5 uncommon - 25% chance
- 3 rare - 9% chance
- 1 legendary - 1% chance

## Cards
Some card ideas

Common:
|Card|Rarity|Initial Money Made/ second|
|:---|:---:|---:|
|Skeleton|Common|$1|
|Ghost|Common|$1|
|Zombie|Common|$1|
|Vampire|Common|$1|
|Witch|Common|$1.1|
|Black Cat|Common|$1.1|
|Bat|Common|$1.2|

Uncommon:
|Card|Rarity|Initial Money Made|
|:---|:---:|---:|
|Werewolf|Uncommon|$5|
|Jack-O-Lantern|Uncommon|$6|
|Puppet|Uncommon|$6|
|Viper|Uncommon|$6|
|Vines|Uncommon|$7|


Rare:
|Card|Rarity|Initial Money Made|
|:---|:---:|---:|
|Frankenstein|Rare|$12|
|Mummy|Rare|$15|
|Haunted House|Rare|$18|

Legendary:
|Card|Rarity|Initial Money Made|
|:---|:---:|---:|
|Dark Eyeball(Lego movie eye)|Legendary|$50|


## Rolling
They see me rolling...
- Player rolls for new card
- Increasing amount of money for each roll
- Increases by $0.1 every time, so 1000 rolls is only about ~100
- Players have to reroll for a card they lose in a roll
- Rarity determines chances, and they have equal chance of getting any rare card, meaning they could earn $18 as opposed to $12 for having a rare card.

## Fusion
- Fusion button to combine all same cards
- Each card can only be fused up to 10 times at a rate of 1.05X stats per fuse. Each stat gets fused so cooldown & money. max 1.63x stats
- So if 2 skeletons were fused, then the first skeleton would have 1.05x stats and the second skeleton would be discarded. So you end up with 1 skeleton of fusion lv. 2 w/ a money per second of $1.05 per 0.95 seconds.

## Income
Income is generated once a second through cards and shop upgrades.
Income will be calculated by card income * number of card * buffs -> do that for the up to 3 other slots

## Shop
Purchase decor to boost stats.
Tentative Ideas:
|Upgrade|Bonus|
|:---| ---:|
|Jack-O-Lantern|+10% roll luck| -> Boosts rare & legendary chances while decreasing common & uncommon proportionately
|Bat|+15% income|
|Scary Portrait(The scream)|+10% income|
|Cauldron|+15% roll luck|

## Art
- Halloween theme w/ dark organge, purple(highlights/accents), and black
- Vectorpea





