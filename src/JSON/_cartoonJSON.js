import { nanoid } from "nanoid";
import Cat from "./../resources/buttons/CartoonCats.png";
import Dragon from "./../resources/buttons/cartoonDragons.png";
import Monster from "./../resources/buttons/CartoonMonster.png";
import Dog from "./../resources/buttons/cartoonDogs.png";

const inventory = [
  {
    id: nanoid(),
    src: Cat,
    alt: "Cartoon Cats",
    link: "CatGraphics",
    name: "Cartoon Cats",
    quantity: 2,
  },
  {
    id: nanoid(),
    src: Dragon,
    alt: "Dragon",
    link: "DragonGraphics",
    name: "Dragon",
    quantity: 2,
  },
  {
    id: nanoid(),
    src: Monster,
    alt: "Monster",
    link: "MonsterGraphics",
    name: "Monster",
    quantity: 2,
  },
  {
    id: nanoid(),
    src: Dog,
    alt: "Dogs",
    link: "DogGraphics",
    name: "Dogs",
    quantity: 2,
  },
];

export default inventory;
