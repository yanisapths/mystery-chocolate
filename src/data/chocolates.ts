export interface Chocolate {
  name: string;
  tasteNote: string;
  personality: string;
}

export const chocolates: Chocolate[] = [
  {
    name: "Caramel Pop Rocks",
    tasteNote: "Sweet, dynamic, surprising",
    personality: "Energetic and unpredictable – sparks wherever you go.",
  },
  {
    name: "Dark Velvet Dream",
    tasteNote: "Rich, mysterious, intense",
    personality: "Deep thinker with hidden depths – complexity is your charm.",
  },
  {
    name: "Raspberry Whisper",
    tasteNote: "Tangy, delicate, refreshing",
    personality: "Gentle soul with bursts of passion – sweet yet spirited.",
  },
  {
    name: "Hazelnut Bliss",
    tasteNote: "Nutty, smooth, comforting",
    personality: "Warm and reliable – everyone's favorite companion.",
  },
  {
    name: "Mint Arctic Breeze",
    tasteNote: "Cool, crisp, invigorating",
    personality: "Fresh perspective on life – always keeping things cool.",
  },
  {
    name: "Orange Sunset",
    tasteNote: "Zesty, bright, uplifting",
    personality: "Optimistic and radiant – you light up every room.",
  },
  {
    name: "Salted Caramel Waves",
    tasteNote: "Sweet, salty, balanced",
    personality: "Perfect harmony – you know how to balance life's flavors.",
  },
  {
    name: "Espresso Thunder",
    tasteNote: "Bold, awakening, powerful",
    personality: "Energizing force – you wake up the world around you.",
  },
  {
    name: "Strawberry Cloud",
    tasteNote: "Light, fruity, dreamy",
    personality: "Sweet dreamer with a gentle heart – floating through life.",
  },
  {
    name: "Honey Gold",
    tasteNote: "Natural, pure, golden",
    personality: "Authentic and precious – rare find in this world.",
  },
];

export const getRandomChocolate = (): Chocolate => {
  return chocolates[Math.floor(Math.random() * chocolates.length)];
};
