import { nanoid } from "nanoid";
import Cat from "./../resources/buttons/CartoonCats.png";
import Charicatures from "./../resources/buttons/Charicatures.png";
import Popart from "./../resources/buttons/Popart.png";
import Presidents from "./../resources/buttons/Presidents.png";
import Random from "./../resources/buttons/Random.png";
import SuperHeroes from "./../resources/buttons/SuperHeroes.png";

const inventory = [
  {
    id: nanoid(),
    src: Cat,
    alt: "Cartoon Cats",
    link: "/CatGraphics",
    name: "Cartoon Cats",
    quantity: 2,
  },
  {
    id: nanoid(),
    src: Charicatures,
    alt: "Charicatures",
    link: "/CharicatureGraphics",
    name: "Charicatures",
    quantity: 2,
  },
  {
    id: nanoid(),
    src: Popart,
    alt: "Pop Art",
    link: "/PopArtGraphics",
    name: "",
    quantity: 2,
  },
  {
    id: nanoid(),
    src: Presidents,
    alt: "Presidents",
    link: "/PresidentGraphics",
    name: "",
    quantity: 2,
  },
  {
    id: nanoid(),
    src: Random,
    alt: "Random",
    link: "/RandomGraphics",
    name: "",
    quantity: 2,
  },
  {
    id: nanoid(),
    src: SuperHeroes,
    alt: "Super Heroes",
    link: "/SuperHeroGraphics",
    name: "",
    quantity: 2,
  },
  {
    id: nanoid(),
    src: Presidents,
    alt: "Presidents",
    link: "/PresidentGraphics",
    name: "",
    quantity: 2,
  },
  {
    id: nanoid(),
    src: Random,
    alt: "Random",
    link: "/RandomGraphics",
    name: "",
    quantity: 2,
  },
  {
    id: nanoid(),
    src: SuperHeroes,
    alt: "Super Heroes",
    link: "/SuperHeroGraphics",
    name: "",
    quantity: 2,
  },
];

export default inventory;

